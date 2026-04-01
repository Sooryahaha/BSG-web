/**
 * Central route paths for navigation and routing.
 * Updated for Biz Setup Global (BSG) corporate structure.
 */
export const ROUTES = {
  HOME: '/',
  BUSINESS_SETUP: '/business-setup',
  GLOBAL_INCORPORATION: '/global-incorporation',
  STARTUP_SERVICES: '/startup-services',
  COMPLIANCES: '/compliances',
  TAX_RETURNS: '/tax-returns',
  BLOG: '/blog',
  CONTACT: '/contact',
  SERVICE_DETAIL: '/service/:slug',
  SERVICE_DIRECTORY: '/services',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
