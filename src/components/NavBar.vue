<template>

<!-- Nav Bar -->
<div class="home">
    <nav class="navbar navbar-expand-lg  ">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Web Zone</a> -->
        <img src="../assets/logodentist.jpg" class="" style="width:90px;" alt="">
        <button
          class="navbar-toggler btn-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler "></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-warning link-r" to="/">Home</router-link>
            </li>
            <li class="nav-item" v-if="client">
              <router-link class="nav-link text-warning link-r" to="/booking">Appointement</router-link>
            </li>
             <li class="nav-item" v-if="!client">
                <router-link class="nav-link text-warning link-r" to="/signup" >Signup</router-link>
            </li>
            <li class="nav-item" v-if="!client">
              <router-link class="nav-link text-warning link-r" to="/login" >Login</router-link>
            </li>
            <li class="nav-item" v-if="client">
              <button   class="nav-link  btn-warning" @click="logout()">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>


</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'NavBar',
  components: {
  },
  data() {
    return {
     client: "",
    }
  },
  methods: {
    ...mapActions(["redirect"]),
    clicked(){
      console.log()
    },

    logout(){
      localStorage.clear();
      this.redirect({val: "login"});
      console.log("logout");
       },
   
  },
  mounted() {
    this.client = localStorage.getItem("client-info");
    console.log(this.client);
  },
}
</script>


<style scop>
.link-r{
  font-weight: 500;
  font-size: 1.1rem;
}
a{
  text-decoration: none;
  color: rgb(60, 255, 180);
}
.router-link-active{
  font-weight: bold;
}

</style>