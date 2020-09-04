<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <h1 class="text-4xl lg:text-6xl">
          {{ $page.entry.title }}
        </h1>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div class="w-full lg:w-1/4 px-5">
          <PageSidebar :record="$page.entry" />
        </div>

        <div class="w-full lg:w-3/4 px-5 prose lg:prose-xl max-w-none">
          <div
            class="content"
            v-html="$page.entry.content" />
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
