import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa' 
      },
      theme: {
        themes: {
            light: {
                primary: "#119DA4",
                secondary: "#7264F5",
                accent: "3D87E4"
                // background: colors.grey.lighten2, // Not automatically applied
              },
          dark: {
            background: colors.shades.white, // If not using lighten/darken, use base to return hex
          },
        },
      },
});
