// public/js/generateAuthenticationUser.js

export function initAuthenticateUser() {
    const btn = document.getElementById('btnAuthenticateUser');
    if (!btn) {
      console.warn('Bottone #btnAuthenticateUser non trovato nel DOM.');
      return;
    }
  
    btn.addEventListener('click', async () => {
      // Prendi i dati dai campi già popolati
      const email = document.getElementById('email')?.value;
      const nome = document.getElementById('firstName')?.value;
      const cognome = document.getElementById('lastName')?.value;
  
      if (!email || !nome || !cognome) {
        alert("Compila prima tutti i campi utente.");
        return;
      }
  
      try {
        const response = await fetch(
          "http://127.0.0.1:9091/quiz-validaguidaitalia/us-central1/createAuthUser",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, nome, cognome })
          }
        );
        const data = await response.json();
        if (data.success) {
          alert(`Utente autenticato! UID: ${data.uid}`);
          console.log("✅ Utente creato in Authentication:", data);
        } else {
          throw new Error(data.error);
        }
      } catch (err) {
        alert("Errore autenticazione: " + (err.message || err));
        console.error("❌ Errore createAuthUser:", err);
      }
    });
  }
  