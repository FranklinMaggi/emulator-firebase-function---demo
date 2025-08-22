// public/js/generateUser.js
    export function initGenerateUser() {
    const btn = document.getElementById('btnGenerateUser');
    if (!btn) {
    console.warn('Bottone #btnGenerateUser non trovato nel DOM.');
    return;
    }

    btn.addEventListener('click', async () => {
        try  {
            // chiama la Cloud Function emulata -> su functions/accountGenerator.js
            const response = await fetch(
                "http://127.0.0.1:9091/quiz-validaguidaitalia/us-central1/generateUser"
            );
            if (!response.ok) {
                let errorMsg = `Errore HTTP ${response.status}`;
            try {
               const errData = await response.json();
               if(errData?.error) errorMsg = errData.error;
             }
              catch {
            const text = await response.text();
            if(text) errorMsg= text;
         }throw new Error(errorMsg);
}
    const data = await response.json();
    //POPOLO CAMPI DEL FORM

    document.getElementById('userId').value = data.id
    document.getElementById('firstName').value = data.nome;
    document.getElementById('lastName').value = data.cognome; 
    document.getElementById('phone').value=data.telefono; 
    document.getElementById('email').value=data.email; 
    
    console.log("✅ Utente generato dal backend:", data);
    alert("Utente generato dal backend e salvato su Firestore!");
            } catch (err) {
            console.error("❌ Errore chiamata generateUser:",  err);
            alert("Errore nella generazione dell'utente." + err.errorMsg);
            }
        }); 
    }