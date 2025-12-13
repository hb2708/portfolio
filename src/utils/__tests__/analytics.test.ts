import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { trackEvent, trackPageView } from '../analytics'

describe('Analytics Utility', () => {
  let consoleLogSpy: ReturnType<typeof vi.spyOn>
  let originalDev: boolean

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    originalDev = import.meta.env.DEV
    ;(import.meta.env as { DEV: boolean }).DEV = true
    // Clear window.gtag if it exists
    delete (window as { gtag?: unknown }).gtag
    delete (window as { dataLayer?: unknown }).dataLayer
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
    ;(import.meta.env as { DEV: boolean }).DEV = originalDev
  })

  it('logs events in development mode', () => {
    trackEvent('CTA_CLICK', { action: 'Test Action' })
    expect(consoleLogSpy).toHaveBeenCalled()
  })

  it('calls Google Analytics when available', () => {
    const gtagMock = vi.fn()
    ;(window as { gtag?: typeof gtagMock }).gtag = gtagMock

    trackEvent('CTA_CLICK', { action: 'Test', label: 'Test Label' })

    expect(gtagMock).toHaveBeenCalledWith('event', 'CTA_CLICK', {
      event_category: 'engagement',
      event_label: 'Test Label',
      event_action: 'Test',
      value: undefined,
    })
  })

  it('handles missing data parameter', () => {
    trackEvent('RESUME_DOWNLOAD')
    expect(consoleLogSpy).toHaveBeenCalled()
  })

  it('trackPageView calls gtag with page_view event', () => {
    const gtagMock = vi.fn()
    ;(window as { gtag?: typeof gtagMock }).gtag = gtagMock

    trackPageView('/test-path')

    expect(gtagMock).toHaveBeenCalledWith('event', 'page_view', {
      page_path: '/test-path',
    })
  })
})
