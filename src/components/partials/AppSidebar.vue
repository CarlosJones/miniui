<template lang="html">
  <div class="sidebar">
    <div class="sidebar-toggle"><i class = "fa fa-fw fa-dedent" ></i></div>
    <div id="mainMenu"></div>
  </div>
</template>

<script lang="js">
import '../../../static/scripts/jquery.min.js'
import {Menu} from '../../../static/res/menu/menu.js'
import '../../../static/res/menutip.js'
import '../../../static/scripts/boot.js'
import '../../../static/scripts/miniui/miniui.js'


export default {
  name: 'app-sidebar',
  mounted:function () {
    $.ajax({
      url: "../../../static/data/menu.txt",
      success: function (text) {
        var data = mini.decode(text);
        menu.loadData(data);
      }
    })

    var menu = new Menu("#mainMenu", {
      itemclick: function (item) {
        if (!item.children) {
          activeTab(item);
        }
      }
    });
  }
}
function activeTab(item) {
  mini.parse()
  var tabs = mini.get("mainTabs");
  console.log('...'+mini)
  console.log('...'+tabs)
  var tab = tabs.getTab(item.id);
  if (!tab) {
    tab = { name: item.id, title: item.text, url: item.url, iconCls: item.iconCls, showCloseButton: true };
    tab = tabs.addTab(tab);
  }
  tabs.activeTab(tab);
}
</script>

<style scoped lang="scss">
@import '../../../static/res/menu/menu.css';
.app-sidebar {

}
</style>
