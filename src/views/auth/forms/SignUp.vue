<template>
  <Card>
    <div slot="title">
      <h4
        class="ibm-font text-center font-weight-600 font-18 color-text text-capitalize mt-10 mb-20"
      >sign up !!</h4>
      <p class="font-12 text-center font-weight-400">Enter your details to create your account:</p>
    </div>
    <div class="form-login pl-30 pr-30 pt-30 pb-30">
      <Form
        ref="formSignup"
        :model="formSignup"
        :rules="ruleValidation"
        class="form-style-1 text-center"
      >
        <FormItem prop="mail" class="mb-30">
          <Input type="text" v-model="formSignup.mail" placeholder="Email" class="login-input">
            <Icon type="ios-person-outline" slot="prepend" size="25"></Icon>
          </Input>
        </FormItem>

        <FormItem prop="password" class="mb-30">
          <Input
            type="password"
            v-model="formSignup.password"
            placeholder="Password"
            class="login-input"
          > 
            <Icon type="ios-lock-outline" slot="prepend" size="25"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="passwordCheck" class="mb-30">
          <Input
            type="password"
            v-model="formSignup.passwordCheck"
            placeholder="Confirm Password"
            class="login-input"
          >
          <Icon type="ios-lock-outline" slot="prepend" size="25"></Icon> </Input>
        </FormItem>

        <FormItem>
          <Button
            @click="handleSubmit('formSignup')"
            class="pl-30 pr-30 pt-10 pb-10 bg-primary ibm-font color-grey border-0"
          >Sign up</Button>
        </FormItem>
        <p class="text-right font-12 ibm-font text-capitalize">
          Already have account 
          <router-link
            to="/login"
            class="color-primary"
          >Sign In</router-link>
        </p>
      </Form>
    </div>
  </Card>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formSignup.passwordCheck !== "") {
          this.$refs.formSignup.validateField("passwordCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formSignup.password) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      formSignup: {
        mail: "",
        passwd: "",
        passwdCheck: ""
      },
      ruleValidation: {
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          {
            validator: validatePass,
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        passwordCheck: [
          {
            validator: validatePassCheck,
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
