<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          {{ $page.entry.title }}
        </p>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap py-12">
        <div class="w-full md:w-3/4 px-5 text-lg">
          <div v-html="$page.entry.content" />
        </div>

        <div class="w-full md:w-1/4 px-5">
          <PageSidebar :record="$page.entry" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    entry : news(id: $id) {
      title
      content,
      excerpt,
      createdAt(format:"Do MMMM YYYY"),
      timeToRead,
      tags {
          title,
          path
      },
      headings {
        depth,
        value,
        anchor
      },
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import PageSidebar from '~/components/PageSidebar'

export default {
  components: {
    PageHeader,
    PageSidebar
  },

  metaInfo () {
    return {
      title: this.$page.entry.title
    };
  }
};
</script>
