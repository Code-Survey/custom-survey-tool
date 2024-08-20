<template>
    <v-container class="thank-you-page" fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-title class="headline">
              Vielen Dank, dass Sie an der Umfrage teilgenommen haben!
            </v-card-title>
            <v-card-text>
              <p>Wir schätzen Ihre Zeit und Ihr wertvolles Feedback sehr.</p>
              <v-alert 
                v-if="additionalMessage"
                type="info"
                dismissible
              >
                {{ additionalMessage }}
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ThankYouPage',
    props: {
      additionalMessage: {
        type: String,
        default: '',
      }
    },
    methods: {
    }
  }
  </script>
  
  <style scoped>
  .thank-you-page {
    text-align: center;
  }
  
  .v-card-title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .v-card-text p {
    font-size: 18px;
    color: #555;
  }
  </style>
  