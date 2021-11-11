<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-btn
            icon
            rounded
            @click="$vuetify.goTo('#home')"
            >
              <img src="@/assets/img/logo.png" alt="Logo"/>
            </v-btn>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Username</v-list-item-title>
            <v-list-item-subtitle>#User001</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/img/logo.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />

      <div v-else>
        <v-btn rounded outlined text @click="$vuetify.goTo('#home')">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#about')">
          <span class="mr-2">About us</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#shop')">
          <span class="mr-2">Shop</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contact us</span>
        </v-btn>
      </div>

      <div class="search">
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
        <v-text-field
          v-model="message2"
          rounded
          label="Search"
          outlined
          clearable
          dense
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        </v-col>
      </div>

      <v-avatar>
        <img
          src="@/assets/img/Profile.png"
          alt="profile"
        >
      </v-avatar>

    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#home"],
      ["mdi-information-outline", "About us", "#features"],
      ["mdi-store-outline", "Shop", "#download"],
      ["mdi-email-outline", "Contact", "#contact"],
      ["mdi-sign-out-variant", "Log out", "#t"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
