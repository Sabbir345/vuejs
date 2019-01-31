<template>
  <div class="container">

      <br>
      <div class="card">
          <h2 v-if="message" class="text-center">I am Mounted</h2>
      </div>
      <br> 

       <h3>Watch Example</h3>

       <input type="text" v-model="search"  class="form-control" style="width: 60%" placeholder="Please write something and check console">

       <br><br>
       <h3>Computed and Created </h3>
       <input type="search" placeholder="Type Something"class="form-control" v-model="searchQuery">
        <ul>
          <li v-for="item in filteredItems">{{ item.title }}</li>
        </ul>
      </div>


  </div>
</template>

<script>

export default {
   name: 'App',
  
  data () {
    return {

          search:'',
          message:false,
          searchQuery: '',
          items: []
      }
  },
  computed: {
      filteredItems: function() {
        var that = this
        return that.items.filter(function(item) {
          return item.title.indexOf(that.searchQuery) !== -1
        })
      }
  },
  created: function() {
      const that = this
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response) {
          that.items = response.data
        })
  },
  watch: {
    search() {
      if (this.search) {
        console.log(this.search);
      }
    }
  },
  mounted(){
    this.message = true;
  }
}
</script>

