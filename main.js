var root = new Vue({

el: `#root`,

//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

data:{
    message: ``
    Image: `https://picsum.photos/200` 
},

methods: {
    click: function (){

       return  this.message = `text-primary`

    }
}

})