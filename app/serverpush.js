const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:example@hahaha.org',
    'BPC_OA9k3oCn0CkxO0aTYXv16ZlKYGEdJcjfjm3fXgVaGPAVF8pEBNDH-EEyAaNSU9uxPpicInF0GpRRZquQDV4', //Public Key
    'sbs3uLt2nAManAZ_TlM3NQ_cjJSnYJfY2zI0gsFVGOk' // Private Key
  );

  const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/fiZxVnNFkPs:APA91bHLxKbO9Nc7V56CPge8EnLAKRCF4DeVMgNXsFB5OVwDTu3FN41vPx1DX_Q0j1MXfg0VQw3ujiwIzSdHS6olTEMzWH4CMd1i4U_vrobLjBa1QGXcDm-xx12x9REiWovLuedqUhHa',
    keys: {
      auth: 'GK75zaZoA24KOMG5ySQiRg',
      p256dh: 'BCBYrjaWlkC1J5ZwAW5GnqEz1uacLRcEpLUzZBtTThdJUSJIohpzMx40bA5fViRBnw4G7d0dfo3ljGCLX1UXSGQ'
    }
  };
  
  webpush.sendNotification(pushSubscription, 'Your Push Payload Text').then((c)=>{
      console.log(c);
  }).catch((err)=>{
      console.log('error');
      console.log(err);
  });