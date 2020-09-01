<template>
  <div
    v-if="showResponsiveMenu"
    class="fixed top-0 left-0 bg-shark-600 opacity-90 w-full h-screen z-1000 overflow-hidden pt-20">
    <div class="absolute top-0 right-0 text-right text-right mr-6 mt-6 text-white">
      <a
        href="#"
        type="button"
        class="block rounded-full border border-white p-4 hover:bg-white hover:text-black transition-colors duration-150"
        @click.prevent="close">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="x w-6 h-6"><path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" /></svg>
      </a>
    </div>

    <div class="container mx-auto text-2xl text-white">
      <ul class="text-center list-none justify-center">
        <li>
          <g-link
            to="/"
            class="inline-block mb-5"
            exact>
            Home
          </g-link>
        </li><li>
          <g-link
            to="/articles"
            class="inline-block mb-5"
            exact>
            Articles
          </g-link>
        </li><li>
          <g-link
            to="/resources"
            class="inline-block mb-5"
            exact>
            Resources
          </g-link>
        </li><li>
          <g-link
            to="/news"
            class="inline-block mb-5"
            exact>
            News
          </g-link>
        </li><li>
          <g-link
            to="/pages/contribute"
            class="inline-block mb-5"
            exact>
            Contribute
          </g-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showResponsiveMenu: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    close () {
      this.$emit('closeResponsiveMenu');
    }
  }
}
</script>

<style>

</style>
