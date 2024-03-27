<script setup lang="ts">
import useMenus from '../hooks/useMenus';

const { menus } = useMenus();
</script>
<template>
  <div class="layout">
    <div class="nav">
      <template v-for="menu in menus" :key="menu">
        <router-link :to="menu.path">{{ menu.name }}</router-link>
      </template>
    </div>

    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  gap: 24px;
}

.nav {
  display: flex;
  flex-direction: column;
}
</style>
