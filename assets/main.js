var app = new Vue ( {
    el : '#root',
    data : {
        todos : [
            'uova',
            'farina',
            'latte',
            'biscotti',
            'prosciutto',
        ]

    },

    methods : {
        prova () {
            console.log('click!');
        },

    },



} );
