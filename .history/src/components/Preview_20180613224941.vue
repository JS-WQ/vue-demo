<template>
    <div id="preview">
        <i class="el-icon-circle-close-outline" v-on:click="offshow()"></i>
        <section v-if="messEmpty(iresum.imx)">
            <h2>个人信息</h2>
            <ul v-for="(mess,index) in iresum.imx">
                <li v-if="mess">{{iresum.labels[index]}}:{{mess}}</li>
            </ul>
        </section>
        <section v-if="filter(iresum.workExpress).length > 0">
                <h2>工作经验</h2>
                <ul style="list-style:none;">
                    <li v-for="work in filter(iresum.workExpress)">
                        <h2>{{work.company}}</h2>
                        <span>{{work.content}}</span>
                    </li>
                </ul>
        </section>
        <section v-if="filter(iresum.studyExpress).length > 0">
            <h2>学习经历</h2>
            <ul>
                <li v-for="study in filter(iresum.studyExpress)">
                    {{study.schoolName}} |
                    {{study.onlineSchool}} |
                    {{study.degree}}
                </li>
            </ul>
        </section>
        <section v-if="filter(iresum.itemsdemo).length > 0">
                <h2>项目和作品</h2>
                <ul>
                    <li v-for="idemo in filter(iresum.itemsdemo)">
                        <a :href="idemo.itemHrf">{{idemo.itemName}}</a>
                        <span>:{{idemo.itemCont}}</span>
                    </li>
                </ul>
        </section>
        <section v-if="filter(iresum.prizes).length > 0">
                <h2>获奖经历</h2>
                <ul>
                    <li v-for="prize in filter(iresum.prizes)">
                        <span>{{prize.prizeTime}}:</span>
                        <span>{{prize.prizeCont}}</span>
                    </li>
                </ul>
        </section>
        <section v-if="messEmpty(iresum.callme)">
            <h2>联系方式</h2>
            <ul v-for="(call,index) in iresum.callme">
                <li v-if="call">{{iresum.labels[index] || index}}:{{call}}</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    props:['iresum'],
    methods:{
        filter(array){
            return array.filter(item=> !this.isEmpty(item))
        },
        isEmpty(object){
            let empty = true
            for(let key in object){
                if(object[key]){
                    empty = false
                    break
                }
            }
            return empty
        },
        messEmpty(object){
            for(let key in object){
                if(object[key]){
                    return true
                }
            }
        },
        offshow(){
            document.querySelector('.onpreview').setAttribute('class','')
        }
    },
    created:function(){
        // console.log(this.iresum.imx.length)
    }
}
</script>

<style lang="scss">
    .onpreview{
        overflow:auto;
        background: rgba(30,30,30,0.9);
        > main > #preview{
        position: relative;
        margin:20px 350px;
        > .el-icon-circle-close-outline{
            display: block;
            position: absolute;
            right: 0px;
            top: 0px;
            font-size: 25px;
            }
        }
    } 
    #preview{
        padding-top: 20px;
        padding-left: 20px;
        background-color: #f2f2f2;
        flex: 1;
        box-shadow: 0px 2px 12px #3333339c;  
        border-radius: 5px;
        > .el-icon-circle-close-outline{
            display: none;
        }
        > section{
            text-align: left;
            margin-bottom: 20px;
            > ul{
                list-style: disc inside;
                > li{
                    padding-left: 10px;
                    margin-bottom:5px;
                    > h2{
                        font-weight:400;
                    }
                    > h4{
                        font-weight:200;
                    }
                    > a {
                        color: #ec7175;
                        text-decoration: none;
                    }
                    > a:hover {
                        color: #d82030;
                    }
                }
                
            }
        }
        
        
    }
</style>
