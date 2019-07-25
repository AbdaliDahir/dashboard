<template>
  <Card>
    <div
      slot="title">
      <h4 class="ibm-font text-center font-weight-600 font-18 color-text text-capitalize mt-10 mb-20"> Welcome Again !!</h4>
      <p class="font-12 text-center font-weight-400"> Signin to manage your account. </p> 
    </div>
    <div class="form-login pl-30 pr-30 pt-30 pb-30">
      <Form ref="formLogin" :model="formLogin" :rules="ruleInline" class="form-style-1 text-center">
        <FormItem prop="user" class="mb-30">
          <Input type="text" v-model="formLogin.user" placeholder="Username" class="login-input">
            <Icon type="ios-person-outline" slot="prepend" size="25"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="mb-30">
          <Input
            type="password"
            v-model="formLogin.password"
            placeholder="Password"
            class="login-input"
          >
            <Icon type="ios-lock-outline" slot="prepend" size="25"></Icon>
          </Input>
        </FormItem>
        <FormItem class="text-left">
          <i-switch v-model="formLogin.switch" size="small">
            <span slot="yes"></span>
            <span slot="no"></span>
          </i-switch>
          <label class="color-text font-13 ibm-font text-capitalize pl-10">remeber me</label>
        </FormItem>
        <FormItem>
          <Button
            @click="handleSubmit('formLogin')"
            class="pl-30 pr-30 pt-10 pb-10 bg-primary ibm-font color-grey border-0"
          >Sign in</Button>
        </FormItem>
        <p class="text-right">
          <router-link
            to="login/recove-password"
            class="font-12 ibm-font color-primary text-capitalize"
          >Forgot Password ?</router-link>
        </p>
      </Form>
    </div>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        user: "",
        password: "",
        switch: true
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<!-- <style src="../../assets/css/pages/forms/form-style-1" lang="scss">
// </style> -->
