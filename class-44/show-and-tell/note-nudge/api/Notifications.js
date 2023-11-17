import * as Notifications from 'expo-notifications';

// Function to schedule a notification
export async function scheduleNotification(title) {
  try {
    // Ensure the trigger time is in the future. Here, we set it to 60 seconds from the current time.
    const trigger = new Date(Date.now() + 60 * 1000);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Reminder",
        body: `Don't forget: ${title}`,
      },
      trigger,
    });

    console.log("Notification scheduled for:", title, "at", trigger);
  } catch (error) {
    console.error("Error scheduling notification:", error);
  }
}
