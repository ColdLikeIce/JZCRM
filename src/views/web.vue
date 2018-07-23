<template>
    <div class="wrapper">
        <a-layout id="components-layout-demo-top-side-2">
            <a-layout-header>
                <h3-header>
                    <!-- <img class="header-logo" slot="header-logo" src="../assets/img/logo.png" alt="logo"> -->
                </h3-header>
                <h3-index></h3-index>
                <h3-bottom></h3-bottom>
            </a-layout-header>
        </a-layout>
    </div>
</template>

<script>
/* eslint-disable*/
import vHead from '../components/h3-header.vue'
import Index from '../views/index.vue'
import Bottom from '../components/h3-bottom.vue'
export default {
  name: 'Web',
  components: {
    'h3-header': vHead,
    'h3-index': Index,
    'h3-bottom':Bottom
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
.wrapper {
  background: #f9fafc;
}
</style>

