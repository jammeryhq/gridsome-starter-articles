<template>
  <div class="layout">
    <HeaderPartial />
    <slot />
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

export default {
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>
