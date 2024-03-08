// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customer_roles = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a64421',
    name: 'trener',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64422',
    name: 'skupštinar',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64423',
    name: 'član',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'delba@oliveira.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/delba-de-oliveira.png',
    contact_name: 'Delba de Oliveira',
    discount: 20,
    one_time_discount: 10,
    customer_role_id: [customer_roles[0].id, customer_roles[1].id],
    customer_status: 'active',
    notes: 'Special note about this customer.',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'lee@robinson.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/lee-robinson.png',
    contact_name: 'Lee Robinson',
    customer_role_id: [customer_roles[1].id],
    customer_status: 'active',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'hector@simpson.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/hector-simpson.png',
    contact_name: 'Hector Simpson',
    discount: 10,
    customer_role_id: [customer_roles[2].id],
    customer_status: 'active',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'steven@tey.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/steven-tey.png',
    contact_name: 'Steven Tey',
    customer_role_id: [customer_roles[2].id],
    customer_status: 'active',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'steph@dietz.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/steph-dietz.png',
    contact_name: 'Steph Dietz',
    discount: 15,
    one_time_discount: 5,
    customer_role_id: [customer_roles[0].id],
    customer_status: 'active',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'michael@novotny.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/michael-novotny.png',
    contact_name: 'Michael Novotny',
    customer_role_id: [customer_roles[2].id],
    customer_status: 'active',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'evil@rabbit.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/evil-rabbit.png',
    contact_name: 'Evil Rabbit',
    customer_role_id: [customer_roles[2].id],
    customer_status: 'active',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'emil@kowalski.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/emil-kowalski.png',
    contact_name: 'Emil Kowalski',
    customer_role_id: [customer_roles[0].id],
    customer_status: 'active',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'amy@burns.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/amy-burns.png',
    contact_name: 'Amy Burns',
    customer_role_id: [customer_roles[1].id],
    customer_status: 'inactive',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    birthdate: '1990-01-01',
    customer_oib: '12345678901',
    email: 'balazs@orban.com',
    address: '1234 Anywhere St.',
    contact_phone: '555-555-5555',
    image_url: '/customers/balazs-orban.png',
    contact_name: 'Balazs Orban',
    customer_role_id: [customer_roles[0].id, customer_roles[1].id],
    customer_status: 'active',
  },
];
const programs = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a64421',
    name: 'Škola gimnastike',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64422',
    name: 'Napredna gimnastika',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64423',
    name: 'Parkur',
  },
];

const locations = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a64421',
    name: 'Glavna dvorana, ZTD Hrvatski Sokol	',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64422',
    name: 'Borongaj, Dvorana Borongaj',
  },
];

const days = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a64421',
    name: 'Ponedjeljak',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64422',
    name: 'Utorak',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64423',
    name: 'Srijeda',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64424',
    name: 'Cetvrtak',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64425',
    name: 'Petak',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64426',
    name: 'Subota',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64427',
    name: 'Nedjelja',
  },
];

const hours = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a64421',
    name: '00:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64422',
    name: '01:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64423',
    name: '02:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64424',
    name: '03:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64425',
    name: '04:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64426',
    name: '05:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64427',
    name: '06:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64428',
    name: '07:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64429',
    name: '08:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64430',
    name: '09:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64431',
    name: '10:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64432',
    name: '11:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64433',
    name: '12:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64434',
    name: '13:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64435',
    name: '14:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64436',
    name: '15:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64437',
    name: '16:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64438',
    name: '17:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64439',
    name: '18:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64440',
    name: '19:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64441',
    name: '20:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64442',
    name: '21:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64443',
    name: '22:00',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64444',
    name: '23:00',
  },
];

const groups = [
  {
    id: 'CC27C14A-0ACF-4F0A-A6C9-D25682C144B9',
    name: 'Škola gimnastike i vježbe',
    program_id: programs[0].id,
    location_id: locations[0].id,
    group_price: 100,
    hour_id: [hours[10].id, hours[12].id],
    day_id: [days[0].id, days[2].id],
  },
  {
    id: 'CC27C14A-1ACF-4F4A-A6C9-D45382C144B9',
    name: 'Napredna gimnastika i vježbe',
    program_id: programs[1].id,
    location_id: locations[0].id,
    group_price: 100,
    hour_id: [hours[11].id, hours[14].id],
    day_id: [days[2].id, days[4].id],
  },
  {
    id: 'CC22C14A-0ACF-4F4A-A6C9-D45682D144B1',
    name: 'Parkur i vježbe',
    program_id: programs[2].id,
    location_id: locations[0].id,
    group_price: 100,
    hour_id: [hours[8].id, hours[10].id],
    day_id: [days[1].id, days[3].id],
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Napredna gimnastika i vježbe',
    program_id: programs[1].id,
    location_id: locations[1].id,
    group_price: 100,
    hour_id: [hours[10].id, hours[11].id],
    day_id: [days[3].id, days[5].id],
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Napredna gimnastika i vježbe',
    program_id: programs[1].id,
    location_id: locations[1].id,
    group_price: 100,
    hour_id: [hours[11].id, hours[13].id],
    day_id: [days[1].id, days[3].id],
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  customer_roles,
  programs,
  locations,
  days,
  hours,
  groups,
  invoices,
  revenue,
};
