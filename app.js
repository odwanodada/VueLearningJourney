const app = Vue.createApp({
   // data, functions
  data(){
      return{
          showBooks: true,
          title: 'The Final Empire',
          author: 'Odwa',
          age: 45
      }
  },
  methods: {
      toggleShowBooks(){
           this.showBooks = ! this.showBooks

      
      //changeTitle(){//(title){
         // this.title = 'Words'
        // this.title = title
      },
      handleEvent(a, data){
          console.log(a, a.type)
          if (data){
              console.log(data)
          }
      }
  },

})

app.mount('#app')