<template> 
  <Header> 
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col :xs="0" :sm="4" :lg="3" class="text-left pr-5 pl-5 hide-xs">
          <!-- logo -->
          <span class="logo">
            <img src="https://dashboard.zawiastudio.com/demo/img/logo.png" width="40" height="40" class="v-middle"/>
            <span class="color-primary font-15 text-uppercase font-weight-700 ibm-font v-middle pl-10 hide-md">Venom</span>
          </span>
        </Col>
        <!-- left Side -->
        <Col :xs="4" :sm="0" :lg="9" class="text-center pr-5 pl-5 Toggle-Nav">
          
          <!-- left Component menu -->
          <LeftMenu />
        </Col>

        <!-- Right Side -->
        <Col :xs="20" :sm="20" :lg="12" class="text-right pr-5 pl-5">

          <a class="ivu-badge" @click="searchModal = true" v-if="!searchModal">
            <Avatar class="navbar-icon" shape="square" icon="ios-search" />
          </a>

          <a class="ivu-badge active-badge" @click="searchModal = false" v-else> 
            <Avatar class="navbar-icon" shape="square" icon="ios-close" />
          </a>
          
          <!-- Drawer Settings -->
          <!-- <Tooltip content="quick access" placement="right-end"> -->
          <a @click="drawer = true" class="ivu-badge">
            <Avatar class="navbar-icon" shape="square" icon="ios-apps-outline"/>
          </a>

          <!-- </Tooltip> -->
          <Drawer
            title="quick access"
            width="450" 
            v-model="drawer"
            :mask-closable="false"
            :styles="styles"
            class="drawer-access">
            <DrawerContent/>
          </Drawer>

          <!-- Messages DropDown -->
          <Messages/>

          <!-- Notifications DropDown -->
          <Notification/>

          <!-- language select -->
          <Select
            v-model="modelLang"
            size="large"
            prefix="md-globe"
            class="select-nav text-center ml-10 hide-xs"
            style="width:110px"
            placeholder="English"
          >
            <Option
              v-for="item in LanguageList"
              :value="item.value"
              :key="item.value"
              class="pl-10 pr-5 text-left"
            >
              <Avatar :src="item.icon" alt="en_flag" shape="square" size="small" class="mr-5"/>
              {{ item.label }}
            </Option>
          </Select>

          <!-- profile Settings -->
          <Profile/>
        </Col> 
      </Row> 
      <!-- Search Modal -->
          <div class="search-modal mt-20 mb-10" v-if="searchModal">
            <Input search enter-button placeholder="Enter something..." />
            <!-- <div slot="footer">
              <Button type="primary" size="large" @click="asyncOK()">search</Button>
              <Button size="large" @click="cancelSearch()">cancel</Button>
            </div> -->
          </div>
  </Header> 
</template>

<script>
import LeftMenu from './LeftNavbar/LeftSide';
import DrawerContent from "./RightNavbar/Drawer";
import Messages from "./RightNavbar/Messages";
import Notification from "./RightNavbar/Notifications";
import Profile from "./RightNavbar/Profile";

export default {
  components: {
    LeftMenu,
    Messages,
    Notification,
    Profile,
    DrawerContent
  },
  data() {
    return {
      /** Search Modal **/
      searchModal: false,
      drawer: false,
      styles: {
        height: "calc(100% - 55px)",
        overflow: "auto", 
        position: "static"
      },
      LanguageList: [
        {
          icon: "https://img.icons8.com/color/2x/canada.png",
          label: "English",
          value: "en"
        },
        {
          icon: "https://img.icons8.com/color/2x/morocco.png",
          label: "Arabic",
          value: "ar"
        },
        {
          icon: "https://img.icons8.com/color/2x/spain-2.png",
          label: "Espagnol",
          value: "esp"
        }
      ],
      modelLang: "",
    };
  },
  
};
</script>

<style lang="scss">
.ivu-drawer,
.ivu-modal-content {
  max-width: 100%;
}
</style>
