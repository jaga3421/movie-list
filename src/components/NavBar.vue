<template>
  <div>
    <v-app-bar elevate-on-scroll scroll-target="#scrolling-2" color="primary">
      <v-toolbar-title class="white--text">
        <div :to="menuItems[0].link">
          <span class="font-weight-bold">Movie</span>
          <span class="font-weight-light">List</span>

        </div>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          v-for="item in menuItems"
          :key="item.id"
        >
          <v-list-item :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    menuItems: [
      {
        id: 0,
        text: "Movies Lookup",
        icon: "mdi-home",
        link: "/",
      },
      {
        id: 2,
        text: "My Wishlist",
        icon: "mdi-clipboard-list",
        link: "/wishlist"
      },
      {
        id: 3,
        text: "About",
        icon: "mdi-account",
        link: "/about",
      },
      {
        id: 4,
        text: "Settings",
        icon: "mdi-cog",
        link: "/settings",
      },
    ],
  }),
};
</script>

<style></style>
