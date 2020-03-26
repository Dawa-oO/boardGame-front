<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <!-- Team Member 1 -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-0 shadow">
            <img :src="row1.images_url[0].image_url" class="card-img-top image" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title mb-0">{{row1.label}}</h5>
            </div>
          </div>
        </div>
        <!-- Team Member 2 -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-0 shadow">
            <img :src="row2.images_url[0].image_url" class="card-img-top image" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title mb-0">{{row2.label}}</h5>
            </div>
          </div>
        </div>
        <!-- Team Member 2 -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-0 shadow to-bottom full-height">
            <div class="card-body text-center to-inherit">
              <h1 class="card-title mb-0">{{row3.label2}}</h1>
            </div>
            <div class="card-body text-center to-bottom">
              <h5 class="card-title mb-0">{{row3.label1}}</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <!-- Team Member 1 -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-0 shadow">
            <img :src="row4.images_url[0].image_url" class="card-img-top image" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title mb-0">{{row4.label}}</h5>
            </div>
          </div>
        </div>
        <!-- Team Member 2 -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-0 shadow">
            <img :src="row4.images_url[1].image_url" class="card-img-top image" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title mb-0">{{row4.label}}</h5>
            </div>
          </div>
        </div>
        <!-- Team Member 3 -->
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="card border-0 shadow">
            <img :src="row4.images_url[2].image_url" class="card-img-top image" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title mb-0">{{row4.label}}</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  export default {
    name: 'Home',
    data() {
      return {
        row1 : {
          label: "",
          images_url: [{id: 0, image_url: ""}]
        },
        row2: {
          label: "",
          images_url: [{id: 0, image_url: ""}]
        },
        row3 : {
          label1 : "",
          label2 : 0
        },
        row4: {
          label: "",
          images_url: [{id: 0, image_url: ""}, {id: 1, image_url: ""}, {id: 2, image_url: ""}]
        }
      }
    },
    created() {
      // Get TOP game
      axios.get('http://localhost:1991/games/topGame')
              .then(res => {
                console.log(res);
                this.row1.label = "Top jeu";
                this.row1.images_url =
                        [{
                          id: 1,
                          image_url: `http://localhost:1991/images/games/${res.data.id}.jpg`
                        }];
              })
              .catch(err => console.log(err));
      // Get TOP player
      axios.get('http://localhost:1991/players/topPlayer')
              .then(res => {
                console.log(res);
                this.row2.label = "Top joueur";
                this.row2.images_url =
                        [{
                          id: 1,
                          image_url: `http://localhost:1991/images/players/${res.data.id}.jpg`
                        }];
              })
              .catch(err => console.log(err));
      // Get total game played
      axios.get('http://localhost:1991/plays/total')
              .then(res => {
                console.log(res);
                this.row3.label1 = "Total parties jouées";
                this.row3.label2 = res.data;
              })
              .catch(err => console.log(err));
      // Get last three played games
      axios.get('http://localhost:1991/games/lastThree')
              .then(res => {
                // TODO deal when only one game is returned (i.e. it was played 3 times the last time)
                console.log(res);
                this.row4.label = "Derniers jeux joués";
                this.row4.images_url  =
                        [{id: 1,image_url: `http://localhost:1991/images/games/${res.data[0].id}.jpg`},
                          {id: 2, image_url: `http://localhost:1991/images/games/${res.data[1].id}.jpg`},
                          {id: 3, image_url: `http://localhost:1991/images/games/${res.data[2].id}.jpg`}];
              })
              .catch(err => console.log(err));
    }
  }
</script>

<style scoped>
  .home {
    text-align: left;
    margin-top: 5%;
  }
  .image {
    object-fit: contain;
    width: 300px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
  .to-inherit {
    height: inherit;
  }
  .full-height {
    height: 100%;
  }
  .full-height h1 {
    margin-top: 40%;
  }
  .card {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  }
</style>
