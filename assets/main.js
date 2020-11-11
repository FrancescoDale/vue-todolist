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
        i : '', //assume il valore corrente di todos[i]
    },

    methods : {
        addtodo () {
            // console.log('click!');
            // il testo digitato viene assegnato ad una variabile che viene pushata nell'array todos
            this.todos.push(this.newTodo);
        },
        canceltodo (i) {
            this.$delete(this.todos,i);
        },
    },



} );
