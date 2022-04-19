/* 
BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Potrebbe tornarvi utile l'utilizzo dell'operatore ternario (un istruzione condizionale mono righa)
*/

/* Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes. */

const posts = [{
        id: 1,
        autore: "Alessandro Saba",
        foto: "",
        data: "07-22-2018",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649414292216-2adda02e2557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        likes: 2,
    },
    {
        id: 2,
        autore: "Claudio Falanga",
        foto: "https://images.unsplash.com/photo-1649300029438-16c14fad782a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        data: "05-12-2018",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649266627098-cc1bb09778b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 400,
    },
    {
        id: 3,
        autore: "Francesca Piras",
        foto: "https://images.unsplash.com/photo-1648876676540-ed9fac00af05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        data: "03-25-2019",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649390753159-263d6a0b80ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 250,
    },
    {
        id: 4,
        autore: "Sara Bettola",
        foto: "",
        data: "06-02-2020",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649021382209-a2d00b9d9f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 30,
    },
    {
        id: 5,
        autore: "Giuseppe Coppi",
        foto: "https://images.unsplash.com/photo-1649441558778-392b48d4cb7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        data: "07-01-2018",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649264889763-5cba7bca8335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 80,
    },
];

//creo un array dove andro ad inserire gli id dei post che hanno preso un like
let like_id = [];

/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */

//selezioni l'elemento della dom dove attaccherò il mio markup
const element_container = document.querySelector(".container");

//ciclo l'array per prendere ogni oggetto
posts.forEach((element) => {
    //cambio la data in formato italiano
    element.data = date_from_us_to_ita(element);

    //creo vabile per il mark up che sarà diverso a seconda della condizione
    let card_mark_up;

    //controllo che la chiave foto di ogni elemento sia vuota
    if (element.foto === "") {
        //assegno alla chiave foto il valore ottenuto dalla funzione che mi restituisce le iniziali del nome
        element.foto = fallback_photo(element);

        //creo il markup senza foto tramite la funzione
        card_mark_up = create_mark_up_nofoto(element);
    } else {
        //altrimenti se ha la foto creo il markup normale
        card_mark_up = create_mark_up_foto(element);
    }
    //attacco il markup al container
    element_container.insertAdjacentHTML("beforeend", card_mark_up);
});

/* Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */

//seleziono tutti i like_button della dom
const element_like = document.querySelectorAll(".like_button");

//ciclo l'array ottenuta
element_like.forEach((element, index) => {

    //attacco l'event listener all'elemento
    element.addEventListener("click", function() {
        //controllo se l'id del post è presente nella lista
        if (!like_id.includes(posts[index].id)) {
            //imposto un colore al testo dell'elemento
            this.style.color = "blue";

            //cambio il testo dell'elemento
            this.innerHTML = '<i class="fa-solid fa-thumbs-down"></i> Non mi piace più';

            //aggiungo il valore 1 ai like relativi
            posts[index].likes++;

            //lo pusho nell'array
            like_id.push(posts[index].id)

            //se è già stato cliccato
        } else {
            //rimetto il colore nero
            this.style.color = "black";

            //imposto il testo originale
            this.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Mi piace';

            //decremento il valore dei like
            posts[index].likes--;

            //aggiorno la lista dei like filtrando quello già schiacciato
            like_id = like_id.filter(element => element !== posts[index].id)
        }
        //mi seleziono la relativa card (con querySelector mi dava errore se selezionavo l'id quindo ho dovuto spezzettare)
        const element_card = document.getElementById(`${posts[index].id}`);

        //seleziono lo span dove ci sono i like
        const element_span = element_card.querySelector("span");

        //aggiorno i like
        element_span.innerHTML = posts[index].likes;

    });
});

/**
 * ###Crea una card con il valore delle chiavi di un oggetto
 * @param {string} element l'elemente dell'array di oggetti con cui si vuole creare una card
 * @returns il markup per creare una card
 */
function create_mark_up_foto(element) {
    const mark_up = `
    <div id="${element.id}" class="card">
        <div class="card_header">
            <div class="img_header">
                <img src="${element.foto}" alt="">
            </div>
            <!-- /.foto_header -->
            <div class="text_header">
                <h3>${element.autore}</h3>
                <p>${element.data}</p>
            </div>
            <!-- /.text_header -->
        </div>
        <!-- /.card_header -->
        <div class="card_body">
            <div class="text_body">${element.testo}</div>
            <!-- /.text_body -->
            <div class="img_body">
                <img src="${element.immagine}" alt="">
            </div>
            <!-- /.img_body -->
        </div>
        <!-- /.card_body -->
        <div class="card_footer">
            <div class="like_button"><i class="fa-solid fa-thumbs-up"></i> Mi piace</div>
            <!-- /.like_button -->
            <div class="counter_like">Piace a <span>${element.likes}</span> persone</div>
            <!-- /.counter_like -->
        </div>
        <!-- /.card_footer -->
    </div>
    `;
    return mark_up;
}

/**
 * ###Crea una card con il valore delle chiavi di un oggetto
 * @param {string} element l'elemente dell'array di oggetti con cui si vuole creare una card
 * @returns il markup per creare una card
 */
function create_mark_up_nofoto(element) {
    const mark_up = `
    <div id="${element.id}" class="card">
        <div class="card_header">
            <div class="img_header">
                ${element.foto}
            </div>
            <!-- /.foto_header -->
            <div class="text_header">
                <h3>${element.autore}</h3>
                <p>${element.data}</p>
            </div>
            <!-- /.text_header -->
        </div>
        <!-- /.card_header -->
        <div class="card_body">
            <div class="text_body">${element.testo}</div>
            <!-- /.text_body -->
            <div class="img_body">
                <img src="${element.immagine}" alt="">
            </div>
            <!-- /.img_body -->
        </div>
        <!-- /.card_body -->
        <div class="card_footer">
            <div class="like_button"><i class="fa-solid fa-thumbs-up"></i> Mi piace</div>
            <!-- /.like_button -->
            <div class="counter_like">Piace a <span>${element.likes}</span> persone</div>
            <!-- /.counter_like -->
        </div>
        <!-- /.card_footer -->
    </div>
    `;
    return mark_up;
}

/**
 * ###Prende un elemento e restituisce le iniziali del nome + cognome
 * @param {string} element inserire l'elemento da cui prendere i dati
 * @returns Le iniziali
 */
function fallback_photo(element) {
    //divido la stringa dove ci sono gli spazi
    const autore_split = element.autore.split(" ");
    //dichiaro una variabile dove inserirò le iniziali
    let iniziali = "";
    //ciclo l'array ottenuta
    autore_split.forEach((element) => {
        //aggiungo ad iniziali la lettera dell'elemento in posizione zero
        iniziali += element.charAt(0);
    });
    //ritorno le iniziali
    return iniziali;
}

/**
 * ###Converte il valore data formato americano di un oggetto in formato italiano
 * @param {string} element inserisci un elemento che abbia un valora data in versione americana
 * @returns data in versione ita
 */
function date_from_us_to_ita(element) {
    //prendo l'elemento data
    const { data } = element;
    //lo divido 
    const data_split = data.split("-");
    //assegno alla variabile il giorno
    const day = data_split[1];
    //assegno alla variabile il mese
    const month = data_split[0];
    //cancello in posizione 0 l'elemento e aggiungo day
    data_split.splice(0, 1, day);
    //cancello in posizione 1 l'elemento e aggiungo month
    data_split.splice(1, 1, month);
    //creo una variabile dall'array sistemata aggiungengo /
    const data_ita = data_split.join("/");
    //ritorno la data in formato italiano
    return data_ita;
}