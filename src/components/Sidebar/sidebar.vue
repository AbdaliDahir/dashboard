<template>
    <div>
        <!-- menu -->
        <Menu active-name="1-2" theme="dark" width="auto" :class="[{menuitemClasses}, 'default-font font-weight-300 mt-50']" :open-names="['1']"> 
          <MenuGroup title="componets">
            <Divider dashed class="nav-divider mt-0 mb-0"/>
            <MenuItem name="dashboard">
                <Icon type="md-analytics" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> Dashboard </span>
            </MenuItem>
            <MenuItem name="calendar">
                <Icon type="ios-calendar" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> calendar </span>
            </MenuItem> 
            <MenuItem name="chat">
                <Icon type="md-chatboxes" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> messages </span>
            </MenuItem>
            <MenuItem name="widgets">
                <Icon type="ios-map" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> maps </span>
            </MenuItem>
          </MenuGroup>
          <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> User Management </span>
              </template>
              <MenuItem name="users">
                <Icon type="ios-contact" size="20" class="menu-icons"/>
                <span class="text text-capitalize">Users</span>
              </MenuItem>
              <MenuItem name="roles">
                <Icon type="md-document" size="20" class="menu-icons"/>
                <span class="text text-capitalize">Roles</span>
              </MenuItem>
              <MenuItem name="stat">
                <Icon type="ios-state" size="20" class="menu-icons"/>
                <span class="text text-capitalize">Stats</span>
              </MenuItem> 
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="logo-freebsd-devil" size="20" class="menu-icons"/>
              <span class="text text-capitalize"> components </span>
            </template>
              <MenuItem name="3-1">
                <Icon type="md-square" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> Buttons </span>
              </MenuItem>
              <MenuItem name="cards">
                <Icon type="md-document" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> cards </span>
              </MenuItem>
              <MenuItem name="pie">
                <Icon type="md-pie" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> charts </span>
              </MenuItem>
              <MenuItem name="notifications">
                <Icon type="md-notifications" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> notifications </span>
              </MenuItem>
              <MenuItem name="icons">
                <Icon type="md-egg" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> icons </span>
              </MenuItem>
              <MenuItem name="multi level">
                <Icon type="md-barcode" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> multi level </span>
              </MenuItem>
              <MenuItem name="helper classes">
                <Icon type="md-help-circle" size="20" class="menu-icons"/>
                <span class="text text-capitalize"> helper classes </span>
              </MenuItem>
          </Submenu> 
        </Menu>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
