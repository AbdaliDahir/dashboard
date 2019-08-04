<template>
  <div>

    <Menu :mode="ourMode" theme="light" active-name="1" class="text-left" :class="{vertical: VerticalIsActive}">
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-stats" />
              Apps
          </template>
          <MenuGroup title="All Aps" class="text-left">
              <MenuItem name="1-1">
                <router-link to="/profile"> 
                  <Icon size="15" type="ios-calendar" class="color-primary pr-10 v-middle v-middle" /> 
                  <span class="v-middle"> Profile </span>
                </router-link>
              </MenuItem>
              <MenuItem name="1-2">
                <router-link to="/chat-app">
                  <Icon size="15" type="ios-chatbubbles" class="color-primary pr-10 v-middle v-middle" /> 
                  <span class="v-middle"> Chat </span>
                </router-link>
              </MenuItem>
              <MenuItem name="1-3">
                <Icon size="15" type="ios-people" class="color-primary pr-10 v-middle v-middle" /> 
                <span class="v-middle"> Calendar </span></DropdownItem> 
              </MenuItem>
              <MenuItem name="1-4">
                <Icon size="15" type="ios-archive" class="color-primary pr-10 v-middle v-middle" /> 
                <span class="v-middle"> File Manager </span>
              </MenuItem>
          </MenuGroup>
      </Submenu> 

      <Submenu name="2">
            <template slot="title">
              <Icon type="ios-stats" />
              Pages
            </template>
            <MenuGroup title="All pages" class="text-left ">
                <MenuItem name="2-1">
                  <router-link to="/profile"> 
                    <span class="text-capitalize font-12"> authentication </span>
                  </router-link>
                </MenuItem>
                <MenuItem name="2-2">
                  <router-link to="/chat-app">
                    <Icon size="15" type="ios-chatbubbles" class="color-primary pr-10 v-middle v-middle" /> 
                    <span class="v-middle"> Chat </span>
                  </router-link>
                </MenuItem>
                <MenuItem name="2-3">
                  <Icon size="15" type="ios-people" class="color-primary pr-10 v-middle v-middle" /> 
                  <span class="v-middle"> Calendar </span></DropdownItem> 
                </MenuItem>
                <MenuItem name="2-4">
                  <Icon size="15" type="ios-archive" class="color-primary pr-10 v-middle v-middle" /> 
                  <span class="v-middle"> File Manager </span>
                </MenuItem>
            </MenuGroup>
        </Submenu> 

    </Menu>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ourMode: 'horizontal',
      VerticalIsActive: false,
      fullWidth: document.documentElement.clientWidth
    }
  },
  // bind event handlers to the `handleResize` method (defined below)
  ready: function () { 
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
     window.removeEventListener('resize', this.handleResize)
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth;
      if (this.fullWidth < 900) {
        this.ourMode = 'vertical';
        this.VerticalIsActive = true
      } else {
        this.ourMode = 'horizontal';
        this.VerticalIsActive = false
      }
    }
  } 
};
</script>

<style lang="scss" scoped>
/deep/.ivu-menu-horizontal.ivu-menu-light:after {
  display: none;
}
.nav-link {
	text-transform: uppercase;
  font-size: .78rem; 
}
.ivu-dropdown-item > .ivu-icon.float-right {
  top: 3px;
  right: -14px;
	position: relative; 
}
.nav-dropdown {
	.ivu-select-dropdown {
		min-width: 160px;
	}
}
.mega-drop-down {
  &.ivu-dropdown { 
    position: relative;
  }
  .ivu-select-dropdown {
    left: 0px !important;
    right:auto;
  }
}
.mega-title {
  font-size: .68rem;
  letter-spacing: .7px;
  color: #8392a5;
  line-height: 1.2;
  margin-bottom: 9px;
}
.doted-list {
	ul li {
		position: relative;
		padding-left: 30px;
		&:before {
			position: absolute;
			left: 10px;
			top: 50%;
			content: "";
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background: #dde1fb;
			transform: translateY(-50%);
		}
	}
}

/** Vertical Menu ***/
/deep/.ivu-menu-vertical.vertical {
  position: fixed;
  top: 0px;
  left: 0px;
  margin-left: 0px;
  height: 100%;
  > li {
    position: relative;
    z-index:90;
  }
}
</style>
