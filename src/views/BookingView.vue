<template>
    
    <BookingContainer />
    <Appointment/>
    
</template>

<script> 
import BookingContainer from '@/components/BookingContainer.vue';
import Appointment from '@/components/Appointment.vue';
import {
    mapActions
} from 'vuex'
export default{
    
    components:{
        BookingContainer,
        Appointment
    },
    data(){
        return{
            client_name:"",
            date:""
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
        
    },
}

    
  
 </script>