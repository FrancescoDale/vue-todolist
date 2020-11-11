var app = new Vue ( {
    el : '#root',
    data : {
        todos : [
            'uova',
            'farina',
            'latte',
            'biscotti',
            'prosciutto',
        ],

        // variabile che prende il nuovo eleneto della lista dato dall'utente
        newTodo : '', // valore vuoto

    },

    methods : {
        addtodo () {
            // console.log('click!');
            // il testo digitato viene assegnato ad una variabile che viene pushata nell'array todos

        },

    },



} );
