## 🚦 Riepilogo Funzionalità

- **Frontend:**  
  - Pagina con campi utente (`ID`, `Nome`, `Cognome`, `Telefono`, `Email`) + pulsanti “Genera Utente” e “Autentica Utente”.
  - JS aggiorna i campi chiamando le funzioni backend via HTTP.
- **Backend (Firebase Functions):**  
  - `generateUser`: genera e salva utente fake su Firestore.
  - `createAuthUser`: crea lo stesso utente anche su Firebase Authentication.
- **Emulatori locali:**  
  - Tutto gira in locale senza bisogno di deploy.

## 🪛 Debug & Note
- Le funzioni backend usano `admin`, quindi le regole di sicurezza non influenzano il flusso.
- Se qualcosa non va: controllare console browser, terminale, nomi file JS.

---

## ⏭️ Next Steps

- Gestione errori su utente già esistente in Auth
- Sincronizzazione UID tra Firestore e Auth (opzionale)
- Possibilità di login reale (opzionale)

---

> **NB:** Per dettagli vedere file JS e Functions nelle rispettive cartelle.

