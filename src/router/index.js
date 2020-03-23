import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import Games from '../views/Games.vue'
import CreatePlay from '../views/CreatePlay.vue'
import CreatePlayer from '../views/CreatePlayer.vue'
import CreateGame from '../views/CreateGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/players',
    name: 'Joueurs',
    component: Players
  },
  {
    path: '/games',
    name: 'Jeux',
    component: Games
  },
  {
    path: '/createPlay',
    name: 'Créer une partie',
    component: CreatePlay
  },
  {
    path: '/createPlayer',
    name: 'Créer un joueur',
    component: CreatePlayer
  },
  {
    path: '/createGame',
    name: 'Créer un jeu',
    component: CreateGame
  }
]

const router = new VueRouter({
  routes
})

export default router
