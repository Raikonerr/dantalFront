<template>
    <div class="container">
       <form @click.prevent>
           <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Search for an appointement</label>
              <input type="date" class="form-control" v-model="date" id="exampleInputEmail1" aria-describedby="emailHelp">
              <span class="error-feedback text-danger" v-if="v$.date.$error">{{v$.date.$errors[0].$message}}</span>
           </div>
           <button type="submit" @click="getCreneau()" class="btn btn-primary">Submit</button>
       </form>
       
    </div>
    <BookingCont :creneau="listCreneau" />
    
</template>

<script> 
import BookingCont from '@/components/BookingContainer.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import axios from "axios";
import {
    mapActions
} from 'vuex'
export default{
    
    components:{
        BookingCont
    },
    data(){
        return{
            v$:useVuelidate(),
            client_name:"",
            listCreneau:[],
            date:""
        }
    },
    validations(){
        return{
            date:{
                required,
            }
        }
    },
    mounted(){
        let client = localStorage.getItem("client-info");
        if(!client){
            this.redirect({
                val: 'SignUp'
            });
        }else{
            this.client_name = JSON.parse(client).nom;
        }
        
    },
    methods:{
       ...mapActions(['redirect']),
        async getCreneau() {
          this.v$.$validate();
          if(!this.v$.$error){
            let res = await axios.get("http://localhost/dentaire/client/read/"+this.date);
            if (res.status == 200) {
                console.log(res.data)
                this.listCreneau = res.data;
            }else{
              console.log("error")
            }
          }else{
               console.log('this is an error')
          }
        }
    },
}

    
  
 </script>