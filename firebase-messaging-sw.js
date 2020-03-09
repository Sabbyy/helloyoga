 importScripts("https://www.gstatic.com/firebasejs/5.11.1/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/5.11.1/firebase-messaging.js");

 firebase.initializeApp({
   "messagingSenderId": "742052740316"
 });

 const messaging = firebase.messaging();

/*messaging.setBackgroundMessageHandler(function(payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  var notificationTitle = "HelloYoga";
  var notificationOptions = {
    body: "This is in the background!!!",
    icon: "/firebase-logo.png"
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});*/
