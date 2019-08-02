<template>
    <div class="home-page" ref="home-page">
        <div class="header" :style="{background:'rgba(255, 255, 255,'+headerOpacity+')',left:-scrollbarWidth+'px'}">
            <img src="../assets/imgs/logo.png"/>
            <div class="nav" v-for="nav in navs" :class="{'nav-selected':nav.selected}" @click="handleNavClick(nav)">
                {{nav.name}}
            </div>
        </div>
        <div class="banner" ref="banner">
            <img src="https://files.modengbox.com/website/official/block1_img.png" class="animated zoomIn"/>
            <img src="../assets/imgs/arrow_hover.png" @click="handleNavClick(navs[1])"/>
        </div>
        <div class="block1" ref="block1">
            <div class="section">
                <div class="title animated fadeInUp" v-if="animItems[0].animated">广告优势-全场景投放</div>
                <div class="subtitle animated fadeInUp" v-if="animItems[0].animated">FULL SCENE DELIVERY</div>
            </div>
            <div class="section">
                <div class="items-container">
                    <div v-for="(item,index) in block1_items" v-if="index<4&&animItems[0].animated"
                         class="item animated fadeInUp">
                        <img :src="'https://files.modengbox.com/website/official/'+item.url"/>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <div class="items-container">
                    <div v-for="(item,index) in block1_items" v-if="index>=4&&animItems[0].animated"
                         class="item animated fadeInUp delay-200ms">
                        <img :src="'https://files.modengbox.com/website/official/'+item.url"/>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="block2" ref="block2">
            <div class="section">
                <div class="title animated fadeInUp" v-if="animItems[1].animated">六大精准化定向</div>
                <div class="subtitle animated fadeInUp" v-if="animItems[1].animated">SIX PRECISE ORIENTATIONS</div>
            </div>
            <div class="section">
                <div class="items-container">
                    <div class="item animated fadeInUp" v-for="(item,index) in block2_items"
                         v-if="index<3&&animItems[1].animated">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">{{item.subtitle}}</div>
                    </div>
                </div>
                <div class="items-container">
                    <div class="item animated fadeInUp delay-200ms" v-for="(item,index) in block2_items"
                         v-if="index>=3&&animItems[1].animated">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">{{item.subtitle}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block3" ref="block3">
            <div class="section" ref="block3_1">
                <img :src="'https://files.modengbox.com/website/official/'+block3_items[0].url"/>
                <div class="item animated fadeInRight" v-if="animItems[2].animated">
                    <div class="title">{{block3_items[0].title}}</div>
                    <div class="subtitle">{{block3_items[0].subtitle}}</div>
                    <div class="content">{{block3_items[0].content}}</div>
                </div>
            </div>
            <div class="section" ref="block3_2">
                <img :src="'https://files.modengbox.com/website/official/'+block3_items[1].url"/>
                <div class="item animated fadeInLeft" v-if="animItems[3].animated">
                    <div class="title">{{block3_items[1].title}}</div>
                    <div class="subtitle">{{block3_items[1].subtitle}}</div>
                    <div class="content">{{block3_items[1].content}}</div>
                </div>
            </div>
        </div>
        <div class="block4" ref="block4">
            <div class="section">
                <div class="title animated fadeInUp" v-if="animItems[4].animated">柜机功能介绍</div>
                <div class="subtitle animated fadeInUp" v-if="animItems[4].animated">FUNCTION INTRODUCTION</div>
            </div>
            <div class="section">
                <div class="items-container">
                    <div class="item animated fadeInUp" v-for="item in block4_items" v-if="animItems[4].animated">
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
        <div class="block5" ref="block5">
            <img src="https://files.modengbox.com/website/official/block6_img.png" v-if="animItems[5].animated"
                 class="animated fadeInLeft"/>
            <div class="title">柜机硬件介绍</div>
            <div class="subtitle">HARDWARE INTRODUCTION</div>
        </div>
        <div class="block6" ref="block6">
            <div>
                <div class="title animated fadeInUp" v-if="animItems[6].animated">柜机硬件优势</div>
                <div class="subtitle animated fadeInUp" v-if="animItems[6].animated">THE HARDWARE ADVANTAGES</div>
            </div>
            <div>
                <div class="items-container">
                    <div class="item animated fadeInUp" v-for="(item,index) in block6_items"
                         v-if="index<4&&animItems[6].animated">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                    </div>
                </div>
                <div class="items-container">
                    <div class="item animated fadeInUp delay-200ms" v-for="(item,index) in block6_items"
                         v-if="index>=4&&animItems[6].animated">
                        <img :src="item.src"/>
                        <div class="title">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block7" ref="block7">
            <div class="title">智能化广告发布管理</div>
            <div class="subtitle">INTELLIGENT ADVERTIZING MANAGEMENT</div>
            <div class="sub-block animated fadeInLeft" v-if="animItems[7].animated">
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
        <div class="block8" ref="block8">
            <div class="section">
                <img src="https://files.modengbox.com/website/official/block9_img.jpg"/>
            </div>
            <div class="section animated fadeInRight" v-if="animItems[8].animated">
                <div class="title">
                    可视化数据
                </div>
                <div class="division"></div>
                <div class="content">
                    所有投放的广告，都可生成一个广告投放结果数据报告，让广告主的广告结果清晰可见，目前线下媒体仅魔灯可做到。
                </div>
            </div>
        </div>
        <div class="block9" ref="block9">
            <div class="title animated fadeInLeft" v-if="animItems[9].animated">魔灯智媒系列产品介绍</div>
            <div class="subtitle animated fadeInLeft" v-if="animItems[9].animated">SERIES PRODUCTS</div>
            <div class="content animated fadeInLeft" v-if="animItems[9].animated">
                魔灯智媒融合了共享充电宝和广告传媒的特点，自主设计，自主研发的智能硬件和软件于一体的智能媒介。在国内率先以充电宝为基础，与超清屏融合为一体，运用人工智能技术打造了魔灯桌面广告机、魔灯移动广告机、魔灯小机柜、魔灯大机柜等物联网媒介系列产品，开创了国内媒介4.0新时代。
            </div>
        </div>
        <div class="block10" ref="block10">
            <div class="section animated zoomIn" v-if="animItems[10].animated">
                <div class="title">公司简介</div>
                <div class="subtitle">COMPANY PROFILE</div>
                <div class="content">
                    四川魔灯智媒文化传媒有限公司是一家“社群媒体+共享充电+物联网”的科技媒体创新企业，是中国智能媒介4.0时代的开创者和领导者。
                    魔灯智媒以消费领域各种场景作为城市消费人群的流量入口，致力于用魔灯共享智能媒介机为客户提供真正精准、经济的城市主力消费人群媒体流量，尤其是在当今人群移动化、碎片化的时代，通过高精技术有效解决中小、小微企业广告投不起、费用高、场景单一的现实痛点。
                </div>
            </div>
        </div>
        <div class="block11" ref="block11">
            <div class="section">
                <div class="title">联系我们</div>
                <div class="subtitle">CONTACT US</div>
                <div class="content1">全国招商热线：4000-767-028</div>
                <div class="content2">企业邮箱：mumarenkeji@163.com</div>
                <div class="content3">
                    公司地址：四川省成都市武侯区益州大道北段333号东方希望中心
                    2幢4楼整层
                </div>
            </div>
            <div class="section">
                <div class="map" id="map"></div>
            </div>
        </div>
        <div class="block12">
            <div class="title">招商加盟</div>
            <div class="content">请填写必要信息，提交后工作人员会尽快联系您</div>
            <div class="section">
                <div class="input-container">
                    <input v-model="form.name" maxlength="15"/>
                    <img src="../assets/imgs/portrait.png"/>
                    <div class="title">姓名：</div>
                </div>
                <div class="input-container">
                    <input v-model="form.phone" type="tel" maxlength="14"/>
                    <img src="../assets/imgs/phone.png"/>
                    <div class="title">电话：</div>
                </div>
                <div class="input-container">
                    <input class="last-input" v-model="form.captcha" placeholder="请输入右边的图形验证码"/>
                    <div class="captcha">
                        <img src="https://tms.modengbox.com/app/common/captcha/create" width="100%"
                             v-if="captchaVisible"/>
                    </div>
                    <img src="../assets/imgs/refresh.png" class="refresh-img" @click="refreshCaptcha()"/>
                </div>
                <div class="button" @click="submitForm">提交</div>
            </div>
        </div>
        <div class="bottom-bar">
            <div class="section1">
                <div style="width: fit-content">
                    <img src="../assets/imgs/logo.png"/>
                </div>
                <div class="items-container">
                    <div class="item" v-for="nav in bottomNavs" @click="handleNavClick(nav)">
                        {{nav.name}}
                    </div>
                </div>
                <div class="content">Copyright © 魔灯智媒文化传媒有限公司 版权所有 | 备案号: 蜀ICP备16010317号-2</div>
                <div class="division"></div>
            </div>
            <div class="section2">
                <img src="../assets/imgs/ewm.png"/>
                <div class="title">扫码关注</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {isElementInViewport, smoothScroll} from '../api/scroll'
    //import { Message } from 'element-ui';

    export default {
        name: "home-page",
        data() {
            return {
                navs: [],
                block1_items: [],
                block2_items: [],
                block3_items: [],
                block4_items: [],
                block6_items: [],
                bottomNavs: [],
                animItems: [],
                headerOpacity: 0.56,
                form: {
                    name: '',
                    phone: '',
                    captcha: ''
                },
                scrollbarWidth: 0,
                captchaVisible: true
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll, true);
            this.init();
        },
        mounted() {
            let el = this.$refs['home-page'];
            if (localStorage.getItem('scrollTop') != null) {
                el.scrollTop = Number(localStorage.getItem('scrollTop'));
            }
            this.scrollbarWidth = el.offsetWidth - el.clientWidth;
            this.initMap();
        },
        methods: {
            init() {
                let navs = [
                    {name: '首页', ref: 'banner', selected: true},
                    {name: '广告优势', ref: 'block1', selected: false},
                    {name: '万物皆煤', ref: 'block3_1', selected: false},
                    {name: '魔灯智媒柜机', ref: 'block3_2', selected: false},
                    {name: '功能介绍', ref: 'block4', selected: false},
                    {name: '硬件介绍', ref: 'block5', selected: false},
                    {name: '硬件优势', ref: 'block6', selected: false},
                    {name: '系列产品', ref: 'block9', selected: false},
                    {name: '公司简介', ref: 'block10', selected: false},
                    {name: '联系我们', ref: 'block11', selected: false}
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

                let animItems = [
                    {animated: false, ref: 'block1'},
                    {animated: false, ref: 'block2'},
                    {animated: false, ref: 'block3_1'},
                    {animated: false, ref: 'block3_2'},
                    {animated: false, ref: 'block4'},
                    {animated: false, ref: 'block5'},
                    {animated: false, ref: 'block6'},
                    {animated: false, ref: 'block7'},
                    {animated: false, ref: 'block8'},
                    {animated: false, ref: 'block9'},
                    {animated: false, ref: 'block10'}
                ]

                let bottomNavs = navs.filter((nav, index) => {
                    return index != 2 && index != 3;
                });
                this.navs = navs;
                this.block1_items = block1_items;
                this.block2_items = block2_items;
                this.block3_items = block3_items;
                this.block4_items = block4_items;
                this.block6_items = block6_items;
                this.bottomNavs = bottomNavs;
                this.animItems = animItems;
            },
            initMap() {
                // 创建地图
                var map = new BMap.Map("map") // 创建地图实例
                var myicon = new BMap.Icon(
                    require('../assets/imgs/location.png'),
                    new BMap.Size(21, 32) // 视窗大小
                )
                var point = new BMap.Point(104.06814459917143,30.587706714706766);
                // 创建地址解析器实例
// 将地址解析结果显示在地图上，并调整地图视野
                map.centerAndZoom(point, 22);
                map.addOverlay(new BMap.Marker(point, {icon: myicon}));
                map.enableScrollWheelZoom();
            },
            handleScroll() {
                let el = this.$refs['home-page'];
                localStorage.setItem('scrollTop', el.scrollTop);
                this.targetNav(el.scrollTop);
                //如果还有没有animated过的就trigger一下
                if (this.animItems.filter((item) => !item.selected).length != 0) {
                    this.triggerAnim(el.scrollTop);
                }
                this.headerOpacity = 0.56 + el.scrollTop / 100;
            },
            triggerAnim() {
                for (let i = 0; i < this.animItems.length; i++) {
                    if (!this.animItems[i].animated) {
                        let el = this.$refs[this.animItems[i].ref];
                        if (isElementInViewport(el)) {
                            this.animItems[i].animated = true;
                        }
                    }
                }
            },
            //targetNav是在每次滑动的时候触发
            targetNav(scrollTop) {
                let curNav = this.navs.filter((nav) => nav.selected)[0];
                let curEl = this.$refs[curNav.ref];
                //如果scrollTop正在当前选中的el的区域内
                if (curEl.offsetTop <= scrollTop && (curEl.offsetTop + curEl.clientHeight) >= scrollTop) {
                    return;
                }

                let lastNavIndex;
                for (let i = 0; i < this.navs.length; i++) {
                    let el = this.$refs[this.navs[i].ref];
                    if (el.offsetTop <= scrollTop) {
                        lastNavIndex = i;
                        continue;
                    } else {
                        break;
                    }
                }
                this.navs.forEach((nav) => nav.selected = false);
                this.navs[lastNavIndex].selected = true;
            },
            handleNavClick(nav) {
                let targetOffsetTop = this.$refs[nav.ref].offsetTop;
                smoothScroll(targetOffsetTop, this.$refs['home-page'], 600, 'vertical');
                this.navs.forEach((nav) => nav.selected = false);
                nav.selected = true;
            },
            submitForm() {
                if (this.form.name == '') {
                    this.$message({
                        showClose: true,
                        message: '名字不能为空',
                        type: 'error',
                        duration: 1000
                    });
                } else if (this.form.phone == '') {
                    this.$message({
                        showClose: true,
                        message: '电话不能为空',
                        type: 'error',
                        duration: 1500
                    });
                } else if (this.form.captcha == '') {
                    this.$message({
                        showClose: true,
                        message: '验证码不能为空',
                        type: 'error',
                        duration: 1500
                    });
                } else {
                    //sendDataToServer
                    this.$message({
                        showClose: true,
                        message: '提交成功',
                        type: 'success',
                        duration: 1500
                    });
                    axios.get('https://tms.modengbox.com/app/common/merchants/join',{
                        params:{
                            name:this.form.name,
                            phone:this.form.phone,
                            valicode:this.form.captcha
                        }
                    }).then((res)=>{
                        console.log(res.data);
                    })
                    this.form = {
                        name: '',
                        phone: '',
                        captcha: ''
                    }
                }
            },
            refreshCaptcha() {
                this.captchaVisible = false;
                this.$nextTick(()=>{
                    this.captchaVisible = true;
                })
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
        z-index: 3;
        position: relative;
        background-image: url(https://files.modengbox.com/website/official/block13_img.jpg);
        background-size: 100% 100%;
    }

    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index: 1;
        box-sizing: border-box;

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
        background: white;
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
        background: white;

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
        background: white;

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
        background: white;

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
        background: white;

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

    .block7 {
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
            color: rgba(255, 255, 255, 1);
            margin-top: 160px;
        }

        & .subtitle {
            font-size: 28px;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            font-family: PingFang-SC-Light;
            line-height: 54px;
        }

        & .sub-block {
            position: absolute;
            color: white;
            left: 364px;
            bottom: 273px;

            & .title {
                font-size: 40px;
                font-family: PingFang-SC-Light;
                font-weight: 300;
                color: rgba(255, 255, 255, 1);
                line-height: 32px;
                text-align: left;
            }

            & .division {
                width: 80px;
                height: 1px;
                background: rgba(245, 247, 252, 1);
                margin: 62px 0px;
            }

            & .content {
                width: 465px;
                height: 49px;
                font-size: 16px;
                font-family: PingFang-SC-Light;
                font-weight: 300;
                color: rgba(255, 255, 255, 1);
                line-height: 32px;
                text-align: left;
            }
        }
    }

    .block8 {
        width: 100%;
        height: 740px;
        display: flex;
        background: rgba(245, 247, 252, 1);

        & .section {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;

            & .division {
                width: 80px;
                height: 1px;
                background: rgba(56, 56, 56, 1);
                opacity: 0.56;
                margin: 30px 0px 62px 125px;
            }

            & .title {
                line-height: 32px;
                font-size: 40px;
                font-family: PingFang-SC-Light;
                font-weight: 300;
                color: rgba(56, 56, 56, 1);
                line-height: 32px;
                text-align: left;
                margin-left: 125px;
            }

            & .content {
                width: 465px;
                height: 49px;
                font-size: 16px;
                font-family: PingFang-SC-Light;
                font-weight: 300;
                color: rgba(56, 56, 56, 1);
                line-height: 32px;
                text-align: left;
                margin-left: 125px;
            }
        }
    }

    .block9 {
        width: 100%;
        height: 684px;
        background-image: url(https://files.modengbox.com/website/official/block10_bg.jpg);
        display: flex;
        flex-direction: column;
        justify-content: center;

        & .title {
            font-size: 40px;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 54px;
            opacity: 0.8;
            text-align: left;
            margin-left: 360px;
        }

        & .subtitle {
            font-size: 28px;
            font-family: PingFang-SC-Light;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            line-height: 54px;
            text-align: left;
            margin-left: 360px;
        }

        & .content {
            width: 465px;
            height: 145px;
            font-size: 16px;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 32px;
            opacity: 0.8;
            text-align: left;
            margin-left: 360px;
            margin-top: 60px;
        }
    }

    .block10 {
        width: 100%;
        height: 802px;
        background-image: url(https://files.modengbox.com/website/official/block11_img.jpg);
        display: flex;
        align-items: center;
        position: relative;

        & .section {
            width: 709px;
            height: 483px;
            background: rgba(255, 255, 255, 1);
            opacity: 0.8;
            position: absolute;
            right: 260px;
            padding: 61px 59px;
            box-sizing: border-box;

            & .title {
                font-size: 40px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(56, 56, 56, 1);
                line-height: 54px;
                text-align: left;
            }

            & .subtitle {
                font-size: 28px;
                font-family: PingFang-SC-Light;
                font-weight: 300;
                color: rgba(102, 102, 102, 1);
                line-height: 54px;
                text-align: left;
            }

            & .content {
                width: 590px;
                height: 176px;
                font-size: 16px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(67, 67, 67, 1);
                line-height: 32px;
                text-align: left;
                margin-top: 60px;
            }

        }
    }

    .block11 {
        width: 100%;
        height: 610px;
        display: flex;
        background: white;

        & .section {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            & .title {
                width: 161px;
                font-size: 40px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(56, 56, 56, 1);
                line-height: 54px;
                margin-left: 300px;
            }

            & .subtitle {
                width: 179px;
                font-size: 28px;
                font-family: PingFang-SC-Light;
                font-weight: 300;
                color: rgba(102, 102, 102, 1);
                line-height: 54px;
                margin-left: 300px;
            }

            & .content1 {
                width: fit-content;
                font-size: 28px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
                line-height: 54px;
                margin-top: 60px;
                margin-left: 300px;
            }

            & .content2 {
                width: fit-content;
                font-size: 16px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
                line-height: 32px;
                margin-left: 300px;
            }

            & .content3 {
                width: fit-content;
                font-size: 16px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
                line-height: 32px;
                margin-left: 300px;
            }

            & .map {
                width: 100%;
                height: 100%;
                max-width: none;
            }
        }
    }

    .block12 {
        width: 100%;
        height: 802px;
        display: flex;
        flex-direction: column;
        position: relative;

        & .title {
            font-size: 40px;
            font-family: PingFang-SC-Light;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            line-height: 54px;
            margin-top: 97px;
        }

        & .content {
            font-size: 16px;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 54px;
        }

        & .section {
            width: 748px;
            height: 351px;
            background: rgba(255, 255, 255, 0.35);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            & .input-container {
                width: 466px;
                height: 48px;
                position: relative;
                display: flex;
                align-items: center;

                & input {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.9);
                    outline: none;
                    border: none;
                    text-indent: 120px;
                    font-size: 16px;
                    box-sizing: border-box;
                }

                & .last-input {
                    width: 60%;
                    text-indent: 12px;
                    position: relative;
                }

                & .captcha {
                    width: 35%;
                    height: 100%;
                    background: white;
                    margin-left: 5%;
                    position: relative;

                    & img {
                        width: 70%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        margin-left: 0;
                    }
                }

                & .refresh-img {
                    position: absolute;
                    right: 10px;
                    cursor: pointer;
                    width: 20px;
                    height: 20px;
                }

                & img {
                    margin-left: 18px;
                    z-index: 1;
                    width: 24px;
                    height: 24px;
                }

                & .title {
                    width: fit-content;
                    height: fit-content;
                    margin-left: 18px;
                    z-index: 1;
                    font-size: 16px;
                    font-family: PingFang-SC-Medium;
                    font-weight: 500;
                    color: rgba(56, 56, 56, 1);
                    margin-top: 0;
                    user-select: none;
                }
            }

            & .input-container:last-of-type {
                & input {
                    width: 80%;
                }
            }

            & .button {
                width: 260px;
                height: 48px;
                background: rgba(255, 39, 75, 1);
                color: white;
                text-align: center;
                line-height: 48px;
                user-select: none;
                cursor: pointer;
            }
        }
    }

    .bottom-bar {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        background: rgba(245, 247, 252, 1);

        & .section1 {
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            padding: 0px 360px;

            & .items-container {
                display: flex;
                margin-top: 24px;

                & .item {
                    font-size: 14px;
                    font-family: PingFang-SC-Regular;
                    font-weight: 400;
                    color: rgba(56, 56, 56, 1);
                    line-height: 32px;
                    margin-right: 24px;
                    user-select: none;
                    cursor: pointer;
                }
            }

            & .content {
                font-size: 12px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(56, 56, 56, 1);
                line-height: 32px;
                text-align: left;
                user-select: none;
            }

            & .division {
                width: 587px;
                height: 1px;
                background: rgba(56, 56, 56, 1);
                opacity: 0.28;
            }
        }

        & .section2 {
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            & .title {
                font-size: 16px;
                font-family: PingFang-SC-Regular;
                font-weight: 400;
                color: rgba(255, 39, 75, 1);
                line-height: 32px;
            }

            & img {
                width: fit-content;
                height: fit-content;
            }
        }
    }

    .delay-200ms {
        animation-delay: 0.2s;
    }
</style>