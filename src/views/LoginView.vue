<template>
  <NavBar />
  <div class="login">
    
        <div class="d-flex align-items-center justify-content-center mb-5 mt-5">
    <div class="d-flex flex-column justify-content-between">
       <form @click.prevent>
        <div class="card two bg-white px-5 py-4 mb-3">
           
            <div class="form-group"><label class="form-control-placeholder" for="mail">Please put your unique id</label><input type="text" class="form-control" id="mail" v-model="state.idC" required>
              <span class="error-feedback text-danger text-center" ></span>
            </div>
           
           
            <button  type ="submit" @click="login()" class="btn btn-warning btn-block btn-lg mt-3 mb-2"> <span>Login<i class="fas fa-long-arrow-alt-right ml-2"></i></span></button>
        </div>
       </form>
    </div>
</div>

  </div>
  <!-- <thefooter/> -->
</template>



<script>
import { mapActions } from "vuex";
import axios from "axios";
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import NavBar from '@/components/NavBar.vue';
import { reactive,computed } from 'vue';
export default {
    name: "LoginView",
    //composition API
    setup(){
      const state = reactive({
        idC:"",
      });
      // validations
      const rules = computed(()=>{
        return{
          idC:{required},
        };
      });
      const v$=useVuelidate(rules,state);
      return {
        state,v$
      }
    },
    data(){
        return{
          idC:"",
        }
    },
    components:{
        NavBar,
    },
    methods:{
        ...mapActions(['redirect']),
        async login(){
          this.v$.$validate();
          if(!this.v$.$error){
            var form=new FormData();
            form.append('idC', this.state.idC);
            let result=await axios({
              method:"POST",
              url:'http://localhost/dentaire/client/signin',
              data:form,
              headers:{"Content-Type":"multipart/form-data"},
            })
            if(result.data.message=="Bienvenue"){
              alert("Login successfully")
              var object={};
              form.forEach((value,key)=> object[key]=value);
              localStorage.setItem("client-info",JSON.stringify(object));
              
              this.redirect({val:'home'})
            }else{

              this.error_login="Client not found"
            }
          }else{
            console.log("error");
          }
        }
    }
}
</script>

<style>
</style>