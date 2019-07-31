<template>
    <div class="home-page" ref="home-page">
        <div class="header">
            <img src="../assets/imgs/logo.png"/>
            <div class="nav" v-for="nav in navs" :class="{'nav-selected':nav.selected}" @click="handleNavClick(nav)">
                {{nav.name}}
            </div>
        </div>
        <div class="banner" ref="banner">
            <img src="https://files.modengbox.com/website/official/block1_img.png"/>
            <img src="../assets/imgs/arrow_hover.png" @click="handleNavClick(navs[1])"/>
        </div>
        <div class="block1" ref="block1">
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
        <div class="block2" ref="block2">
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
        <div class="block3" ref="block3">
            <div class="section" v-for="item in block3_items">
                <img :src="'https://files.modengbox.com/website/official/'+item.url"/>
                <div class="item">
                    <div class="title">{{item.title}}</div>
                    <div class="subtitle">{{item.subtitle}}</div>
                    <div class="content">{{item.content}}</div>
                </div>
            </div>
        </div>
        <div class="block4" ref="block4">
            <div class="section">
                <div class="title">柜机功能介绍</div>
                <div class="subtitle">FUNCTION INTRODUCTION</div>
            </div>
            <div class="section">
                <div class="items-container">
                    <div class="item" v-for="item in block4_items">
                        <div style="display: flex;align-items: center">
                            <img :src="item.src"/>
                            <div class="title">{{item.title}}</div>
                        </div>
                        <div class="division"></div>
                        <div class="content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block5">
            <img src="https://files.modengbox.com/website/official/block6_img.png"/>
            <div class="title">柜机硬件介绍</div>
            <div class="subtitle">HARDWARE INTRODUCTION</div>
        </div>
        <div class="block6">
            <div>
                <div class="title">柜机硬件优势</div>
                <div class="subtitle">THE HARDWARE ADVANTAGES</div>
            </div>
            <div>
                <div class="items-container">
                    <div class="item" v-for="(item,index) in block6_items" v-if="index<4">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                    </div>
                </div>
                <div class="items-container">
                    <div class="item" v-for="(item,index) in block6_items" v-if="index>=4">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block7">
            <div class="title">智能化广告发布管理</div>
            <div class="subtitle">INTELLIGENT ADVERTIZING MANAGEMENT</div>
            <div class="sub-block">
                <div class="title">
                    智能化投放
                </div>
                <div class="division">
                </div>
                <div class="content">
                    一部手机就可上传发布广告，实现一站式实时投放线下媒体，流程可见，轻松把控整个投放流程。
                </div>
            </div>
        </div>
        <div class="block8">

        </div>
    </div>
</template>

<script>
    import {smoothScroll} from '../api/scroll'

    export default {
        name: "home-page",
        data() {
            return {
                navs: [],
                block1_items: [],
                block2_items: [],
                block3_items: [],
                block4_items: [],
                block6_items: []
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll, true);
            this.init();
        },
        mounted() {
            if (localStorage.getItem('scrollTop') != null) {
                let el = this.$refs['home-page'];
                el.scrollTop = Number(localStorage.getItem('scrollTop'));
            }
        },
        methods: {
            init() {
                let navs = [
                    {name: '首页', ref: 'banner', selected: true},
                    {name: '广告优势', ref: 'block1', selected: false},
                    {name: '万物皆煤', ref: 'block3', selected: false},
                    {name: '魔灯智媒柜机', ref: '', selected: false},
                    {name: '功能介绍', ref: '', selected: false},
                    {name: '硬件介绍', ref: '', selected: false},
                    {name: '硬件优势', ref: '', selected: false},
                    {name: '系列产品', ref: '', selected: false},
                    {name: '公司简介', ref: '', selected: false},
                    {name: '关于我们', ref: '', selected: false}
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
                    {
                        title: '区域定向',
                        subtitle: '根据商家所处位置选择附近10公里/5公里/3公里进行定向',
                        src: require('../assets/imgs/block3/iconqy.png')
                    },
                    {
                        title: '时段定向',
                        subtitle: '根据用户吃饭、娱乐、购物等不同生活场景进行时间、时段定向',
                        src: require('../assets/imgs/block3/iconsd.png')
                    },
                    {
                        title: '人群定向',
                        subtitle: '根据用户所处省、市、地区等位置信息进行定向',
                        src: require('../assets/imgs/block3/iconrq.png')
                    },
                    {title: '行业定向', subtitle: '根据餐饮、娱乐、校园、酒店等行业进行定向', src: require('../assets/imgs/block3/iconhy.png')},
                    {
                        title: '商圈定向',
                        subtitle: '根据用户所处的商圈、商场、超市等消费场所定向',
                        src: require('../assets/imgs/block3/iconsq.png')
                    },
                    {title: '屏幕定向', subtitle: '根据同行业同商家具体哪一块屏幕进行定向', src: require('../assets/imgs/block3/iconpm.png')},
                ]
                let block3_items = [
                    {
                        url: 'block3_img1.jpg',
                        title: '万物皆媒',
                        subtitle: 'Everything is a medium',
                        content: '在未来万物互联的时代，5G全面重塑商业生态，以更快的传输速度、超低的时延、更低功耗及海量连接开启万物互联新时代。英特尔《5G娱乐经济报告》称，未来10年5G将给全球传媒产业带来1.3万亿美元的新营收机会。'
                    },
                    {
                        url: 'block3_img2.jpg',
                        title: '魔灯智媒柜机',
                        subtitle: 'MODNIM CABINET',
                        content: '一款可共享充电的媒体柜机，以智能广告媒介为端口，打造场景营销、智联交互的生态社区,并联结商业、户外、居家、车载等物联网应用。更方便、更快捷、更省钱。'
                    }
                ]
                let block4_items = [
                    {
                        title: '广告投放',
                        content: '广告类型有：屏幕互动广告、机身广告、屏幕营销广告、线上广告等多种形式。',
                        src: require('../assets/imgs/block4/ad.png')
                    },
                    {
                        title: '商业服务',
                        content: '为合作商家提供多种商业服务,如“商家优惠券”、 “一键导航”、“整点发红包” 等',
                        src: require('../assets/imgs/block4/shangye.png')
                    },
                    {
                        title: '趣味霸屏',
                        content: '可通过霸屏功能1-2分钟做到场景社交、网红吸粉、创意求婚等。',
                        src: require('../assets/imgs/block4/quweibaping.png')
                    },
                    {title: '智能充电', content: '免押金，快速充电，2元充电一小时。', src: require('../assets/imgs/block4/charge.png')}
                ]
                let block6_items = [
                    {title: '信息安全保障', src: require('../assets/imgs/block6/icon1.png')},
                    {title: 'Power IQ智能速充', src: require('../assets/imgs/block6/icon2.png')},
                    {title: '中国平安保险', src: require('../assets/imgs/block6/icon3.png')},
                    {title: 'RoHS欧盟环保标准', src: require('../assets/imgs/block6/icon4.png')},
                    {title: '全国通借通还', src: require('../assets/imgs/block6/icon5.png')},
                    {title: '舒心自带线材', src: require('../assets/imgs/block6/icon6.png')},
                    {title: '八重安全保障', src: require('../assets/imgs/block6/icon7.png')},
                    {title: '专业化电源管理系统', src: require('../assets/imgs/block6/icon8.png')}
                ]
                this.navs = navs;
                this.block1_items = block1_items;
                this.block2_items = block2_items;
                this.block3_items = block3_items;
                this.block4_items = block4_items;
                this.block6_items = block6_items;
            },
            handleScroll() {
                let el = this.$refs['home-page'];
                localStorage.setItem('scrollTop', el.scrollTop);
                this.targetNav(el.scrollTop);
            },
            targetNav(scrollTop) {
                let curNav = this.navs.filter((nav) => nav.selected)[0];
                let curEl = this.$refs[curNav.ref];
                console.log('offsetTop:' + curEl.offsetTop);
                console.log('scrollTop' + scrollTop);
                //如果scrollTop正在当前选中的el的区域内
                if (curEl.offsetTop <= scrollTop && (curEl.offsetTop + curEl.clientHeight) >= scrollTop) {
                    return;
                }

                let lastNavIndex;
                for (let i = 0; i < this.navs.length; i++) {
                    let el = this.$refs[this.navs[i].ref];
                    console.log(el.offsetTop);
                    if (el.offsetTop <= scrollTop) {
                        lastNavIndex = i;
                        continue;
                    } else {
                        break;
                    }
                }
                console.log(lastNavIndex);
                this.navs.forEach((nav) => nav.selected = false);
                this.navs[lastNavIndex].selected = true;
            },
            handleNavClick(nav) {
                let targetOffsetTop = this.$refs[nav.ref].offsetTop;
                smoothScroll(targetOffsetTop, this.$refs['home-page'], 800, 'vertical');
                this.navs.forEach((nav) => nav.selected = false);
                nav.selected = true;
            }

        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll, true);
        }
    }
</script>

<style scoped lang="scss">
    .home-page {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        position: relative;
        z-index: 2;
    }

    .header {
        position: fixed;
        width: 100%;
        height: 80px;
        background: rgba(255, 255, 255, 0.56);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index: 1;

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

            &:last-of-type {
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

        & img:nth-child(1) {
            position: absolute;
            right: 296px;
        }

        & img:nth-child(2) {
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
            line-height: 54px;
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
            line-height: 54px;
        }

        & .items-container {
            width: fit-content;
            height: fit-content;
            display: flex;

            &:last-of-type {
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

                &:nth-child(2) {
                    &::before {
                        position: absolute;
                        left: 0;
                        width: 1px;
                        height: 80px;
                        background-color: #9DA0B0;
                        content: "";
                    }

                    &::after {
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

                .title {
                    font-size: 18px;
                    font-weight: bold;
                    color: rgba(56, 56, 56, 1);
                    line-height: 54px;
                }

                .subtitle {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(56, 56, 56, 1);
                    line-height: 22px;
                }
            }
        }
    }

    .block3 {
        width: 100%;
        height: 1220px;

        .section {
            display: flex;
            width: 100%;
            height: 50%;

            &:nth-child(2) {
                flex-direction: row-reverse;
                background: rgba(245, 247, 252, 1);
            }

            & img {
                width: 50%;
                height: 100%;
            }

            & .item {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                & .title {
                    font-size: 40px;
                    font-weight: 400;
                    color: rgba(56, 56, 56, 1);
                    line-height: 54px;
                    text-align: left;
                    margin-left: 100px;
                }

                & .subtitle {
                    font-size: 28px;
                    font-weight: 300;
                    color: rgba(102, 102, 102, 1);
                    line-height: 54px;
                    text-align: left;
                    margin-left: 100px;
                }

                & .content {
                    width: 465px;
                    height: 112px;
                    font-size: 16px;
                    font-weight: 400;
                    color: rgba(67, 67, 67, 1);
                    line-height: 32px;
                    text-align: left;
                    margin-top: 60px;
                    margin-left: 100px;
                }
            }
        }
    }

    .block4 {
        width: 100%;
        height: 890px;
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
            line-height: 54px;
        }

        & .items-container {
            display: flex;

            & .item {
                width: 284px;
                height: 378px;
                border: 1px solid rgba(157, 160, 176, 0.56);
                padding: 58px 34px;
                box-sizing: border-box;
                margin: 0px 10px;

                & .division {
                    width: 32px;
                    height: 2px;
                    background: rgba(115, 115, 115, 1);
                    margin-top: 18px;
                }

                & img {
                    width: 24px;
                    height: 24px;
                    margin-right: 12px;
                }

                & .title {
                    font-size: 28px;
                    font-weight: bold;
                    color: rgba(56, 56, 56, 1);
                    line-height: 54px;
                }

                & .content {
                    font-size: 16px;
                    font-weight: 400;
                    color: rgba(67, 67, 67, 1);
                    line-height: 32px;
                    margin-top: 61px;
                    text-align: left;
                }
            }
        }
    }

    .block5 {
        width: 1920px;
        height: 1080px;
        position: relative;
        z-index: -1;
        background-image: url(https://files.modengbox.com/website/official/block6_bg.jpg);
        display: flex;
        align-items: center;
        flex-direction: column;

        & .title {
            font-size: 40px;
            font-weight: 400;
            color: rgba(56, 56, 56, 1);
            margin-top: 128px;
        }

        & .subtitle {
            font-size: 28px;
            font-weight: 300;
            color: rgba(102, 102, 102, 1);
            font-family: PingFang-SC-Light;
            line-height: 54px;
        }

        & img {
            position: absolute;
            left: 484px;
            top: 480px;
        }
    }

    .block6 {
        width: 100%;
        height: 890px;
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
            line-height: 54px;
        }

        & .items-container {
            width: fit-content;
            height: fit-content;
            display: flex;

            &:last-of-type {
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

                & img {
                    width: 64px;
                    height: 64px;
                }

                .title {
                    font-size: 18px;
                    font-family: PingFang-SC-Regular;
                    font-weight: 400;
                    color: rgba(115, 115, 115, 1);
                    line-height: 70px;
                }

                .subtitle {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(56, 56, 56, 1);
                    line-height: 22px;
                }
            }
        }
    }

    .block7{
        width: 100%;
        height: 940px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-image: url(https://files.modengbox.com/website/official/block8_bg.jpg);
        position: relative;

        & .title {
            font-size: 40px;
            font-weight: 400;
            color:rgba(255,255,255,1);
            margin-top: 160px;
        }

        & .subtitle {
            font-size: 28px;
            font-weight: 300;
            color:rgba(255,255,255,1);
            font-family: PingFang-SC-Light;
            line-height: 54px;
        }

        & .sub-block{
            position: absolute;
            color: white;
            left: 364px;
            bottom:273px;

            & .title{
                font-size:40px;
                font-family:PingFang-SC-Light;
                font-weight:300;
                color:rgba(255,255,255,1);
                line-height:32px;
                text-align: left;
            }

            & .division{
                width:80px;
                height:1px;
                background:rgba(245,247,252,1);
                margin:62px 0px;
            }

            & .content{
                width:465px;
                height:49px;
                font-size:16px;
                font-family:PingFang-SC-Light;
                font-weight:300;
                color:rgba(255,255,255,1);
                line-height:32px;
                text-align: left;
            }
        }
    }

    .block8{
        width: 100%;
        height: 740px;
        display: flex;
    }
</style>