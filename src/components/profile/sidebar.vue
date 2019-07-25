<template>
    <section class="pt-50 pb-50 bg-light">
        <!-- Personal Info -->
        <Card :bordered="false" dis-hover>
            <h4 slot="title" class="ibm-font font-13 font-weight-bold color-text">Who i'm :</h4>
            <div class="text-left">
                <Badge dot>
                    <Avatar class="large-avatar" shape="square" src="https://htmlstream.com/preview/front-v2.7.0/assets/img/160x160/img2.jpg" icon="ios-person" />
                </Badge> 
                <div class="d-inline-block pl-10 pr-10 v-middle">
                    <h3 class="font-15 mt-10 ibm-font color-text text-capitalize">Abdelali Dahir</h3>
                    <p class="font-12 mt-10 ibm-font color-dark-grey text-capitalize">@Abdelalidahir</p>
                </div>
                <div class="mt-20">
                    <Button class="mr-10 ml-10 pl-30 pr-30 bg-danger border-0 color-light">Message</Button>
                    <Button class="mr-10 ml-10 pl-30 pr-30 bg-primary border-0 color-light">Follow</Button>
                </div> 
            </div>
        </Card>

        <!-- Tags -->
        <Card :bordered="false" dis-hover>
            <h4 slot="title" class="ibm-font font-13 font-weight-bold color-text">Skills :</h4> 
            <div class="text-left"> 
                <Tag v-for="(tag,index) in Tags" :key="index" size="small" type="dot" :color="generateColor()" class="text-capitalize">{{tag}}</Tag>
            </div>
        </Card>

        <!-- Social Media -->
        <Card :bordered="false" dis-hover>
            <h4 slot="title" class="ibm-font font-13 font-weight-bold color-text">Social Media :</h4> 
            <div class="text-left"> 
                <ul class="list-unstyled">
                    <li v-for="(social, index) in socialmedia" :key="index" class="mb-5">
                        <Icon :type="social.icon" size="20" class="v-middle"></Icon>
                        <span class="pl-10 pr-10 color-text ibm-font font-12 v-middle">{{social.title}}</span>
                    </li> 
                </ul>
            </div>
        </Card>

        <!-- Contatc Info -->
        <Card :bordered="false" dis-hover>
            <h4 slot="title" class="ibm-font font-13 font-weight-bold color-text">Contatc Info :</h4> 
            <div class="text-left"> 
                <ul class="list-unstyled">
                    <li v-for="(info, index) in infos" :key="index" class="mb-10">
                        <Icon :type="info.icon" size="20" class="v-middle"></Icon>
                        <span class="pl-10 pr-10 color-text ibm-font font-12 v-middle">{{info.title}}</span>
                    </li> 
                </ul>
            </div>
        </Card>

    </section>
</template>

<script> 
export default {
    data() {
        return { 
            Tags: ["html","css","js","nodejs","github","free","scss","Vuejs","iview","Front-End Development","web design","git"],
            myArray: ["primary","error","warning","success"],
            randomItem : '',
            socialmedia: [
                {
                    title: "@facebook",
                    icon: "logo-facebook"
                },
                {
                    title: "@twitter",
                    icon: "logo-twitter"
                },
                {
                    title: "@Instagram",
                    icon: "logo-instagram"
                },
                {
                    title: "@Github",
                    icon: "logo-github"
                },
                {
                    title: "www.google.com",
                    icon: "md-globe"
                }
            ],
            infos: [
                {
                    title: "Bay Area, San Francisco, CA",
                    icon: "ios-pin"
                },
                {
                    title: "(+212)062 482 7368",
                    icon: "md-phone-portrait"
                },
                {
                    title: "(+212)062 482 7368",
                    icon: "ios-call"
                },
                {
                    title: "abdali.dahir@gmail.com",
                    icon: "ios-mail"
                },
            ]
        }
    }, 
    methods: {
        generateColor() {
            this.randomItem = this.myArray[Math.floor(Math.random()*this.myArray.length)];  
            console.log(this.randomItem);
            return this.randomItem;
        }
    }
}
</script>

<style lang="scss" scoped>
    .ivu-avatar.large-avatar {
        width: 80px;
        height: 80px;
    }
</style>
