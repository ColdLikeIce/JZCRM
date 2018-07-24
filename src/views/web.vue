<template>
  <div>
    <h3-header></h3-header>
    <router-view/>
    <h3-footer></h3-footer>
  </div>
</template>

<script>
/* eslint-disable*/
import h3Header from '@/components/common/h3-header.vue'
import h3Footer from '@/components/common/h3-footer.vue'
import h3Backtop from '@/components/common/h3-backtop.vue'
import h3Consult from '@/components/common/h3-consult.vue'
export default {
  name: 'Web',
  components: {
    h3Header,
    h3Footer,
    h3Backtop,
    h3Consult
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.ant-layout-header {
  width: 1200px;
  padding: 0;
  background: #ffffff;
  margin: 0 auto;
}
</style>

