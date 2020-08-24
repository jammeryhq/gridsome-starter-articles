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
        <p class="text-4xl md:text-6xl">
          {{ $page.entry.title }}
        </p>
        <p
          v-if="$page.entry.subtitle !== null"
          class="text-lg md:text-2xl">
          {{ $page.entry.subtitle }}
        </p>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap py-12">
        <div
          class="w-full px-5 text-lg"
          :class="{'md:w-3/4' : $page.entry.sidebar === true}">
          <div v-html="$page.entry.content" />
        </div>

        <div
          v-if="$page.entry.sidebar === true"
          class="w-full md:w-1/4 px-5">
          <PageSidebar :record="$page.entry" />
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
