<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="new-incident-container">
    <div class="content">
      <section>
        <img src="../../assets/logo.svg">
        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um heroi</p>
        <router-link :to="{name:'profile'}"><img src="../../assets/arrow-left.png" alt=""> Voltar para home</router-link>
      </section>
      <p v-show="mensagem" class="mensagem">{{mensagem}}</p>
      <form @submit.prevent="handleIncident">
        <input 
        class="input" 
        type="text"
        placeholder="Titulo do caso"
        v-model="title"
        required
        >
        <textarea 
        rows="5"
        class="descricao"
        type="textarea"
        placeholder="Digite uma descrição"
        required
        v-model="description"></textarea>
        
        

        <input class="input"
        type="number" 
        placeholder="Valor"
        v-model="value"
        >
        
        <button class="submitbutton">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../../Api.js'

export default {
  data() {
    return {
        title: '',
        description: '',
        value: '',
        mensagem: '',
    }
  },
  computed:{
    getIdLocalStorage() {
      return localStorage.getItem('ongId')
    },
  },
  methods:{
    handleIncident(){
      const data = {
        title: this.title,
        description: this.description,
        value: this.value
      }
      try {
        api.post('/incidents', data, {
          headers: {
                    Authorization: this.getIdLocalStorage,
                }
        }
        )
        this.$router.push({ name: 'profile'})
      } catch (error) {
        this.mensagem = 'Erro ao cadastrar novo caso'
      }
    }
  }



}
</script>

<style>
.mensagem{
  color: #e02040a1;
  text-align: center;
  font-size: 20px;
  transition-duration: 1000ms;
}
.new-incident-container{
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
}
.new-incident-container .content{
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.new-incident-container .content section{
    width: 100%;
    max-width: 380PX;
}
.new-incident-container .content section h1{
    margin: 64px 0 32px;
    font-size: 32px;
}
.new-incident-container .content section p{
    font-size: 18px;
    color: #737380;
    line-height: 32px;
}
.new-incident-container .content form{
    width: 100%;
    max-width: 450px;
}
.new-incident-container .content form .input,
.new-incident-container .content form .descricao{
    margin-top: 8px;
}
</style>