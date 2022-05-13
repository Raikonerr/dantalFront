<template>
    <div>
        <NavBar />
    
  <div class="">
    <section id="hero">
    <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

      
        <div class="welcome">
          <div class="welcome-text">
            <h2>Welcome to <span>Smile</span></h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
            
          </div>
          <div class="welcome-img">
            <img src="../assets/imghome.png" alt="">
          </div>
        </div>

        
        

        
        <div class="carousel-item" style="background-image: url(assets/img/slide/slide-3.jpg)">
          <div class="container">
            <h2>Sequi ea ut et est quaerat</h2>
            <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.</p>
           
          </div>
        </div>

      </div>

      <a class="carousel-control-prev"  role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next"  role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>
  </section>
    <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex  mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="gold" class="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
</svg>
              <h4 class="title">Dental Care</h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex  mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="gold" class="bi bi-headphones" viewBox="0 0 16 16">
  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
</svg></div>
              <h4 class="title">Sed ut perspiciatis</h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="gold" class="bi bi-hospital" viewBox="0 0 16 16">
  <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/>
  <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/>
</svg></div>
              <h4 class="title">Magni Dolores</h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="gold" class="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475ZM.879 8C-2.426 1.68 4.41-2 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z"/>
</svg></div>
              <h4 class="title">Nemo Enim</h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <theFooter/>
  </div></div>
</template>

<script>
// @ is an alias to /src
import theFooter from '../components/theFooter.vue';
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'HomeView',
  components: {
    theFooter,
    NavBar
   
  },
  data() {
    return {
      client_name:"",
      
     
    }
  },
  mounted() {
        // let client = localStorage.getItem("client-info");
        // if (!client) {
        //     this.redirect({
        //         val: 'signup'
        //     });
        // } else {
        //     this.client_name = JSON.parse(client).name;
        // }

    },
}
</script>

<style>
#hero{
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
 
}
.welcome {
  width:100vw;
  height:500px;
  display:flex;
  flex-direction: row;
  justify-content: space-around;

}
.welcome-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:40%;
  padding: 2rem;
}
.welcome-img {
  width: 40%;
  padding: 2rem;
}
.welcome-img img {
  width: 100%;
  
}
</style>
