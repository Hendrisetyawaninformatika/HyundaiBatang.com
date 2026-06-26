// Firebase Configuration - Menggunakan kredensial proyek Anda
const firebaseConfig = {
    apiKey: "AIzaSyDu4hHrtvn3R0kpZXE5JVN-XxhmCurp69o",
    authDomain: "mobilproject-e25d1.firebaseapp.com",
    databaseURL: "https://mobilproject-e25d1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mobilproject-e25d1",
    storageBucket: "mobilproject-e25d1.firebasestorage.app",
    messagingSenderId: "465335606485",
    appId: "1:465335606485:web:fcf52bb8a24ef63ea8965c"
};

// Inisialisasi Firebase secara Global
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();
const carsRef = db.ref('cars');

console.log('✅ Firebase global configuration successfully loaded');