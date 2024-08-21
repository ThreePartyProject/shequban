<template>
<div class="body">
  <div class="header">
    <div class="title">
      <img src="@/assets/logo1.jpg" alt="" class="logo1">
      <p class="tit">社民生周刊创建</p>
    </div>
  </div>
  <div class="app-main appMainIndex">
    <div class="search-header">
      <!-- 城市版是 民生党建信息平台 9014 -->
      <p class="search-header-title">民生党建信息平台</p>
      <!-- 社区版是 人民社区党建服务平台 9013 -->
      <!-- <p class="search-header-title">人民社区党建服务平台</p> -->
      <div class="search-header-box">
        <div class="search-header-box-input">
          <div class="search-header-box-input-left">
            <div class="search-header-box-input-left-1">
              <div class="label-text">全部</div>
              <i class="el-icon-arrow-down"></i>
            </div>
            <div class="search-header-box-input-left-2">
              <div class="label-text">全文</div>
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
          <div class="search-header-box-input-right">
            <input type="text" placeholder="请输入内容">
            <i class="el-icon-search"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="section-box">
      <div class="sw-lists-button">
        <div class="sw-lists-button__item" v-for="(item, index) in menuList" :key="index" @mouseenter="mouseenterFn(item, index)">
          <img v-if="item.id === 1" src="../../assets/dj/zxjh.png" class="sw-lists-button__item--icon">
          <img v-else-if="item.id === 13" src="../../assets/dj/rmrb.png" class="sw-lists-button__item--icon">
          <img v-else-if="item.id === 33" src="../../assets/dj/mszk.png" class="sw-lists-button__item--icon">
          <img v-else-if="item.id === 126" src="../../assets/dj/szzt.png" class="sw-lists-button__item--icon">
          <img v-else-if="item.id === 127" src="../../assets/dj/dzzl.png" class="sw-lists-button__item--icon">
          <img v-else-if="item.id === 128" src="../../assets/dj/djal.png" class="sw-lists-button__item--icon">
          <img v-else-if="item.id === 133" src="../../assets/dj/szpl.png" class="sw-lists-button__item--icon">
          <img v-else src="../../assets/dj/mszk.png" class="sw-lists-button__item--icon">
          <span class="sw-lists-button__item--label">{{ item.title }}</span>
        </div>
      </div>
      <div class="mid_title">
        <img  src="../../assets/dj/index_title_l.svg" alt="">
        <p class="mid_title_text">{{ consTitle }}</p>
        <img src="../../assets/dj/index_title_r.svg" alt="">
      </div>
      <div class="el-tabs__content">
        <div class="multi_list_box" v-if="(selectItem.id != 126 && selectItem.id != 127 && selectItem.id != 13 && selectItem.id != 33 && selectItem.id != 131) && selectItem.children && selectItem.children.length">
          <div class="multi_list"
            v-if="index < 3"
            v-for="(item, index) in selectItem.children"
            :key="index">
            <div class="title">
              <span>{{ item.title }}</span>
              <!-- <span class="refresh" @click="changePageFn(index)">
                <i class="el-icon-refresh"></i>
                换一批
              </span> -->
            </div>
            <div class="content">
              <div class="sw-lists">
                <div class="sw-lists__item is-icon is-dot" v-for="(item1, index1) in item.children" :key="index1">
                  <div class="sw-lists__item--label">
                    <div class="sw-lists__item--text" @click="goInfo(item1.sourceId)">{{ item1.title }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="selectItem.id == 126" class="video_list">
          <div v-for="(item, index) in videoList" :key="index" class="video_list_item">
            <img v-show="!item.isPlay" :src="item.fmImg" class="fm">
            <!-- <video ref="video1" muted controls class="video-player-s">
              <source :src="item.src" type="video/mp4">
            </video> -->
            <p class="video_tit">{{ item.title }}</p>
            <div class="play" v-show="!item.isPlay" @click="playFn(item, index)">
              <i class="el-icon-video-play"></i>
            </div>
          </div>
        </div>
        <div v-else-if="selectItem.id == 13 || selectItem.id == 33" class="video_list">
          <!-- 人民日报、民生周刊 -->
          <div class="rmrb_list">
            <div class="sw-lists-pictitle__imgcontainer">
              <div class="slot_images">
                <img v-if="selectItem.id == 13" src="http://7kuangtech.com/images/rmrb2024041701_b.jpg">
                <img v-else src=" http://7kuangtech.com/images/mszk.png">
              </div>
            </div>
            <ul class="sw-lists-pictitle__container">
              <li class="sw-lists-pictitle__item is-refreshtitle">
                <div data-v-63320d1e="" class="slot_header">
                  <div data-v-63320d1e="" class="datebox">
                    <img src="@/assets/dj/date.png" class="icon svg-icon" style="margin-right: 5px;" />
                    <span>{{ getTodayDateTime }}</span>
                  </div>
                  <div class="operate"></div>
                </div>
              </li>
              <li class="sw-lists-pictitle__item is-refresh"
                v-for="(item, index) in selectItem.children[0].children"
                :key="index"
                @click="goInfo(item.sourceId)">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if="selectItem.id == 131">
          <!-- 党建培训 -->
          <div class="djpx_list">
            <ul class="sw-lists-pictitle__container">
              <li class="sw-lists-pictitle__item is-refresh"
                v-for="(item, index) in selectItem.children[0].children"
                :key="index">
                <p>{{ item.title }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if="selectItem.id == 127" class="dzzl_list">
          <!-- 党政资料 -->
          <div class="sw-lists-thumb is-collapse">
            <div class="sw-lists-thumb__item">
              <img src="http://7kuangtech.com/images/%E4%B9%A0%E8%BF%91%E5%B9%B3%E7%94%A8%E5%85%B8_20231208175535A010.png" title="《习近平用典》" class="sw-lists-thumb__item--icon">
            </div>
            <div class="sw-lists-thumb__item">
              <img src="http://7kuangtech.com/images/%E6%B1%9F%E5%B1%B1%E5%B0%B1%E6%98%AF%E4%BA%BA%E6%B0%91%E4%BA%BA%E6%B0%91%E5%B0%B1%E6%98%AF%E6%B1%9F%E5%B1%B1_20231208175636A015.png" title="《江山就是人民 人民就是江山》" class="sw-lists-thumb__item--icon">
            </div>
            <div class="sw-lists-thumb__item">
              <img src="http://7kuangtech.com/images/%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A_20231211175423A001.png" title="工作报告" class="sw-lists-thumb__item--icon">
            </div>
            <div class="sw-lists-thumb__item">
              <img src="http://7kuangtech.com/images/%E4%B8%A4%E4%BC%9A%E8%A7%A3%E8%AF%BB_20231211175758A002.png" title="两会解读" class="sw-lists-thumb__item--icon">
            </div>
          </div>
        </div>
        <div v-else class="empty">暂无数据</div>
      </div>
      <!-- <div class="showAll" @click="showAllFn">
        <p>{{showAll ? '收起' : '显示更多'}}</p>
      </div> -->
    </div>
  </div>
  <el-dialog
    :title="selectVideoItem.title"
    :visible.sync="dialogVisible"
    width="50%"
    :before-close="handleClose">
    <div class="videoBox">
      <video v-if="selectVideoItem.title" ref="video1" muted controls class="video-player-s">
        <source :src="selectVideoItem.src" type="video/mp4">
      </video>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">关 闭</el-button>
    </span>
  </el-dialog>
  <div class="copyright_cont">
    <p>民生周刊版权所有 未经书面授权禁止使用</p>
  </div>
</div>
</template>

<script>
import {
  getCategoryList,
  articlePage
} from '@/api/index'
import {
  getTodayDate
} from '@/utils/date'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import IndexMb1Left from '@/components/IndexMb1Left'
import NavYwsd from '@/components/NavYwsd'
import IndexMb2Left from '@/components/IndexMb2Left'
import IndexMb2Right from '@/components/IndexMb2Right'
import IndexMb3Left from '@/components/IndexMb3Left'
import IndexMb3Right from '@/components/IndexMb3Right'
import Footer from '@/components/Footer'
export default {
  components: {
    IndexLogoHeader,
    Header,
    IndexMb1Left,
    NavYwsd,
    IndexMb2Left,
    IndexMb2Right,
    IndexMb3Left,
    IndexMb3Right,
    Footer
  },
  data () {
    return {
      menuList: [],
      consTitle: '',
      selectItem: null,
      selectIndex: 0,
      showAll: false,
      getTodayDateTime: getTodayDate(),
      playerOptions: {
        // 视频url设置,直播流为例
        sources: [{
          src: 'http://7kuangtech.com/video/hryx.mp4', // 视频文件地址
          type: 'video/mp4'// 视频类型，这里可以不写，如果写一定要写对，否则会无法播放
        }],
        // 其他设置项
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 提示信息
        autoplay: false, // 是否自动播放
        controls: true, // 是否显示控制栏
        poster: '../../assets/dj/fm1.jpg'// 视频封面
      },
      videoList: [{
        title: '中国共产党为何能让旧中国焕然一新',
        src: 'http://7kuangtech.com/video/hryx.mp4',
        fmImg: 'https://qktech.oss-cn-huhehaote.aliyuncs.com/images/1.png',
        isPlay: false
      }, {
        title: '中国共产党为什么能建立新中国',
        src: 'http://7kuangtech.com/video/wsm.mp4',
        fmImg: 'https://qktech.oss-cn-huhehaote.aliyuncs.com/images/2.png',
        isPlay: false
      }],
      dialogVisible: false,
      selectVideoItem: {
        title: '',
        src: '',
        fmImg: '',
        isPlay: false
      }
    }
  },
  created () {
    this.menuDataList()
  },

  methods: {
    async menuDataList () {
      const data = await getCategoryList()
      this.menuList = data.data
      this.menuList.forEach((item, index) => {
        this.menuList[index].showAll = false
        if (item.children) {
          if (this.menuList[index].children) {
            this.menuList[index].children.forEach((item1, index1) => {
              this.$set(this.menuList[index].children[index1], 'children', [])
              this.$set(this.menuList[index].children[index1], 'pageNum', 1)
            })
          }
        }
      })
      this.consTitle = this.menuList[0].title
      this.selectItem = this.menuList[0]
      this.selectIndex = 0
      this.menuList[0].children[0].children = await this.getListFn(this.menuList[0].children[0], 0) || []
      this.menuList[0].children[1].children = await this.getListFn(this.menuList[0].children[1], 1) || []
      this.menuList[0].children[2].children = await this.getListFn(this.menuList[0].children[2], 2) || []
      console.log('第一次数据：', this.menuList)
      console.log('渲染数据：', this.selectItem)
    },
    async getListFn (item, index) {
      console.log('当前的页数', item.pageNum)
      console.log('当前请求的数据', item, this.selectItem)
      const data = await articlePage({
        current: item.pageNum,
        size: 10,
        categoryIds: item.id
      })
      console.log('列表：', data)
      return data.data.records
    },
    mouseenterFn (item, index) {
      console.log(2220, item)
      // if (item.id === this.selectIndex) return
      if (item.children && item.children.length) {
        item.children.forEach(async (item1, index1) => {
          if (index1 < 3) {
            console.log(1110, item)
            let list = await this.getListFn(item1, index) || []
            this.$set(this.menuList[index].children[index1], 'children', list)
            this.$set(this.menuList[index].children[index1], 'pageNum', 1)
            // this.menuList[index].children = await this.getListFn(item, index) || []
          }
        })
      }
      this.consTitle = item.title
      this.selectIndex = index
      this.selectItem = this.menuList[index]
      console.log('总数据：', this.menuList)
    },
    showAllFn () {
      // this.menuList[index].showAll = !this.menuList[index].showAll
      // item.showAll = !item.showAll
      this.showAll = !this.showAll
    },
    // 换一批
    async changePageFn (index) {
      this.menuList[this.selectIndex].children[index].pageNum += 1
      console.log('当前切换的是：', this.menuList[this.selectIndex].title, this.menuList[this.selectIndex].children[index].title)
      this.menuList[this.selectIndex].children[index].children = await this.getListFn(this.menuList[this.selectIndex].children[index], index)
    },
    goInfo (id) {
      this.$router.push({
        path: '/Info',
        query: {
          id: id
        }
      })
    },
    // 播放视频
    playFn (item, index) {
      // this.videoList[index].isPlay = !this.videoList[index].isPlay
      this.selectVideoItem = item
      this.dialogVisible = true
      // this.$refs.video1.play()
    },
    handleClose () {
      this.dialogVisible = false
      this.selectVideoItem = {
        title: '',
        src: '',
        fmImg: '../../assets/dj/fm1.jpg',
        isPlay: false
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.body{
  background: #f5f5f5;
}
.header {
  width: 100%;
    height: 114px;
    max-width: 100%;
    background-color: #D42A2A;
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1116;
    font-size: 16px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    .title {
      // color: rgb(255, 218, 128);
      font-weight: 600;
      font-family: 微软雅黑;
      font-size: 22px;
      display: flex;
      // align-items: center;
      .logo1 {
        width: 130px;
      }
      .tit {
        margin-top: 38px;
        color: #ca3a2c;
      }
    }
}
.appMainIndex {
  min-height: calc(100vh - 60px);
  background: url(../../assets/dj/index_bg.png) no-repeat top / 100% 460px;
  width: 100%;
  overflow: auto;
  padding-top: 56px;
  .search-header {
    text-align: center;
    padding: 100px 0 50px;
    .search-header-title {
      color: rgb(255, 227, 148);
      font-weight: 600;
      font-family: "Heiti SC";
      font-size: 48px;
      letter-spacing: 5px;
    }
    .search-header-box {
      display: flex;
      justify-content: center;
      margin: 40px 0 6px;
      .search-header-box-input {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 8px;
        border: 2px solid #cacaca;
        width: 900px;
        height: 52px;
        box-sizing: border-box;
        text-align: left;
        .search-header-box-input-left {
          width: 250px;
          padding-left: 20px;
          display: flex;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 1px;
            height: 44px;
            position: absolute;
            right: -15px;
            top: -12px;
            background: #ddd;
          }
          .search-header-box-input-left-1 {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: space-between;
            .label-text {
              margin-right: 10px;
            }
          }
          .search-header-box-input-left-2 {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: space-between;
            margin-left: 25px;
            .label-text {
              margin-right: 10px;
            }
          }
        }
        .search-header-box-input-right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 30px;
          padding-right: 30px;
          flex: 1;
          input {
            flex: 1;
            height: 30px;
            border: 0;
            font-size: 16px;
            width: 450px;
          }
          input:focus {
            outline: none; /* 移除默认的轮廓边框 */
            border: 0; /* 设置新的边框样式 */
          }
          .el-icon-search {
            font-size: 20px;
            color: #d42a2a;
          }
        }
      }
    }
  }
  .section-box {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px;
    .sw-lists-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 8px;
      -webkit-user-select: none;
      margin: 0 auto;
      .sw-lists-button__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // flex: 1;
        width: 180px;
        height: 150px;
        border-radius: 8px;
        background: #fff;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          border-color: #d42a2a;
          background: #fff;
          box-shadow: 0px 4px 24px 0px #f6d4d4;
        }
        .sw-lists-button__item--icon {
          width: 70px;
          height: 70px;
          margin-bottom: 14px;
        }
        .sw-lists-button__item--label {
          color: #5c5c5c;
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Source Han Sans CN;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
      }
    }
    .mid_title {
      width: 100%;
      margin: 48px 0 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      .mid_title_text {
        text-align: center;
        width: auto;
        height: 52px;
        line-height: 52px;
        font-size: 32px;
        background: linear-gradient(90deg, #f72b23, #ff5a13);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Microsoft YaHei;
        font-weight: 700;
        word-wrap: break-word;
        cursor: pointer;
      }
    }
    .el-tabs__content {
      overflow: inherit;
      height: 521px;
      position: relative;
      overflow: hidden;
      .multi_list_box {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
      }
      &.showAllList {
        height: auto !important;
      }
      .multi_list {
        flex: 1;
        min-width: 374px;
        max-width: 591px;
        height: 480px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #fff;
        &:hover {
          box-shadow: 0 2px 24px rgba(0,0,0,.16)
        }
        .title {
          width: 100%;
          height: 80px;
          background: url(../../assets/dj/index_djan_bg.png) no-repeat top / 100% 100%;
          color: #ffea9e;
          font-size: 20px;
          font-weight: 700;
          word-wrap: break-word;
          text-align: left;
          padding: 26px 20px;
          margin-bottom: 0px;
          display: flex;
          justify-content: space-between;
          align-items:self-end;
          .refresh {
            font-size: 14px;
            cursor: pointer;
          }
        }
        .content {
          padding: 10px;
          .sw-lists__item.is-icon {
            padding-left: 20px;
          }
          .sw-lists__item {
            position: relative;
            transition: background-color 0.3s;
          }
          .sw-lists__item.is-dot::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #3e3e3e;
            left: 10px;
            top: 20px;
            transform: translate(-50%, -50%);
          }
          .sw-lists__item--label {
            display: flex;
            justify-content: space-between;
            color: #3e3e3e;
            font-family: Source Han Sans CN;
            font-size: 16px;
            line-height: 24px;
            font-style: normal;
            font-weight: 500;
            transition: color 0.3s;
            cursor: pointer;
            padding: 8px;
            .sw-lists__item--text {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &:hover {
              color: #d42a2a;
            }
          }
        }
      }
    }
  }
  .showAll {
    height: 14px;
    color: #d42a2a;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
  }
}
.copyright_cont {
  width: 100%;
  height: 60px;
  background-color: #d42a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    color: #fff;
    font-size: 16px;
    letter-spacing: .5px;
    word-wrap: break-word;
  }
}
.video_list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  .video_list_item {
    width: 374px;
    height: 187px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 24px rgba(0,0,0,.4)
    }
    .fm {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .video_tit {
      width: 100%;
      font-size: 16px;
      line-height: 35px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #000;
      color: #fff;
      padding-left: 20px;
      z-index: 4;
    }
    .video-player.vjs-custom-skin {
      width: 100%;
      height: 100%;
    }
    .video-js {
      height: 100%;
    }
    .video-player-s {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .play {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 68px;
      left: 162px;
      cursor: pointer;
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      z-index: 2;
    }
  }
}
.empty {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rmrb_list {
  width: 1200px;
  // height: 540px;
  display: flex;
  color: #3e3e3e;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  margin: 0 auto;
  .sw-lists-pictitle__imgcontainer {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .slot_images {
      width: 300px;
      height: 450px;
      padding: 30px 16px;
      background-color: #fff;
      margin: 15px 16px;
      border-radius: 8px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.16);
      display: flex;
      justify-content: center;
      img {
          max-width: 100%;
          cursor: pointer;
      }
    }
  }
  .sw-lists-pictitle__container {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    font-size: 16px;
    font-family: "Source Han Sans CN";
    font-weight: 400;
    word-wrap: break-word;
    padding: 32px 16px 20px;
    .sw-lists-pictitle__item.is-refreshtitle {
        cursor: auto;
        &:hover {
          color: #3e3e3e;
        }
    }
    .sw-lists-pictitle__item:nth-child(1) {
        border-bottom: 1px solid #d6d6d6;
        padding: 0 0 16px 0;
        margin-bottom: 8px;
    }
    .sw-lists-pictitle__item {
        width: 100%;
        box-sizing: border-box;
        line-height: 24px;
        padding: 10px 0;
        cursor: pointer;
        font-family: "Source Han Sans CN";
        word-wrap: break-word;
    }
    .slot_header {
        line-height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .slot_header .datebox {
            display: flex;
            align-items: center;
            line-height: 24px;
            font-weight: 700;
            .slot_header .datebox .icon {
                vertical-align: middle;
                font-size: 24px;
                margin-right: 8px;
            }
            .svg-icon {
                width: 1em;
                height: 1em;
                vertical-align: -.15em;
                fill: currentColor;
                overflow: hidden;
                margin: 0 2px;
            }
        }
    }
    .sw-lists-pictitle__item.is-refresh {
        color: #3e3e3e;
        font-size: 16px;
        font-family: "Source Han Sans CN";
        font-weight: 500;
        word-wrap: break-word;
        position: relative;
        padding: 9px 0 9px 24px;
        &:hover {
          color: #d42a2a
        }
    }
    .sw-lists-pictitle__item.is-refresh::after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #3e3e3e;
        left: 10px;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .slot_header .datebox {
        display: flex;
        align-items: center;
        line-height: 24px;
        font-weight: 700;
    }
  }

}
.djpx_list {
  width: 1200px;
  // height: 540px;
  display: flex;
  color: #3e3e3e;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  margin: 0 auto;
  .sw-lists-pictitle__imgcontainer {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .slot_images {
      width: 300px;
      height: 450px;
      padding: 30px 16px;
      background-color: #fff;
      margin: 15px 16px;
      border-radius: 8px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.16);
      display: flex;
      justify-content: center;
      img {
          max-width: 100%;
          cursor: pointer;
      }
    }
  }
  .sw-lists-pictitle__container {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    font-size: 16px;
    font-family: "Source Han Sans CN";
    font-weight: 400;
    word-wrap: break-word;
    padding: 32px 16px 20px;
    .sw-lists-pictitle__item.is-refreshtitle {
        cursor: auto;
        &:hover {
          color: #3e3e3e;
        }
    }
    // .sw-lists-pictitle__item:nth-child(1) {
    //     border-bottom: 1px solid #d6d6d6;
    //     padding: 0 0 16px 0;
    //     margin-bottom: 8px;
    // }
    .sw-lists-pictitle__item {
        width: 100%;
        box-sizing: border-box;
        line-height: 24px;
        padding: 10px 0;
        cursor: pointer;
        font-family: "Source Han Sans CN";
        word-wrap: break-word;
    }
    .slot_header {
        line-height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .slot_header .datebox {
            display: flex;
            align-items: center;
            line-height: 24px;
            font-weight: 700;
            .slot_header .datebox .icon {
                vertical-align: middle;
                font-size: 24px;
                margin-right: 8px;
            }
            .svg-icon {
                width: 1em;
                height: 1em;
                vertical-align: -.15em;
                fill: currentColor;
                overflow: hidden;
                margin: 0 2px;
            }
        }
    }
    .sw-lists-pictitle__item.is-refresh {
        color: #3e3e3e;
        font-size: 16px;
        font-family: "Source Han Sans CN";
        font-weight: 500;
        word-wrap: break-word;
        position: relative;
        padding: 9px 0 9px 24px;
        &:hover {
          color: #d42a2a
        }
    }
    .sw-lists-pictitle__item.is-refresh::after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #3e3e3e;
        left: 10px;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .slot_header .datebox {
        display: flex;
        align-items: center;
        line-height: 24px;
        font-weight: 700;
    }
  }

}
// 党政资料
.dzzl_list{
  .sw-lists-thumb.is-collapse {
    justify-content: center;
    align-items: center;
  }
  .sw-lists-thumb {
    display: flex;
    flex-wrap: wrap;
    .sw-lists-thumb__item {
        position: relative;
        margin: 5px;
        width: 268px;
        border-radius: 8px;
        transition: all 0.3s;
        top: 0;
        cursor: pointer;
        overflow: hidden;
        &:hover {
          top: -4px;
        }
        img {
          max-width: 100%;
        }
    }
  }
}
.sw-lists-pictitle__item:hover{
  color: #d42a2a
}
</style>
