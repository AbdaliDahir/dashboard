<template>  
  <Tabs>
      <TabPane :label="Notifications">
        <div class="notifications-alerts">
          <template v-for="(notification, index) in notifications">
            <Alert banner class="mb-0 border-0" :type="notification.type" show-icon closable :key="index">
                {{notification.title}}
                <template slot="desc">
                  {{notification.text}}
                </template>
                <!-- <span slot="close">close</span> --> <!-- to edit close icon -->
            </Alert>
          </template> 
        </div> 
      </TabPane>
      <TabPane label="Audit Logs">
        <div>
          <CellGroup class="navbar-dropdown">
            <template v-for="(log, index) in logs">
              <Cell :to="log.Link" :key="index" class="pl-10 pr-10 pt-10 pb-10 custem-cell-settings">
                <Icon :type="log.Icon" size="30" class="color-primary bordred-icon"/>
                <div class="ivu-cell-main ml-20">
                  <div class="ivu-cell-title">{{log.Title}}</div>
                  <div class="ivu-cell-label">{{log.Date}}</div>
                </div>
              </Cell>
            </template>
          </CellGroup>
        </div>
      </TabPane>
      <TabPane label="Settings">
        <div class="setting-wrapper">

          <!-- Settings - Customer Care -->
          <div class="setting-box">
            <!-- <h4 class="pl-20 heading"> Customer Care </h4> -->
            <Divider orientation="left" dashed>Customer Care</Divider>
            <CellGroup>
              <Cell title="Enable Notifications:" label="activate or desactivate notifications" class="pt-20 pb-20">
                <i-switch v-model="SwitchNotification" size="large" slot="extra">
                      <span slot="open">ON</span>
                      <span slot="close">OFF</span>
                </i-switch> 
              </Cell>
              <Cell title="Enable Case Tracking:" label="activate or desactivate notifications" class="pt-20 pb-20">
                  <i-switch v-model="SwitchTracking" size="large" slot="extra">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                  </i-switch> 
              </Cell>
              <Cell title="Support Portal:" label="activate or desactivate notifications" class="pt-20 pb-20">
                  <i-switch v-model="SwitchPortal" size="large" slot="extra">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                  </i-switch> 
              </Cell>
            </CellGroup>  
          </div>
          <!-- Settings - Reports -->
          <div class="setting-box"> 
            <Divider orientation="left" dashed>Reports</Divider>
            <CellGroup>
              <Cell title="Generate Reports:" class="pt-20 pb-20">
                <i-switch v-model="SwitchReports" size="large" slot="extra">
                  <Icon type="md-checkmark" slot="open"></Icon>
                  <Icon type="md-close" slot="close"></Icon>
                </i-switch> 
              </Cell>
              <Cell title="Enable Report Export:" class="pt-20 pb-20">
                  <i-switch v-model="SwitchExport" size="large" slot="extra">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>  
                  </i-switch> 
              </Cell>
              <Cell title="Allow Data Collection:" class="pt-20 pb-20">
                  <i-switch v-model="SwitchCollection" size="large" slot="extra" disabled="true">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                  </i-switch> 
              </Cell>
            </CellGroup>  
          </div>

          <!-- Settings - General -->
          <div class="setting-box"> 
            <Divider orientation="left" dashed>General Settings</Divider>
            <CellGroup>
              <Cell title="Enable history:" class="pt-20 pb-20">
                <i-switch v-model="SwitchHistory" size="large" slot="extra">
                      <span slot="open">ON</span>
                      <span slot="close">OFF</span>
                </i-switch> 
              </Cell>
              <Cell title="Disable Chat:" class="pt-20 pb-20">
                  <i-switch v-model="SwitchChat" size="large" slot="extra">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                  </i-switch> 
              </Cell>
              <Cell title="Allow User Feedbacks:" class="pt-20 pb-20">
                  <i-switch v-model="SwitchFeedbacks" size="large" slot="extra">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                  </i-switch> 
              </Cell>
              <Cell title="ignin with social media:" class="pt-20 pb-20">
                <Tooltip content="Warning" placement="left-start" slot="extra">
                  <i-switch v-model="SwitchSign" size="large">
                        <span slot="open">ON</span>
                        <span slot="close">OFF</span>
                  </i-switch> 
                </Tooltip>
              </Cell>
            </CellGroup>  
          </div>

        </div>
      </TabPane>
  </Tabs>   
</template>

<script>
export default {
  data() {
    return {  
      drawer: true,
      /**  Badge Number **/
      Notifications: (h) => {
          return h('div', [
              h('span', 'Notifications'),
              h('Badge', {
                  props: {
                      count: 8
                  }
              })
          ])
      },
        
      //* Notifications **//
      notifications: [
        {
          type: "info",
          title:"An info prompt",
          text:"Content of prompt. Content of prompt. Content of prompt. Content of prompt."
        },
        {
          type: "success",
          title:"A success prompt",
          text:"Content of prompt. Content of prompt. Content of prompt. Content of prompt."
        },
        {
          type: "warning",
          title:"An warning prompt",
          text:"Content of prompt. Content of prompt. Content of prompt. Content of prompt."
        },
        {
          type: "error",
          title:"An error prompt",
          text:"Content of prompt. Content of prompt. Content of prompt. Content of prompt."
        },
        {
          type: "warning",
          title:"An warning prompt",
          text:"Content of prompt. Content of prompt. Content of prompt. Content of prompt."
        },
        {
          type: "info",
          title:"An primary prompt",
          text:"Content of prompt. Content of prompt. Content of prompt. Content of prompt."
        },{
          type: "error",
          title:"An error prompt",
          text:"Content of prompt. Content of prompt. Content of prompt. Content of prompt."
        }
      ],
      /** Logs **/
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
        },
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
      //* Settings Option **//
      SwitchNotification: true,
      SwitchTracking: true,
      SwitchPortal: false,
      /** For Reports **/
      SwitchReports: true,
      SwitchExport: false,
      SwitchCollection: true,
      /** For General **/
      SwitchHistory: true,
      SwitchChat: true,
      SwitchFeedbacks: false,
      SwitchSign: false,
    }
  }
}
</script>

<style style="scss">
.border-0 {
  border: none !important;
}
.ivu-tabs-tab {
    font-size: .86rem;
    color: #a7abc3;
     font-family: 'Poppins', sans-serif !important;
    font-weight: 500;
}
</style>
