<template> 
  <Dropdown class="ml-10 text-center navbar-dropdown" placement="right-start">
    <span class="ivu-badge pl-5 pr-5 pt-5 pb-5">
      <span class="subheading pr-10 hide-xs">
        <b>Hi,</b> Limbo
      </span>
      <Avatar style="color: #f56a00;background-color: #fde3cf" shape="square">
        <b>L</b>
      </Avatar>
    </span>
    <DropdownMenu trigger="click" slot="list">
      <CellGroup>
        <!-- begin: head -->
        <div class="cell-head overlay">
          <Row type="flex" justify="space-between">
            <Col span="14">
              <div class="ivu-cell-main">
                <!-- <Avatar shape="square" icon="ios-person" class="profile-avatar"/> -->
								<Avatar src="https://htmlstream.com/preview/unify-v2.6/admin-template/assets/img-temp/130x130/img1.jpg" class="profile-avatar" shape="square" />
								<span class="profile-name">Abdelali dahir</span>
              </div>
            </Col>
            <Col span="10" class="text-right">
              <Button size="default" icon="ios-mail" class="venom-btn-default default-font-size secondary-font bg-danger color-light transition-3d-hover">10 messages</Button>
            </Col>
          </Row>
        </div>
        <!--begin: Navigation -->
        <!-- My Profile -->
        <Cell to="/" class="custem-cell-settings custem-cell-spacing">
          <Icon type="ios-contacts-outline" size="30" class="color-primary"/>
          <div class="ivu-cell-main ml-20">
            <div class="ivu-cell-title">My Profile</div>
            <div class="ivu-cell-label">Account settings and more</div>
          </div>
        </Cell>
        <!-- messages -->
        <Cell to="/" class="custem-cell-settings custem-cell-spacing">
          <Icon type="ios-mail-outline" size="30" class="color-success"/>
          <div class="ivu-cell-main ml-20">
            <div class="ivu-cell-title">My Messages</div>
            <div class="ivu-cell-label">inbox and tasks</div>
          </div>
        </Cell>
        <!-- Tasks  -->
        <Cell to="/" class="custem-cell-settings custem-cell-spacing">
          <Icon type="ios-clipboard-outline" size="30" class="color-danger"/>
          <div class="ivu-cell-main ml-20">
            <div class="ivu-cell-title">My Tasks</div>
            <div class="ivu-cell-label">latest tasks and projects</div>
          </div>
        </Cell>
        <!-- Activities -->
        <Cell to="/" class="custem-cell-settings custem-cell-spacing">
          <Icon type="ios-cog-outline" size="30" class="color-warning"/>
          <div class="ivu-cell-main ml-20">
            <div class="ivu-cell-title">My Activities</div>
            <div class="ivu-cell-label">last Notifications</div>
          </div>
        </Cell> 
        <!-- Footer Options -->
        <div class="cell-footer pl-10 pr-10"> 
          <row>
            <Col span="12" class="text-left">
              <Button type="text" 
              class="pt-5 pb-5 pl-10 pr-10 secondary-font default-font-size bg-grey outline-button font-weight-600 hover-color-light hover-bg-danger" 
              size="small" icon="ios-log-out">  
                sign-out 
              </Button> 
            </Col> 
            <Col span="12" class="text-right">
              <Button type="text" 
              class="pt-5 pb-5 pl-10 pr-10 secondary-font default-font-size bg-grey outline-button font-weight-600 hover-color-light hover-bg-primary" 
              size="small" icon="ios-log-in">  
                sign-In 
              </Button> 
            </Col>
          </row>
        </div>
      </CellGroup>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {};
</script>

<style lang="scss">
.subheading {
	font-size: .88rem;
}
</style>
