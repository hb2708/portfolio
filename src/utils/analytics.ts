/**
 * Analytics utility for tracking user interactions
 * Uses Google Analytics 4 (gtag.js)
 */

export type AnalyticsEvent =
  | 'CTA_CLICK'
  | 'RESUME_DOWNLOAD'
  | 'EMAIL_CLICK'
  | 'SOCIAL_LINK_CLICK'
  | 'PROJECT_LINK_CLICK'
  | 'NAV_CLICK'
  | 'SECTION_VIEW'

export interface AnalyticsEventData {
  action?: string
  label?: string
  value?: string | number
  category?: string
}

/**
 * Track an analytics event
 * @param event - The event name
 * @param data - Additional event data
 */
export const trackEvent = (
  event: AnalyticsEvent,
  data?: AnalyticsEventData,
): void => {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', event, data)
  }

  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, {
      event_category: data?.category || 'engagement',
      event_label: data?.label,
      event_action: data?.action,
      value: data?.value,
    })
  }
}

/**
 * Track a page view
 * @param path - The page path
 */
export const trackPageView = (path: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    })
  }
}

// Declare gtag types for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetOrAction: string | Date,
      params?: Record<string, unknown>,
    ) => void
    dataLayer?: unknown[]
  }
}
