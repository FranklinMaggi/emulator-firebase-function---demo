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
    console.log("✅ Utente generato dal backend:", data);
    alert("Utente generato dal backend e salvato su Firestore!");
            } catch (err) {
            console.error("❌ Errore chiamata generateUser:",  err);
            alert("Errore nella generazione dell'utente." + err.errorMsg);
            }
        }); 
                                /**IN QUESTO MOMENTO è già stata chiamata la connessione al server 
                                 * e la function impostata , sta generando dei profili fake con una 
                                 * cloud function apposita es. nome=faker.name.firstName() cognome ==a prima 
                                 * quindi adeso gli stessi dati che butteremo in firestore , sono stati generati tramite backend da 
                                 * cloud function faker  */
                                /** DEPRECATED OLD VERSION ASSIGN NAME BY CASUAL ARRAY , IT HAS BEEN SOBSTITUTE WITH NEW 
                                * VERSION , WE HANDLE EVERYTHING BY CLOUD FUNCTIONS
                                * AND MANAGE THIS ARGUMENT BY SERVER 
                                *       const id = 'user_' + Date.now();
                                const names = ['Marco', 'Lucia', 'Giulia', 'Andrea', 'Francesca'];
                                const surnames = ['Rossi', 'Bianchi', 'Verdi', 'Neri', 'Gialli'];
                                const phone = '+39 ' + Math.floor(100000000 + Math.random() * 900000000);
                                const nome = names[Math.floor(Math.random() * names.length)];
                                const cognome = surnames[Math.floor(Math.random() * surnames.length)];


                                // Popola input
                                document.getElementById('userId').value = id;
                                document.getElementById('firstName').value = nome;
                                document.getElementById('lastName').value = cognome;
                                document.getElementById('phone').value = phone;

                                // Salva su Firestore
                                try {
                                await db.collection('users').doc(id).set({ id, nome, cognome, telefono: phone });
                                console.log('Utente salvato:', { id, nome, cognome, telefono: phone });
                                alert('Utente generato e salvato con successo!');
                                } catch (err) {
                                console.error('Errore salvataggio utente:', err);
                                alert('Errore nel salvataggio.');
                                }
                                });
                                }
                                */}