<template>
    <div id="editor">
        <ol class="nav">
            <li v-for='i in [0,1,2,3,4,5]' v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
                <svg class="icon">
                    <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                </svg>
            </li>
        </ol>
        <ol class="paners">
            <li v-bind:class="{active: currentTab === 0}">
                <iMessage v-bind:iMessage="iresum.imx" v-bind:labels="iresum.labels" v-bind:title="'个人信息'" />     
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <items v-bind:items="iresum.workExpress" v-bind:labels="iresum.labels" v-bind:title="'工作经历'"/>
            </li>
            <li v-bind:class="{active: currentTab === 2}">
                <items v-bind:items="iresum.studyExpress" v-bind:labels="iresum.labels" v-bind:title="'学习经历'"/>
            </li>
            <li v-bind:class="{active: currentTab === 3}">
                <items v-bind:items="iresum.itemsdemo" v-bind:labels="iresum.labels" v-bind:title="'参与项目'"/> 
            </li>
            <li v-bind:class="{active: currentTab === 4}">
                <items v-bind:items="iresum.prizes" v-bind:labels="iresum.labels" v-bind:title="'获奖情况'"/>
            </li>
            <li v-bind:class="{active: currentTab === 5}">
                <iMessage v-bind:iMessage="iresum.callme" v-bind:labels="iresum.labels" v-bind:title="'联系方式'"/>
            </li>
        </ol>
    </div>
</template>
<script>
import iMessage from "./usermessage"
import items from "./editoritems"


export default {
    components:{ iMessage,items},
    props:['iresum'],
    data () {
        return {
            currentTab:0,
            icons:['shenfenzheng1','gongzuo','xuexi1','xiangmu','jiangbei','dianhua']
        }
    },
    created:function(){
    }
}
</script>

<style lang="scss">
    #editor{
        background-color: #ffffff;
        width: 500px;
        margin-right: 16px;
        margin-left: 16px;
        box-shadow: 0px 2px 12px #3333339c;  
        border-radius: 5px;
        display: flex;
        overflow: hidden;
        > .nav{
            background-color: #000000;
            width: 80px;
            > li{
                > svg{
                    width: 26px;
                    height:26px;
                    fill: #ffffff;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
            }
            > li.active{
                background-color: #ffffff;
                > svg{
                    fill: #000;
                }
            }
        }
        > .paners{
            padding: 34px;
            overflow: auto;
            flex: 1;
            > li{
                display: none;
            }
            > li.active{
                display: block;
            }
        }
    }
    .onpreview > main > #editor{display:none;}
    
</style>
