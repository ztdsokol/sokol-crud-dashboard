import Link from 'next/link';
import React from 'react';
import { Button } from '@/app/ui/button';
import { CustomerForm } from '@/app/lib/definitions';
import { createCustomer } from '@/app/lib/actions';
import { CustomerRolesField } from '@/app/lib/definitions';
import { CheckIcon, ClockIcon, UserCircleIcon } from 'lucide-react';
export default function Form({
  customer_roles,
}: {
  customer_roles: CustomerRolesField[];
}) {
  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter customer name"
            required
          />
        </div>
        {/* Customer role */}
        <div className="mb-4">
          <label
            htmlFor="customer_role"
            className="mb-2 block text-sm font-medium"
          >
            Choose customer role
          </label>
          <div className="relative">
            {customer_roles.map((customer_role) => (
              <div key={customer_role.id}>
                <input
                  type="checkbox"
                  id={customer_role.id}
                  name="customer_role_id"
                  value={customer_role.id}
                  className="peer cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <label htmlFor={customer_role.id}>{customer_role.name}</label>
              </div>
            ))}
            {/* <select
              id="customer_role"
              name="customer_role_id"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customer_roles.map((customer_role) => (
                <option key={customer_role.id} value={customer_role.id}>
                  {customer_role.name}
                </option>
              ))}
            </select> */}
          </div>
        </div>
        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter customer name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image_url"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Image
          </label>
          <input
            type="text"
            name="image_url"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter customer image url"
            required
          />
        </div>
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice customer_status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="active"
                  name="customer_status"
                  type="radio"
                  value="active"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Aktivan <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="inactive"
                  name="customer_status"
                  type="radio"
                  value="inactive"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Neaktivan <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Poništi
          </Link>
          <Button type="submit">Kreiraj korisnika</Button>
        </div>
      </div>
    </form>
  );
}
