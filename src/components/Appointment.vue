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
                  <button type="button" class="btn btn-outline-danger">Delete</button>
                  <button type="button" class="btn btn-outline-warning">Update</button>
                </td>
            </tr>
        </tbody>
    </table>
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
        let res = await axios.get("http://localhost/dentaire/client/getRdv/" + this.idC);
        if (res.status == 200) {
            this.appointment = res.data;
            console.log(this.appointment)
        } else {
            console.log("error")
        }
    },
    methods: {
        ...mapActions(['redirect']),
    },

}
</script>

<style>

</style>
