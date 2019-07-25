<template>
  <div>
    <!-- Pages Dropdown -->
    <Dropdown trigger="click" class="ml-40 nav-dropdown">
      <a href="javascript:void(0)" 
			class="ivu-badge bg-grey hover-bg-primary color-primary hover-color-grey pl-15 pr-15 pt-10 pb-10 font-weight-600 font-secondary nav-link">
        Apps
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem> 
          <router-link to="/profile"> 
            <Icon size="15" type="ios-calendar" class="color-primary pr-10 v-middle v-middle" /> 
            <span class="v-middle"> Profile </span>
          </router-link>
        </DropdownItem>
        <DropdownItem>
          <Icon size="15" type="ios-chatbubbles" class="color-primary pr-10 v-middle v-middle" /> 
          <span class="v-middle"> Chat </span>
        </DropdownItem>
        <DropdownItem>
          <Icon size="15" type="ios-people" class="color-primary pr-10 v-middle v-middle" /> 
          <span class="v-middle"> Calendar </span></DropdownItem> 
        <DropdownItem>
          <Icon size="15" type="ios-archive" class="color-primary pr-10 v-middle v-middle" /> 
          <span class="v-middle"> File Manager </span>
        </DropdownItem>
        <DropdownItem>
          <Icon size="15" type="ios-mail" class="color-primary pr-10 v-middle v-middle" /> 
          <span class="v-middle"> Mail </span></DropdownItem> 
      </DropdownMenu>
    </Dropdown>

    <!-- Pages Dropdown -->
    <Dropdown trigger="click" class="ml-20 doted-list nav-dropdown">
      <a href="javascript:void(0)" 
			class="ivu-badge bg-grey hover-bg-primary color-primary hover-color-grey pl-15 pr-15 pt-10 pb-10 font-weight-600 font-secondary nav-link">
        Pages
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list" class="pl-10 pr-10 pt-10 pb-10"> 
        <!-- Sub menu -->
        <Dropdown placement="right-start" class="pt-0 pb-0 d-block">
          <DropdownItem>
            <span class="text-uppercase"> authentication </span>
            <Icon type="ios-arrow-forward" class="float-right"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem><span class="text-capitalize">Sign Up</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">Sign In</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">Verify Account</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">Forget Password</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!-- user Pages Menu -->
        <Dropdown placement="right-start" class="pt-0 pb-0 d-block">
          <DropdownItem>
            <span class="text-uppercase"> user pages </span>
            <Icon type="ios-arrow-forward" class="float-right"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem><span class="text-capitalize">view profile</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">connections</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">groups</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">events</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!-- Error Pages Menu -->
        <Dropdown placement="right-start" class="pt-0 pb-0 d-block">
          <DropdownItem>
            <span class="text-uppercase"> error pages </span>
            <Icon type="ios-arrow-forward" class="float-right"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem><span class="text-capitalize">404 page not found</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">500 internel server</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">503 service unavailable</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">505 forbidden</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!-- other Pages Menu -->
        <Dropdown placement="right-start" class="pt-0 pb-0 d-block">
          <DropdownItem>
            <span class="text-uppercase"> other pages </span>
            <Icon type="ios-arrow-forward" class="float-right"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem><span class="text-capitalize">Timeline</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">pricing</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">help center</span></DropdownItem>
            <DropdownItem><span class="text-capitalize">invoice</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </DropdownMenu>
    </Dropdown>

		<!-- Componenets Dropdown -->
    <Dropdown trigger="click" class="ml-10 nav-dropdown mega-drop-down">
      <a href="javascript:void(0)" 
			class="ivu-badge bg-grey hover-bg-primary color-primary hover-color-grey pl-15 pr-15 pt-10 pb-10 font-weight-600 font-secondary nav-link">
        Componnets
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <!-- Drop Down Menu -->
      <DropdownMenu slot="list" class="pl-20 pr-20 pt-20 pb-20 minimum-left"> 
        <!-- Sub menu --> 
        <div class="mb-10"> 
          <div class="d-flex"> 
            <div class="mb-5 mr-10" v-for="(list, index) in componentsList" :key="index">
              <h5 class="mega-title font-weight-400 text-uppercase secondary-font"> {{list.heading}} </h5>  
              <div v-for="listitem in list.content" :key="listitem.title">   
                <DropdownItem>
                  <Icon size="15" :type="listitem.icon" class="color-primary pr-10 v-middle v-middle" /> 
                  <span class="v-middle text-cepitalize"> {{listitem.title}} </span> 
                </DropdownItem> 
              </div>  
            </div>
          </div> 
        </div> 
      </DropdownMenu>
      <!-- ./Drop Down Menu --> 
    </Dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentsList: [
        {
          heading : "charts",
          content : [
            {
              title: "morris charts",
              icon: "ios-mail"
            },
            {
              title: "flot charts",
              icon: "ios-mail"
            },
            {
              title: "chartjs",
              icon: "ios-mail"
            },
            {
              title: "chartist",
              icon: "ios-mail"
            },
            {
              title: "rickshaw",
              icon: "ios-mail"
            },
            {
              title: "sparkline 1 ",
              icon: "ios-mail"
            }
          ]
        },
        {
        heading : "basic elemnts",
        content : [
            {
              title: "morris charts",
              icon: "ios-mail"
            },
            {
              title: "flot charts",
              icon: "ios-mail"
            },
            {
              title: "chartjs",
              icon: "ios-mail"
            },
            {
              title: "chartist",
              icon: "ios-mail"
            },
            {
              title: "rickshaw",
              icon: "ios-mail"
            },
            {
              title: "sparkline",
              icon: "ios-mail"
            }
          ]
        },
        {
        heading : "maps",
          content : [
            {
              title: "morris charts",
              icon: "ios-mail"
            },
            {
              title: "flot charts",
              icon: "ios-mail"
            },
            {
              title: "chartjs",
              icon: "ios-mail"
            },
            {
              title: "chartist",
              icon: "ios-mail"
            },
            {
              title: "rickshaw",
              icon: "ios-mail"
            },
            {
              title: "sparkline",
              icon: "ios-mail"
            }
          ]
        },
        {
          heading : "charts",
          content : [
            {
              title: "morris charts",
              icon: "ios-mail"
            },
            {
              title: "flot charts",
              icon: "ios-mail"
            },
            {
              title: "chartjs",
              icon: "ios-mail"
            },
            {
              title: "chartist",
              icon: "ios-mail"
            },
            {
              title: "rickshaw",
              icon: "ios-mail"
            },
            {
              title: "sparkline 1 ",
              icon: "ios-mail"
            }
          ]
        },
        {
          heading : "charts",
          content : [
            {
              title: "morris charts",
              icon: "ios-mail"
            },
            {
              title: "flot charts",
              icon: "ios-mail"
            },
            {
              title: "chartjs",
              icon: "ios-mail"
            },
            {
              title: "chartist",
              icon: "ios-mail"
            },
            {
              title: "rickshaw",
              icon: "ios-mail"
            },
            {
              title: "sparkline 1 ",
              icon: "ios-mail"
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang="scss">
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
</style>
