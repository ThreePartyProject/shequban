<template>
  <div class="mb3right">
    <!--文化产业项目库-->
    <div class="mb3right1">
      <div class="mb3right11">
        <center>文化产业项目库</center>
      </div>
      <div class="mb3right12">
        <center>
          <a href="#"> <img src="../assets/SXWB/img/xmsb.jpg" /></a>&nbsp;<a
            href="/xsearch.html"
            target="_blank"
            ><img src="../assets/SXWB/img/xmcx.jpg"
          /></a>
        </center>
      </div>
    </div>
    <div class="mb3right2">
      <div class="redb2">
         <router-link target="_blank"  tag="a" :to="{ path: 'secondIndex' , query: { id:'86',type:'dock'} }">
          典型案例
        </router-link>
        <span id="redb2"> News</span>
      </div>
      <div class="garyb2"></div>
    </div>
    <div v-for="(item, index) in dxalData" :key="index" v-if="index<2">
      <div class="mb1right2-3 r3danhang">
              <router-link target="_blank"  tag="a" :to="{ path: 'detail', query: { id: item.id } }">{{
                item.title
              }}</router-link>
      </div>
      <div class="mb1right3 r3duohan">
        <p>
          {{item.zhaiyao}}
        </p>
      </div>
    </div>
    <!--二维码-->
    <div class="mb3right4">
      <div class="mb3r4_1">
        <div class="mb3r4_11"><img src="../assets/SXWB/img/sxwbh.jpg" /></div>
        <div class="mb3r4_12">
          <img src="../assets/SXWB/img/ewm1.jpg" />
        </div>
        <div class="mb3r4_13">
          <center>【山西文博会官方订阅号】</center>
          <br />
          <center>
            <span id="mbr4_f">文化三晋 美丽山西 尽在其中</span>
          </center>
        </div>
      </div>
      <div class="mb3r4_2">
        <div class="mb3r4_21"><img src="../assets/SXWB/img/zswb.jpg" /></div>
        <div class="mb3r4_12">
          <img src="../assets/SXWB/img/ewm2.jpg" />
        </div>
        <div class="mb3r4_13">
          <center>【山西文博会官方服务号】</center>
          <br />
          <center>
            <span id="mbr4_f">产业咨询 政策解读 一手掌握</span>
          </center>
        </div>
      </div>
    </div>
    <div class="mb3right5">
      <img src="../assets/SXWB/img/ctyq.jpg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexMb3Right",
  props: {
    dxalData: {
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
<style>
.mb3right {
  height: 1115px;
  width: 350px;
  float: left;
  margin-left: 34px;
}
.mb3right1 {
  height: 150px;
  width: 350px;
  border: 2px solid #d9d9d9;
  float: left;
  border-radius: 5px;
}
.mb3right11 {
  margin-top: 20px;
  height: 40px;
  width: 350px;
  float: left;
  color: #b28147;
  font-size: 25px;
  font-weight: bold;
}
.mb3right12 {
  margin-top: 20px;
  height: 38px;
  width: 350px;
  float: left;
}
.mb3right2 {
  margin-top: 30px;
  height: 45px;
  width: 350px;
  float: left;
}
.mb3right3 {
  margin-top: 25px;
  height: 205px;
  width: 350px;
  float: left;
}
.mb3right4 {
  margin-top: 45px;
  height: 230px;
  width: 350px;
  float: left;
}
.mb3r4_1 {
  margin-left: 10px;
  height: 230px;
  width: 153px;
  float: left;
}
.mb3r4_11 {
  margin-left: 4px;
  height: 19px;
  width: 145px;
  float: left;
  background: url("../assets/SXWB/img/sxwbh.jpg");
}
.mb3r4_12 {
  margin-top: 18px;
  height: 135px;
  width: 148px;
  float: left;
  margin-left: 8px;
}
.mb3r4_13 {
  margin-top: 20px;
  height: 35px;
  width: 153px;
  float: left;
  font-size: 12px;
  line-height: 10px;
  padding-left: 0px;
  color: #6e0a0a;
}
#mbr4_f {
  font-size: 9px;
  color: black;
}
.mb3r4_2 {
  margin-left: 20px;
  height: 230px;
  width: 153px;

  float: left;
}
.mb3r4_21 {
  margin-left: 4px;
  height: 19px;
  width: 145px;

  float: left;
  background: url("../assets/SXWB/img/zswb.jpg");
}
.mb3right5 {
  margin-top: 50px;
  height: 299px;
  width: 353px;
  float: left;
}
.r3danhang{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.r3duohan{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;/*显示几行*/
	}
</style>