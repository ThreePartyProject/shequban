<template>
  <div style="overflow: hidden">
    <div class="listItem" v-for="(item, index) in list" :key="index">
      <div class="listdet1">
        <div class="listdet1-11">
          <p
            style="
              width: 590px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
          >
            <router-link target="_blank"  tag="a" :to="{ path: 'detail', query: { id: item.id } }">{{
              item.title
            }}</router-link>
          </p>
        </div>
        <div class="buttonxx">
          <router-link target="_blank"  tag="a" :to="{ path: 'detail', query: { id: item.id } }"
            ><img src="../assets/SXWB/img/buttonxx.jpg"
          /></router-link>
        </div>
      </div>
      <div class="listdet2 list-duohan">{{ item.zhaiyao }}</div>
      <div class="listdet3">
        <div class="underline"></div>
        <div class="underdata">{{item.addtime}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SecondItem",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.listdet1 {
  margin-top: 50px;
  padding-left: 15px;
  width: 650px;
  height: 30px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
}
.listdet1-11 {
  width: 590px;
  height: 30px;
  float: left;
  p {
    width: 590px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.buttonxx {
  margin-top: 6px;
  height: 20px;
  width: 40px;
  float: right;
}
.listdet2 {
  margin-top: 16px;
  padding-left: 15px;
  padding-right: 50px;
  width: 650px;
  height: 50px;
  float: left;
  font-size: 16px;
  color: #525252;
  line-height: 28px;
  text-indent: 2em;
}
.listdet3 {
  margin-top: 18px;
  width: 631px;
  height: 20px;
  float: left;
}
.underline {
  margin-top: 10px;
  width: 468px;
  height: 2px;
  border: 2px solid #f2f2f2;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  float: left;
}
.underdata {
  height: 20px;
  width: 140px;
  float: right;
  font-size: 14px;
  color: #5e5e5e;
}
.list-danghan {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-duohan {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /*显示几行*/
  overflow: hidden;
}
</style>