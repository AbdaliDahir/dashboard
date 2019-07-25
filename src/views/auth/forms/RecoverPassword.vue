<template>
  <Card>
    <div
      slot="title">
      <h4 class="ibm-font text-center font-weight-600 font-18 color-text text-capitalize mt-10 mb-20"> Recover account</h4>
      <p class="font-12 text-center font-weight-400">Enter your email address and an email </p>
      <p class="font-12 text-center font-weight-400"> with instructions will be sent to you. </p>
    </div>
    <div class="form-login pl-30 pr-30 pt-30 pb-30">
      <Form
        ref="formRecive"
        :model="formRecive"
        :rules="ruleValidation"
        class="form-style-1 text-center"
      >
        <FormItem prop="mail" class="mb-30">
          <Input type="text" v-model="formRecive.mail" placeholder="Email" class="login-input">
            <Icon type="ios-person-outline" slot="prepend" size="25"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            @click="handleSubmit('formRecive')"
            class="pl-30 pr-30 pt-10 pb-10 bg-primary ibm-font color-grey border-0"
          >Recover Password</Button>
        </FormItem>
        <p class="text-right">
          <router-link to="/login" class="font-12 ibm-font color-primary text-capitalize">signIn ?</router-link>
        </p>
      </Form>
    </div>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      formRecive: {
        mail: ""
      },
      ruleValidation: {
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
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
