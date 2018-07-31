
<template>
  <div  class="consult">
     <img src="../../assets/img/consult.png" alt="">
     <p>在线咨询</p>
     <p class="small">ONLINE CONOUL TATION</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
}

</script>
<style lang='less' scoped>
.consult{
  position: fixed;
  z-index: 998;
  right: 30px;
  bottom: 100px;
  font-size: 13px;
  color: #335FF6;
  background: #fff;
  padding-top: 14px;
  width:100px;
  height:50px;
  border-radius:10px;
  cursor: pointer;
  transition: transform 0.3s linear;
  box-shadow:2px 3px 18px rgba(217,233,253,0.75);
  img{
    position: absolute;
    width: 35px;
    height: 35px;
    left: -18px;
    top: 8px;
  }
  p{
    line-height: 1;
    margin: 0;
     &:first-of-type{
      // margin-bottom:3px;
    }
    &.small{
    font-size: 12px;
     white-space:nowrap;
    transform: scale(0.4) translate(-20px);
  }
  }
  &.fadeout{
    transform: translateX(113px)
  }
}
</style>