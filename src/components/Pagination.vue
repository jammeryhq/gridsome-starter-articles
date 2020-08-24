<template>
  <div>
    <nav class="relative z-0 inline-flex shadow-sm text-sm leading-5 font-medium">
      <g-link
        v-if="!isFirstPage(currentPage, totalPages)"
        :to="previousPage(currentPage,totalPages)"
        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 hover:text-smalt-blue-500 focus:outline-none"
        aria-label="Previous">
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
      </g-link>
      <g-link
        v-for="page in pages"
        :key="page.name"
        :to="page.link"
        :class="{
          'bg-gray-200 text-gray-700' : page.isDisabled,
          'text-gray-600 hover:bg-gray-100' : !page.isDisabled,
          'rounded-l-md' : isFirstPage(currentPage, totalPages) && page.name === 1,
          'rounded-r-md' : isLastPage(currentPage, totalPages) && page.name === totalPages
        }"
        class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium hover:text-smalt-blue-500 focus:outline-none">
        {{ page.name }}
      </g-link>

      <g-link
        v-if="!isLastPage(currentPage, totalPages)"
        :to="nextPage(currentPage,totalPages)"
        class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 hover:text-smalt-blue-500 focus:outline-none"
        aria-label="Next">
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd" />
        </svg>
      </g-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    baseUrl: {
      type: String,
      default: '/'
    },
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    startPage () {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1;
      }
      return this.currentPage - 1;
    },
    pages () {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}/` : `${this.baseUrl}/${i}`
        });
      }
      return range;
    }
  },
  methods: {
    isFirstPage (currentPage, totalPages) {
      return currentPage === 1;
    },
    isLastPage (currentPage, totalPages) {
      return currentPage === totalPages;
    },
    isCurrentPage (currentPage, pageElement) {
      return currentPage === pageElement;
    },
    nextPage (currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`;
    },
    previousPage (currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`;
    }
  }
};
</script>
