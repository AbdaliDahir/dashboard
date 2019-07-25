<template>
    <div>
      <!-- about -->
    <h1 class="mt-10 color-text ibm-font "> My Projects </h1>
    <Divider dashed />
    <Row :gutter="20" type="flex" align="start" justify="top">
        <Col :xs="24" :sm="12" :md="8" v-for="project in projects" :key="project">
          <Card dis-hover>
            <p slot="title" class="font-13 ibm-font color-primary text-capitalize height-auto">
                <Icon type="ios-appstore" class="font-25"></Icon>
                {{project.domain}}
            </p> 
            <!-- options --> 
            <Dropdown slot="extra" trigger="click" class="edit-extra">
              <a href="javascript:void(0)"> 
                  <Icon type="ios-more" class="font-30 color-dark v-align-middle"></Icon>
              </a>
              <DropdownMenu slot="list">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Show</DropdownItem>
                  <DropdownItem>Stop</DropdownItem> 
                  <DropdownItem>remove</DropdownItem>
              </DropdownMenu>
            </Dropdown> 

            <div class="text-center">
              <img :src="project.img" class="responsive-img"/>
              <h4 class="font-weight-600 default-font color-dark font-18 text-capitalize mt-10">{{project.name}}</h4>
              <p class="font-13 color-text secondary-font mt-5">{{project.description}}</p>
            </div>
            <div class="members mt-20 text-center">
              <h5 class="font-weight-600 default-font text-color font-13 text-capitalize">members</h5>
            </div>
        </Card>
      </Col> 
    </Row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          domain: "ios App",
          name: "Mapbox",
          img: "https://htmlstream.com/preview/front-v2.7.0/assets/img/160x160/img6.jpg",
          description: "The time has come to bring those ideas and plans to life.",
        },
        {
          domain: "ios App",
          name: "DigitalOcean",
          img: "https://htmlstream.com/preview/front-v2.7.0/assets/img/160x160/img7.jpg",
          description: "Smiling, laughing, and hanging helps us work together to achieve this.",
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.responsive-img {
  width: 70px;
}
.height-auto {
  height: auto;
}
.ivu-card-extra.edit-extra { 
    top: 6px;
}
</style>
