import * as Calendar from 'expo-calendar';

export async function createCalendarEvent(title, startDate, endDate) {
  const { status } = await Calendar.requestCalendarPermissionsAsync();
  if (status === 'granted') {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const calendarId = calendars.find(calendar => calendar.allowsModifications).id;

    await Calendar.createEventAsync(calendarId, {
      title,
      startDate,
      endDate,
    });
  }
}
