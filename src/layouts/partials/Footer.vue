<template>
  <footer class="text-white body-font">
    <div class="bg-shark-500">
      <div class="container px-5 py-6 mx-auto flex items-center md:flex-row flex-col">
        <g-link
          to="/"
          class="flex title-font font-medium items-center md:justify-start justify-center">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="academic-cap w-6 h-6">
            <path
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <span class="ml-2 text-xl">{{ $static.metadata.siteName }}</span>
        </g-link>
        <div class="text-sm md:ml-6 md:mt-0 mt-4">
          © {{ currentYear }} {{ $static.metadata.siteName }}
        </div>
        <div class="footer-links inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
          <g-link
            to="/pages/sample-page-1"
            class="mr-4">
            Sample Page 1
          </g-link>

          <g-link
            to="/pages/sample-page-2"
            class="mr-4">
            Sample Page 2
          </g-link>

          <g-link to="/credits">
            Credits
          </g-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
