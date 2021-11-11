<template>
  <section id="about">

    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="white--text font-weight-bold display-2">About Us</h1>
              <h1 class="white--text font-weight-light display-1 mb-3">
                our web store
              </h1>
              <v-row>

                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="white--text text-justify">
                    What’s You can do on our website ?<br />
                    You can purchase the games on our website and you will get the steam keys to your email.
                  </p>
                </v-col>

                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="white--text text-justify">
                    What’s Steam Keys ?<br />
                    The steam keys is the code that you can use to purchase the game on platform.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="white--text text-justify">
                    Why you should use our website to buy the games?<br />
                    Our website will help you find and purchase the game that you want in low price.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  /* background: linear-gradient(180deg, #DDCEFF 0%, #F8DFF0 100%); */

  background-image: url("~@/assets/img/bgAbout.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 680px;
}
</style>
