<template>
    <div id="test">
        <ul>
            <li v-for="object in objects" @click="object.show = !object.show">
                <h2>{{ object.name }}</h2>
                <h3 v-show="object.show">{{ object.speciality }}</h3>
            </li>
        </ul>
        <button class="btn btn-danger" @click="deletePost">Delete a Post</button>
    </div>
</template>
<script>
export default {
    props: {
      objects: {
        type: Array,
        required: true
      }
    },
    data(){
        return{
        }
    },
    methods: {
      deletePost: function(){
        this.objects.pop();
      }
    }
}
</script>
<style scoped>
#test{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>