<template>
  <div class="lg:sticky top-0 pt-5 -mt-5">
    <!-- Desktop Sidebar -->
    <div
      v-if="subtitles.length > 0"
      class="toc hidden lg:block">
      <h3 class="border-b-4 pb-3 mb-3 border-gray-200 text-xl">
        On this page
      </h3>
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
      v-if="record.tags && record.tags.length>0"
      class="tags d-lg-block d-none hidden lg:block"
      :class="[subtitles.length>0 ? 'mt-4' : '']">
      <h3 class="border-b-4 pb-3 mb-3 border-gray-200 text-xl">
        Tags
      </h3>
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

    <!-- Responsive Sidebar -->
    <div
      v-if="subtitles.length > 0 || (record.tags && record.tags.length>0)"
      class="text-right mb-12">
      <FilterDropdown v-if="subtitles.length > 0">
        <template v-slot:title>
          On this site
        </template>
        <template v-slot:options>
          <ul class="p-4">
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
        </template>
      </FilterDropdown>

      <FilterDropdown v-if="record.tags && record.tags.length>0">
        <template v-slot:title>
          Tags
        </template>
        <template v-slot:options>
          <g-link
            v-for="tag in record.tags"
            :key="tag.id"
            :to="tag.path"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            {{ tag.title }}
          </g-link>
        </template>
      </FilterDropdown>
    </div>
  </div>
</template>

<script>
import FilterDropdown from '~/components/Dropdown'

export default {

  components: {
    FilterDropdown
  },

  props: {
    record: {
      type: Object,
      default () {
        return {}
      }
    }
  },

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
