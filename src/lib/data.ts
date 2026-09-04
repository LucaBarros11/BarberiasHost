export const services = [
  {
    name: "Classic Cut",
    description: "Scissor-over-comb or clipper, finished with a straight-razor neckline.",
    price: "€35",
    duration: "30 min",
  },
  {
    name: "Skin Fade",
    description: "Zero-blend fade, tapered to skin, styled to hold.",
    price: "€38",
    duration: "35 min",
  },
  {
    name: "Beard Trim & Shape",
    description: "Line-up, shape, and hot towel finish.",
    price: "€20",
    duration: "20 min",
  },
  {
    name: "Cut & Beard",
    description: "The full service — a cut and a proper beard shape, together.",
    price: "€50",
    duration: "45 min",
  },
  {
    name: "Classic Straight-Razor Shave",
    description: "Hot towel, badger brush, and a blade honed on the strop.",
    price: "€40",
    duration: "35 min",
  },
] as const;

export const team = [
  {
    name: "Eamon Doyle",
    role: "Founder & Master Barber",
    focus: "Straight-razor shaves, classic cuts",
    bio: "Trained the old way, on Capel Street, before opening his own chair in 2011.",
  },
  {
    name: "Aisling Byrne",
    role: "Barber",
    focus: "Fades, modern cuts",
    bio: "Apprenticed under Eamon for four years. Sharpest fade line in Dublin 2.",
  },
  {
    name: "Marek Nowak",
    role: "Barber",
    focus: "Beard sculpting, hot towel shaves",
    bio: "Trained in Kraków, cutting in Dublin since 2017.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Eamon's the only man in this city who's touched my beard in six years. That's not loyalty, that's just good sense.",
    name: "Cormac L.",
    detail: "Regular since 2018",
  },
  {
    quote:
      "Booked in on a whim before a wedding and walked out looking ten years sharper. Worth every minute in the chair.",
    name: "Daniel R.",
    detail: "First-time customer",
  },
  {
    quote:
      "The straight-razor shave alone is worth crossing the city for. Hot towel, no rush, done properly.",
    name: "Peadar M.",
    detail: "Regular since 2015",
  },
] as const;

export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Friday", time: "9:00 – 19:00" },
  { day: "Saturday", time: "9:00 – 17:00" },
  { day: "Sunday", time: "Closed" },
] as const;

export const contact = {
  address: "14 Aungier Street, Dublin 2, D02 XY45",
  phone: "+353 1 234 5678",
  instagram: "@thestrophousedublin",
};
