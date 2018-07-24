<!--  -->
<template>
  <div>
    <h3custom></h3custom>
    <slot></slot>
  </div>
</template>

<script>
import h3custom from '@/components/common/h3-custom.vue'
export default {
  name: 'CustomCase',
  data() {
    return {}
  },

  components: {
    h3custom
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>
<style lang='less' scoped>
</style>