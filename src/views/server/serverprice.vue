<!--  -->
<template>
  <div>
    <h3-banner :bgUrl="bannerimg"></h3-banner>
    <div class="service">
      <div class="s_tab">
        <div v-for="(tab,index) in tablist" :key="index" :class="{'activetab_item':index===defaultIndex}" class="tab_item" @click="changetab(index)">
          {{tab}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import h3Banner from '../../components/common/h3-banner'
export default {
  name: 'ServerPrice',
  data() {
    return {
      bannerimg: '/static/img/ServiceManage/serviceprice/banner.png',
      tablist: ['决招CRM', '决招HRM', '决招进销存'],
      defaultIndex: 0
    }
  },

  components: {
    h3Banner
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    changetab(index) {
      this.defaultIndex = index
    }
  }
}
</script>
<style lang='less' scoped>
.s_tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D2D2D2;
  .tab_item {
    height: 85px;
    width: 172px;
    cursor: pointer;
    font-size: 18px;
    line-height: 85px;
    &:first-of-type {
      margin-left: 300px;
    }
    &:last-of-type {
      margin-right: 300px;
    }
    &.activetab_item {
      background: #1f72ff;
    }
  }
}
</style>