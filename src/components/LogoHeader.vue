<template>
<div>
  <div class="top">
    <img src="@/assets/SXWB/img/secondad.jpg" style="margin-top: 15px;">
  </div>
<div class="top">
  <div class="first" title="人民社区党建服务平台">
    <img v-if="type === 'index'" src="@/assets/SXWB/img/logo9.jpg" >
    <img v-if="type === 'article'" src="@/assets/SXWB/img/article_logo.jpg" style="width:423px;height:63px;">
    <img v-if="type === 'photos'||type === 'photoList'" src="@/assets/SXWB/img/photos.jpg" style="width:423px;height:63px;">
    <img v-if="type === 'hall'" src="@/assets/SXWB/img/hall.jpg" style="width:423px;height:63px;">
    <img v-if="type === 'dock'" src="@/assets/SXWB/img/dock.jpg" style="width:423px;height:63px;">
    <img v-if="type === 'wenbo'" src="@/assets/SXWB/img/wenbo.jpg" style="width:423px;height:63px;">
    <img v-if="type === 'bbs'" src="@/assets/SXWB/img/BBS.jpg" style="width:423px;height:63px;">
  </div>
  <div class="searchlist">
    <div id="menu">
      <em></em><a href="/loginnew.html">登录</a>&nbsp;&nbsp;<a
        href="/register.html"
        >注册</a
      >
    </div>
  </div>
    <div class="search">
    <input
      id="keywords"
      name="keywords"
      class="input"
      type="text"
      placeholder="站内搜索"
      @keyup.enter="getsearch"
      @input="search($event)"
    />
    <img
      type="image"
      name="submit"
      @click="getsearch"
      style="margin-top: 3px"
      src="@/assets/SXWB/img/search.jpg"
    />
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'IndexHeader',
  props: {
    // 1 首页  2 article
    type: {
      type: String,
      default: 'index'
    }
  },
  data () {
    return {
      inputContent: ''
    }
  },
  components: {},
  created () {},
  methods: {
    async search (e) {
      this.inputContent = e.currentTarget.value
    },
    async getsearch () {
      if (this.inputContent != '' && this.inputContent != null && this.inputContent != undefined) {
        let routeData = this.$router.resolve({ path: 'search', query: { name: this.inputContent } })
        window.open(routeData.href, '_blank')
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.top {
  height: 110px;
  width: 1080px;
  margin: 0px auto;
}
.first {
  margin-top: 20px;
  height: 64px;
  width: 601px;
  float: left;
  // background: url("../assets/SXWB/img/logo9.jpg");
}
.logo {
  height: 117px;
  width: 105px;
  float: left;
  margin-left: 20px;
}
.wh_www {
  margin-left: 10px;
  margin-top: 70px;
  height: 68px;
  width: 392px;
  float: left;
}
.wenhua {
  width: 392px;
  height: 40px;
  float: left;
  line-height: 1900;
  font-size: 36px;
  line-height: 37px;
  padding-left: 4px;
}
.www {
  margin-top: 5px;
  width: 392px;
  height: 18px;
  float: left;
  // background:url(../img/www.jpg);
  color: #7f8285;
  padding-left: 11px;
  padding-bottom: 4px;
}
.search {
  margin-right: 20px;
  margin-top: 50px;
  border: 2px solid #d9d9d9;
  height: 35px;
  width: 180px;
  float: right;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
}
.searchlist1 {
  margin-left: 28px;
  margin-top: 153px;
  font-size: 15px;
  color: #7e8186;

  float: left;
  border-radius: 2px;
}
.searchlist {
  margin-left: 130px;
  margin-top: 60px;
  font-size: 15px;
  color: #7e8186;
  float: left;
  border-radius: 2px;
}
.searchuser {
  margin-right: 0px;
  margin-top: 143px;

  float: right;
  overflow: hidden;
}
.search select {
  margin-right: 0px;
  height: 36px;
  float: left;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 0px;
}
.search input {
  margin-left: 0px;
  height: 33px;
  float: left;
  border: 0px;
}
#serch {
  margin-top: 2px;
  float: left;
}
</style>
