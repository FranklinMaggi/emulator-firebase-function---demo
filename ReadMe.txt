## 🚦 Riepilogo Funzionalità Firebase Demo

**Frontend**
- Pagina web con campi utente (`ID`, `Nome`, `Cognome`, `Telefono`, `Email`)
- Due pulsanti:
  - **Genera Utente:** crea dati random e li salva su Firestore (via Cloud Function)
  - **Autentica Utente:** crea lo stesso utente in Firebase Authentication (via Cloud Function)

**Backend (Firebase Functions)**
- `generateUser` (file: `functions/generateUser.js`):  
  Genera utente fake con dati random, salva su Firestore, restituisce i dati al frontend.
- `createAuthUser` (file: `functions/authentication.js`):  
  Prende email/nome/cognome dal frontend, crea l’utente su Firebase Authentication con password random.
- Entrambe le funzioni usano `firebase-admin` e non sono soggette alle regole di sicurezza Firestore/Auth.

**Emulatori Firebase**
- Tutto il progetto gira in locale usando gli emulatori Firebase (Firestore, Auth, Functions, Hosting, ecc.).
- Verifica dati in [Emulator UI](http://localhost:5050/) (Firestore e Auth tab).

---

## 🪛 Debug & Note

- Per problemi: controlla console browser e log terminale degli emulatori.
- I nomi dei file JS vanno scritti corretti e senza typo.
- Funzioni backend accessibili agli script frontend via fetch HTTP.

---

## ⏭️ Next Steps (Prossimi Step)

- Gestire l’errore in caso di email già esistente su Authentication
- Sincronizzare l’UID tra Firestore e Auth (opzionale)
- Implementare login reale con Firebase Auth SDK (opzionale)
- Aggiornare la documentazione nel README

---

> Per dettagli consultare i file in `/functions` e `/public/js`.

