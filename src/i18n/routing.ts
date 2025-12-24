import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

const routing = defineRouting({
  locales: ['en', 'am'],

  defaultLocale: 'en'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export { routing, Link, redirect, usePathname, useRouter };
