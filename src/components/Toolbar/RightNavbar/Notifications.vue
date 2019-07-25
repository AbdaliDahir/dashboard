<template>
  <Dropdown class="text-center mr-5 navbar-dropdown">
    <a href="javascript:void(0)" class="position-relative">
      <Badge :count="100" type="normal">
        <Avatar class="navbar-icon" shape="square" icon="ios-notifications"/>
      </Badge>
    </a>
		<DropdownMenu slot="list" class="navbar-lists">
			<CellGroup>
				<template v-for="(message, index) in messages">
					<div :to="message.Link" :key="index" class="text-left ivu-cell custem-cell-settings custem-cell-spacing">
            <div class="ivu-cell-item">
              <Avatar :src="message.Img" size="large" shape="square" />
              <div class="ivu-cell-main ml-20">
                <div class="ivu-cell-title">
                  <h4>{{message.Title}}</h4>
                </div>
                <div class="ivu-cell-label mr-10">
                  <p>{{message.Text}}</p>
                  <p class="mt-5 text">
                    <Icon type="ios-clock-outline" class="pr-5"/> 
                    <small>{{message.Date}}</small>
                  </p>
                </div> 
              </div> 
            </div>
					</div>
				</template>
			</CellGroup>
			<div class="view-all bg-primary text-center" to="/"> 
				<p class="pt-10 pb-10 default-font"> view all </p> 
			</div>
		</DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          Link: "/",
          Img:"https://htmlstream.com/preview/unify-v2.6/admin-template/assets/img-temp/130x130/img1.jpg",
          Title: "Verna Swanson",
          Text: "Not so many years businesses used to grunt at using",
          Date: "30 mins Ago"
				},
				{
          Link: "/",
          Img:"https://htmlstream.com/preview/unify-v2.6/assets/img-temp/100x100/img6.jpg",
          Title: "Jhone Scoot",
          Text: "New admin template for free",
          Date: "3 hours Ago"
				},
				{
          Link: "/",
          Img:"https://htmlstream.com/preview/unify-v2.6/assets/img-temp/100x100/img14.jpg",
          Title: "Limbo Venom",
          Text: "But today, the use and influence of is growing right along illustration",
          Date: "12 hours"
				},
				{
          Link: "/",
          Img:"https://htmlstream.com/preview/unify-v2.6/assets/img-temp/100x100/img4.jpg",
          Title: "Limbo Venom",
          Text: "Limbo Is comming",
          Date: "1 day Ago"
				},
				{
          Link: "/",
          Img:"https://htmlstream.com/preview/unify-v2.6/assets/img-temp/100x100/img14.jpg",
          Title: "Emma Watson",
          Text: "The collapse of the online-advertising market in 2001 made marketing ",
          Date: "2 weeks"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.view-all {
	line-height: 20px;
	color: #fff;
	box-shadow:0px -4px 36px rgba(0, 0, 0, 0.18823529411764706);
}
</style>