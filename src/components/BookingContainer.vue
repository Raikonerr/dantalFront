<template>
    <div class="container mt-3" v-if="creneau.lenght>0">
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
                <tr v-for="(c,index) in creneau" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{c.debut}}</td>
                    <td>{{c.fin}}</td>
                    <td>
                        <div class="container">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleLeModal">Booking</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add New Appointment</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form @click.prevent></form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Confirm</button>
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
export default{
    name:"BookingContainer",
    props:['creneau'],
    async mounted(){
       // await this.getCreneau();
    },
}
</script>

<style scoped>

</style>

