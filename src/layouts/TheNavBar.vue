<template>
  <nav class="navbar is-success" aria-label="main navigation" role="navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>
        <a
          ref="closeIcon"
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-expanded="false"
          aria-label="menu"
          data-target="navbarBasicExample"
          role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div ref="mobileMenu" class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active">
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'view-notes' }"
            class="navbar-item"
            active-class="is-active"
          >
            View Notes
          </RouterLink>
          <RouterLink
            :to="{ name: 'view-stats' }"
            class="navbar-item"
            active-class="is-active"
          >
            View Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const closeIcon = ref(null);
const mobileMenu = ref(null);
onClickOutside(
  mobileMenu,
  () => {
    showMobileNav.value = false;
  },
  { ignore: [closeIcon] }
);
const showMobileNav = ref(false);
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
