<template>
  <div id="app">  
    <Layout :style="{minHeight: '100vh'}">
      <!-- Side Navbar -->
      <!-- <Sider ref="side1" hide-trigger class="vertical-sidbar theme-bg-color hide-xs" collapsible :collapsed-width="75" v-model="isCollapsed">
        <!-- lago ->
        <div class="navbar-logo text-left pt-10 pb-10 pl-10">
          <!-- <span class="color-grey font-weight-700 font-default">Ve</span>
          <span class="color-primary font-weight-700 secondary-font">nom</span> ->
          <img src="https://dashboard.zawiastudio.com/demo/img/logo.png" width="40" height="40" class="v-middle"/>
          <span class="color-grey font-15 text-uppercase font-weight-600 v-middle v-middle pl-10">Venom</span>
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon" 
            type="ios-apps"
            size="20"
            class="color-grey collapse-icon"
          ></Icon>
        </div>
        <Sidebar />
      </Sider> -->

      <!-- Top Navigation Toolbar -->
      <Layout>
        <Toolbar />
        <!-- Our Router -->
        <router-view/>
      </Layout>
        
    </Layout>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar/Toolbar'; 

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>
<style src="./assets/css/app.scss"  lang="scss"> 
</style>
