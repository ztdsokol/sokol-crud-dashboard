'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
  customer_role_id: z.array(z.string()),
  customer_status: z.enum(['active', 'inactive']),
  birthdate: z.string(),
  customer_oib: z.string(),
  contact_name: z.string(),
  contact_phone: z.string(),
  address: z.string(),
  discount: z.coerce.number(),
  one_time_discount: z.coerce.number(),
  notes: z.string(),
});

const CreateCustomer = CustomerSchema.omit({ id: true });

export async function createCustomer(formData: FormData) {
  const {
    name,
    email,
    image_url,
    customer_role_id,
    customer_status,
    birthdate,
    customer_oib,
    contact_name,
    contact_phone,
    address,
    discount,
    one_time_discount,
    notes,
  } = CreateCustomer.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: formData.get('image_url'),
    customer_role_id: formData.getAll('customer_role_id'),
    customer_status: formData.get('customer_status'),
    birthdate: formData.get('birthdate'),
    customer_oib: formData.get('customer_oib'),
    contact_name: formData.get('contact_name'),
    contact_phone: formData.get('contact_phone'),
    address: formData.get('address'),
    discount: formData.get('discount'),
    one_time_discount: formData.get('one_time_discount'),
    notes: formData.get('notes'),
  });

  const customerRoleIdString = `{${customer_role_id.join(',')}}`;
  await sql`
    INSERT INTO customers (name, email, image_url, customer_role_id, customer_status, birthdate, customer_oib, contact_name, contact_phone, address, discount, one_time_discount, notes)
    VALUES (${name}, ${email}, ${image_url}, ${customerRoleIdString}, ${customer_status}, ${birthdate}, ${customer_oib}, ${contact_name}, ${contact_phone}, ${address}, ${discount}, ${one_time_discount}, ${notes})
    `;
  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

const UpdateCustomer = CustomerSchema.omit({ id: true });
export async function updateCustomer(id: string, formData: FormData) {
  const {
    name,
    email,
    image_url,
    customer_role_id,
    customer_status,
    birthdate,
    customer_oib,
    contact_name,
    contact_phone,
    address,
    discount,
    one_time_discount,
    notes,
  } = UpdateCustomer.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: formData.get('image_url'),
    customer_role_id: formData.getAll('customer_role_id'),
    customer_status: formData.get('customer_status'),
    birthdate: formData.get('birthdate'),
    customer_oib: formData.get('customer_oib'),
    contact_name: formData.get('contact_name'),
    contact_phone: formData.get('contact_phone'),
    address: formData.get('address'),
    discount: formData.get('discount'),
    one_time_discount: formData.get('one_time_discount'),
    notes: formData.get('notes'),
  });

  const customerRoleIdString = `{${customer_role_id.join(',')}}`;
  await sql`
    UPDATE customers
    SET name = ${name},  email = ${email}, image_url = ${image_url},  customer_status = ${customer_status}, birthdate = ${birthdate}, customer_oib = ${customer_oib}, contact_name = ${contact_name}, contact_phone = ${contact_phone}, address = ${address}, discount = ${discount}, one_time_discount = ${one_time_discount}, notes = ${notes}, customer_role_id = ${customerRoleIdString}
    WHERE id = ${id}
  `;
  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`;

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
