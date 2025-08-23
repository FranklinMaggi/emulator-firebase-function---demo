// functions/index.js
const { onRequest } = require('firebase-functions/v2/https');
//creeremo un user con create user da functions/authenitcation.js
const { createAuthUser } = require('./authentication');
const logger = require('firebase-functions/logger');
const admin = require('firebase-admin');
admin.initializeApp();


const { generateUser } = require('./generateUser');


exports.helloWorld = onRequest((req, res) => {
logger.info('Called helloWorld');
res.send('👋 Hello World');
});


exports.addMessage = onRequest(async (req, res) => {
const text = req.query.text || 'vuoto';
const ref = await admin.firestore().collection('messages').add({ text, created: new Date() });
res.send(`Messaggio salvato con ID: ${ref.id}`);
});


exports.getMessages = onRequest(async (req, res) => {
const snapshot = await admin.firestore().collection('messages')
.orderBy('created', 'desc').limit(5).get();
res.json(snapshot.docs.map(d => d.data()));
});


exports.generateUser = generateUser;
exports.createAuthUser = createAuthUser;