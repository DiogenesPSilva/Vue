import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAL1tH0o6fgibDzHh6m3GwtwPeYS5lnM50",
    authDomain: "vuecrudbootstrap.firebaseapp.com",
    databaseURL: "https://vuecrudbootstrap.firebaseio.com",
    projectId: "vuecrudbootstrap",
    storageBucket: "vuecrudbootstrap.appspot.com",
    messagingSenderId: "1010006250529"
}

const app = Firebase.initializeApp(config)

export const db = app.database();
export const dbRef = db.ref('items')