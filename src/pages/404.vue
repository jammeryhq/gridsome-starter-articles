<template>
  <div
    class="flex h-screen items-center">
    <div class="container mx-auto">
      <div class="error text-center">
        <h1 class="mb-4 h-56 headline text-smalt-blue-500">
          404
        </h1>
        <p class="text-6xl text-gray-700">
          Page not found!
        </p>

        <g-link
          class=" bg-smalt-blue-500 rounded p-4 text-white hover:bg-smalt-blue-400 hover:text-gray-900 transition-colors duration-200"
          tabindex="-1"
          role="button"
          aria-disabled="true"
          to="/">
          Back to home
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page not found',
    bodyAttrs: {
      class: 'bg-shark-200'
    }
  }
}
</script>

<style scoped>
.headline {
  font-size: 13.75rem;
}
.message {
  font-size: 10rem;
}
</style>
