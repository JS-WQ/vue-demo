<template>
  <div id="app">
    <Topbar v-bind:actionType="actionType" v-bind:iresum="iresum"/>
    <main>
      <Editor v-bind:iresum="iresum"/>
      <Preview v-bind:iresum="iresum"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import AV from './lib/leancloud'



export default {
    name: 'App',
    data() {
        return {
            iresum:{
              imx: {name: '',birth: '',worktime:'',dreamPosition:'',expectedSalary:'',Blog:'',Github:'',city: ''},
              workExpress: [{company:'',content:''}],
              studyExpress: [{schoolName:'',onlineSchool:'',degree:''}],
              itemsdemo:[{itemName:'',itemCont:"",itemHrf:""}],
              prizes:[{prizeTime:'',prizeCont:''}],
              callme:{telephone:'',QQ:'',weixin:'',mail:'',address:''},
              labels:{name:'姓名',city:'期望城市',birth:'出生年月',worktime:'工作年限',dreamPosition:'期望职位',expectedSalary:'期望薪资',Blog:'技术博客',Github:'Github',company:'公司',content:'工作内容',schoolName:'学校名称',onlineSchool:'学习时间',degree:'学位',itemName:'项目名称',itemCont:'项目内容',itemHrf:'项目链接',prizeTime:'奖杯名',prizeCont:'奖杯内容',telephone:'电话号码',weixin:'微信',mail:'邮箱',address:'地址'},
            },
            actionType:'signUp',
            user:null
            
        }
    },
    components: {Topbar,Editor,Preview},
    methods:{},
    created:function(){
      let state = localStorage.getItem('state')
      //获取登录对象的id
      var user = AV.User.current()
      if(user){
        this.user = user.toJSON()
      }
    }
    
}
</script>

<style lang="scss">
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  > main{
    display: flex;
    height: 100vh;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #afacac24;
  }
}
</style>
