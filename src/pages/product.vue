<template>
<div class="product">
    <product-param :title="product.name">
        <template v-slot:buy>
            <button class="btn" @click="buy">立即购买</button>
        </template>
    </product-param>
    <div class="content">
        <div class="item-bg">
            <h2>{{product.name}}</h2>
            <h3>{{product.subtitle}}</h3>
            <p>
                <a href="" id="">全球首款双频 GP</a>
                <span>|</span>
                <a href="" id="">晓龙845</a>
                <span>|</span>
                <a href="" id="">AI 变焦双摄</a>
                <span>|</span>
                <a href="" id="">红外人脸识别</a>
                <span>|</span>
            </p>
            <div class="price">
                <span>￥<em>{{product.price}}</em></span>
            </div>
        </div>
        <div class="item-bg-2"></div>
        <div class="item-bg-3"></div>
        <div class="item-swiper">
            <swiper class="productSwiper" name="productSwiper" :options="swiperOption">
                <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <p class="desc">小米8 AI变焦双摄拍摄</p>
        </div>
        <div class="item-video">
            <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！</p>
            <div class="video-bg" @click="showSlide=true"></div>
            <div class="video-box" v-show="showSlide">
                <div class="overlay" v-if="showSlide" ></div>
                <div class="video" :class="showSlide ? 'slideDown' : 'slideUp' ">
                    <span class="icon-close" @click="showSlide=false"></span>
                    <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ProductParam from './../components/ProductParam'
import 'swiper/css/swiper.css'

export default {
    name: 'product',
    components: {
        ProductParam,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            showSlide: false,
            product: {},
            swiperOption: {
                autoplay: true,
                slidesPerView: 3,
                spaceBetween:30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    mounted() {
        this.getProductInfo()
    },
    methods: {
        getProductInfo() {
            let id = this.$route.params.id
            this.axios.get(`/products/${id}`).then((res) => {
                this.product = res
            })
        },
        buy() {
            let id  = this.$route.params.id
            this.$router.push(`/detail/${id}`)
        },
        closeVideo() {
            this.showSlide = 'slideUp'
            setTimeout(() => {
                this.showSlide = ''
            }, 600)
        }
    }
}
</script>

<style scoped lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

.product {
    .content {
        .item-bg {
            background: url('/imgs/product/product-bg-1.png') no-repeat center;
            height: 718px;
            text-align: center;
            h2 {
                font-size: $fontA;
                padding-top: 55px;
            }
            h3 {
                font-size: $fontE;
                letter-spacing: 10px;
            }
            p {
                margin-top: 21px;
                margin-bottom: 40px;
                a {
                    font-size: $fontI;
                    color: $colorB;
                }
                span {
                    margin: 0 15px;
                }
            }
            .price {
                font-size: 30px;
                color: $colorB;
                em {
                    font-style: normal;
                    font-size: $fontB;
                }
            }
        }
        .item-bg-2 {
            background: url('/imgs/product/product-bg-2.png') no-repeat center;
            height: 480px;
            background-size: 1226px 397px;
        }
        .item-bg-3 {
            background: url('/imgs/product/product-bg-3.png') no-repeat center;
            height: 638px;
            background-size:cover;
        }
        .item-swiper {
            margin: 36px auto 52px;
            .desc {
                font-size: $fontH;
                color: $colorB;
                text-align: center;
            }
            img {
                width: 100%;
            }
        }
        .item-video {
            height: 1044px;
            background-color: #070708;
            margin-bottom: 76px;
            color: #fff;
            text-align: center;
            h2 {
                font-size: 60px;
                padding-top: 82px;
                margin-bottom: 47px;
            }
            p {
                font-size: 24px;
                margin-bottom: 58px;
            }
            .video-bg {
                background: url('/imgs/product/gallery-1.png') no-repeat center;
                background-size: cover;
                width: 1226px;
                height: 540px;
                margin: 0 auto 120px;
                cursor: pointer;
            }
            .video-box {
                .overlay {
                    @include position(fixed);
                    background-color: $colorB;
                    opacity: .4;
                    z-index: 10;
                }
                @keyframes slideDown {
                    from {
                        top: -50%;
                        opacity: 0;
                    }
                    to {
                        top: 50%;
                        opacity: 1;
                    }
                }
                @keyframes slideup {
                    from {
                        top: 50%;
                        opacity: 1;
                    }
                    to {
                        top: -50%;
                        opacity: 0;
                    }
                }
                .video {
                    position: fixed;
                    top: -50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                    width: 1226px;
                    height: 657px;
                    opacity: 1;
                    &.slideDown {
                        animation: slideDown .6s linear;
                        top: 50%;
                    }
                    &.slideUp {
                        animation: slideUp .6s linear;
                    }
                    .icon-close {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        @include bgImg(20px, 20px, '/imgs/icon-close.png');
                        cursor: pointer;
                        z-index: 11;
                    }
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        outline: none;
                    } 
                }
            }
        }
    }
    button {
        margin-left: 10px;
    }
}
</style>