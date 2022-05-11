<template>

  <v-app class="loginPage">
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

    </v-app-bar>
</div>


<div style="background-color:#2C2D30; height:100%; ">
  <div class="login">

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
    name: "loginPage",
    data: () => ({
    }),
}
</script>

<style>

.login{
  background: #424242;
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
