<template>
    <!-- Modal -->
    <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h3>Register</h3>
                    <button @click="reset()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="login">
                        <form action="#" class="row">
                            <div class="col-12">
                                <input type="text" v-model="name" class="form-control mb-3" placeholder="Name">
                            </div>
                            <div class="col-12">
                                <input type="email" v-model="email" class="form-control mb-3" placeholder="Email">
                            </div>
                            <div class="col-12">
                                <input type="password" v-model="password" class="form-control mb-3" placeholder="Password">
                            </div>
                            <div class="col-12">
                                <input type="password" v-model="confirmPassword" class="form-control mb-3" placeholder="Confirm password">
                            </div>
                            <div class="col-12">
                                <button @click.prevent="register('', $event)" type="submit" class="reg btn btn-primary">SIGN UP</button>
                                <button @click.prevent="register('google', $event)" class="reg btn btn-secondary border mx-2">LOGIN WITH GOOGLE</button>
                            </div>
                        </form>
                        <Alert :errorAlert="errorAlert" :display="showAlert" :message="alertMessage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import Alert from '@/components/Alert.vue'

export default {
    data(){
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            alertMessage: '',
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
        toggleAllRelatedButtons(btn = '.reg'){
            document.querySelectorAll(btn).forEach((elem)=>{
                if(elem.disabled){
                    elem.disabled = false;
                }else{
                    elem.disabled = true;
                }
            })
        },
        showError(msg){
            this.alertMessage = msg
            this.errorAlert = true
            this.showAlert = true
        },
        async register(getway='', event){
            this.toggleAllRelatedButtons()
            this.reset()

            if (
                this.name == '' ||
                this.email == '' ||
                this.password == ''||
                this.confirmPassword == ''
            ) {
                this.showError('Please complete all fields')
                this.toggleAllRelatedButtons()
                return
            }
            if (this.password !== this.confirmPassword) {
                this.showError('Passwords do not match')
                this.toggleAllRelatedButtons()
                return
            }

            const auth = getAuth()            
            switch (getway) {
                case 'google':
                    
                    break;            
                default:
                    createUserWithEmailAndPassword(auth, this.email, this.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(userCredential)
                            // ...

                            this.alertMessage = 'Account created successfully'
                            this.errorAlert = false
                            this.showAlert = true
                            this.toggleAllRelatedButtons()
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            this.alertMessage = errorMessage
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