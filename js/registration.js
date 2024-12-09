document.addEventListener("DOMContentLoaded", function () {
  const regForm = document.getElementById("regForm");
  const registrationsList = document.createElement("div");
  registrationsList.id = "registrationsList";

  // Füge die Liste nach dem Formular ein
  regForm.parentNode.insertBefore(registrationsList, regForm.nextSibling);

  // Formular Submit Handler
  regForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {
      // Verwende die globalen Firebase-Funktionen
      const docRef = await window.firestore.addDoc(
        window.firestore.collection(window.db, "registrations"),
        {
          name: name,
          email: email,
          timestamp: window.firestore.serverTimestamp(),
        }
      );

      regForm.reset();
      alert("Registration erfolgreich!");
      loadRegistrations();
    } catch (error) {
      console.error("Error adding registration: ", error);
      alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  });

  async function loadRegistrations() {
    const registrationsList = document.getElementById("registrationsList");
    registrationsList.innerHTML = "<h3>Registrierte Teilnehmer:</h3>";

    try {
      const q = window.firestore.query(
        window.firestore.collection(window.db, "registrations"),
        window.firestore.orderBy("timestamp", "desc")
      );

      const querySnapshot = await window.firestore.getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = doc.data();

        console.log("Das kommt zurück: ");
        console.log(data);

        const div = document.createElement("div");
        div.className = "registration-entry";
        div.innerHTML = `
          <p><strong>${data.name}</strong></p>
        `;
        registrationsList.appendChild(div);
      });
    } catch (error) {
      console.error("Error loading registrations: ", error);
      registrationsList.innerHTML +=
        "<p>Fehler beim Laden der Registrierungen.</p>";
    }
  }

  loadRegistrations();
});
