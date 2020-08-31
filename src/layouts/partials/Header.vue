<template>
  <header class="bg-shark-500 text-white body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-row items-center">
      <g-link
        to="/"
        class="flex title-font font-medium items-center">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="academic-cap w-6 h-6">
          <path
            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
        <span class="ml-2 text-xl">{{ $static.metadata.siteName }}</span>
      </g-link>

      <nav class="header-links ml-auto flex flex-wrap items-center text-xl justify-center">
        <g-link
          to="/"
          class="mr-5 hidden md:block"
          exact>
          Home
        </g-link>
        <g-link
          to="/articles"
          class="mr-5 hidden md:block"
          exact>
          Articles
        </g-link>
        <g-link
          to="/resources"
          class="mr-5 hidden md:block"
          exact>
          Resources
        </g-link>
        <g-link
          to="/news"
          class="mr-5 hidden md:block"
          exact>
          News
        </g-link>
        <g-link
          to="/pages/contribute"
          class="mr-5 hidden md:block"
          exact>
          Contribute
        </g-link>

        <a
          href="#"
          type="button"
          aria-label="Open Navigation"
          title="Open Navigation"
          class="block md:hidden mr-5 focus:outline-none"
          @click.prevent="showResponsiveMenu()">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="menu w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>

        <g-link to="/search">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="search w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showResponsiveMenu () {
      this.$emit('openResponsiveMenu');
    }
  }
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
