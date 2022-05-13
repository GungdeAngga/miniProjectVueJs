<template>
  <v-app class="topupPage">
<div>
    <v-app-bar
      color="#4E45CE"
      dense
      dark
      style="height: 137px;"
    >
  <div class="buttonBack">
    <v-btn text
    router-link to="/">
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
            router-link to="/login">
              Log Out
            </v-btn>
          </div>
    </v-app-bar>
</div>



<div class="place">
  <div class="internalPage">
    <div class="jmlhUang">
      <span class="textTopup">Topup</span> <br>
      <label style="font-size:20px">Rp </label>
      <input type="tel" id="topup" name="topup">      
      <span style="margin-left:25px">          
        <v-btn depressed large
          dark color="#4E45CE"
          width="185px">
            Top Up
          </v-btn></span>
    </div>

<div class="titlePage"><div><span class="txPage">Top up</span></div></div>

        <div class="buttonPlace">
          <div class="buttonPayment">
              <v-btn depressed large
              dark color="#4E45CE"
              width="280px"
              height="80px">
                Rp.10.000
              </v-btn>

              <v-btn depressed large
              dark color="#4E45CE"
              width="280px"
              height="80px">
                Rp.20.000
              </v-btn>

          </div>
          <br>
          <div class="buttonPayment">
              <v-btn depressed large
              dark color="#4E45CE"
              width="280px"
              height="80px">
                Rp.50.000
              </v-btn>

              <v-btn depressed large
              dark color="#4E45CE"
              width="280px"
              height="80px">
                Rp.100.000
              </v-btn>
          </div>
          <br>
          <div class="buttonPayment">
              <v-btn depressed large
              dark color="#4E45CE"
              width="280px"
              height="80px">
                Rp.150.000
              </v-btn>

              <v-btn depressed large
              dark color="#4E45CE"
              width="280px"
              height="80px">
                Rp.200.000
              </v-btn>
          </div>
        </div>
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
              security
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
    name: "topupPage",
    data: () => ({
    }),
}
</script>

<style>

.titlePage{
    display: flex;
    justify-content: center;
    color: white;
    margin-top: -20px;
    margin-bottom: 10px;
}

.txPage{
    font-size: 35px;
}

.buttonPlace{
  width: 600px;
}

.buttonPayment{
  display: flex;
  column-count: 2;
  column-gap: 35px;
}

.textTopup{
  color: white;
  font-size: 20px;
}

</style>