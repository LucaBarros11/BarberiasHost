-- The Strop House — booking system schema
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).

create extension if not exists pgcrypto;
create extension if not exists btree_gist;

-- Services offered (mirrors src/lib/data.ts, but editable without a code change)
create table services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price_cents integer not null,
  duration_minutes integer not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Barbers working at the shop
create table barbers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  focus text,
  bio text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Each barber's weekly working hours. One row per shift.
-- weekday follows ISO 8601: 1 = Monday ... 7 = Sunday.
create table barber_availability (
  id uuid primary key default gen_random_uuid(),
  barber_id uuid not null references barbers(id) on delete cascade,
  weekday smallint not null check (weekday between 1 and 7),
  start_time time not null,
  end_time time not null,
  created_at timestamptz not null default now(),
  constraint availability_time_order check (end_time > start_time)
);

-- Booked appointments
create table appointments (
  id uuid primary key default gen_random_uuid(),
  barber_id uuid not null references barbers(id),
  service_id uuid not null references services(id),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  customer_name text not null,
  customer_phone text not null,
  customer_email text,
  customer_note text,
  marketing_consent boolean not null default false,
  status text not null default 'confirmed' check (status in ('confirmed', 'cancelled')),
  created_at timestamptz not null default now(),
  constraint appointment_time_order check (ends_at > starts_at)
);

-- Hard guarantee at the database level: a barber can't have two overlapping
-- confirmed appointments, even under concurrent requests.
alter table appointments
  add constraint no_overlapping_appointments
  exclude using gist (
    barber_id with =,
    tstzrange(starts_at, ends_at) with &&
  ) where (status = 'confirmed');

create index appointments_barber_time_idx on appointments (barber_id, starts_at);

-- Row Level Security
alter table services enable row level security;
alter table barbers enable row level security;
alter table barber_availability enable row level security;
alter table appointments enable row level security;

-- Services, barbers and their weekly hours are public read-only data —
-- the booking UI needs them to render, and there's nothing sensitive in them.
create policy "Public can read active services"
  on services for select
  using (is_active = true);

create policy "Public can read active barbers"
  on barbers for select
  using (is_active = true);

create policy "Public can read barber availability"
  on barber_availability for select
  using (true);

-- No public policies on `appointments`: it holds customer PII (phone, email).
-- All reads/writes go through server-side code using the service_role key,
-- which bypasses RLS — never expose that key to the browser.
