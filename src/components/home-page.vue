<template>
    <div class="home-page">
        <div class="header">
            <img src="../assets/imgs/logo.png"/>
            <div class="nav" v-for="nav in navs" :class="{'nav-selected':nav.selected}">{{nav.name}}</div>
        </div>
        <div class="banner">
            <img src="https://files.modengbox.com/website/official/block1_img.png"/>
            <img src="../assets/imgs/arrow_hover.png"/>
        </div>
        <div class="block1">
            <div class="section">
                <div class="title">广告优势-全场景投放</div>
                <div class="subtitle">FULL SCENE DELIVERY</div>
            </div>
            <div class="section">
                <div class="items-container">
                    <div v-for="(item,index) in block1_items" v-if="index<4" class="item">
                        <img :src="'https://files.modengbox.com/website/official/'+item.url"/>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <div class="items-container">
                    <div v-for="(item,index) in block1_items" v-if="index>=4" class="item">
                        <img :src="'https://files.modengbox.com/website/official/'+item.url"/>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="block2">
            <div class="section">
                <div class="title">六大精准化定向</div>
                <div class="subtitle">SIX PRECISE ORIENTATIONS</div>
            </div>
            <div class="section">
                <div class="items-container">
                    <div class="item" v-for="(item,index) in block2_items" v-if="index<3">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">{{item.subtitle}}</div>
                    </div>
                </div>
                <div class="items-container">
                    <div class="item" v-for="(item,index) in block2_items" v-if="index>=3">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">{{item.subtitle}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block3">
            <div class="section" v-for="item in block3_items">
                <img :src="'https://files.modengbox.com/website/official/'+item.url"/>
                <div class="item">
                    <div class="title">{{item.title}}</div>
                    <div class="subtitle">{{item.subtitle}}</div>
                    <div class="content">{{item.content}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-page",
        data() {
            return {
                navs: [],
                block1_items: [],
                block2_items:[],
                block3_items:[]
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                let navs = [
                    {name: '首页', href: '', selected: true},
                    {name: '广告优势', href: '', selected: false},
                    {name: '万物皆煤', href: '', selected: false},
                    {name: '魔灯智媒柜机', href: '', selected: false},
                    {name: '功能介绍', href: '', selected: false},
                    {name: '硬件介绍', href: '', selected: false},
                    {name: '硬件优势', href: '', selected: false},
                    {name: '系列产品', href: '', selected: false},
                    {name: '公司简介', href: '', selected: false},
                    {name: '关于我们', href: '', selected: false}
                ]

                let block1_items = [
                    {name: '火车站应用场景', url: 'block2_railstation.png'},
                    {name: '机场应用场景', url: 'block2_airport.png'},
                    {name: '商场应用场景', url: 'block2_mall.png'},
                    {name: '商业综合体应用场景', url: 'block2_mall2.png'},
                    {name: '酒吧应用场景', url: 'block2_bar.png'},
                    {name: '咖啡厅应用场景', url: 'block2_.png'},
                    {name: 'KTV应用场景', url: 'block2_ktv.png'},
                    {name: '游乐场应用场景', url: 'block2_yly.png'}
                ]
                let block2_items = [
                    {title: '区域定向', subtitle:'根据商家所处位置选择附近10公里/5公里/3公里进行定向',src:require('../assets/imgs/block3/iconqy.png')},
                    {title: '时段定向', subtitle:'根据用户吃饭、娱乐、购物等不同生活场景进行时间、时段定向',src:require('../assets/imgs/block3/iconsd.png')},
                    {title: '人群定向', subtitle:'根据用户所处省、市、地区等位置信息进行定向',src:require('../assets/imgs/block3/iconrq.png')},
                    {title: '行业定向', subtitle:'根据餐饮、娱乐、校园、酒店等行业进行定向',src:require('../assets/imgs/block3/iconhy.png')},
                    {title: '商圈定向', subtitle:'根据用户所处的商圈、商场、超市等消费场所定向',src:require('../assets/imgs/block3/iconsq.png')},
                    {title: '屏幕定向', subtitle:'根据同行业同商家具体哪一块屏幕进行定向',src:require('../assets/imgs/block3/iconpm.png')},
                ]
                let block3_items=[
                    {url:'block3_img1.jpg',title:'万物皆媒',subtitle:'Everything is a medium',content:'在未来万物互联的时代，5G全面重塑商业生态，以更快的传输速度、超低的时延、更低功耗及海量连接开启万物互联新时代。英特尔《5G娱乐经济报告》称，未来10年5G将给全球传媒产业带来1.3万亿美元的新营收机会。'},
                    {url:'block3_img2.jpg',title:'魔灯智媒柜机',subtitle:'MODNIM CABINET',content:'一款可共享充电的媒体柜机，以智能广告媒介为端口，打造场景营销、智联交互的生态社区,并联结商业、户外、居家、车载等物联网应用。更方便、更快捷、更省钱。'}
                ]
                this.navs = navs;
                this.block1_items = block1_items;
                this.block2_items=block2_items;
                this.block3_items=block3_items;
            }
        }
    }
</script>

<style scoped lang="scss">
    .home-page {
        width: 100%;
        height: 100%;
    }

    .header {
        position: fixed;
        width: 100%;
        height: 80px;
        background: rgba(255, 255, 255, 0.56);
        display: flex;
        align-items: center;
        justify-content: flex-end;

        img {
            width: fit-content;
            height: fit-content;
            position: absolute;
            left: 120px;
        }

        & .nav {
            width: 121px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            user-select: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;

            &:last-of-type{
                margin-right: 50px;
            }
        }

        & .nav-selected {
            background-color: #FF274B;
            color: rgba(255, 255, 255, 1);
        }
    }

    .banner {
        width: 100%;
        height: 100%;
        background-image: url(https://files.modengbox.com/website/official/BANNER.jpg);
        display: flex;
        align-items: center;
        justify-content: center;

        & img:nth-child(1){
            position: absolute;
            right: 296px;
        }

        & img:nth-child(2){
            position: absolute;
            bottom: 40px;
            cursor: pointer;
        }
    }

    .block1 {
        width: 100%;
        height: 890px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        & .section {

        }

        & .title {
            font-size: 40px;
            font-weight: 400;
            color: rgba(56, 56, 56, 1);
        }

        & .subtitle {
            font-size: 28px;
            font-weight: 300;
            color: rgba(102, 102, 102, 1);
            font-family: PingFang-SC-Light;
        }

        & .items-container {
            width: fit-content;
            height: fit-content;
            display: flex;

            & .item {
                width: fit-content;
                height: fit-content;
                margin: 0px 20px;
            }

            & img {
                width: 284px;
                height: 170px;
            }

            & p {
                font-size: 16px;
                font-weight: 400;
                color: rgba(56, 56, 56, 1);
                line-height: 32px;
                margin: 0;
                padding: 0;
                text-align: left;
            }
        }
    }

    .block2 {
        width: 100%;
        height: 890px;
        background: rgba(245, 247, 252, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        & .title {
            font-size: 40px;
            font-weight: 400;
            color: rgba(56, 56, 56, 1);
        }

        & .subtitle {
            font-size: 28px;
            font-weight: 300;
            color: rgba(102, 102, 102, 1);
            font-family: PingFang-SC-Light;
        }

        & .items-container {
            width: fit-content;
            height: fit-content;
            display: flex;

            &:last-of-type{
                margin-top: 3rem;
            }

            & .item {
                width: 210px;
                height: fit-content;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0px 100px;
                position: relative;

                &:nth-child(2){
                    &::before{
                        position: absolute;
                        left: 0;
                        width: 1px;
                        height: 80px;
                        background-color: #9DA0B0;
                        content: "";
                    }

                    &::after{
                        position: absolute;
                        right: 0;
                        width: 1px;
                        height: 80px;
                        background-color: #9DA0B0;
                        content: "";
                    }
                }

                & img {
                    width: 64px;
                    height: 64px;
                }

                .title{
                    font-size:18px;
                    font-weight:bold;
                    color:rgba(56,56,56,1);
                    line-height:54px;
                }

                .subtitle{
                    font-size:14px;
                    font-weight:400;
                    color:rgba(56,56,56,1);
                    line-height:22px;
                }
            }
        }
    }

    .block3{
        width: 100%;
        height: 1220px;

        .section{
            display: flex;
            width: 100%;
            height: 50%;

            &:nth-child(2){
                flex-direction: row-reverse;
            }

            & img{
                width: 50%;
                height: 100%;
            }

            & .item{
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                & .title{
                    font-size:40px;
                    font-weight:400;
                    color:rgba(56,56,56,1);
                    line-height:54px;
                    text-align: left;
                    margin-left: 100px;
                }

                & .subtitle{
                    font-size:28px;
                    font-weight:300;
                    color:rgba(102,102,102,1);
                    line-height:54px;
                    text-align: left;
                    margin-left: 100px;
                }

                & .content{
                    width:465px;
                    height:112px;
                    font-size:16px;
                    font-weight:400;
                    color:rgba(67,67,67,1);
                    line-height:32px;
                    text-align: left;
                    margin-top: 60px;
                    margin-left: 100px;
                }
            }
        }
    }
</style>