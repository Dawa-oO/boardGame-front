<template>
    <div class="cardPlayer col-xl-4 col-md-6 mb-4">
        <div class="card border-0 shadow">
            <img :src="image_url" class="card-img-top image" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title mb-0">{{player.pseudo}}</h5>
                <h6 class="card-title mb-0">{{player.firstName}}</h6>
                <h6 class="card-title mb-0">Parties gagnées : {{nbPlaysWin}}</h6>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        name: 'CardPlayer',
        props: ["player"],
        data() {
            return {
                image_url: `http://localhost:1991/images/players/${this.player.id}.jpg`,
                nbPlaysWin: 0
            }
        },
        created() {
            axios.get(`http://localhost:1991/plays/total/players/${this.player.id}`)
                .then(res => {
                    this.nbPlaysWin = res.data;
                })
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>
    .image {
        object-fit: contain !important;
        width: 300px !important;
        height: 300px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        margin-top: 5% !important;
    }
    .card {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    }
    .col-xl-4 {
        -webkit-box-flex: 0 !important;
        -ms-flex: 0 0 33.333333% !important;
        flex: 0 0 33.333333% !important;
        max-width: 100% !important;
    }
    .col-xl-4, .col-md-6 {
        position: relative !important;
        width: 85% !important;
        min-height: 1px !important;
        padding-right: 15px !important;
        padding-left: 15px !important;
    }
</style>