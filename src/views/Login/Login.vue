<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="login-container">
  <img src="../../assets/heroes.png">
    <div class="Login">
      <img src="../../assets/logo.svg">
    <form @submit.prevent="HandleLogin()">
      <div class="Login-form">
        <h1>Faça seu login</h1>
        <input 
          v-model="id" 
          placeholder="Sua ID"
          type="text" 
          class="Login-input"/>
      </div>
      <div class="Login-form"></div>
      <button class="submitbutton" tipo="submit">Login</button>
      <p v-show="mensagem" class="mensagem">{{ mensagem }}</p>
      <router-link :to="{name:'register'}">Não tenho cadastro <img src="../../assets/arrow-right.png" alt=""></router-link >
    </form>
  </div>
</div>

</template>

<script>

import api from '../../Api'

export default {
  data(){
    return {
      id: '',
      mensagem: '',
    }
      
  },
  methods: {
    HandleLogin() {
      try{
        console.log(this.id)
        api.post('/sessions', {id: this.id})
        .then(response =>{localStorage.setItem('Ongs', response.data.name), 
        localStorage.setItem('ongId', this.id),this.$router.push({ name: 'profile'}), setTimeout(() => {
        this.mensagem = ''}, 3000);
        } )
        .catch(() => {
          this.mensagem = 'Verifique se o ID de login está correto'
        })
        }
      catch(err){
        this.mensagem= 'não foi possivel realizar login'
      }
      
      }
  },
  created(){
      localStorage.clear()
  }
}
</script>

<style scoped>
.mensagem{
  color: #e02040;
  text-align: center;
  font-size: 20px;
  transition-duration: 1000ms;
}
.login-container{
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

form{
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
}
input{
  font-size: 32px;
  margin-bottom: 32px;
  border-radius: 5px;
  width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
}
h1{
  font-size: 32px;
  margin-bottom: 32px;
}

</style>