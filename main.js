var app = new Vue({

el: `#root`,

//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

data:{
    message: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis porro asperiores inventore assumenda, aperiam, non, ullam obcaecati quo ex facere magni deleniti nostrum eos expedita et harum earum. Atque.`,
    image: `https://picsum.photos/200`,
    color: `text-danger`
},
methods: {
    click: function (){

       return  this.color = `text-primary`

    }
},

//template: '<div>{{ message }}</div>'

})

//root.message = 'Hello!'



/* CORREZIONE ALE */

/*
var app = new Vue({

    el: `#app`,
    data: {
        titolo: `Vue cicli`;
        classeDinamica: `text-primary`,
        linkImmagine: `https://picsum.photos/200`
    },
    methods: {

    }


})
*/