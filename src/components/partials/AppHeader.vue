<template lang="html">
  <div class="navbar">
    <div class="navbar-header">
      <div class="navbar-brand">MiniUI</div>
      <div class="navbar-brand navbar-brand-compact">M</div>
    </div>
    <ul class="nav navbar-nav">
      <li><a id="toggle"><span class="fa fa-bars" ></span></a></li>
      <li class="icontop"><a href="#"><i class="fa fa-hand-pointer-o"></i><span >系统演示</span></a></li>
      <li class="icontop"><a href="#"><i class="fa fa-puzzle-piece"></i><span >开发文档</span></a></li>
      <li class="icontop"><a href="#"><i class="fa fa-sort-amount-asc"></i><span >人力资源</span></a></li>
      <li class="icontop"><a href="#"><i class="fa  fa-cog"></i><span >系统设置</span></a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li ><a href="#"><i class="fa fa-paper-plane"></i> 代办事项</a></li>
      <li><a href="#"><i class="fa fa-pencil-square-o"></i> 修改密码</a></li>
      <li class="dropdown">
        <a class="dropdown-toggle userinfo">
          <img class="user-img" src="../../../static/res/images/user.jpg" />个人资料<i class="fa fa-angle-down"></i>
        </a>
        <ul class="dropdown-menu pull-right">
          <li ><a href="#"><i class="fa fa-eye "></i> 用户信息</a></li>
          <li><a href="#"><i class="fa fa-user"></i> 退出登录</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
export default {
  name: 'app-header'
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
