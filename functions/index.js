const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin")
/**Inizializza l’SDK Admin una sola volta*/
admin.initializeApp();

/** Istanza Firestore */
const db = admin.firestore();


// Funzione HTTP banale: risponde con un "Ciao mondo!"
exports.helloWorld = onRequest((req, res) => {
  logger.info("Qualcuno ha chiamato helloWorld", { structuredData: true });
  res.send("👋 Hello World dal tuo emulatore Firebase!");
});

// funzione che salva un messaggio
exports.addMessage = onRequest(async (req, res) => {
    const text = req.query.text || "vuoto";
    const ref = await db.collection("messages").add({ text, created: new Date() });
    res.send(`Messaggio salvato con ID: ${ref.id}`);
  });

  // funzione che legge i messaggi
exports.getMessages = onRequest(async (req, res) => {
    const snapshot = await db.collection("messages").orderBy("created", "desc").limit(5).get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json(data);
  });

