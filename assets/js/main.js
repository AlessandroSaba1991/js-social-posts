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
        autore: "Alessandro",
        foto: "https://images.unsplash.com/photo-1649275598417-71b09aa8c4cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        data: "07-22-2018",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649414292216-2adda02e2557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        likes: 2,
    },
    {
        id: 2,
        autore: "Claudio",
        foto: "https://images.unsplash.com/photo-1649300029438-16c14fad782a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        data: "05-12-2018",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649266627098-cc1bb09778b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 400,
    },
    {
        id: 3,
        autore: "Francesca",
        foto: "https://images.unsplash.com/photo-1648876676540-ed9fac00af05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        data: "03-25-2019",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649390753159-263d6a0b80ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 250,
    },
    {
        id: 4,
        autore: "Sara",
        foto: "https://images.unsplash.com/photo-1648921895125-e0ad16e864a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        data: "06-02-2020",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649021382209-a2d00b9d9f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 30,
    },
    {
        id: 5,
        autore: "Giuseppe",
        foto: "https://images.unsplash.com/photo-1649441558778-392b48d4cb7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        data: "07-01-2018",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?",
        immagine: "https://images.unsplash.com/photo-1649264889763-5cba7bca8335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        likes: 80,
    },
];
//creo un array dove andro ad inserire gli id dei post che hanno preso un like
const like_id = [];

/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */

//selezioni l'elemento della dom dove attaccherò il mio markup
const element_container = document.querySelector(".container");

//ciclo l'array per prendere ogni oggetto
posts.forEach((element) => {
    //creo il markup tramite la funzione
    const card_mark_up = create_mark_up(element);

    //attacco il markup al container
    element_container.insertAdjacentHTML("beforeend", card_mark_up);
});

/**
 * ###Crea una card con il valore delle chiavi di un oggetto
 * @param {string} element l'elemente dell'array di oggetti con cui si vuole creare una card
 * @returns il markup per creare una card
 */
function create_mark_up(element) {
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

/* Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */

//seleziono tutti i like_button della dom
const element_like = document.querySelectorAll(".like_button");

//ciclo l'array ottenuta
element_like.forEach((element, index) => {
    //attacco l'event listener all'elemento
    element.addEventListener("click", function() {
        //cambio il colore del testo dell'elemento
        this.style.color = "blue";
        //incremento il contatore dei likes
        posts[index].likes += 1;
        //seleziono la card relativa
        const element_card = document.getElementById(`${posts[index].id}`);
        //seleziono lo span dove ce il contatore
        const element_span = element_card.querySelector("span");
        //aggiorno il contatore
        element_span.innerHTML = posts[index].likes;
        //controllo che l'id cliccato non sia gia presente nell'array degli id
        if (!like_id.includes(posts[index].id)) {
            //lo pusho
            like_id.push(posts[index].id);
        }
    });
});