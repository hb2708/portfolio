/**
 * Analytics utility for tracking user interactions
 * Uses Google Analytics 4 (gtag.js)
 */

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

type EventParams = Record<string, unknown>

/**
 * Internal helper to send GA4 events
 */
const sendGA4Event = (eventName: string, params?: EventParams): void => {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, params)
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// ============================================
// General Events
// ============================================

export type AnalyticsEvent =
  | 'CTA_CLICK'
  | 'RESUME_DOWNLOAD'
  | 'EMAIL_CLICK'
  | 'SOCIAL_LINK_CLICK'
  | 'PROJECT_LINK_CLICK'
  | 'NAV_CLICK'
  | 'SECTION_VIEW'
  | 'THEME_TOGGLE'

export interface AnalyticsEventData {
  action?: string
  label?: string
  value?: string | number
  category?: string
  theme?: string
}

/**
 * Track a general analytics event
 */
export const trackEvent = (
  event: AnalyticsEvent,
  data?: AnalyticsEventData,
): void => {
  sendGA4Event(event, {
    event_category: data?.category || 'engagement',
    event_label: data?.label,
    event_action: data?.action,
    value: data?.value,
    theme: data?.theme,
  })
}

/**
 * Track a page view
 */
export const trackPageView = (path: string): void => {
  sendGA4Event('page_view', { page_path: path })
}

// ============================================
// Blog Events
// ============================================

/** Track code block copy */
export const trackCodeCopy = (language: string, postSlug?: string): void => {
  sendGA4Event('code_copy', {
    language,
    post_slug: postSlug || window.location.pathname,
  })
}

/** Track TOC click */
export const trackTOCClick = (headingText: string, headingId: string): void => {
  sendGA4Event('toc_click', {
    heading_text: headingText,
    heading_id: headingId,
    post_slug: window.location.pathname,
  })
}

/** Track blog reading progress milestones */
export const trackReadProgress = (
  milestone: 25 | 50 | 75 | 100,
  postSlug: string,
): void => {
  sendGA4Event('blog_read_progress', {
    milestone_percent: milestone,
    post_slug: postSlug,
  })
}

/** Track blog share */
export const trackShare = (
  platform: 'twitter' | 'native',
  postSlug: string,
): void => {
  sendGA4Event('blog_share', {
    platform,
    post_slug: postSlug,
  })
}
