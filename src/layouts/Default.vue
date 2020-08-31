<template>
  <div class="layout">
    <ResponsiveMenuPartial :show-responsive-menu="showResponsiveMenu" @closeResponsiveMenu="closeResponsiveMenu" />
    <HeaderPartial @openResponsiveMenu="openResponsiveMenu" />
    <div class="min-h-screen">
      <slot />
    </div>
    <FooterPartial />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from '~/layouts/partials/Header'
import FooterPartial from '~/layouts/partials/Footer'
import ResponsiveMenuPartial from '~/layouts/partials/ResponsiveMenu'

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    ResponsiveMenuPartial
  },
  data: function () {
    return {
      showResponsiveMenu: false
    };
  },
  watch: {
    $route (to, from) {
      this.closeResponsiveMenu();
    }
  },
  methods: {
    openResponsiveMenu () {
      this.showResponsiveMenu = true;
    },
    closeResponsiveMenu () {
      this.showResponsiveMenu = false;
    }
  }
}
</script>
