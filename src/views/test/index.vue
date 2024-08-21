<template>
<div class="body pc">
  <div class="card">
    <div class="front">前面内容</div>
    <div class="back">后面内容</div>
  </div>
</div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {

  },

  methods: {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.card {
  position: relative;
  width: 400px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}

.card:hover .front {
  transform: rotateY(-180deg);
}
.card:hover .back{
  transform: rotateY(0);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 10px;
  backface-visibility: hidden;
  transition: all 1s ease;
}

.front {
  background-color: brown;
}

.back {
  background-color: darkcyan;
  transform: rotateY(180deg);
}
</style>
