<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          #{{ $page.records.id }}
        </p>
        <p
          class="text-lg md:text-2xl">
          We have found {{ $page.records.belongsTo.totalCount }} records for this tag
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <RecordCard
            v-for="edge in $page.records.belongsTo.edges"
            :key="edge.node.id"
            :record="edge.node" />
        </div>
      </section>
      <div
        v-if="$page.records.belongsTo.pageInfo.totalPages > 1"
        class="mt-12 flex justify-center">
        <Pagination
          :base-url="baseUrl"
          :current-page="$page.records.belongsTo.pageInfo.currentPage"
          :total-pages="$page.records.belongsTo.pageInfo.totalPages" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!, $page:Int) {
  records : tag(id: $id) {
    id
    title
    belongsTo(perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          __typename
          ... on News {
            id
            title
            path
            excerpt
            createdAt(format:"Do MMMM YYYY")
            timeToRead
          }
          ... on Article {
            id
            title
            path
            excerpt
            createdAt(format:"Do MMMM YYYY")
            timeToRead
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import RecordCard from '~/components/RecordCard'
import Pagination from '~/components/Pagination'

export default {
  components: {
    PageHeader,
    RecordCard,
    Pagination
  },

  metaInfo () {
    return {
      title: `Tag result for: ${this.$page.records.id}`
    }
  },
  computed: {
    baseUrl () {
      return `/tag/${this.$page.records.id}`
    }
  }
};
</script>
