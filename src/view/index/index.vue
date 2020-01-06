<template>
  <div class="layout">
    <Sider ref="side1" class="index-Sider" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="index-MenuName">仓储管理系统</div>
      <Menu active-name="1" theme="light" width="auto" :open-names="['1']" >
        <MenuItem name="1" to="/menuManage">
          <Icon type="ios-keypad"></Icon>
          菜单管理
        </MenuItem>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header class="Header-div">
        <div class="Header-view row-between">
          <div></div>
          <div class="row-div">
            <div class="user-name hover-div">
              <span>工号: 004500</span>
            </div>
            <Icon type="md-power hover-div" size="20" color="#ffff"/>
          </div>
        </div>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <router-view/>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>
<style>
  body{
    background: #f5f7f9;
  }
</style>
<style scoped>
  .ivu-menu-vertical.ivu-menu-light:after{
    width: 0px;
  }
  .index-Sider{
    background: white;
  }
  .index-MenuName{
    width: 95%;
    margin: auto;
    color: #7298FF;
    height: 63px;
    line-height: 63px;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid #7298FF;
    margin-bottom: 15px;
  }
  .Header-div {
    background: #7298FF;
    boxShadow: 0 2px 3px 2px rgba(0,0,0,.1);
    padding: 0;
  }
  .Header-view{
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
  .user-name{
    margin-right: 20px;
    color: white;
  }
</style>
