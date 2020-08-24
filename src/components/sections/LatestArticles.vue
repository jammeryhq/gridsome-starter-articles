<template>
  <section>
    <div class="container px-5 py-12 mx-auto">
      <div class="text-center pb-12 ">
        <h2 class="text-4xl">
          Latest Articles
        </h2>
        <p
          class="text-2xl">
          Curious what new articles are on our website? Check out our latest articles!
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <RecordCard
          v-for="edge in $static.records.edges"
          :key="edge.node.id"
          :record="edge.node" />
      </div>
    </div>
  </section>
</template>

<static-query>
  query {
    records: allArticle(limit:6, sortBy:"createdAt") {
      edges {
        node {
          title
          path
          excerpt
          createdAt(format:"Do MMMM YYYY")
          timeToRead
        }
      }
    }
  }
</static-query>

<script>
import RecordCard from '~/components/RecordCard'

export default {
  components: {
    RecordCard
  }
};
</script>
