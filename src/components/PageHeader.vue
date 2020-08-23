<template>
  <section
    class="relative z-0 h-64 flex flex-wrap content-center page-header"
    :class="{
      'bg-shark-700 text-white' : hasImage,
      'bg-gray-200 border-b border-gray-400' : !hasImage
    }">
    <slot name="image">
      <div class="bg-pattern" />
    </slot>
    <div class="flex z-10 w-full">
      <div class="container text-center mx-auto">
        <div>
          <slot name="content" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      hasSlot: false
    };
  },
  computed: {
    hasImage () {
      return !!this.$slots.image || !!this.$scopedSlots.image;
    }
  }
}
</script>
