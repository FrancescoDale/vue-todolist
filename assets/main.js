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
        // i : '', //assume il valore corrente di todos[i]
        // k : '',
    },

    methods : {
        addtodo () {
            // console.log('click!');
            // il testo digitato viene assegnato ad una variabile che viene pushata nell'array todos
            this.todos.push(this.newTodo);
        },
        canceltodo (index) {
            // this.$delete(this.todos,index);
            this.todos.splice(index,1);
        },

        //creo una funzione che prende come parametro il tasto premuto
        enterKey () {
            // al verificarsi della condizione inserisce newTodo nell'array todos
            this.addtodo();
        },
    },



} );
