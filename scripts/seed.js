const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  customer_roles,
  programs,
  locations,
  days,
  hours,
  groups,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedCustomerRoles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "custoer roles" table if doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customer_roles(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `;
    console.log(`Created "customer_roles" table`);

    // Insert data into the "customers role" table
    const insertedCustomerRoles = await Promise.all(
      customer_roles.map(
        (customer_role) => client.sql`
        INSERT INTO customer_roles (id, name)
        VALUES (${customer_role.id}, ${customer_role.name})
        ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
    console.log(`Seeded ${insertedCustomerRoles.length} customer roles`);
    return {
      createTable,
      customerRoles: insertedCustomerRoles,
    };
  } catch (error) {
    console.error('Error seeding cutomer roles:', error);
    throw error;
  }
}
async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        customer_role_id UUID[] NOT NULL,
        birthdate DATE,
        customer_oib VARCHAR(255),
        contact_name VARCHAR(255),
        contact_phone VARCHAR(255),
        address VARCHAR(255),
        discount INT,
        one_time_discount INT,
        notes TEXT,
        customer_status VARCHAR(255) NOT NULL, 
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, birthdate, customer_role_id, customer_status, customer_oib, contact_name, contact_phone, address, discount, one_time_discount, notes, email, image_url)
VALUES (${customer.id}, ${customer.name}, ${customer.birthdate}, ${customer.customer_role_id}, ${customer.customer_status},${customer.customer_oib}, ${customer.contact_name},  ${customer.contact_phone}, ${customer.address}, ${customer.discount}, ${customer.one_time_discount}, ${customer.notes}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedPrograms(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "programs" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS programs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "programs" table`);

    // Insert data into the "programs" table
    const insertedPrograms = await Promise.all(
      programs.map(
        (program) => client.sql`
        INSERT INTO programs (id, name)
        VALUES (${program.id}, ${program.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedPrograms.length} programs`);

    return {
      createTable,
      programs: insertedPrograms,
    };
  } catch (error) {
    console.error('Error seeding progrmas:', error);
    throw error;
  }
}

async function seedLocations(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "locations" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS locations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "locations" table`);

    // Insert data into the "locations" table
    const insertedLocations = await Promise.all(
      locations.map(
        (location) => client.sql`
        INSERT INTO locations (id, name)
        VALUES (${location.id}, ${location.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedLocations.length} locations`);

    return {
      createTable,
      locations: insertedLocations,
    };
  } catch (error) {
    console.error('Error seeding locations:', error);
    throw error;
  }
}

async function seedDays(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "days" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS days (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "days" table`);

    // Insert data into the "days" table
    const insertedDays = await Promise.all(
      days.map(
        (day) => client.sql`
        INSERT INTO days (id, name)
        VALUES (${day.id}, ${day.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedDays.length} days`);

    return {
      createTable,
      days: insertedDays,
    };
  } catch (error) {
    console.error('Error seeding days:', error);
    throw error;
  }
}

async function seedHours(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "hours" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS hours (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "hours" table`);

    // Insert data into the "hours" table
    const insertedHours = await Promise.all(
      hours.map(
        (hour) => client.sql`
        INSERT INTO hours (id, name)
        VALUES (${hour.id}, ${hour.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedHours.length} hours`);

    return {
      createTable,
      hours: insertedHours,
    };
  } catch (error) {
    console.error('Error seeding hours:', error);
    throw error;
  }
}

async function seedGroups(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "groups" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS groups (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      customer_id UUID[],
      program_id UUID NOT NULL,
      location_id UUID NOT NULL,
      group_price INT NOT NULL,
      hour_id UUID[] NOT NULL,
      day_id UUID[] NOT NULL
    );
`;

    console.log(`Created "groups" table`);

    // Insert data into the "groups" table
    const insertedGroups = await Promise.all(
      groups.map(
        (group) => client.sql`
        INSERT INTO groups (id, name, customer_id, program_id, location_id, hour_id, day_id, group_price)
        VALUES (${group.id}, ${group.name}, ${group.customer_id}, ${group.program_id}, ${group.location_id}, ${group.hour_id}, ${group.day_id}, ${group.group_price})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedGroups.length} groups`);

    return {
      createTable,
      groups: insertedGroups,
    };
  } catch (error) {
    console.error('Error seeding groups:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCustomers(client);
  await seedCustomerRoles(client);
  await seedPrograms(client);
  await seedLocations(client);
  await seedDays(client);
  await seedHours(client);
  await seedInvoices(client);
  await seedRevenue(client);
  await seedGroups(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
