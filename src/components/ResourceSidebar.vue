<template>
  <div class="md:sticky md:top-0 md:pt-5">
    <a name="content" />
    <div class="hidden md:block">
      <div
        v-if="removeFilter"
        class="mb-4">
        <span class="rounded-md shadow-sm">
          <g-link
            to="/resources"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150">
            Clear
          </g-link>
        </span>
      </div>
      <div>
        <h3 class="border-b-4 pb-3 mb-3 border-gray-200 text-xl">
          Filter by type
        </h3>
        <ul class="pl-0">
          <li
            v-for="type in types"
            :key="type.node.id"
            class="py-1">
            <g-link
              :to="filterUrl('type', type.node.title)"
              class="hover:text-smalt-blue-700">
              {{ type.node.title }}
            </g-link>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="border-b-4 pb-3 mt-6 border-gray-200 text-xl">
          Filter by tag
        </h3>
        <ul class="pl-0">
          <li
            v-for="tag in tags"
            :key="tag.node.id"
            class="py-1">
            <g-link
              :to="filterUrl('tag', tag.node.title)"
              class="hover:text-smalt-blue-700">
              {{ tag.node.title }}
            </g-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="block md:hidden text-right mb-6">
      <div
        v-if="removeFilter"
        class="relative inline-block text-left ml-2">
        <div>
          <span class="rounded-md shadow-sm">
            <g-link
              to="/resources"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-black hover:text-white hover:bg-smalt-blue-500 focus:outline-none transition ease-in-out duration-150">
              Clear
            </g-link>
          </span>
        </div>
      </div>
      <FilterDropdown>
        <template v-slot:title>
          Filter by type
        </template>
        <template v-slot:options>
          <g-link
            v-for="type in types"
            :key="type.node.id"
            :to="filterUrl('type', type.node.title)"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            {{ type.node.title }}
          </g-link>
        </template>
      </FilterDropdown>
      <FilterDropdown>
        <template v-slot:title>
          Filter by tag
        </template>
        <template v-slot:options>
          <g-link
            v-for="tag in tags"
            :key="tag.node.id"
            :to="filterUrl('tag', tag.node.title)"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            {{ tag.node.title }}
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
    removeFilter: {
      type: Boolean,
      default: false
    },
    types: {
      type: Array,
      default () {
        return []
      }
    },
    tags: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    filterUrl (type, value) {
      return `/resources/filter/${type}/${value}#content`;
    }
  }
};
</script>
