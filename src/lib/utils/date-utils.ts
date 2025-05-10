/**
 * Formats a date to a localized string format
 * @param date - The date to format
 * @param locale - The locale to use for formatting (defaults to 'tr-TR')
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: string = 'tr-TR'): string {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a date to a relative time string (e.g. "2 days ago")
 * @param date - The date to format
 * @param locale - The locale to use for formatting (defaults to 'tr-TR')
 * @returns Relative time string
 */
export function formatRelativeTime(date: Date, locale: string = 'tr-TR'): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
  
  // Less than a minute
  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, 'second');
  }
  
  // Less than an hour
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return rtf.format(-diffInMinutes, 'minute');
  }
  
  // Less than a day
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return rtf.format(-diffInHours, 'hour');
  }
  
  // Less than a month
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return rtf.format(-diffInDays, 'day');
  }
  
  // Less than a year
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return rtf.format(-diffInMonths, 'month');
  }
  
  // More than a year
  const diffInYears = Math.floor(diffInMonths / 12);
  return rtf.format(-diffInYears, 'year');
}

/**
 * Calculates the time elapsed between two dates in a formatted string
 * @param startDate - The start date
 * @param endDate - The end date (defaults to current time)
 * @returns Formatted elapsed time string
 */
export function formatElapsedTime(startDate: Date, endDate: Date = new Date()): string {
  const diffInSeconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
  
  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;
  
  if (hours > 0) {
    return `${hours}s ${minutes}d ${seconds}sn`;
  } else if (minutes > 0) {
    return `${minutes}d ${seconds}sn`;
  } else {
    return `${seconds}sn`;
  }
} 