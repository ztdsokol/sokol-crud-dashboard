import Form from '@/app/ui/customers/edit-form';
import { fetchMyCustomerById, fetchCustomerRoles } from '@/app/lib/data';
import React from 'react';

/* export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [customer] = await Promise.all([fetchCustomerById(id)]);
  return <Form customer={customer} customer_roles={customer_roles} />;
} */

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [customer, customer_roles] = await Promise.all([
    fetchMyCustomerById(id),
    fetchCustomerRoles(),
  ]);

  return (
    <main>
      <Form customer={customer} customer_roles={customer_roles} />
    </main>
  );
}
