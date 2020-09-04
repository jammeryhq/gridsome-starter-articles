<template>
  <div
    class="p-4 w-full"
    :class="cardSize">
    <div
      class="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative hover:bg-shark-50 hover:bg-opacity-60">
      <div class="p-6">
        <h1
          class="title-font text-2xl font-medium text-gray-900 mb-3"
          :class="{'mb-12' : !record.excerpt}">
          {{ record.title }}
        </h1>
        <div
          v-if="record.excerpt"
          class="leading-relaxed mb-12 text-gray-800 text-left"
          v-html="record.excerpt" />
        <div class="flex items-center flex-wrap absolute bottom-0 -ml-6 p-6 w-full">
          <div class="w-2/3 text-left">
            <slot name="link">
              <g-link
                :to="record.path"
                class="text-smalt-blue-500 hover:text-black inline-flex items-center">
                Continue reading
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </g-link>
            </slot>
          </div>
          <div
            v-if="record.timeToRead"
            class="w-1/3 text-right pt-2">
            <span class="text-gray-600 inline-flex items-center leading-none text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 mr-1">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> {{ record.timeToRead }} min
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardSize: {
      type: String,
      default: 'sm:w-1/2 lg:w-1/3'
    },
    record: {
      type: Object,
      default () {
        return {}
      }
    }
  }
};
</script>
