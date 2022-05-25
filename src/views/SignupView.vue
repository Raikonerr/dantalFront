<template>

    <NavBar />
<div class="signup">
   
    <div class="container d-flex justify-content-center">
    <div class="d-flex flex-column justify-content-between">
       <form @click.prevent method="POST" class="form-signin">
        <div class="card two bg-white px-5 py-4 mb-3">
           
            <div class="form-group">
               <label class="form-control-placeholder" for="mail">Email</label>  <input type="email" class="form-control" id="mail" v-model="email" required></div>
            <div class="form-group">
                <label class="form-control-placeholder" for="name">Last name</label> <input type="text" class="form-control" id="nom" v-model="nom"   required></div>
            <div class="form-group">
                <label class="form-control-placeholder" for="name">First name</label> <input type="text" class="form-control" id="prenom" v-model="prenom" required></div>
            <div class="form-group">
               <label class="form-control-placeholder" for="name">age</label>  <input type="number" class="form-control" id="age" v-model="age" required></div>
            <div class="form-group">
                <label class="form-control-placeholder" for="name">birthday</label> <input type="date" class="form-control" id="ddn" v-model="date_de_naissance" required></div>
           
            <button type="submit" @click="register()" class="btn btn-warning btn-block btn-lg mt-1 mb-2"><span>signup<i class="fas fa-long-arrow-alt-right ml-2"></i></span></button>
        </div>
       </form>
    </div>
</div>
<thefooter/>
</div>
</template>

<script>
import { mapActions } from "vuex";
import Thefooter from '../components/theFooter.vue'
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
export default {
    name : "SignUp",
    data(){
        return{
            email:'',
            nom:'',
            prenom:'',
            age:'',
            date_de_naissance:'',
        }
    },
    methods:{
        ...mapActions(["redirect"]),
        async register(){
            var form=new FormData();
            form.append('nom', this.nom);
            form.append('prenom', this.prenom);
            form.append('date_de_naissance', this.date_de_naissance);
            form.append('email', this.email);
            form.append('age', this.age);
            // console.log("hello")
            let res=await axios({
                method:'POST',
                url:'http://localhost/dentaire/client/signup',
                data:form,
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
            if(res.status==200){
                
                var object={};
                 form.forEach((value,key)=> object[key]=value);
                 localStorage.setItem("client-info",JSON.stringify(object));
                this.redirect({val:"login"});
                alert(res.data.message.idC);
            }else{
                console.log("error");
            }
            
         }
    },
    components: {
        Thefooter,
        NavBar,
    },
        
    }
    
    
    
        


</script>

<style scoped>

</style>
