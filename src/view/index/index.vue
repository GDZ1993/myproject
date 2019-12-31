<template>
  <div class="layout">
    <Sider ref="side1" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="index-MenuName">仓储管理系统</div>
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </template>
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
        </Submenu>
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
            <Icon type="md-power hover-div" size="20"/>
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
          <div style="height: 1500px">Content</div>
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

<style scoped>
  .index-MenuName{
    width: 100%;
    color: white;
    padding: 15px 0;
    text-align: center;
  }
  .Header-div {
    background: white;
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
  }
</style>
