import Ongs from './views/Ongs/Ongs.vue'
import Profile from './views/Profile/Profile.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Register/Register.vue'
import RegisterConfirm from './views/RegisterConfirmation/RegisterConfirm.vue'

export const routes = [
    {path: '', name: 'login', component: Login, titulo: 'Login'},
    {path: '/profile', name: 'profile', component: Profile, titulo: 'Profile'}, 
    {path: '/ongs', name: 'ongs', component: Ongs, titulo: 'Ongs'},
    {path: '/register', name: 'register', component: Register, titulo: 'Register'},
    {path: '/registerConfirm', name: 'registerConfirm', component: RegisterConfirm, titulo: 'RegisterConfirm'},
    {path: '*', component: Login, menu: false }
]