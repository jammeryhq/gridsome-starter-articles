<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          News
        </p>
        <p
          class="text-lg md:text-2xl">
          We have currently {{ $page.records.totalCount }} entries in our list
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <RecordCard
            v-for="edge in $page.records.edges"
            :key="edge.node.id"
            :record="edge.node" />
        </div>
      </section>
      <div
        v-if="$page.records.pageInfo.totalPages > 1"
        class="mt-12 flex justify-center">
        <Pagination
          base-url="/news"
          :current-page="$page.records.pageInfo.currentPage"
          :total-pages="$page.records.pageInfo.totalPages" />
      </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader';
import RecordCard from '~/components/RecordCard.vue';
import Pagination from '~/components/Pagination.vue';

export default {
  metaInfo: {
    title: 'Browse Articles'
  },
  components: {
    PageHeader,
    Pagination,
    RecordCard
  }
};
</script>

<page-query>
  query ($page: Int) {
    records: allNews(sortBy:"createdAt", order:DESC, perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title,
          path,
          excerpt,
          createdAt(format:"Do MMMM YYYY"),
          timeToRead
        }
      }
    }
  }
</page-query>
