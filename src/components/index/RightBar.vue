<template>
  <div class="right-bar">
    <div class="rightbar-item">
      <div class="avatar-border">
        <!-- 头像 -->
        <a href="javascript:;">
          <img src="../../static/img/ava.jpg">
          <span class="iconfont icon-jia"></span>
        </a>
      </div>
    </div>
    <div class="item-icon">
      <a href="javascript:;">
        <span class="iconfont icon-nolove"></span>
        <p>18.8w</p>
      </a>
    </div>
    <div class="item-icon">
      <a href="javascript:;">
        <span class="iconfont icon-pinglun1"></span>
        <p>1.8w</p>
      </a>
    </div>
    <div class="item-icon">
      <a href="javascript:;">
        <span class="iconfont icon-fenxiang1"></span>
        <p>1.8w</p>
      </a>
    </div>
    <div class="rightbar-item">
      <a href="javascript:;">
        <div class="right-music">
          <img src="../../static/img/ava.jpg">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBar",
  data() {
    return {}
  }
}
</script>

<style>
.right-bar .rightbar-item {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-border {
  width: 50px;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  position: relative;
  text-align: center;
}
.avatar-border img {
  width: 49px;
  height: 49px;
  border-radius: 50%;
}
.avatar-border .icon-jia {
  color: #fe2c5a;
  font-size: 20px;
  position: absolute;
  top: 42px;
  right: 0;
  left: 0;
}
.right-bar .item-icon {
  height: 60px;
  padding-top: 12px;
  text-align: center;
}
.item-icon .iconfont {
  font-size: 30px;
  color: #ffffff;
}
.item-icon p {
  font-size: 14px;
  padding-top: 5px;
  color: #ffffff;
  margin-top: 0;
}
.rightbar-item .right-music {
  height: 54px;
  width: 54px;
  background: #2e2e2e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: round 6s 0s linear infinite;
}
.right-music img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>