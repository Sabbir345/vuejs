<template>
  <div class="container">
       <div>
            
            <app-objects :objects="objects"></app-objects>
            <ul>
              <li v-for="object in objects">{{ object.name }}</li>

            </ul>
            
        </div>
    </div>
</template>

<script>
import PropsData from '@/components/PropsData.vue';
export default {
   name: 'App',
   components: {

        'app-objects': PropsData
    },
    data () {
        return {
          objects: [
              {name: 'Post 1', speciality: 'Description 1', show: false},
              {name: 'Post 2', speciality: 'Description 2', show: false},
              {name: 'Post 3', speciality: 'Description 3', show: false},
              {name: 'Post 4', speciality: 'Description 4', show: false},
              {name: 'Post 5', speciality: 'Description 5', show: false},
              {name: 'Post 6', speciality: 'Description 6', show: false}
          ],
          
        }
    },
   
}
</script>

