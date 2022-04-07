<template>
  <nav>
    <NavBar/>
  </nav>
  <router-view/>
</template>

<script>
// import axios from "axios";
import NavBar from './components/NavBar.vue'
export default {
  name: 'App', data(){
    return{
      rdv : [],

    }
  },
  components: {
    NavBar,

    },
    methods :{
    //   fet(){
    //     axios.get("http://localhsot/dentaire/client/fetchRdv")
    //     .then(Response=>{
    //     console.log(Response);
    //     this.categories = Response.data;
    //   }).catch(e=>{
    //     console.log(e);
    //   })

    // },
    // del(id){
    //   axios.get("http://localhsot/dentaire/client/delRdv?id="+id).then(Response=>{
    //     console.log(Response.data);
    //     // this.categories = Response.data;
    //     console.log("http://localhsot/dentaire/client/delRdv?id="+id);
    //     }).catch(e=>{
    //       console.log(e);
    //     })
    //   }

    

    }
  
}
</script>




<style>


</style>
