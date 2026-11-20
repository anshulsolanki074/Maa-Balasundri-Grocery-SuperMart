import type { DaySchedule, StoreStatus } from '../types';

export const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const STORE_HOURS_CONFIG = {
  openHour: 8,      // 8:00 AM
  openMinute: 0,
  closeHour: 22,    // 10:00 PM
  closeMinute: 0,
  timeZone: 'Asia/Kolkata',
  daysOpen: 'All 7 Days',
  timeRangeDisplay: '8:00 AM – 10:00 PM'
};

export function getISTDate(): Date {
  // Convert current system time to Asia/Kolkata date
  try {
    const now = new Date();
    const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    return new Date(istString);
  } catch {
    // Fallback if environment doesn't support timeZone
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istOffset = 5.5 * 60 * 60000;
    return new Date(utc + istOffset);
  }
}

export function getStoreStatus(): StoreStatus {
  const istDate = getISTDate();
  const currentHour = istDate.getHours();
  const currentMinute = istDate.getMinutes();
  const currentDayIndex = istDate.getDay();
  const currentDayName = DAYS_OF_WEEK[currentDayIndex];

  const currentTimeInMinutes = currentHour * 60 + currentMinute;
  const openTimeInMinutes = STORE_HOURS_CONFIG.openHour * 60 + STORE_HOURS_CONFIG.openMinute;
  const closeTimeInMinutes = STORE_HOURS_CONFIG.closeHour * 60 + STORE_HOURS_CONFIG.closeMinute;

  const isOpen = currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes;

  const formattedCurrentTime = istDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  let statusText = '';
  let statusSubtext = '';

  if (isOpen) {
    const minutesRemaining = closeTimeInMinutes - currentTimeInMinutes;
    const hoursRemaining = Math.floor(minutesRemaining / 60);
    const minsLeft = minutesRemaining % 60;

    statusText = 'Open Now – Visit Us Today!';
    if (hoursRemaining > 1) {
      statusSubtext = `Closes at 10:00 PM IST (${hoursRemaining} hrs ${minsLeft} mins left)`;
    } else if (hoursRemaining === 1) {
      statusSubtext = `Closes at 10:00 PM IST (1 hr ${minsLeft} mins left)`;
    } else {
      statusSubtext = `Closing soon at 10:00 PM IST (${minsLeft} mins left)`;
    }
  } else {
    statusText = 'Currently Closed';
    if (currentTimeInMinutes < openTimeInMinutes) {
      const minutesToOpen = openTimeInMinutes - currentTimeInMinutes;
      const hoursToOpen = Math.floor(minutesToOpen / 60);
      statusSubtext = `Opens today at 8:00 AM IST (in ${hoursToOpen > 0 ? `${hoursToOpen} hrs ` : ''}${minutesToOpen % 60} mins)`;
    } else {
      statusSubtext = 'Opens tomorrow at 8:00 AM IST';
    }
  }

  return {
    isOpen,
    statusText,
    statusSubtext,
    currentTimeIST: formattedCurrentTime,
    closingTimeIST: '10:00 PM',
    nextOpenTimeIST: '8:00 AM',
    currentDayName
  };
}

export function getWeeklySchedule(): DaySchedule[] {
  const istDate = getISTDate();
  const todayIndex = istDate.getDay();

  // Reorder starting with Monday (standard retail week format)
  const days = [
    { name: 'Monday', short: 'Mon', index: 1 },
    { name: 'Tuesday', short: 'Tue', index: 2 },
    { name: 'Wednesday', short: 'Wed', index: 3 },
    { name: 'Thursday', short: 'Thu', index: 4 },
    { name: 'Friday', short: 'Fri', index: 5 },
    { name: 'Saturday', short: 'Sat', index: 6 },
    { name: 'Sunday', short: 'Sun', index: 0 },
  ];

  return days.map(d => ({
    day: d.name,
    shortDay: d.short,
    open: '8:00 AM',
    close: '10:00 PM',
    isOpenToday: true,
    isToday: d.index === todayIndex
  }));
}
