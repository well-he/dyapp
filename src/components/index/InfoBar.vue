<template>
  <div class="info-bar">
    <div class="infobar-item"><span>@zyq</span></div>
    <div class="infobar-item"><span>抖音</span></div>
    <div class="infobar-item music">
      <span class="iconfont icon-yinfu4"></span>
      <div class="music-name">
        <span data-text="by coderV"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBar",
  data() {
    return {}
  }
}
</script>

<style scoped>
.info-bar {
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
}
.info-bar .infobar-item {
  padding: 5px 0;
}
.infobar-item .icon-yinfu4 {
  margin-right: 5px;
}
.music {
  display: flex;
}
.music .music-name {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}
.music .music-name span {
  display: inline-block;
  animation: scroll 2s linear infinite;
}
.music .music-name span::after {
  content: attr(data-text);
  margin-left: 30px;
}
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 20px));
  }
}
</style>