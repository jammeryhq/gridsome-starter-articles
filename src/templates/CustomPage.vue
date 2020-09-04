<template>
  <Layout>
    <PageHeader>
      <template
        v-if="$page.entry.image !== null"
        v-slot:image>
        <g-image
          :src="require(`!!assets-loader!@customPageImage/${$page.entry.image}`)"
          :alt="$page.entry.title" />
      </template>

      <template v-slot:content>
        <h1 class="text-4xl lg:text-6xl">
          {{ $page.entry.title }}
        </h1>
        <p
          v-if="$page.entry.subtitle !== null"
          class="text-lg lg:text-2xl">
          {{ $page.entry.subtitle }}
        </p>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div
          v-if="$page.entry.sidebar === true"
          class="w-full lg:w-1/4 px-5">
          <PageSidebar :record="$page.entry" />
        </div>

        <div
          class="w-full px-5 prose lg:prose-xl max-w-none"
          :class="{'lg:w-3/4' : $page.entry.sidebar === true}">
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
    entry : customPage(id: $id) {
      title
      subtitle
      image
      content
      sidebar
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
