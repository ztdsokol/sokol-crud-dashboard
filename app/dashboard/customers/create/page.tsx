import { customer_roles } from '@/app/lib/placeholder-data';
import Form from '@/app/ui/customers/create-form';
import React from 'react';

export default function Page() {
  return (
    <main>
      <h1>Create Customer</h1>
      <Form customer_roles={customer_roles} />
    </main>
  );
}
