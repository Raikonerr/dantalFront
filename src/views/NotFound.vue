<template>
<NavBar />
    <h1>there s nothing to do here !</h1>
</template>


<style scoped>
h1{
    color:red;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue';

export default{
    components:{
        NavBar
    },
}

</script>

