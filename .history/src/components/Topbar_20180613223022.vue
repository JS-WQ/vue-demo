<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <div v-if="inlogined" class="userActioned" @changedata='changedata'>
                    <p>你好,{{username}}</p>
                    <el-button round @click="preview">预览</el-button>
                    <el-button round @click="ResumFolder">保存</el-button> 
                    <el-button round @click="leaveResum">退出</el-button>  
                </div>
                <div v-else class="userActions">
                    <el-button  round @click.prevent="signUpVisi = true,loginVisi = false">注册</el-button> 
                    <loginSignBox :visible="signUpVisi" @close="signUpVisi = false">
                        <signUp @success="login($event)" v-bind:signUpVisi="signUpVisi"/>
                    </loginSignBox>
                    <el-button  round @click.prevent="loginVisi = true,signUpVisi = false">登录</el-button> 
                    <loginSignBox :visible="loginVisi" @close="loginVisi = false">
                        <login @success="login($event)" v-bind:loginVisi="loginVisi" v-bind:iresum="iresum" v-bind:inlogined="inlogined" v-bind:username="username" @changedata="changedata" @changeuse="changeuse" @changeSign="changeSign"/>
                    </loginSignBox>
                </div>
            </div>
        </div>
                
    </div>
    
</template>
<script>

import signUp from './signUp'
import login from './login'
import loginSignBox from './loginSignBox'
import AV from '../lib/leancloud'


export default {
    name:'Topbar',
    data(){
        return{
            signUpVisi:false,
            loginVisi:false,
            inlogined:false,
            username:''
        }
    },
    props:['iresum'],
    methods:{
        preview:function(){
            document.querySelector('#app').setAttribute('class','onpreview')
        },
        ResumFolder:function(){
            var IRusmer = AV.Object.extend('IRusmer')
            var irusmer = new IRusmer

            //权限设置 登录账号拥有读写权力
            var acl = new AV.ACL()
            acl.setPublicReadAccess(false)
            acl.setPublicWriteAccess(false)
            acl.setReadAccess(AV.User.current(), true)
            acl.setWriteAccess(AV.User.current(), true)
            irusmer.setACL(acl)
            irusmer.set('imx',this.iresum.imx)
            irusmer.set('workExpress',this.iresum.workExpress)
            irusmer.set('studyExpress',this.iresum.studyExpress)
            irusmer.set('itemsdemo',this.iresum.itemsdemo)
            irusmer.set('prizes',this.iresum.prizes)
            irusmer.set('callme',this.iresum.callme)
            irusmer.save()
        },
        leaveResum:function(){
            AV.User.logOut()
            this.inlogined = false
            var currentUser = AV.User.current()
        },
        changedata:function(data){
            this.inlogined = data
        },
        changeuse:function(data){
            this.username = data
        },
        changeSign:function(){
            this.signUpVisi = true
            this.loginVisi = false
        }
    },
    computed:{
    },
    components:{loginSignBox,signUp,login},
    created:function(){
    }
}
</script>

<style lang="scss">
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:#d8d4d4ad;
    }
    .onpreview > #topbar{display: none;}
    #topbar{
        background-color: #ffffff;
        box-shadow: 0px 3px 5px #3333339c;  
        height:108px;
        line-height:108px;
        > .topNav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            > .logo{
                font-size: 38px;
                font-weight: 400;
            }
            > .actions{
                > .userActioned{
                    .el-button{
                    }
                }
                > .userActions{
                    .el-button{
                        margin-right:8px;
                    }
                }

            }   
        }
    }
</style>
