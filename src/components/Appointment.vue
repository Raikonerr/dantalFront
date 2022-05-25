<template>
<div class="container">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">Subject of Appointment</th>
                <th scope="col-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="a in appointment" :key="a.id">
                <td>{{ a.date }}</td>
                <td>{{ a.debut }}</td>
                <td>{{ a.fin }}</td>
                <td>{{ a.sujet_rdv }}</td>
                <td>
                  <button type="button" class="btn btn-outline-danger pr-5" @click="delet(a)">Delete</button>
                  <button type="button" class="btn btn-outline-warning ml-5"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="passingData(a)">Update</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Add Appointment</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form @click.prevent>
                                            <div class="mb-1">
                                                <label for="exampleInputEmail1" class="form-label">Subject of Appointment</label>
                                                <input type="text" class="form-control"   v-model="sujet_rdv" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">Close</button>
                                        <button type="button" @click="updated()"  data-bs-dismiss="modal" class="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
</div>
</template>

<script>
import axios from "axios"
import {
    mapActions
} from 'vuex';
export default {
    name: "AppointmentV",
    data() {
        return {
            appointment: [],
            idC: "",
            idCr: "",
            sujet_rdv: "",
            date: "",
        }
    },
    async mounted() {
        let client = localStorage.getItem("client-info");
        if (!client) {
            this.redirect({
                val: 'signup'
            });
        } else {
            this.idC = JSON.parse(client).idC;
            console.log(this.idC)
        }
       this.getAppointment();
        
    },
    methods: {
        ...mapActions(['redirect']),
        passingData(a) {
            this.idR = a.idR;
            this.sujet_rdv = a.sujet_rdv;
            this.date = a.date;
        },
        async getAppointment() {
            let res = await axios.get("http://localhost/dentaire/client/getRdv/" + this.idC);
        if (res.status == 200) {
            this.appointment = res.data.message;
            console.log("data"+this.appointment)
        } else {
            console.log("error")
        }        },
        async delet(a) {
            console.log(a);
            
            let res = await axios.get("http://localhost/dentaire/client/delRdv/" + a.idR );
            
            if (res.status == 200) {
                
                alert("appointment deleted successfully");
                     this.getAppointment();

                // this.redirect({
                //     name: 'booking'
                // });
            } else {
                console.log("error")
            }

    },

    async updated() {
        
        let res = await axios.post("http://localhost/dentaire/client/updateRdv/" + this.idR,
            {
                sujet_rdv: this.sujet_rdv,
                date: this.date,
                 
                
            });
            console.log(res);
           
           
        
        if (res.status == 200) {
            alert("appointment updated successfully");
            this.getAppointment();
        } else {
            console.log("error")
        }
    },
    
    
}
    }
</script>

<style>

</style>
