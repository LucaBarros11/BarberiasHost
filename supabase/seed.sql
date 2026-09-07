-- Sample data — run this after 0001_init.sql so the booking UI has
-- something real to show. Edit freely from the Supabase Table Editor
-- afterwards; this file is just a starting point.

insert into services (name, description, price_cents, duration_minutes) values
  ('Classic Cut', 'Scissor-over-comb or clipper, finished with a straight-razor neckline.', 3500, 30),
  ('Skin Fade', 'Zero-blend fade, tapered to skin, styled to hold.', 3800, 35),
  ('Beard Trim & Shape', 'Line-up, shape, and hot towel finish.', 2000, 20),
  ('Cut & Beard', 'The full service — a cut and a proper beard shape, together.', 5000, 45),
  ('Classic Straight-Razor Shave', 'Hot towel, badger brush, and a blade honed on the strop.', 4000, 35);

insert into barbers (name, role, focus, bio) values
  ('Eamon Doyle', 'Founder & Master Barber', 'Straight-razor shaves, classic cuts', 'Trained the old way, on Capel Street, before opening his own chair in 2011.'),
  ('Aisling Byrne', 'Barber', 'Fades, modern cuts', 'Apprenticed under Eamon for four years. Sharpest fade line in Dublin 2.'),
  ('Marek Nowak', 'Barber', 'Beard sculpting, hot towel shaves', 'Trained in Kraków, cutting in Dublin since 2017.');

-- Weekday: 1 = Monday ... 7 = Sunday.
-- Example split, same as we discussed: each barber keeps their own days.

-- Eamon: Tue–Fri 9–19, Sat 9–17
insert into barber_availability (barber_id, weekday, start_time, end_time)
select id, weekday, '09:00', '19:00'
from barbers, unnest(array[2, 3, 4, 5]) as weekday
where name = 'Eamon Doyle';

insert into barber_availability (barber_id, weekday, start_time, end_time)
select id, 6, '09:00', '17:00' from barbers where name = 'Eamon Doyle';

-- Aisling: Wed–Fri 10–18, Sat 10–17
insert into barber_availability (barber_id, weekday, start_time, end_time)
select id, weekday, '10:00', '18:00'
from barbers, unnest(array[3, 4, 5]) as weekday
where name = 'Aisling Byrne';

insert into barber_availability (barber_id, weekday, start_time, end_time)
select id, 6, '10:00', '17:00' from barbers where name = 'Aisling Byrne';

-- Marek: Mon, Tue, Thu 9–17
insert into barber_availability (barber_id, weekday, start_time, end_time)
select id, weekday, '09:00', '17:00'
from barbers, unnest(array[1, 2, 4]) as weekday
where name = 'Marek Nowak';
