<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          Ready. Set. Learn.
        </p>
        <p class="text-lg md:text-2xl">
          It's never too late to learn something new!
        </p>
      </template>
    </PageHeader>
    <div class="container text-center mx-auto">
      <SectionLatestArticles />
    </div>

    <SectionContribute />

    <div class="container text-center mx-auto">
      <SectionLatestNews />
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader';
import SectionLatestArticles from '~/components/sections/LatestArticles';
import SectionLatestNews from '~/components/sections/LatestNews';
import SectionContribute from '~/components/sections/Contribute';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    PageHeader,
    SectionLatestArticles,
    SectionLatestNews,
    SectionContribute
  }
};
</script>
