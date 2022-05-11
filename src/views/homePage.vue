<template>

  <v-app class="homePage">
    <div>
        <v-app-bar
          color="#4E45CE"
          padless
          dark
          style="height: 137px;"
        >
          <div class="header">
            <span class="headerTitle"><strong>Corsair</strong></span>

            <v-spacer></v-spacer>

            <v-btn text>
              support
            </v-btn>

            <v-btn text>
              angga aditya
            </v-btn>
          </div>
        </v-app-bar>
    </div>



<div class="place">
  <div class="internalPage">
    <div class="jmlhUang">
      <span class="text">Account Balance</span><br>
      <span class="balance">Rp 10.0000.000</span>
       <!--fungsiHomeBranches--> 

          <v-btn depressed large
          dark color="#4E45CE"
          width="185px">
            Top Up
          </v-btn>
        
    </div>
          
          <div class="threeButton">
              <v-btn depressed large
              dark color="#4E45CE"
              width="185px">
                send
              </v-btn>

              <v-btn depressed large
              dark color="#4E45CE"
              width="185px"
              router-link to="/pulsa">
                pulsa
              </v-btn>

              <v-btn depressed large
              dark color="#4E45CE"
              width="185px">
                withdraw
              </v-btn>
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
        style="height:115px" 
      >
        <v-card-title class="#110E0E">
          <div class="footerTitle">
            <strong>Corsair</strong>

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
    name: "homePage",
    data: () => ({
    }),
}
</script>

<style>

.headerTitle{
  font-size: 40px;
}

.header{
  width: 1000px;
  display: flex;
  margin: auto;
}

.place{
  background-color:#2C2D30; 
  height:100%;
  display: flex;
}

.internalPage{
  margin: 10px auto;
}

.jmlhUang{
  background: #424242;
  margin: 30px auto;
  padding: 30px ;
  width: 600px;
  height: 130px;
}

.threeButton{
  display: flex;
  column-count: 3;
  column-gap: 22px;
}

.text{
  color: white;
  font-size: 15px;
}

.balance{
  color: white;
  font-size: 35px;
}

.footer{
  position: absolute; 
  bottom:0px; 
  width:100%;
}

.footerTitle{
  width: 600px;
  display: flex;
  margin: 30px auto;
}

</style>
