// Il nostro "database" dei giocatori
const rosaAvellino = {
    portieri: [
        { nome: "Iannarilli", status: "over" },
        { nome: "Sassi", status: "under" }
    ],
    difensori: [
        { nome: "Simic", status: "over" },
        { nome: "Izzo", status: "over" },
        { nome: "Enrici", status: "over" },
        { nome: "Fontanarosa", status: "under" },
        { nome: "Sala", status: "over" },
        { nome: "Cancellotti", status: "over" }
    ],
    centrocampisti: [
        { nome: "Palmiero", status: "over" },
        { nome: "Palumbo", status: "over" },
        { nome: "Besaggio", status: "over" },
        { nome: "Sounas", status: "over" }
    ],
    attaccanti: [
        { nome: "Russo", status: "bandiera" },
        { nome: "Biasci", status: "over" },
        { nome: "Favilli", status: "over" },
        { nome: "Spadoni", status: "under" }

    ],
    inUscita: [
        { nome: "Manzi", status: "over" },
        { nome: "Cagnano", status: "over" },
        { nome: "Todisco", status: "over" },
        { nome: "Cancellieri", status: "over" },
        { nome: "Marchisano", status: "under" },
        { nome: "Toscano", status: "over" },
        { nome: "De Cristofaro", status: "over" },
        { nome: "Mutanda", status: "under" },
        { nome: "Maisto", status: "under" },
        { nome: "D'Ausilio", status: "over" },
        { nome: "Tribuzzi", status: "over" },
        { nome: "Panico", status: "over" },
        { nome: "Insigne", status: "over" },
        { nome: "Patierno", status: "over" },
        { nome: "Pandolfi", status: "over" }
    ],
    fuoriLista: [],
    inPrestito: [
        // { nome: "Marson", status: "over", infortunato: true },
    ]
};

/**
 * Funzione per generare una singola lista nel DOM
 * @param {string} containerId - L'ID del tag <ul> in HTML
 * @param {string} titolo - Il testo da mostrare nel titolo (es. "PORTIERI")
 * @param {string} titleClass - Classe aggiuntiva per il colore del titolo (vuoto, "blu", o "red")
 * @param {Array} arrayGiocatori - L'array di oggetti contenente i giocatori
 */
function creaListaGiocatori(containerId, titolo, titleClass, arrayGiocatori) {
    const container = document.getElementById(containerId);
    
    // Se la lista giocatori è vuota e non è fuori lista, possiamo anche evitare di disegnarla, 
    // ma in questo caso disegniamo comunque l'intestazione
    if (!container) return;

    // Svuotiamo il contenitore per sicurezza (evita duplicati)
    container.innerHTML = '';

    // 1. Creiamo l'elemento (<li>) del titolo
    const liTitolo = document.createElement("li");
    liTitolo.className = `list-group-item list-title ${titleClass}`;
    liTitolo.textContent = titolo;
    container.appendChild(liTitolo);

    // 2. Cicliamo l'array dei giocatori per creare le singole righe
    arrayGiocatori.forEach(giocatore => {
        const liGiocatore = document.createElement("li");
        liGiocatore.className = "list-group-item";

        // Creiamo lo span con nome e status (over/under/bandiera)
        const spanNome = document.createElement("span");
        spanNome.className = giocatore.status;
        spanNome.textContent = giocatore.nome;
        liGiocatore.appendChild(spanNome);

        // Se il giocatore è infortunato, aggiungiamo il badge
        if (giocatore.infortunato) {
            const spanInfortunato = document.createElement("span");
            spanInfortunato.className = "inf"; 
            liGiocatore.appendChild(spanInfortunato);
        }

        // Inseriamo il giocatore nella lista (<ul>)
        container.appendChild(liGiocatore);
    });
}

// Inizializzazione: appena la pagina si carica, disegniamo tutte le liste
document.addEventListener("DOMContentLoaded", () => {
    creaListaGiocatori("portieri", "PORTIERI", "", rosaAvellino.portieri);
    creaListaGiocatori("difensori", "DIFENSORI", "", rosaAvellino.difensori);
    creaListaGiocatori("centrocampisti", "CENTROCAMPISTI", "", rosaAvellino.centrocampisti);
    creaListaGiocatori("attaccanti", "ATTACCANTI", "", rosaAvellino.attaccanti);
    creaListaGiocatori("in-uscita", "IN USCITA", "red", rosaAvellino.inUscita);
    creaListaGiocatori("fuori-lista", "FUORI LISTA", "red", rosaAvellino.fuoriLista);
    creaListaGiocatori("in-prestito", "IN PRESTITO", "blu", rosaAvellino.inPrestito);
});