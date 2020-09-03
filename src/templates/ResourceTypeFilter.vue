<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          Resources
        </p>
        <p
          class="text-lg md:text-2xl">
          Free stuff which helps you to make the world better
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="md:w-1/4 w-full px-5">
          <ResourceSidebar
            :remove-filter="true"
            :types="$page.types.edges"
            :tags="$page.tags.edges" />
        </div>
        <div class="md:w-3/4 w-full px-5">
          <section>
            <div class="flex flex-wrap -m-4">
              <RecordCard
                v-for="edge in $page.records.edges"
                :key="edge.node.id"
                :record="edge.node">
                <template v-slot:link>
                  <g-link
                    :to="edge.node.link"
                    class="text-smalt-blue-500 hover:text-black inline-flex items-center">
                    Go to website
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="external-link w-4 h-4">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </g-link>
                </template>
              </RecordCard>
            </div>
          </section>
          <div
            v-if="$page.records.pageInfo.totalPages > 1"
            class="mt-12 flex justify-center">
            <Pagination
              :base-url="baseUrl($route.params.title)"
              :current-page="$page.records.pageInfo.currentPage"
              :total-pages="$page.records.pageInfo.totalPages" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($title:[ID], $page: Int) {
    records: allResource(filter: { type: { contains: $title } },sortBy:"createdAt", order:DESC, perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          link
          excerpt
          createdAt(format:"Do MMMM YYYY")
        }
      }
    }

    types: allResourceType {
      edges {
        node {
          id
          title
          path
        }
      }
    }

    tags: allResourceTag {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import ResourceSidebar from '~/components/ResourceSidebar'
import RecordCard from '~/components/RecordCard'
import Pagination from '~/components/Pagination'

export default {
  metaInfo () {
    return {
      title: `Browse Resources - Filtered by type: ${this.$route.params.title}`
    }
  },
  components: {
    PageHeader,
    ResourceSidebar,
    Pagination,
    RecordCard
  },
  methods: {
    baseUrl (value) {
      return `/resources/filter/type/${value}`
    }
  }
};
</script>
