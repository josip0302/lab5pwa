export default function swDev(){

   // const webpush = require('web-push');

// VAPID keys should be generated only once.
  // const vapidKeys = webpush.generateVAPIDKeys();
 

    let swUrl=`${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((response)=>{
        console.log("dobro")
    

    })

};