<template>
<div class="mb1right">
  <!--新闻速递-->
  <div class="mb1right1">
    <div class="redb2">
          要闻速递
      <span id="redb2"> News</span>
      
    </div>
    <div class="garyb2">
    </div>
  </div>

  <div v-for="(item, index) in ywsdData" :key="index" v-if="index===0 || index<2">
    <div class="mb1right2-1 yaowendanhang">
      <router-link :to="{ path: 'detail', query: { id: item.id } }" target="_blank"  tag="a">{{
                item.title
              }}</router-link>
    </div>
    <div class="mb1right3 yaowenduohan">
      <p>{{item.zhaiyao}}</p>
    </div>
    <div class="space1">
    </div>
  </div>

  <div class="space1">
  </div>
  <a href="http://118.190.153.110/login" target="_blank"><img src="../assets/SXWB/img/whcy.jpg"></a>
  <div class="mb1right1">
    <div class="redb2">
      <router-link :to="{ path: 'article' , query: {} }" target="_blank"  tag="a">
          政策法规
        </router-link>
      <span id="redb2"> Law</span>
    </div>
    <div class="garyb2">
    </div>
  </div>
  <div class="mb1right4" >
    <ul v-for="(item, index) in zcfgData" :key="index" v-if="index===0 || index<4">
      <li>
        <p style="width: 335px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"><img
            src="../assets/SXWB/img/dian.jpg">&nbsp;
            <router-link :to="{ path: 'detail', query: { id: item.id } }" target="_blank"  tag="a">{{
                item.title
              }}</router-link>
            </p>
      </li>
    </ul>
  </div>
  <div class="mb1right1">
    <div class="redb2">
      <router-link :to="{ path: 'article' , query: {} }" target="_blank"  tag="a">
          公告通知
        </router-link>
      <span id="redb2"> Notice</span>
    </div>
    <div class="garyb2">
    </div>
  </div>
  <div class="mb1right4">
    <ul v-for="(item, index) in ggtzData" :key="index" v-if="index===0 || index<4">
      <li>
        <p style="width: 335px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"><img
            src="../assets/SXWB/img/dian.jpg">&nbsp;
            <router-link :to="{ path: 'detail', query: { id: item.id } }" target="_blank"  tag="a">{{
                item.title
              }}</router-link>
        </p>
      </li>
    </ul>
  </div>
  <div class="space1">
  </div>
</div>
</template>
<script>
export default {
  name: 'NavYwsd',
   props: {
    ywsdData: {
      type: Array,
      default: []
    },
    zcfgData: {
      type: Array,
      default: []
    },
    ggtzData: {
      type: Array,
      default: []
    },
  },
  data () {
    return {
      
    }
  },
  components: { },
  created () {

  },
  methods: {

  }
}
</script>
<style>
a:link {
    color: black;
    text-decoration: none;
}
a:visited{
	color:black;
}	/* 已访问的链接 */
a:hover{
	color:black;
	text-decoration:underline;
}	/* 鼠标移动到链接上 */
a:active{
	color:black;
}
.mb1right {
    height: 880px;
    width: 350px;
    float: left;
    margin-left: 34px;
}
.mb1right1 {
    margin-top: 8px;
    height: 40px;
    width: 350px;
    float: left;
}
.redb2 {
    height: 21px;
    width: 155px;
    border: 3px solid #6E0A0A;
    float: left;
    font-size: 23px;
    font-weight: bold;
    color: #6E090A;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    line-height: 3px;
    margin-top: 20px;
}
.redb2 a:link {
    color: #6E090A;
    text-decoration: none;
}
#redb2 {
    color: #7E8285;
    font-size: 15px;
}
.garyb2 {
    margin-top: 20px;
    margin-left: 3px;
    height: 21px;
    width: 192px;
    border: 3px solid #7E8285;
    float: left;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}
.space2{
	height:25px;
	width:350px;
	float:left;
}
.mb1right2{
	margin-top:0px;
	height:25px;
	width:410px;
	float:left;
	font-size:20px;
	font-weight:bold;
	letter-spacing:1px;
}
.mb1right2-1{
	margin-top:24px;
	height:25px;
	width:355px;
	float:left;
	font-size:20px;
	font-weight:bold;
	letter-spacing:1px;
}
.mb1right2-3{
	margin-top:25px;
	height:25px;
	width:355px;
	float:left;
	font-size:20px;
	font-weight:bold;
	letter-spacing:1px;
}
.mb1right3{
	margin-top:17px;
	height:68px;
	width:345px;
	float:left;
	font-size:15px;
	color:#7E8186;
	line-height:30px;
}
.mb1right3-1{
	margin-top:17px;
	height:68px;
	width:400px;
	float:left;
	font-size:15px;
	color:#7E8186;
	line-height:30px;
}
.space1{
	height:21px;
	width:350px;
	float:left;
}
.mb1right4{
	margin-top:22px;
	height:125px;
	width:350px;
	float:left;
	line-height:32px;
	font-size:15px;
}

.mb1right4 ul{
	float:left;
	padding-left:3px;
}
.yaowendanhang{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.yaowenduohan{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;/*显示几行*/
	}
</style>
