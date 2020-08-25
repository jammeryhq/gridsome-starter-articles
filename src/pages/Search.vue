<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <div class="bg-white shadow p-4 flex">
          <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="search w-6 h-6"><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input
            id="search"
            v-model="searchTerm"
            class="w-full rounded p-2 focus:outline-none"
            type="search"
            autocomplete="off"
            placeholder="Search topic or keywords...">
        </div>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div
          v-for="(groupElements, groupName) in searchResults"
          :key="groupName">
          Search results for: {{ groupName }}
          <div class="flex flex-wrap -m-4">
            <RecordCard
              v-for="result in groupElements"
              :key="result.id"
              :record="result.node" />
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import RecordCard from '~/components/RecordCard'
import PageHeader from '~/components/PageHeader'

// Source
// https://gomakethings.com/a-vanilla-js-equivalent-of-lodashs-groupby-method/
var groupBy = function (arr, criteria) {
  return arr.reduce((obj, item) => {
    // Check if the criteria is a function to run on the item or a property of it
    var key = typeof criteria === 'function' ? criteria(item) : item[ criteria ];

    // If the key doesn't exist yet, create it
    if (!obj.hasOwnProperty(key)) {
      obj[ key ] = [];
    }

    // Push the value to the object
    obj[ key ].push(item);

    // Return the object to the next item in the loop
    return obj;
  }, {});
};

export default {
  components: {
    RecordCard,
    PageHeader
  },
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      const results = this.$search.search({ query: searchTerm, limit: 5 })

      return groupBy(results, 'index')
    }
  }
}
</script>
