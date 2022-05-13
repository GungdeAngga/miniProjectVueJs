<template>
   <v-app class="registerPage">
    <div>
        <v-app-bar
          color="#4E45CE"
          padless
          dark
          style="height: 137px;"
        >
          <div class="header">
            <span class="headerTitle"><strong>Corsair</strong></span>
          </div>
        </v-app-bar>
    </div>
<!--login register-->
<div class="place">
  <div class="internalPage">
    <div class="loginInput">
      <div class="loginForm">
        <label for="fname">Username</label><br>
        <input type="text" id="username" name="username" color="#C4C4C4"><br><br>
        <label for="pwd">Password</label><br>
        <input type="password" id="pwd" name="pwd" minlength="8"><br><br>
        <label for="pwd">Re-Password</label><br>
        <input type="password" id="pwd" name="pwd" minlength="8"><br><br>
        <v-btn depressed large
        dark color="#4E45CE"
        width="185px"
        router-link to="/login">
          Register
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
    name: "registerPage",
    data: () => ({
    }),
}
</script>

<style>

input {
  width: 300px;
  height:35px;
}

</style>