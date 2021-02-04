// create a notification, with title and NotificationOption
const myNotification = new Notification("Notification Title", {
    body: "Body for the notification"
} )

myNotification.onclick = () => {
  console.log('Notification clicked')
}