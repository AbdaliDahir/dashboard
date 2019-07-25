<template>
     <div class="home-page pl-50 pr-50 pt-20">
    <Row type="flex" :gutter="15">
      <Col span="6" v-for="(item, index) in items" :key="index">
        <Card class="mb-20 light-card">
          <h6 class="font-13 text-uppercase font-weight-600 mb-5">{{item.title}}</h6>
          <div class="mb-10">
            <h3 class="font-30 pr-5 font-weight-400">{{item.number}}</h3>
            <p class="font-13 mt-10">
              <span
                :class="'v-middle '+ [item.type == 'up' ? 'color-success' : 'color-danger']"
              >{{item.prcntg}} %</span>
              <Icon
                v-if="item.type == 'up'"
                type="ios-arrow-round-up"
                class="v-middle color-success"
                size="20"
              />
              <Icon
                v-if="item.type == 'down'"
                type="ios-arrow-round-down"
                class="v-middle color-danger"
                size="20"
              />
              <span class="v-middle">than last week</span>
            </p>
          </div>
          <!-- <div class="chart-three">
          
          </div>-->
          <!-- chart-three -->
        </Card>
      </Col>
    </Row>

    <!-- Chart js -->
    <Row type="flex" :gutter="20">
      <!-- left side -->
      <Col span="12">
        <Card class="mb-20">
          <div slot="title">
            <h4>Account Retention</h4>
            <small class="small">Number of customers who have active subscription with you.</small>
          </div>
          <div slot="extra">
            <!-- <Select v-model="selectchart" size="large" style="width:100px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>-->
          </div>
          <LineChart />

          <!-- grid -->
          <Row>
            <Col span="12">
              <Card :bordered="false" dis-hover>
                <h4 class="font-weight-700 ibm-font color-text font-20">$1,680.00</h4>
                <p
                  class="font-weight-600 color-primary secondary-font font-13 text-uppercase mb-10"
                >Expansions</p>
                <p class="font-12 ibm-font">Customers who have ended their subscription with you.</p>
              </Card>
            </Col>
            <Col span="12">
              <Card :bordered="false" dis-hover>
                <h4 class="font-weight-700 ibm-font color-text font-20">$1,890.56</h4>
                <p
                  class="font-weight-600 color-danger secondary-font font-13 text-uppercase mb-10"
                >cancellations</p>
                <p class="font-12 ibm-font">Customers who have ended their subscription with you.</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>

      <!-- right side -->
      <Col span="12">
        <Card class="mb-20" dis-hover>
          <div slot="title">
            <h4>Account Retention</h4>
            <small class="small">Number of customers who have active subscription with you.</small>
          </div>
          <!-- grid -->
          <Row>
            <Col span="12">
              <Card :bordered="false" dis-hover>
                <h4 class="font-weight-600 ibm-font color-text font-20">$1,680.00</h4>
                <p
                  class="font-weight-600 color-primary secondary-font font-13 text-uppercase mb-10"
                >Expansions</p>
                <p class="font-12 ibm-font">Customers who have ended their subscription with you.</p>
              </Card>
            </Col>
            <Col span="12">
              <Card :bordered="false" dis-hover>
                <h4 class="font-weight-600 ibm-font color-text font-20">$1,890.56</h4>
                <p
                  class="font-weight-600 color-danger secondary-font font-13 text-uppercase mb-10"
                >cancellations</p>
                <p class="font-12 ibm-font">Customers who have ended their subscription with you.</p>
              </Card>
            </Col>
          </Row>
          <AreaChart />
        </Card>
      </Col>
    </Row>

    <!-- salling Card -->
    <div class="mt-20">
      <Card dis-hover>
        <CellGroup class="cell-style-1">
          <div>
            <Cell class="pt-20 pb-20">
              <h3 class="font-weight-600 font-25 ibm-font color-text mb-10">Orders</h3>
              <p slot="label">Weekly Customer Orders</p>
              <p slot="extra" class="color-primary font-weight-600 ibm-font font-25">+1,234.90$</p>
            </Cell>
            <Divider dashed class="mt-5 mb-5"/>
          </div>
          <div>
            <Cell class="pt-20 pb-20">
              <h3 class="font-weight-600 font-25 ibm-font color-text mb-10">Member Profit</h3>
              <p slot="label">Awerage Weekly Profit</p>
              <p slot="extra" class="color-danger font-weight-600 ibm-font font-25">-17,800.90$</p>
            </Cell>
            <Divider dashed class="mt-5 mb-5"/>
          </div>
          <div>
            <Cell class="pt-20 pb-20">
              <h3 class="font-weight-600 font-25 ibm-font color-text mb-10">Issue Reports</h3>
              <p slot="label">System bugs and issues</p>
              <p slot="extra" class="color-success font-weight-600 ibm-font font-25">-27,49%</p>
            </Cell>
            <Divider dashed class="mt-5 mb-5"/>
          </div>
        </CellGroup>

        <!-- Bar Chart -->
        <BarChart />
      </Card>
    </div>

    <!-- Table Content -->
    <div class="mt-20">
      <Card dis-hover>
        <Table height="500" border :columns="Tabel1" :data="Table1data"></Table>
      </Card>
    </div>

    <!-- Row --->
    <div class="mt-20">
      <Row :gutter="20">
        <!-- Transactions -->
        <Col :xs="12" :sm="12" :md="8"> 
          <Card dis-hover class="mb-20" :padding="0">
            <div slot="title">
              <h4 class="ibm-font font-15 color-text text-capitalize">Transaction History</h4>
              <small class="small">Number of customers who have active subscription with you.</small>
            </div>
            <div>
              <CellGroup>
                <div v-for="(transact, index) in transactions" :key="index">
                  <Cell>
                    <div slot="icon" class="pr-15">
                      <Avatar v-if="transact.status=='completed'" class="bg-success" icon="md-checkmark" />
                      <Avatar v-if="transact.status=='declined'" class="bg-danger" icon="md-close" />
                    </div> 
                    <h4 slot="default" class="ibm-font font-15 color-text text-capitalize">{{transact.title}}</h4>
                    <small slot="label" class="small">{{transact.date}}</small>
                    <div slot="extra">
                      <p class="color-text font-15 font-weight-600">{{transact.content}}</p>
                      <span :class="[transact.status == 'completed' ? 'color-success' : 'color-danger'] + ' font-12 ibm-font'">{{transact.status}}</span>
                    </div>
                  </Cell> 
                  <Divider class="mt-0 mb-0" dashed v-if="(index+1)!=transactions.length"/>
                </div>
                <div class="view-all bg-grey text-center mt-10" to="/"> 
                  <p class="pt-10 pb-10 font-12 text-uppercase ibm-font color-tetx"> view all </p> 
                </div>
              </CellGroup> 
            </div>
          </Card> 
        </Col> 

        <!-- Transactions -->
        <Col :xs="12" :sm="12" :md="8"> 
          <Card dis-hover class="mb-20" :padding="0">
            <div slot="title">
              <h4 class="ibm-font font-15 color-text text-capitalize">New Users</h4>
              <small class="small">Number of customers who have active subscription with you.</small>
            </div>
            <div>
              <CellGroup>
                <div v-for="(user, index) in users" :key="index">
                  <Cell>
                    <div slot="icon" class="pr-15">
                      <Avatar v-if="user.avatar !=''" shape="square" class="bg-success" :src="user.avatar" />
                      <Avatar v-else shape="square" class="bg-grey" icon="md-person" />
                    </div> 
                    <h4 slot="default" class="ibm-font font-15 color-text text-capitalize">{{user.name}}</h4>
                    <small slot="label" class="small">{{user.post}}</small>
                    <div slot="extra"> 
                      <Button :class="[user.gender == 'male' ? 'bg-primary color-grey' : 'bg-danger color-grey'] + ' border-0 font-12 text-capitalize ibm-font font-weight-600 ibm-font'">follow</Button>
                    </div>
                  </Cell> 
                  <Divider class="mt-0 mb-0" dashed v-if="(index+1)!=users.length"/>
                </div>
                <div class="view-all bg-grey text-center mt-10" to="/"> 
                  <p class="pt-10 pb-10 font-12 text-uppercase ibm-font color-tetx"> view all </p> 
                </div>
              </CellGroup> 
            </div>
          </Card> 
        </Col> 

        <!-- Transactions -->
        <Col :xs="12" :sm="12" :md="8"> 
          <Card dis-hover class="mb-20" :padding="20">
            <div slot="title">
              <h4 class="ibm-font font-15 color-text text-capitalize">Latest Updates</h4>
              <small class="small">Number of customers who have active subscription with you.</small>
            </div>
            <div>
              <CellGroup>
                <!-- <div v-for="(transact, index) in updates" :key="index"> -->
                  <Timeline>
                    <TimelineItem v-for="n in 5" :key="n">
                        <p class="time">SEP {{n}}</p>
                        <p class="content">Responded to need <a to="/">"Volunteer opportunity"</a></p>
                    </TimelineItem> 
                </Timeline>
                <!-- </div> -->
                <div class="view-all bg-grey text-center mt-10" to="/"> 
                  <p class="pt-10 pb-10 font-12 text-uppercase ibm-font color-tetx"> view all </p> 
                </div>
              </CellGroup> 
            </div>
          </Card> 
        </Col> 
      </Row>
    </div>
  </div>
</template>


<script>
import LineChart from "@/components/Charts/LineChart";
import AreaChart from "@/components/Charts/AreaChart";
import BarChart from "@/components/Charts/BarChart";

export default {
  components: {
    LineChart,
    AreaChart,
    BarChart
  },
  data() {
    return {  
      transactions: [
        {
          title: "Payment from #10322",
          date: "Mar 21, 2019, 3:30pm",
          content: "1290.00$",
          status: "completed", 
        },
        {
          title: "Payment from #10322",
          date: "Mar 21, 2019, 3:30pm",
          content: "1290.00$",
          status: "declined", 
        },
        {
          title: "Payment from #10322",
          date: "Mar 21, 2019, 3:30pm",
          content: "1290.00$",
          status: "completed", 
        },
        {
          title: "Payment from #10322",
          date: "Mar 21, 2019, 3:30pm",
          content: "1290.00$",
          status: "declined", 
        },
        {
          title: "Payment from #10322",
          date: "Mar 21, 2019, 3:30pm",
          content: "1290.00$",
          status: "completed", 
        },
        {
          title: "Payment from #10322",
          date: "Mar 21, 2019, 3:30pm",
          content: "1290.00$",
          status: "declined", 
        }
      ],
      users: [
        {
          name: "jhone doe",
          post: "Visual Designer,Google Inc",
          avatar: "https://keenthemes.com/metronic/preview/demo2/assets/media/users/100_4.jpg",
          gender: "male"
        },
        {
          name: "Faker text",
          post: "Project Manager, Amazon Inc",
          avatar: "",
          gender: "women"
        },
        {
          name: "Limbo Youssef",
          post: "Product Designer, Apple Inc",
          avatar: "https://keenthemes.com/metronic/preview/demo2/assets/media/users/100_4.jpg",
          gender: "male"
        }, 
        {
          name: "Mohammed Ahmed",
          post: "Web Developer, Facebook Inc",
          avatar: "",
          gender: "male"
        }, 
        {
          name: "Lisandra Kindred",
          post: "Visual Designer, Github Inc",
          avatar: "https://keenthemes.com/metronic/preview/demo2/assets/media/users/100_4.jpg",
          gender: "women"
        },
        {
          name: "Mohammed Ahmed",
          post: "Web Developer, Facebook Inc",
          avatar: "",
          gender: "male"
        },
        {
          name: "Mohammed Ahmed",
          post: "Web Developer, Facebook Inc",
          avatar: "",
          gender: "male"
        }
      ],
      items: [
        {
          title: "Conversion Rate",
          number: "0.81%",
          type: "up",
          prcntg: "2.5"
        },
        {
          title: "unique purchases",
          number: "22.56%",
          type: "down",
          prcntg: "7.89"
        },
        {
          title: "order quantity",
          number: "0.81%",
          type: "up",
          prcntg: "3.278"
        },
        {
          title: "avg. order value",
          number: "2.583$",
          type: "up",
          prcntg: "0.579"
        }
      ],

      Tabel1: [
        {
          title: "Name",
          key: "name",
          width: 150,
          fixed: 'left',
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Date",
          key: "date",
          width: 100,
          sortable: true
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          sortable: true
        },
        {
          title: "Address",
          width: 200,
          key: "address"
        },
        {
          title: "Province",
          key: "province",
          width: 100,
        },
        {
          title: "City",
          key: "city",
          width: 150
        },
        {
          title: "Zip",
          key: "zip",
          width: 100
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          fixed: 'right',
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      Table1data: [
        {
          name: "John Brown",
          date: "2019-23-02",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          date: "2016-20-04",
          age: 20,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          date: "2017-31-12",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          date: "2017-31-12",
          age: 28,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        },
        {
          name: "John Brown",
          date: "2010-01-10",
          age: 43,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          date: "2014-13-01",
          age: 18,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          date: "2013-23-09",
          age: 35,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          date: "2009-18-04",
          age: 48,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        },
        {
          name: "John Brown",
          date: "2018-23-06",
          age: 24,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          date: "2014-23-07",
          age: 23,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          date: "2010-23-11",
          age: 38,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          date: "2015-23-01",
          age: 20,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `
                Name：${this.Table1data[index].name}<br>
                Date：${this.Table1data[index].date}<br>
                Age：${this.Table1data[index].age}<br>
                Address：${this.Table1data[index].address}<br>
                Province: ${this.Table1data[index].province}<br>
                City: ${this.Table1data[index].city}<br>
                Zip: ${this.Table1data[index].zip}<br>`
      });
    },
    remove(index) {
      this.Table1data.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.small {
  position: relative;
  width: 100%;
  max-width: 100%;
}
</style>

