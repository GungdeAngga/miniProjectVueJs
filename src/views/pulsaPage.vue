<template>
  <v-app class="pulsaPage">
<div>
    <v-app-bar
      color="#4E45CE"
      dense
      dark
      style="height: 137px;"
    >

      <v-toolbar-title>Corsair</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        support
      </v-btn>

      <v-btn text>
        angga aditya
      </v-btn>
    </v-app-bar>
</div>



<div style="background-color:#2C2D30; height:100%; ">

    <div class="jmlhUang">
    <h5>Account Balance</h5>
    <h2>Rp 10.0000.000</h2>
    <div>
      <br>
      <br>
      <p>Pulsa</p>
    </div>
    <!-- note : buat tulisan di footer sama header ke tengah -->
        <div class="threeButton">
            <v-btn depressed large
            dark color="#4E45CE">
              send
            </v-btn>

            <v-btn depressed large
            dark color="#4E45CE">
              pulsa
            </v-btn>

            <v-btn depressed large
            dark color="#4E45CE">
              withdraw
            </v-btn>
            <!-- buat kotak nya sama -->
        </div>
    </div>

</div>



<div style="position:absolute; bottom:0px; width:100%; ">
    <v-footer
    dark
    padless
    >
      <v-card
        class="flex"
        flat
        tile
        style="height:115px" 
      >
        <v-card-title class="#110E0E">
            <strong>Corsair</strong>

            <v-spacer></v-spacer>

          <v-btn text>
            support
          </v-btn>

          <v-btn text>
            security
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
</div>
  </v-app>
</template>

<script>
export default {
    name: "pulsaPage",
    data: () => ({
    }),
}
</script>

<style>

.jmlhUang{
  background: #424242;
  margin: 70px auto;
  padding: 40px;
  width: 600px;
  height: 130px;
}

h5{
  color: white;
}

h2{
  color: white;
}
</style>