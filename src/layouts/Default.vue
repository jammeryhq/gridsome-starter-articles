<template>
  <div class="layout">
    <ResponsiveNavbarPartial />
    <HeaderPartial />
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
import ResponsiveNavbarPartial from '~/layouts/partials/ResponsiveSidebar'

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    ResponsiveNavbarPartial
  }
}
</script>
