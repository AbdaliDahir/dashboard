<template>
  <Dropdown class="text-center mr-5 navbar-dropdown">
    <a href="javascript:void(0)" class="position-relative">
      <Badge> 
        <Avatar class="navbar-icon" shape="square" icon="ios-mail"/>
				<span class="ivu-badge-status-dot ivu-badge-status-processing" style="top: 5px;right: 6px;position: absolute;"></span>
      </Badge>
    </a>
    <DropdownMenu slot="list">
      <CellGroup>
        <!-- begin: head -->
        <div class="cell-head overlay">
          <Row type="flex" justify="space-around">
            <Col span="14">
              <div class="ivu-cell-main">
                <span class="profile-name">User Notifications</span>
              </div>
            </Col>
            <Col span="8">
              <Button size="default" icon="ios-notifications" class="venom-btn-default default-font-size secondary-font bg-success color-light transition-3d-hover">10 New</Button>
            </Col>
          </Row>
        </div>
        <!--begin: Navigation -->
        <!-- My Profile -->
        <Tabs size="small">
          <!-- Alert tab -->
          <TabPane icon="ios-alert" label="Alerts" name="alerts" class="pt-0 pb-0">
            <template v-for="(alert, index) in alerts">
              <Cell :to="alert.Link" :key="index" class="custem-cell-settings">
                <Icon :type="alert.Icon" class="color-primary " size="30"/>
                <div class="ivu-cell-main ml-20">
                  <div class="ivu-cell-title">{{alert.Title}}</div>
                  <div class="ivu-cell-label">{{alert.Date}}</div>
                </div>
              </Cell>
            </template>
          </TabPane>

          <!-- Logs Tab -->
          <TabPane icon="logo-windows" label="logs" name="name2">
            <template v-for="(log, index) in logs">
              <Cell :to="log.Link" :key="index" class="custem-cell-settings">
                <Icon :type="log.Icon" class="color-warning " size="30"/>
                <div class="ivu-cell-main ml-20">
                  <div class="ivu-cell-title">{{log.Title}}</div>
                  <div class="ivu-cell-label">{{log.Date}}</div>
                </div>
              </Cell>
            </template>
          </TabPane>

          <!-- Events tab -->
          <TabPane icon="logo-tux" label="events" name="name3">
            <template v-for="(event, index) in events">
              <Cell :to="event.Link" :key="index" class="custem-cell-settings">
                <Icon :type="event.Icon" class="color-success " size="30"/>
                <div class="ivu-cell-main ml-20">
                  <div class="ivu-cell-title">{{event.Title}}</div>
                  <div class="ivu-cell-label">{{event.Date}}</div>
                </div>
              </Cell>
            </template>
          </TabPane>
        </Tabs>
      </CellGroup>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  data() {
    return {
      alerts: [
        {
          Link: "/",
          Icon: "ios-cog-outline",
          Title: "New order has been received",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-leaf",
          Title: "A Pocket PC is a handheld ",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-alarm",
          Title: "The first is a non technical method ",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-laptop",
          Title: "Sony laptops are among the most ",
          Date: "2 hours Ago"
        }
      ],
      events: [
        {
          Link: "/",
          Icon: "ios-cog-outline",
          Title: "New order has been received",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-leaf",
          Title: "A Pocket PC is a handheld ",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-alarm",
          Title: "The first is a non technical method ",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-laptop",
          Title: "Sony laptops are among the most ",
          Date: "2 hours Ago"
        }
      ],
      logs: [
        {
          Link: "/",
          Icon: "ios-cog-outline",
          Title: "New order has been received",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-leaf",
          Title: "A Pocket PC is a handheld ",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-alarm",
          Title: "The first is a non technical method ",
          Date: "2 hours Ago"
        },
        {
          Link: "/",
          Icon: "ios-laptop",
          Title: "Sony laptops are among the most ",
          Date: "2 hours Ago"
        }
      ]
    };
  }
};
</script>

<style>
</style>
