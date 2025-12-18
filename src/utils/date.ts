/**
 * Date formatting utilities
 */

/**
 * Format date string for display
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Formatted date (e.g., "December 19, 2024")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
