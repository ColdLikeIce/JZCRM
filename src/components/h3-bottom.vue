<!--  -->
<template>
  <div class="bottom">
    <div style="margin-left:100px;">
      <p class="companyname" style="font-size:24px">
        {{companyname}}
      </p>
    </div>
    <div class="detail_item" style="margin-left:100px;">
      <p>
        服务热线:{{phone}}
      </p>
      <p>
        市场合作:{{email}}
      </p>
      <p>
        企业总机:{{mainphone}}
      </p>
      <p>
        企业地址:{{address}}
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyname: '深圳决招网络科技有限公司',
      phone: '400-1399-566',
      email: 'market@authine.com',
      mainphone: '0755-33940000',
      address: '深圳市南山区科技园中区科兴科技园B4-6层'
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style lang='less' scoped>
.companyname {
  text-align: left;
}
</style>