<template>
  <div class="register-container">
        <div class="content">
            <section>
                <img src="../../assets/logo.svg" alt="BeThehero">
                <h1>Cadastro Confirmado, Parabéns</h1>
                <p>Agora voce já pode começar a usar nossa plataforma e encontrar Herois para seus casos</p>
                <router-link :to="{name:'login'}"><img src="../../assets/arrow-left.png" alt="">Realizar Login</router-link>
            </section>
            <div class="token">
                <h1>Seu Token de acesso é:</h1>
                <p v-show="idToken" class="mensagem">{{idToken}}</p>
                <p>Guarde bem este Token pois ele será seu Login</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            idToken: '',
        }
    },
    created() {
        this.idToken = this.$route.query.idToken
        console.log(this.idToken);
    }
}
</script>

<style>
.mensagem{
  color: #e02040;
  text-align: center;
  font-size: 30px;
  transition-duration: 1000ms;
}
.register-container{
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
}
.register-container .content{
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.register-container .content section{
    width: 100%;
    max-width: 380PX;
}
.register-container .content section h1{
    margin: 64px 0 32px;
    font-size: 32px;
}
.register-container .content section p{
    font-size: 18px;
    color: #737380;
    line-height: 32px;
}
.register-container .content Token{
    width: 100%;
    max-width: 450px;
}
.register-container .content Token h1{
    margin-top: 8px;
}
.register-container .content Token {
    display: flex;
}
.register-container .content Token{
    margin-left: 8px;
}
</style>