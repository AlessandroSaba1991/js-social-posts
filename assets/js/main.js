/* 
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
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
        autore: 'Alessandro',
        foto: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        data: '07-22-2018',
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?',
        immagine: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        likes: 15
    },
    {
        id: 2,
        autore: 'Claudio',
        foto: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        data: '05-12-2018',
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?',
        immagine: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        likes: 15
    },
    {
        id: 3,
        autore: 'Francesca',
        foto: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        data: '03-25-2019',
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?',
        immagine: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        likes: 15
    },
    {
        id: 4,
        autore: 'Sara',
        foto: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        data: '06-02-2020',
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?',
        immagine: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        likes: 15
    },
    {
        id: 5,
        autore: 'Giuseppe',
        foto: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        data: '07-01-2018',
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni accusantium expedita repellendus reprehenderit temporibus aliquid deleniti! Maiores unde exercitationem numquam velit? Ipsam, nam. Voluptates nam, voluptatem reiciendis libero doloremque ducimus velit nemo provident ipsam praesentium. Vitae, quasi, illo quaerat sit optio, provident tempora cupiditate totam asperiores corrupti in quia aut sapiente? At omnis nemo debitis iusto quod accusantium! Doloremque voluptatem quis alias, ipsa amet vitae nulla atque reiciendis dolor, ut distinctio porro quas cum ducimus praesentium perspiciatis aliquam, saepe voluptate. Ad fugiat distinctio odio reiciendis aut molestias dolor, error veniam, ex, quam tempora quibusdam obcaecati? Voluptatibus atque vitae aliquid?',
        immagine: 'https://i.picsum.photos/id/531/300/300.jpg?hmac=9epa0dyTuHprIzEevMgIcyScXC7wFtO0KvUwNh1slyc',
        likes: 15
    }
]