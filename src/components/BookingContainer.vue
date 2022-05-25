<template>
    <div class="alert alert-success" role="alert" v-if="success">
        {{ success }}
    </div>
    <div class="alert alert-warning" v-if="error" role="alert">
        {{ error }}
    </div>
    <div class="container">
        <form @click.prevent>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Search for an appointement</label>
                <input type="date" class="form-control" v-model="date" id="exampleInputEmail1">
                <span class="error-feedback text-danger" v-if="v$.date.$error">{{ v$.date.$errors[0].$message }}</span>
            </div>
            <button type="submit" @click="getCreneau()" class="btn btn-primary">Submit</button>
        </form>

    </div>
    <div class="container mt-3" v-if="creneau.length > 0">

        <h1 class="text-center">All creneau availabale</h1>
        <table class="table">
            <thead>
                <tr>

                    <th scope="col">Start</th>
                    <th scope="col">End</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in creneau" :key="c.idCr">
                    <th scope="row">{{ c.idCr + 1 }}</th>
                    <td>{{ c.debut }}</td>
                    <td>{{ c.fin }}</td>
                    <td>
                        <div class="container">
                            <!-- Button trigger modal -->
                            <button type="button" @click="passingData(c)" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                                Rdv
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Add Appointment</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form @click.prevent>
                                                <div class="mb-1">
                                                    <label for="exampleInputEmail1" class="form-label">Subject of
                                                        Appointment</label>
                                                    <input type="text" class="form-control" v-model="sujet_rdv"
                                                        id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" @click="addRdv()" data-bs-dismiss="modal"
                                                class="btn btn-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import axios from "axios"
import useVuelidate from '@vuelidate/core';
import {
    required
} from '@vuelidate/validators';
export default {
    name: "BookingContainer",
    data() {
        return {
            v$: useVuelidate(),
            client_info: [],
            idC: "",
            creneau: [],
            idCr: "",
            sujet_rdv: "",
            date: "",
            min: "",
            success: "",
            error: ""
        }
    },

    validations() {
        return {
            date: {
                required
            },
        }
    },
    async mounted() {
        this.min = new Date().toISOString().slice(0, 10);
        console.log(this.min);
    },
    methods: {
        async getCreneau() {
            this.v$.$validate();
            if (!this.v$.$error) {
                let res = await axios.get("http://localhost/dentaire/client/read/" + this.date);
                if (res.status == 200) {
            
                    console.log(res.data);

                    this.creneau = res.data;
                    //  console.log( this.creneau);
                } else {
                    console.log("error")
                }
            } else {
                console.log('this is an error')
            }
        },
        passingData(c) {
            this.client_info = JSON.parse(localStorage.getItem("client-info"));
            this.idC = this.client_info.idC;
            console.log(this.idC);
            this.sujet_rdv = "";
            this.idCr = c.idCr;
        },
        async addRdv() {
            // let res=await axios.post("http://localhost/dentaire/rdv/addRdv",{
            //     idC:this.idC,
            //     idCr:this.idCr,
            //     sujet_rdv:this.sujet_rdv,
            //     date:this.date
            // });

            var form = new FormData();
            form.append("idC", this.idC);
            form.append("idCr", this.idCr);
            form.append("sujet_rdv", this.sujet_rdv);
            form.append("date", this.date);
            console.log(this.idCr)
            let res = await axios({
                method: 'POST',
                url: 'http://localhost/dentaire/client/addRdv',
                data: form,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status == 200) {
                this.success = "Appointment created successfully";
            } else {
                this.error = "Error on created new Appointment";
            }
        }
    }
}
</script>

<style scoped>
</style>
