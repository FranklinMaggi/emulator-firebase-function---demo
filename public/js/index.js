document.addEventListener('DOMContentLoaded', () => {
    // avviamo subito un wrapper async
    (async () => {
      try {
        // 🔗 connetti Firestore all’emulatore
        const db = firebase.firestore();
        db.useEmulator("127.0.0.1", 8080);
  
        // scrivi un messaggio di test
        await db.collection("clientMessages").add({ 
          text: "ciao dal client senza login 🚀", 
          created: new Date()
        });
  
        console.log("✅ Messaggio scritto su Firestore (senza login)");
  
        // ascolta in tempo reale i messaggi
        db.collection("clientMessages").onSnapshot(snapshot => {
          console.log("📩 Messaggi:", snapshot.docs.map(doc => doc.data()));
        });
  
      } catch (err) {
        console.error("❌ Errore Firestore:", err);
      }
    })(); // <-- chiusura della IIFE async
  });
  

  /**  try {
      // login con utente finto (deve esistere nell’emulatore!)
      const userCred = await auth.signInWithEmailAndPassword("pippo@test.com", "123456");
      console.log("Loggato come:", userCred.user.uid);

      // aggancia Firestore emulato
      const db = firebase.firestore();
      db.useEmulator("127.0.0.1", 8080);

      // scrivi un messaggio
      await db.collection("clientMessages").add({ 
        text: "ciao dal client", 
        created: new Date(),
        userId: userCred.user.uid
      });

      // leggi i messaggi in tempo reale
      db.collection("clientMessages").onSnapshot(snapshot => {
        console.log("Messaggi:", snapshot.docs.map(doc => doc.data()));
      });

    } catch (err) {
      console.error("Errore login:", err);
    }
 DECOMMENTA PER AVERE REGOLE DI AUTENTICAZIONE E SEGUI LE ISTRUZIONI IN   */
