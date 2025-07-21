// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { logEvent } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";


const firebaseConfig = {
    apiKey: "AIzaSyCSzkYFX-shtZjvFoxYB9q3NTTjAovD8yk",
    authDomain: "petsear-7ebe5.firebaseapp.com",
    projectId: "petsear-7ebe5",
    storageBucket: "petsear-7ebe5.firebasestorage.app",
    messagingSenderId: "278405273956",
    appId: "1:278405273956:web:72d9dbe60af57c24920271",
    measurementId: "G-Q8MLMY41KZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let currentUser = null;

function initAuth() {
    signInAnonymously(auth).catch(console.error);
    onAuthStateChanged(auth, (user) => {
        currentUser = user;
        window.dispatchEvent(new CustomEvent('firebaseAuthReady', { detail: { user } }));
    });
}
initAuth();

window.getCurrentUser = function() {
    return currentUser;
};
window.isUserAuthenticated = function() {
    return !!currentUser;
};

window.saveUserData = async function(data, collectionName) {
    if (!window.isUserAuthenticated()) throw new Error('No autenticado');
    data.userId = currentUser.uid;
    data.timestamp = new Date();
    await addDoc(collection(db, collectionName), data);
};

window.saveMessageToFirebase = async function(text, sender, collectionName) {
    if (!window.isUserAuthenticated()) throw new Error('No autenticado');
    const data = {
        text,
        sender,
        userId: currentUser.uid,
        timestamp: new Date()
    };
    await addDoc(collection(db, collectionName), data);
};

window.loadChatHistory = async function(collectionName, max = 10) {
    const q = query(collection(db, collectionName), orderBy('timestamp', 'desc'), limit(max));
    const querySnapshot = await getDocs(q);
    const messages = [];
    querySnapshot.forEach(doc => messages.push(doc.data()));
    window.dispatchEvent(new CustomEvent('chatHistoryLoaded', { detail: { messages: messages.reverse(), collectionName } }));
};

window.trackEvent = function(eventName, params) {
    logEvent(analytics, eventName, params);
};

window.displayMessage = function(text, sender, timestamp, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'message ' + sender;
    div.innerHTML = `<b>${sender}:</b> ${text} <span style='font-size:0.8em;color:#888;'>${new Date(timestamp).toLocaleString()}</span>`;
    container.appendChild(div);
};

export { db, analytics };