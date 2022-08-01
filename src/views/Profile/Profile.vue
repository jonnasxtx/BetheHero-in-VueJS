<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="profile-container">
    <header>
      <img src="../../assets/logo.svg" alt="Logo">
      <span>Bem vindo, {{Ongs}}</span>
      <router-link :to="{name:'ongs'}"><img src="../../assets/briefcase.png" style="width: 25px; height: 25px; margin-right: 10px;" alt=""> Cadastrar novos casos</router-link >
      <button @click="handleLogout()" class="submitbutto">Sair</button>
    </header>
    <p v-show="mensagem" class="mensagem">{{ mensagem }}</p>
    <h1>Casos Cadastrados</h1>
    <ul v-if="incidents.length > 0">
      <p v-show="possuiCasos" class="mensagem">{{ possuiCasos }}</p>
      <li class="listaIncidents" v-for="incident of incidents" :key="incident.id">{{incident.id}}
        <strong>CASO:</strong>
          <p>{{incident.title}}</p>
        <strong>DESCRIÇÃO:</strong>
          <p>{{incident.description}}</p>
        <strong>VALOR:</strong>
          <p>R$ {{incident.value}}</p>
        <button @click="handleDeleteIncident(incident)" class="delButton"><img src="../../assets/trash.png" alt=""></button>
      </li>
    </ul>
    <p v-else class="mensagem">Seus Casos cadastrados apareceram aqui</p>
  </div>
</template>

<script>
import api from '../../Api'

export default {
  data() {
    return {
      incidents:[],
      Ongs:'',
      mensagem: '',
      possuiCasos:''
    }
  },
  computed:{
    getIdLocalStorage() {
      return localStorage.getItem('ongId')
    },
  },
  methods:{
    async handleDeleteIncident(incident){
      try{
         await api.delete(`/incidents/${incident.id}`,{
                headers:{
                    Authorization: this.getIdLocalStorage,
                }
            })
            .then(() => {let indice = this.incidents.indexOf(incident); // acha a posição da foto na lista
            this.incidents.splice(indice, 1); // a instrução altera o array
            this.mensagem = `Caso ${incident.id} removido com sucesso`, setTimeout(() => {
            this.mensagem = ''}, 5000);
            })
        } catch(err){
            this.mensagem = 'Não foi possivel remover este caso';
        }
    },
    handleLogout(){
      localStorage.clear();
      this.$router.push({ name: 'login'});
    },
   

  },
  created(){
    try{api.get('/profile',{
            headers:{
                Authorization: this.getIdLocalStorage,
            }
    })
    .then(response => (
      this.incidents = response.data)),
    err => {
      console.log(err)
    }
    console.log(this.incidents)
    this.Ongs = localStorage.getItem('Ongs')}
    catch(err){
      this.mensagem('não foi possivel carregar')
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
.profile-container{
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;
}
.profile-container header{
    display: flex;
    align-items: center;
}
.profile-container header span{
    font-size: 20px;
    margin-left: 24px;
}
.profile-container header img{
    height: 64px;
}
.profile-container header a{
    width: 260px;
    margin-left: auto;
    margin-top: 0;
}
.profile-container header .delButton{
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
}
.profile-container header .delButton:hover{
    border-color: #999;
}
.profile-container h1{
    margin-top: 80px;
    margin-bottom: 24px;
}
.profile-container ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
}
.profile-container ul li{
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
}
.profile-container ul li .delButton{
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
}
.profile-container ul li .delButton:hover{
    opacity: 0.8;
}
.profile-container ul li strong{
    display: block;
    margin-bottom: 16px;
    color: #41414d;

}
.profile-container ul li p + strong{
    margin-top: 32px;
}
.profile-container ul li p{
    color: #737380;
    line-height: 21px;
    font-size: 16px;
}
.submitbutto{
  height: 60px;
  width: 80px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 50px;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
}
.submitbutto:hover {
    filter: brightness(85%);
}
</style>