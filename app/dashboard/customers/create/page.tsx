//import { customer_roles } from '@/app/lib/placeholder-data';
import { fetchCustomerRoles } from '@/app/lib/data';
import Form from '@/app/ui/customers/create-form';
import React from 'react';

/* export default function Page() {
  return (
    <main>
      <h1>Create Customer</h1>
      <Form customer_roles={customer_roles} />
    </main>
  );
} */

export default async function Page() {
  const customer_roles = await fetchCustomerRoles();
  return (
    <main>
      <h1>Create Customer</h1>
      <Form customer_roles={customer_roles} />
    </main>
  );
}
