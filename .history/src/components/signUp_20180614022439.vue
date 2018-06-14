<template>
    <div class="signUp">
        <div class="signUpLeft">
            <h1>IResumer</h1>
            <h2>Sign in</h2>
            <form @submit.prevent=signUp>
                <div class="formRow">
                    <input type="text" placeholder="username" v-model="formData.username"> 
                </div>
                <div class="formRow">
                    <input type="password" placeholder="password" v-model="formData.password"> 
                </div>
                <div class="formRow">
                    <input type="text" placeholder="e-mail" v-model="formData.eMail"> 
                </div>
                <div class="formActions">
                    <input type="submit" value="Sign in">
                </div>
            </form>
        </div> 
        <img src="http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg">
    </div>
</template>
<script>
import AV from '../lib/leancloud'
export default {
    name:'signUp',
    data(){
        return {
            formData:{
                username:'',
                password:'',
                eMail:''
            },
            signError:''
        }
    },
    props:['signUpVisi'],
    methods:{
        signUp: function () {
            var user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);     
            user.setEmail(this.formData.eMail);      
            user.signUp().then(function (loggedInUser) {
            }, function (error) {
                console.log(error)
            });
        }
    },
    created(){
    }
}
</script>

<style lang="scss">
    .signUp{
        display: flex;
        background: #283447;
        line-height:normal;
        > .signUpLeft{
            padding-right:30px;
            padding-left: 30px;
            text-align: center;
            color: #ffffff;
            > h1{
                margin-top: 50px;
                font-size: 36px;
                font-weight: normal;
            }
            > h2{
                font-weight: normal;
                text-align: left;
                margin-top: 40px;
            }
            > form{
                margin-top: 20px;
                > .formRow{
                    margin-top: 15px;
                    line-height:normal;
                    > input{
                        border: none;
                        border-bottom: 1px solid #e6e1e180;
                        padding: 5px;
                        outline:none;
                        width: 220px;
                        background: transparent;
                        color: #ffffff;
                    }
                    > input:focus{
                        border-bottom: 1px solid #000;
                    }
                }
                > .formActions{
                    margin-top:30px;
                    margin-bottom: 20px;
                    text-align: center;
                    > input{
                        background: #ffffff;
                        padding: 10px 45px;
                        border:none;
                        border-radius: 20px;
                        outline: none;
                        cursor: pointer;
                    }
                    > input:hover{
                        background: #cccccc;
                    }
                }
            }
            
        }
    }
</style>

