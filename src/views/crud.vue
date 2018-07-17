<template lang="html">
    <div id="crud">
      <div style="padding-top:5px;padding-bottom:5px;float:left">
        <span>员工姓名：</span><input type="text" id="key"  />
        <input type="button" value="查找" onclick="search()"/>
        <input type="button" value="Add" onclick="addRow()" style="margin-left:200px;"/>
        <input type="button" value="Remove" onclick="removeRow()" />
        <input type="button" value="Save" onclick="saveData()" style="margin-left:100px;"/>
      </div>
      <br/><br/>
      <div id="datagrid1" class="mini-datagrid" style="width:800px;height:280px;"
           url='../../static/data/data.txt' idField="id"
           allowResize="true" pageSize="20"
           allowCellEdit="true" allowCellSelect="true" multiSelect="true"
      >
        <div property="columns">
          <div type="checkcolumn"></div>
          <div field="loginname" width="120" headerAlign="center" allowSort="true">员工帐号
            <input property="editor" class="mini-textbox" style="width:100%;"/>
          </div>
          <div field="gender" width="100" renderer="onGenderRenderer" align="center" headerAlign="center">性别
            <input property="editor" class="mini-combobox" style="width:100%;" data="Genders"/>
          </div>
          <div field="age" width="100" allowSort="true" >年龄
            <input property="editor" class="mini-spinner" minValue="0" maxValue="200" value="25" style="width:100%;"/>
          </div>
          <div field="birthday" width="100" allowSort="true" dateFormat="yyyy-MM-dd">出生日期
            <input property="editor" class="mini-datepicker" style="width:100%;"/>
          </div>
          <div field="remarks" width="120" headerAlign="center" allowSort="true">备注
            <input property="editor" class="mini-textarea" style="width:100%;" minHeight="80"/>
          </div>
          <div field="createtime" width="100" headerAlign="center" dateFormat="yyyy-MM-dd" allowSort="true">创建日期</div>
        </div>
      </div>
    </div>
</template>

<script lang="js">
  export default {
    name: 'crud',
    data: function () {
      return {
        'message': 'Hello'
      }
    },
    methods: {
      'onHelloClick': function () {
        alert('Hello !')
      }
    },
    mounted: function () {
      /* eslint-disable */
      mini.parse()
      var grid = mini.get('datagrid1')
      grid.load()
    }
  }
</script>

<style scoped lang="scss">
@import "../../static/scripts/miniui/themes/default/miniui.css";
#crud{
  margin-left:15%;
}
</style>
