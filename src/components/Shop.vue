<template>
  <section id="shop">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            
            <v-sheet
              class="mx-auto my-12"
              max-width="350"
              dark="true"
              color="white"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img
                height="250"
                src="@/assets/img/game1.png"
              ></v-img>
              <v-card-title class="display-0 font-weight-bold mb-4">
                PUBG MOBILE-RUNIC POWER
                
                <v-row
                  align="center"
                  justify="end"
                >
                <v-btn icon>
                  <v-spacer></v-spacer>
                  <v-icon class="">
                    mdi-heart
                  </v-icon>
                </v-btn>
                </v-row>
              </v-card-title>
              <v-card-text>
                <div class="my-1 text-subtitle-1">
                  Tencent Games
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="#615F5F"
                  text
                  @click="Action"
                >
                  Action
                </v-btn>

              <v-row          
                align="center"
                justify="end"
              >
              <div class="mb-1 mr-6 deep-purple--text font-weight-bold">
                6.99$
              </div>
              </v-row>
              </v-card-actions>
            </v-sheet>

          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>




<style scoped>
#shop {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 690px;
}

#shop .container,
#shop .row {
  height: 100%;
}
</style>