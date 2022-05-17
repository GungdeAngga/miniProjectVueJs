<template>
  <v-app class="withdrawPage">
<div>
    <v-app-bar
      color="#4E45CE"
      dense
      dark
      style="height: 137px;"
    >
  <div class="buttonBack">
    <v-btn text
    router-link to="/home">
        <v-icon
          dark
          left
        >
          mdi-arrow-left
        </v-icon>
        back
    </v-btn>
  </div>
          <div class="headerBack">

            <span class="headerTitle"><strong>Corsair</strong></span>

            <v-spacer></v-spacer>

            <v-btn text>
              support
            </v-btn>

            <v-btn text
            router-link to="/"
            color="error">
              Log Out
            </v-btn>
          </div>
    </v-app-bar>
</div>



<div class="place">
  <div class="internalPage">
    <div class="jmlhUang">


      <span class="textTopup">Withdraw</span> <br>
      <label style="font-size:20px">Rp </label> <!--ngurangin jumlah uang sesuai yang user mau-->
      <input type="tel" id="withdraw" name="withdraw">      
      <span style="margin-left:25px">          
        <v-btn depressed large
          dark color="#4E45CE"
          width="185px">
            Withdraw
          </v-btn></span>


    </div>

<div class="titlePage"><div><span class="txPage">Withdraw</span></div></div> 

       
      </div>
</div>



<div class="footer">
    <v-footer
    dark
    padless
    >
      <v-card
        class="flex"
        flat
        tile
        style="height:135px" 
      >
        <v-card-title class="#110E0E">
          <div class="footerTitle">
            <span class="textFooterTitle"><strong>Corsair</strong></span>

            <v-spacer></v-spacer>

            <v-btn text>
              support
            </v-btn>    

            <v-btn text>
              about
            </v-btn>
          </div>
        </v-card-title>
      </v-card>
    </v-footer>
</div>
  </v-app>
</template>

<script>
export default {
    name: "withdrawPage",
    data: () => ({
    }),
}
</script>