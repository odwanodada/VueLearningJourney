const app = Vue.createApp({
   // data, functions
  data(){
      return{
          url: 'http://www.thenetninja.co.uk',
          showBooks: true,
          books: [
              {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/pic1.jpg',isFav: true},
              {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/p2.jpeg',isFav: false},
              {title: 'the final empire', author: 'brandon sanderson', img: 'assets/p3.png',isFav: true},
              
          ]
      }
  },
  methods: {
      toggleShowBooks(){
           this.showBooks = ! this.showBooks

      
      //changeTitle(){//(title){
         // this.title = 'Words'
        // this.title = title
      },

      toggleFav(book){
          book.isFav = !book.isFav

      }
      
     
  },
  computed: {
      filteredBooks(){
          return this.books.filter((book) => book.isFav)
      }
  }

})

app.mount('#app')