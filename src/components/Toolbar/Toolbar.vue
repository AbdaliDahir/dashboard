<template> 
  <Header> 
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col :sm="3" :md="3" class="text-left pr-5 pl-5 hide-xs">
          <!-- logo -->
          <span class="logo">
            <img src="https://dashboard.zawiastudio.com/demo/img/logo.png" width="40" height="40" class="v-middle"/>
            <span class="color-primary font-15 text-uppercase font-weight-700 ibm-font v-middle pl-10">Venom</span>
          </span>
        </Col>
        <!-- left Side -->
        <Col :xs="24" :sm="10" :md="10" class="text-left pr-5 pl-5 hide-xs">
          <!-- left Component menu -->
          <LeftMenu />
        </Col>

        <!-- Right Side -->
        <Col :xs="24" :sm="9" :md="9" class="text-right pr-5 pl-5">

          <a @click="searchModal = true" class="ivu-badge">
            <Avatar class="navbar-icon" shape="square" icon="ios-search"/>
          </a>
          
          <!-- Search Modal -->
          <Modal 
            v-model="searchModal" 
            draggable   
            :styles="{top: '70px'}"
            title="This is draggable !!!"
            >
            <Input size="large" enter-button placeholder="Enter something..." />
            <div slot="footer">
              <Button type="primary" size="large" @click="asyncOK()">search</Button>
              <Button size="large" @click="cancelSearch()">cancel</Button>
            </div>
          </Modal>

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
            class="select-nav text-center ml-10"
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
      modelLang: ""
    };
  },
  methods: {
      cancelSearch () { 
        this.searchModal = false; 
      },
      
      asyncOK () { 
        setTimeout(() => {
            this.searchModal = false;
            this.$Message.info('Asynchronously close the dialog box');
        }, 1000);
      }
  }
};
</script>

<style lang="scss">
.ivu-drawer,
.ivu-modal-content {
  max-width: 100%;
}
</style>
