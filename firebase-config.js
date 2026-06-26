// Firebase Configuration - Ganti dengan config dari Firebase Console Anda
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "hyundai-batang.firebaseapp.com",
    databaseURL: "https://hyundai-batang-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hyundai-batang",
    storageBucket: "hyundai-batang.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

console.log('✅ Firebase initialized successfully');