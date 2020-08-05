<template>
  <div class="home home__container">
    <!-- Sección Carousel -->
    <v-carousel
      continuous
      cycle
      class="pt-2"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </v-carousel>
      <!-- Cabecera -->
      <header class="text-center header__container pl-2 pr-2">
        <v-img class="mx-auto" width=30em src="https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/pokemon-logo.png?alt=media&token=d2afdcaf-1d89-4c2d-ae72-f043b8a23e31"></v-img>
        <h2>¿Quieres saber la cantidad de Pokémon que hay y sus Características?</h2>
        <h4>Ven y descúbrelo</h4>
      </header>
      <!-- Sección botones -->
      <section class="btn__container">
        <div class="text-center btn__black">
          <v-btn rounded color="black" dark to="/pokedex">🌟 Pokedex 🌟</v-btn>
        </div>
      </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  data () {
    return {
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/poke-1.jpg?alt=media&token=f4b5f01a-4267-4104-96d5-2a04aadcd9d9',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/poke-2.jpg?alt=media&token=78ff16aa-10ce-4087-810b-5188720f4865',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/poke-3.jpg?alt=media&token=d3be42fc-7897-4b31-8044-a0c962c492c0',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/poke-4.jpg?alt=media&token=c132e872-bf93-4a4c-88b0-29aedbad4b31',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/poke-5.jpg?alt=media&token=2fb748b6-5475-4ac8-aead-f9bab670c827',
        }
      ],
    }
  },
  name: 'Home',
  components: {
    Footer
  },
}
</script>

<style lang="scss">
// Sección principal
.home__container {
  background-color: rgb(29, 29, 29)
}
// Header
.header__container {
  background-color: darkred;
  color: #FFF;
  padding-bottom: 3em;
}
// Sección botones
.btn__container {
  margin: 0;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/pokemon-c05f4.appspot.com/o/fondo-1.jpg?alt=media&token=d8924630-13d1-43b0-8154-1de6222bf315) !important;
  background-size: cover !important;
}
.btn__black {
  padding-top: 15em;
  padding-bottom: 15em;
}
</style>
