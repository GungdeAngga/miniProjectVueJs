<template>
  <div>
    <b-nav pills align="right">
      <b-nav-item active>Support</b-nav-item>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Profil name"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item>Change password</b-dropdown-item>
        <b-dropdown-item>Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</template>