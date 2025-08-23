const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');

exports.createAuthUser = onRequest(async (req, res) => {
  try {
    // Supporta sia JSON che form-data
    const { email, nome, cognome } = req.body || req.query;

    if (!email || !nome || !cognome) {
      return res.status(400).json({ success: false, error: "Dati mancanti" });
    }

    // Genera una password casuale per test
    const password = Math.random().toString(36).slice(-8) + "A1!";

    // Crea l’utente su Authentication
    const userRecord = await admin.auth().createUser({
      email,
      displayName: `${nome} ${cognome}`,
      password,
    });

    res.json({ success: true, uid: userRecord.uid, email });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message || String(error) });
  }
});