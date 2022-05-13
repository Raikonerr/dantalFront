<template>

    <NavBar />
    <BookingContainer />
    <Appointment/>
    
</template>

<script> 
import BookingContainer from '@/components/BookingContainer.vue';
import Appointment from '@/components/Appointment.vue';
import NavBar from '@/components/NavBar.vue';

import {
    mapActions
} from 'vuex'
export default{
    
    components:{
        BookingContainer,
        Appointment,
        NavBar
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
                val: 'signup'
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