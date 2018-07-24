
<template>
  <div class="banner" :style="`background-image:url(${bgUrl})`">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:'h3-banner',
  props:{
    bgUrl:{
      type:String,
      require:true
    }
  },
  data() {
    return {};
  },
}

</script>
<style lang='less' scoped>
.banner{
  width: 100%;
  height: 480px;
  background-position: center center;
  background-size: cover;
  
}
</style>