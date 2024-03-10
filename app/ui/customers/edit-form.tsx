'use client';

import { updateCustomer, updateInvoice } from '@/app/lib/actions';
import {
  CustomerField,
  CustomerForm,
  InvoiceForm,
} from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { CustomerRolesField } from '@/app/lib/definitions';

export default function EditInvoiceForm({
  customer,
  customer_roles,
}: {
  customer: CustomerForm;
  customer_roles: CustomerRolesField[];
}) {
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  let birthdate = new Date(customer.birthdate);
  let formattedBirthdate = `${birthdate.getFullYear()}-${(
    '0' +
    (birthdate.getMonth() + 1)
  ).slice(-2)}-${('0' + birthdate.getDate()).slice(-2)}`;
  return (
    <form action={updateCustomerWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Ime i prezime
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={customer.name}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
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
                  defaultValue={customer_role.id}
                  className="peer cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <label htmlFor={customer_role.id}>{customer_role.name}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Customer Birthdate */}
        <div className="mb-4">
          <label htmlFor="birthdate" className="mb-2 block text-sm font-medium">
            Datum rođenja
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                defaultValue={formattedBirthdate}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* OIB */}
        <div className="mb-4">
          <label
            htmlFor="customer_oib"
            className="mb-2 block text-sm font-medium"
          >
            customer_oib
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="customer_oib"
                name="customer_oib"
                type="text"
                defaultValue={customer.customer_oib}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* Contact name */}
        <div className="mb-4">
          <label
            htmlFor="contact_name"
            className="mb-2 block text-sm font-medium"
          >
            Kontakt osoba
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="contact_name"
                name="contact_name"
                type="text"
                defaultValue={customer.contact_name}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="contact_phone"
            className="mb-2 block text-sm font-medium"
          >
            contact_phone
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="contact_phone"
                name="contact_phone"
                type="text"
                defaultValue={customer.contact_phone}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                defaultValue={customer.email}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="mb-2 block text-sm font-medium">
            address
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                name="address"
                type="text"
                defaultValue={customer.address}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* Customer Notes */}
        <div className="mb-4">
          <label htmlFor="notes" className="mb-2 block text-sm font-medium">
            notes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="notes"
                name="notes"
                defaultValue={customer.notes}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Customer Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the customer status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="active"
                  name="customer_status"
                  type="radio"
                  value="active"
                  defaultChecked={customer.customer_status === 'active'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="active"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="inactive"
                  name="customer_status"
                  type="radio"
                  value="inactive"
                  defaultChecked={customer.customer_status === 'inactive'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  inactive <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        {/* Customer Discount */}
        <div className="mb-4">
          <label htmlFor="discount" className="mb-2 block text-sm font-medium">
            discount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                type="number"
                id="discount"
                name="discount"
                defaultValue={customer.discount}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* Customer One time Discount */}
        <div className="mb-4">
          <label
            htmlFor="one_time_discount"
            className="mb-2 block text-sm font-medium"
          >
            Jednokratni popust
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                type="number"
                id="one_time_discount"
                name="one_time_discount"
                defaultValue={customer.one_time_discount}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* Customer Image */}
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            image_url
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image_url"
                name="image_url"
                type="text"
                defaultValue={customer.image_url}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Customer</Button>
      </div>
    </form>
  );
}
