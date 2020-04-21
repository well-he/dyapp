<template>
  <div class="tab-bar">
    <div class="item"
         @click="changeTab(0)">
      <router-link tag="span"
                   to="/index"
                   :class="tabIndex==0?'active':''">
        首页
      </router-link>
    </div>
    <div class="item"
         @click="changeTab(1)">
      <router-link tag="span"
                   to="/follow"
                   :class="tabIndex==1?'active':''">
        熟人
      </router-link>
    </div>
    <div class="item"
         @click="changeTab(2)">
      <router-link tag="span"
                   to="/index"
                   :class="tabIndex==2?'active':''"
                   class="addbtn">
        +
      </router-link>
    </div>
    <div class="item"
         @click="changeTab(3)">
      <span :class="tabIndex==3?'active':''"> 消息 </span>
    </div>
    <div class="item"
         @click="changeTab(4)">
      <span :class="tabIndex==4?'active':''">我</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index
    }
  }
}
</script>

<style scoped>
.tab-bar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #cccccc;
  font-style: 16px;
  display: flex;
  justify-items: center;
}
.tab-bar .item {
  flex: 1;
  text-align: center;
}
.tab-bar .item span {
  padding: 10px 0;
}
.tab-bar .item .active {
  color: #ffffff;
}
.tab-bar .item .addbtn {
  background-color: #fff;
  color: #000;
  font-size: 25px;
  display: block;
  width: 50px;
  height: 15px;
  line-height: 15px;
  margin: 7.5px auto;
  border-radius: 45px;
}
</style>