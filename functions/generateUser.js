// functions/generateUser.js
const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const { faker } = require('@faker-js/faker'); // aggiorna a @faker-js/faker


exports.generateUser = onRequest(async (req, res) => {
try {
const id = 'user_' + Date.now();
const nome = faker.person.firstName();
const cognome = faker.person.lastName();
const telefono = faker.phone.number('+39 ### #######');


const db = admin.firestore();
await db.collection('users').doc(id).set({ id, nome, cognome, telefono });

res.json({ success: true, id, nome, cognome, telefono });
} catch (error) {
console.error('Errore generateUser:', error);

res.status(500).json({
    succes: false , 
    error : error.message||String(error) || "Errore nella generazione dell'utente"
})

}
});