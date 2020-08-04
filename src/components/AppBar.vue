<template>
  <div>
    <v-app-bar
      app
      color="grey darken-3"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Poke~App</v-toolbar-title>
      <img class="nav__img" src="https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/pokeball-icon.png?alt=media&token=7d74806d-83a1-4ead-8eb4-fb2ffe14ab76" alt="">
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >

          <v-list-item>
            <v-btn
              text
              @click="logout"
            >
              <span class="mr-1">{{ !!currentUser ? 'Cerrar Sesión' : 'Iniciar Sesión' }}</span>
              <v-icon>mdi-lock</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/pokedex"
            >
              <span class="mr-1">Pokedex</span>
              <v-icon>mdi-star</v-icon> 
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/home"
            >
              <span class="mr-1">Home</span>
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/pokebolas-icons.png?alt=media&token=ac61c675-cc3e-457f-818e-2695b51fa647"></v-img>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    ...mapActions(['setCurrentUser']),
    logout() {
      Firebase.auth().signOut().then(() => {
        this.setCurrentUser(this.user)
        this.$router.push('/login')
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }  
}
</script>

<style>
.nav__img {
  width: 2em !important;
}
  
</style>