<!--  -->
<template>
  <div>
    <p>{{title}}</p>
    <img :src="imgurl" alt="">
  </div>
</template>

<script>
export default {
name: 'h3-custom',
  data() {
    return {
      title:'加枫卫浴(中山)有限公司',
      imgurl:require('../assets/img/CustomCase/jfwy.jpg')
    };
  },

  components: {},

  computed: {},

  created(){},

  mounted(){},

  methods: {},
}

</script>
<style lang='less' scoped>
</style>