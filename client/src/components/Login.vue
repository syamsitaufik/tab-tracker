<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          label="Email"
          v-model="email">
        </v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password">
        </v-text-field>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          class="cyan" dark
          @click="login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has change', value)
  //   }
  // },
  methods: {
    async login () {
      console.log('register button was click', this.email, this.password)
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error // error.response.data return from axios
      }
    }
  },
  components: {
    Panel
  }
  // automate value in email
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
