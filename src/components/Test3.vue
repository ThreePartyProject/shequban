<template>
  <div>
    <ul class="good_box">
      <!--  -->
      <li v-for="(item, index) in goosList" :key="index">
        <img src= "'../assets/goods/1.jpg'">
        <div class="good_des">
          <p class="good_title">{{item.title}}</p>
          <p class="good_js">{{item.js}}</p>
          <div class="addGood" @click="addGood($event, item)">
            <i class="iconfont icon-tianjiagouwuche"></i>
          </div>
        </div>
      </li>
    </ul>
    <div class="fix_bar">
      <i class="iconfont icon-tianjiagouwuche1"></i>
      <span class="addGoodListLength">共 {{addGoodList.length}} 件商品</span>
      <transition
        name="ball"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <div class="ball" v-if="show"></div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      goosList: [],
      show: false,
      wHeight: document.documentElement.clientHeight || document.body.clientHeight, // 屏幕的高度
      ball: {
        startLeft: '',
        startTop: ''
      },
      addGoodList: []
    }
  },
  created () {
    for (let i = 1; i < 19; i++) {
      let obj = {}
      obj.title = '商品名称' + i
      obj.js = '商品介绍' + i
      this.goosList.push(obj)
    }
  },
  methods: {
    addGood (el, item) {
      this.show = true
      let add = setTimeout(() => {
        let obj = {
          title: item.title,
          js: item.js
        }
        this.addGoodList.push(obj)
        clearTimeout(add)
      }, 1000)
      let rectInfo = el.target.getBoundingClientRect()
      this.ball.startLeft = rectInfo.left
      this.ball.startTop = rectInfo.top
    },
    beforeEnter (el) {
      // let ballRectInfo = el.getBoundingClientRect()
      // console.log(ballRectInfo)
      el.style.left = this.ball.startLeft + 'px'
      el.style.top = -(this.wHeight - 100 - this.ball.startTop) + 'px' // 100 => 底部黑框的高度
    },
    enter (el, done) {
      // 触发动画重绘
      if (el.offsetHeight) {}
      el.style.left = '35px'
      el.style.top = '40px'
      el.style.transition = 'all 1s'
      done()
    },
    afterEnter (el) {
      this.show = false
      // el.style.display = 'none'
    }
  }
}
</script>
<style lang="scss" scoped>
.good_box{
  li {
    display: flex;
    margin-bottom: 20px;
    &:not(::after){
      border-bottom: 1px solid #dddddd;
    }
    img{
      width: 100px;
      height: 100px;
      margin-right: 25px;
    }
    .good_des{
      flex: 1;
      text-align: left;
      .good_title{
        font-size: 16px;
      }
      .good_js{
        font-size: 12px;
        color: #cccccc;
        margin-top: 10px;
      }
      .addGood{
        text-align: right;
        margin-right: 30px;
        .iconfont{
          font-size: 25px;
          color: blue;
          margin-top: 20px;
        }
      }
    }
  }
}
.fix_bar{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #000;
  .icon-tianjiagouwuche1{
    font-size: 50px;
    margin-left: 30px;
    color: #ffffff;
  }
  .addGoodListLength{
    color: #ffffff;
    margin-left: 30px;
  }
  .ball{
    width: 30px;
    height: 30px;
    background: red;
    border-radius: 30px;
    position: absolute;
    top: 35px;
    left: 40px;
    z-index: 10;
  }
  // .ball-enter-active{
  //    transition: all 1s;
  // }
}
</style>
