<template>
  <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h3>Login</h3>
                    <button @click="reset()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="#" class="row">
                        <div class="col-12">
                            <input type="email" class="form-control mb-3" v-model="email" placeholder="Email">
                        </div>
                        <div class="col-12">
                            <input type="password" class="form-control mb-3" v-model="password" placeholder="Password">
                        </div>
                        <div class="col-12">
                            <button @click.prevent="login()" class="login btn btn-primary border ">LOGIN</button>
                            <button @click.prevent="login('google')" class="login btn btn-secondary border mx-2">LOGIN WITH GOOGLE</button>
                        </div>
                    </form>
                    <Alert :errorAlert="errorAlert" :display="showAlert" :message="error"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import Alert from '@/components/Alert.vue'

export default {
    data(){
        return {
            email: '',
            password: '',
            error: '',
            showAlert: null,
            errorAlert: null
        }
    },
    components: {
        Alert
    },  
    methods:{
        reset(){
            this.error = ''
            this.showAlert = false
        },
        toggleAllRelatedButtons(btn = '.login'){
            document.querySelectorAll(btn).forEach((elem)=>{
                if(elem.disabled){
                    elem.disabled = false;
                }else{
                    elem.disabled = true;
                }
            })
        },
        login(getway=''){
            this.toggleAllRelatedButtons()
            this.reset()
            const auth = getAuth()
            
            switch (getway) {
                case 'google':
                    
                    break;            
                default:
                    signInWithEmailAndPassword(auth, this.email, this.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user)
                            this.toggleAllRelatedButtons()
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            this.error = errorMessage
                            this.errorAlert = true
                            this.showAlert = true
                            this.toggleAllRelatedButtons()
                            
                        });
                    break;
            }
        }
    }

}
</script>

<style>

</style>