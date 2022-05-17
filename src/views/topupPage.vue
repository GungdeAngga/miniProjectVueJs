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

<!-- <ApolloMutation
          :mutation="
            (gql) =>
              gql`
                mutation MyMutation($id: Int!, $money: Int!) {
                  tabel_account_balance_by_pk(
                    pk_columns: { id: $id }
                    _set: { money: $money }
                  ) {
                    id
                    name
                  }
                }
              `
          "
          :variables="{ 
            id: money.id
           }"
        >-->

        
      <span class="textTopup">Topup</span> <br>
      <label style="font-size:20px">Rp </label> <!--nambah jumlah uang sesuai yang user mau-->
      <input type="tel" id="topup" name="topup" min="0" v-model="money" @keyup.enter="mutate()">      
      <span style="margin-left:25px">   
        <v-btn depressed large
          dark color="#4E45CE"
          width="185px"
          :disabled="loading" @click="mutate()">
            Top Up
          </v-btn></span>
         <!-- <p v-if="error">An error occurred: {{ error }}</p>
</ApolloMutation>-->

    </div>

<div class="titlePage"><div><span class="txPage">Top up</span></div></div> 
       
        
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