'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import {
  Euro,
  FileTextIcon,
  GraduationCapIcon,
  Layers3,
  LogOutIcon,
  LucideIcon,
  Mails,
  Receipt,
  ReceiptIcon,
  Settings,
  User2Icon,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { DashboardIcon } from '@radix-ui/react-icons';
import { AccordionItem } from '@radix-ui/react-accordion';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Nadzorna ploča', href: '/dashboard', icon: HomeIcon },
  { name: 'Članovi', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Programi', href: '/dashboard/groups', icon: UserGroupIcon },

  { name: 'Kampanje', href: '/dashboard/customers', icon: Mails },
  {
    name: 'Financije',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },

  { name: 'Podešavanja', href: '/dashboard/settings', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <Link key="1" href="/dashboard">
        <div className="flex flex-row items-center gap-4 pl-2 text-sm font-medium hover:underline ">
          {' '}
          <DashboardIcon className="my-1.5 h-6  w-6" />
          Nadzorna ploča
        </div>
      </Link>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" gap-4 py-1.5 pl-2">
            <div className="flex flex-row items-center gap-4">
              {' '}
              <Users />
              Članstvo
            </div>
          </AccordionTrigger>
          <Link key="2" href="/dashboard/customers/students">
            <AccordionContent className="mt-1.5 pl-12">
              Članovi
            </AccordionContent>
          </Link>
          <Link key="2" href="/dashboard/customers/trainers">
            <AccordionContent className="pl-12">Treneri</AccordionContent>
          </Link>
          <Link key="2" href="/dashboard/customers/board-members">
            <AccordionContent className="pl-12">Skupštinari</AccordionContent>
          </Link>
          <Link key="2" href="/dashboard/customers">
            <AccordionContent className="pl-12">Svi članovi</AccordionContent>
          </Link>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className=" max-w-52 w-full gap-4 py-1.5 pl-2">
            <div className="flex flex-row items-center gap-4  ">
              <Layers3 /> Programi
            </div>
          </AccordionTrigger>
          <Link key="2" href="/dashboard/groups">
            <AccordionContent className="mt-1.5  pl-12 ">
              Škola gimnastike
            </AccordionContent>
          </Link>
          <Link key="2" href="/dashboard/groups">
            <AccordionContent className="pl-12">
              Napredna gimnastika
            </AccordionContent>
          </Link>
          <Link key="2" href="/dashboard/groups">
            <AccordionContent className="pl-12">Parkur</AccordionContent>
          </Link>
        </AccordionItem>
      </Accordion>
      <Link key="1" href="/dashboard/campaigns">
        <div className="flex flex-row items-center gap-4 pl-2 text-sm font-medium hover:underline ">
          {' '}
          <Mails className="my-1.5 h-6 w-6" />
          Kampanje
        </div>
      </Link>
      <Link key="1" href="/dashboard/invoices">
        <div className="flex flex-row items-center gap-4 pl-2 text-sm font-medium hover:underline ">
          {' '}
          <FileTextIcon className="my-1.5 h-6  w-6" />
          Financije
        </div>
      </Link>
      <Link key="1" href="/dashboard/settings">
        <div className="flex flex-row items-center gap-4 pl-2 text-sm font-medium hover:underline ">
          {' '}
          <Settings className="my-1.5 h-6  w-6" />
          Podešavanja
        </div>
      </Link>
    </>
  );
}
