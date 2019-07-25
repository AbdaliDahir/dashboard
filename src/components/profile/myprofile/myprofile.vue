<template>
  <div> 
    <!-- about -->
    <h1 class="mt-10 color-text"> Hey, I am <span class="ibm-font color-primary">Abdelali Dahir</span></h1>

    <h4 class="mb-20 font-14 color-text"><span>London, UK</span> - <small>Joined in July 2019</small></h4>
    
    <p class="font-12 font-weight-400 font-default">I am a project manager from England. This is where I sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. The time has come to bring those ideas and plans to life. This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>

    <!-- EXperience and Education -->
    <div class="mt-50">
        <Row :gutter="20" type="flex" justify="space-between" class="code-row-bg">
            <!-- Work Experience -->
            <Col :xs="24" :sm="12">
              <h3 class="mb-20 font-weight-600 ibm-font color-text"> Work experience </h3>
              
              <!-- Experience Box -->
              <div class="box mb-20" v-for="experience in experiences" :key="experience">
                <Row :gutter="30" type="flex" align="middle">
                  <Col span="4">
                    <img :src="experience.img" :alt="experience.title" class="responsive-img" />
                  </Col>
                  <Col span="20">
                    <small>{{experience.date}}</small>
                    <h5 class="ibm-font font-16 color-text">{{experience.title}}</h5>
                    <p class="color-dark-grey font-12">{{experience.place}}</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <!-- Work Education -->
            <Col :xs="24" :sm="12">
              <h3 class="mb-20 font-weight-600 ibm-font color-text"> Education </h3>
              <Timeline>
                <TimelineItem v-for="education in educations" :key="education">
                    <p class="time">{{education.date}}</p>
                    <p class="content">{{education.univ}}</p>
                    <p class="content color-text ibm-font"> <b> {{education.diploma}} </b> </p>
                </TimelineItem> 
              </Timeline>
            </Col>
        </Row>
    </div>

    <!-- reviews -->
    <div class="reviews mt-50">
      <h2> Reviews <span> (20) </span> </h2>
      <Divider dashed/>
      <div v-for="review in reviews" :key="review" class="pl-20 pr-20 mt-30">
        <Row type="flex" align="middle" justify="start"> 
          <Col span="1" class="d-inline-block">
            <Avatar :src="review.userImg" size="large"/>  
          </Col>
          <Col spab="10" class="d-inline-block pl-20"> 
            <h5 class="font-weight-600 ibm-font text-uppercase color-text font-15">{{review.userName}}</h5>
            <Rate disabled allow-half v-model="review.userRate" class="font-16"></Rate>
          </Col>
        </Row>
        <p class="mt-10 font-13 default-font">{{review.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          img: "https://htmlstream.com/preview/front-v2.7.0/assets/img/160x160/img17.png",
          title: "Senior Frontend Developer",
          place: "at Google - SF, US",
          date: "12 juin 2019"
        },
        {
          img: "https://htmlstream.com/preview/front-v2.7.0/assets/img/160x160/img14.png",
          title: "Junior Frontend Developer",
          place: "at Google - SF, US",
          date: "at Slack Inc - London, UK"
        },
        {
          img: "http://themenate.com/enlink/assets/images/others/nvidia-thumb.png",
          title: "Frontend Developer",
          place: "at My Home, 107.0.0.1",
          date: "2012 - 2014"
        }
      ],
      educations: [
        { 
          diploma: "BS in Computer Science",
          univ: "Holy Name University, Tagbilaran City, Bohol",
          date: "2016-2019"
        },
        { 
          diploma: "BS in Computer Science",
          univ: "Holy Name University, Tagbilaran City, Bohol",
          date: "2012-2016"
        },
        { 
          diploma: "BS in Computer Science",
          univ: "Holy Name University, Tagbilaran City, Bohol",
          date: "2002-2006"
        }
      ],
      // Revoiexs 
      reviews: [
        {
          userImg: "http://themenate.com/enlink/assets/images/avatars/thumb-9.jpg",
          userName: "Michael C. Rios",
          userRate: 5,
          text: "The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness."
        },
        {
          userImg: "https://mannatthemes.com/metrica/light/assets/images/users/user-10.jpg",
          userName: "Lisa D. Pullen",
          userRate: 2,
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum."
        },
        {
          userImg: "http://themenate.com/enlink/assets/images/avatars/thumb-10.jpg",
          userName: "Michael C. Rios",
          userRate: 3.5,
          text: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years popular belief,old."
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .responsive-img {
    width: 100%;
    max-width: 40px;
  }
</style>
