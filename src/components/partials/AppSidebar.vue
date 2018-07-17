<template lang="html">
  <div class="sidebar">
    <div class="sidebar-toggle"><i class = "fa fa-fw fa-dedent" ></i></div>
    <div id="mainMenu">
      <ul class="menu">
        <!--   侧边栏导航例子 开始  -->
        <li class="has-children">
          <a class="menu-title"><i class="menu-icon fa fa fa-send-o"></i><span class="menu-text">表格示例</span><span class="menu-arrow fa"></span></a>
          <ul class="menu-submenu">
            <li ><a class="menu-title"><i class="menu-icon fa fa fa-desktop"></i><router-link class="menu-text" to="/crud">基本表格</router-link></a></li>
          </ul>
        </li>
        <!-- 侧边栏导航例子 结束  -->
      </ul>
    </div>
  </div>
</template>

<script lang="js">
import '../../../static/scripts/jquery.min.js'
import '../../../static/res/menutip.js'
import '../../../static/scripts/miniui/miniui.js'


export default {
  name: 'app-sidebar',
  mounted:function () {
    $('.menu-title').click(function(event){
      console.log(event)
      var el = $(event.currentTarget);
      var li = el.parent();
      li.toggleClass('open');
    });
    $("#toggle, .sidebar-toggle").click(function () {
      $('body').toggleClass('compact');
      mini.layout();
    });
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
</style>
