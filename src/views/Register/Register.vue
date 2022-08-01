<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="register-container">
        <div class="content">
            <section>
                <img src="../../assets/logo.svg" alt="BeThehero">
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG</p>
                <router-link :to="{name:'login'}"><img src="../../assets/arrow-left.png" alt=""> Já tenho Cadastro</router-link>
            </section>
            <form @submit.prevent="handleRegister">
                <input class="input" 
                placeholder="Nome da Ong"
                required
                v-model="name"
                >

                <input class="input"
                type="email"
                placeholder="E-mail"
                required
                v-model="email"
                >

                <input class="input" 
                type="text"
                placeholder="WhatsApp"
                required
                v-model="whatsapp"
                v-mask="'(##) #####-####'"
                >
                <div class="input-group">
                    <input class="input"
                    placeholder="Cidade"
                    required
                    v-model="city"
                    >
                    <input 
                    required
                    type="text"
                    class="input"
                    placeholder="UF"
                    style="width: 80"
                    maxlength="2"
                    v-model="uf"
                    >
                </div>
                <button class="submitbutton" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
</template>
<script>
import api from '../../Api'
export default {
    data(){
        return {
            name:'',
            email:'',
            whatsapp:'',
            city:'',
            uf:''
        
        }
    },
    methods:{
        async handleRegister(){
            const data = {
                name: this.name,
                email: this.email,
                whatsapp: this.whatsapp,
                city: this.city,
                uf: this.uf,
            }
            try{
                api.post('/ongs', data)
                .then(response => this.$router.push({ name: 'registerConfirm', query: {idToken: response.data.id}}))
            }
            catch(err){
                alert('Não foi possivel Cadastrar')
            }
        }
    }


    
}
</script>
<style scoped>
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
.register-container .content form{
    width: 100%;
    max-width: 450px;
}
.register-container .content form input{
    margin-top: 8px;
}
.register-container .content form .input-group{
    display: flex;
}
.register-container .content form .input-group input + input{
    margin-left: 8px;
}
</style>