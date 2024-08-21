<template>
<div class="body">
  <div class="header">
    <span class="title">人民社区党建服务平台</span>
  </div>
  <div class="conts">
    <!-- 标题： 行稳致远，中国号扬帆再出发
    副标题：
    作者： 李拯
    日期： 2022年12月30日
    来源： 人民网
    摘要： 这篇文章主要讲述了中国的韧性和潜力以及未来的发展方向。文章指出，中国经济在疫情冲击下表现出色，实现了经济的稳步增长和社会的安定。同时，文章强调了稳定是中国发展的重要保证，包括经济社会发展的大局稳定、民生的稳定和心理上的稳定等。文章呼吁人们在面临困难和挑战时要坚定信心，保持稳定的心态和态度，为实现中华民族的伟大复兴而不懈努力。 -->
    <p class="title">{{ articleInfo.title }}</p>
    <div class="subtitle" v-html="articleInfo.summary"></div>
    <p class="user">{{ articleInfo.author }}</p>
    <p class="date">{{ articleInfo.publishDate }}</p>
    <div class="cons" v-html="articleInfo.content"></div>
  </div>
</div>
</template>

<script>
import { articleDetail } from '@/api/index'
export default {
  components: {
  },
  data () {
    return {
      articleInfo: null
    }
  },
  // created () {
  //   let id = this.$route.query.id
  //   console.log('详情id', id)
  //   this.getArticleDetail(id)
  // },
  mounted () {
    let id = this.$route.query.id
    console.log('详情id', id)
    this.getArticleDetail(id)
  },

  methods: {
    async getArticleDetail (id) {
      const data = await articleDetail({sourceId: id})
      console.log('data', data.data)
      this.articleInfo = data.data
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.header {
  width: 100%;
  height: 56px;
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
  .title {
    color: rgb(255, 218, 128);
    font-weight: 600;
    font-family: 微软雅黑;
    font-size: 18px;
  }
}
.conts {
  width: 1200px;
  margin: 70px auto 0;
  .title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    line-height: 32px;
    margin-bottom: 20px;
    text-align: center;
  }
  .subtitle {
    font-size: 14px;
    color: #666;
    line-height: 24px;
    margin-bottom: 10px;
    text-indent: 24px;
  }
  .cons {
    font-size: 14px;
  }
}
</style>
