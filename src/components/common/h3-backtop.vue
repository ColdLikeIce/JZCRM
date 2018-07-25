
<template>
  <div v-show="isShow" class="backTop" @click="backTop">
     <a-icon type="up" />
  </div>
</template>

<script>
export default {
  name:'h3-backTop',
  data() {
    return {
      isShow:false,
      timer:null,
    };
  },

  components: {},

  computed: {},

  methods: {
    handleScroll(e) {
      if (e.target.scrollingElement.scrollTop > 200) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    backTop(){
      if(this.timer){
        cancelAnimationFrame(this.timer);
      }  
      this.timer = requestAnimationFrame(this.animate);   
    },
    animate(){
      let oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if(oTop > 0){
      document.body.scrollTop = document.documentElement.scrollTop = 0.8*oTop;
      timer = requestAnimationFrame(this.animate);
      }else{
      cancelAnimationFrame(this.timer);
      this.timer = null;
      } 
    }
  },

  mounted(){
    window.addEventListener('scroll', this.handleScroll, false);
  },

   destroyed(){
    window.removeEventListener('scroll', this.handleScroll);
  },


}

</script>
<style lang='less' scoped>
.backTop{
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 100px;
  bottom: 200px;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  font-size: 40px;
  padding-top: 4px;
  background: #F2F2F2;
  color: #fff;
  &:hover{
    box-shadow:0px 0px 10px rgba(217,233,255,0.75);
  }
}
</style>