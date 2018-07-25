<!--  -->
<template>
  <div class="customCase">
    <h3-banner bgUrl="/static/img/custom_banner.jpg">
    <p class="slogan" >全心全意为客户解决问题<br/>是决招的使命</p>
    </h3-banner>
    <h3custom></h3custom>
  </div>
</template>

<script>
import h3custom from './h3-custom.vue';
import h3Banner from '@/components/common/h3-banner';
export default {
  name: 'CustomCase',
  data() {
    return {}
  },

  components: {
    h3custom,
    h3Banner
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>
<style lang='less' scoped>
.customCase{
  .slogan{
    position: absolute;
    padding-left: 120px;
    left: 50%;
    top: 174px;
    text-align: left;
    font-size:40px;
    font-family:SourceHanSansCN-ExtraLight;
    color:rgba(255,255,255,1);
    line-height:80px;
  }
}
</style>