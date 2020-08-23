<template>
  <div class="sticky top-0 pt-5">
    <div
      v-if="subtitles.length > 0"
      class="toc">
      <p class="border-b-4 pb-3 border-gray-200 text-xl">
        On this page
      </p>
      <ul class="pl-0">
        <li
          v-for="subtitle in subtitles"
          :key="subtitle.value"
          class="py-1"
          :class="{'ml-4' : subtitle.depth == 3}">
          <a
            class="hover:text-smalt-blue-700"
            :class="{'text-shark-400' : subtitle.depth == 3}"
            :href="subtitle.anchor">{{ subtitle.value }}</a>
        </li>
      </ul>
    </div>

    <div
      v-if="record.tags.length>0"
      class="tags d-lg-block d-none"
      :class="[subtitles.length>0 ? 'mt-3' : '']">
      <p class="border-b-4 pb-3 border-gray-200 text-xl">
        Tags
      </p>
      <div class="tags-items break-words">
        <g-link
          v-for="tag in record.tags"
          :key="tag.id"
          class="mr-2 my-4 hover:bg-gray-200 p-1 rounded"
          :to="tag.path">
          #{{ tag.title }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['record'],

  computed: {
    subtitles () {
      // source: https://github.com/gridsome/gridsome.org/blob/master/src/templates/DocPage.vue
      // Remove h1, h4, h5, h6 titles
      const subtitles = this.record.headings.filter((value, index, arr) => {
        return [2, 3].includes(value.depth);
      });
      return subtitles;
    }
  }
};
</script>
