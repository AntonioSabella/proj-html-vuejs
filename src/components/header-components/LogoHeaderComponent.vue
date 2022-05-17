<template>
        <div class="logo">
            <img width="150" src="@/assets/img/author-logo-round-200x205.png" alt="">
        </div>
</template>

<script>
export default {
    name: 'LogoHeaderComponent',
}
</script>

<style lang='scss' scoped>
#site_header {
    background-color: blue;
    height: 650px;
    position: relative;
    background-image: url('@/assets/img/hero-07-2x.jpg');
    box-shadow: inset -20px -100px 150px 100px rgba(0, 0, 0, 0.8);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .logo>img {
        position: absolute;
        top: 1.5rem;
        left: 6rem;
    }
    #site_nav {
    background-color: transparent;
    height: 100px;
    a {
        display: inline-block;
        height: 100px;
        border-top: 5px solid transparent;
        color: #ffffffc9;
        margin-right: 1rem;
        font-size: 14px;
        &:hover {
            border-top: 5px solid $author-text-saffron;
            color: $author-text-saffron;
        }
    }
    }
    .slide_review {
        position: absolute;
        bottom: 11%;
        left: 11%;
        h1 {
            color: $author-text-saffron;
            font-family: "Kristi", serif;
            font-size: 80px;
        }
        p:first-child {
            font-size: 35px;
        }
        p:last-child {
            font-family: "DM Sans";
        }
        .newspaper {
            color: $author-text-suva_gray;
        }
        .arrows {
            span {
            display: inline-block;
            background-color: $author-text-black;
            height: 35px;
            width: 35px;
            text-align: center;
            line-height: 35px;
            transition: 500ms;
            &:hover {
                background-color: $author-text-white;
                color: $author-text-black;
                cursor: pointer;
            }
        }
        } 
    }
    .small_banners {
        position: absolute;
        right: 0.8rem;
        top: 8rem;
        .demos{
            height: 60px;
            width: 60px;
            text-align: center;
            span {
                line-height: 25px;
                font-size: 25px;
                color: $author-text-tundora;
            }
            p {
                margin: 0;
                font-size: 12px;
                font-family: "DM Sans";
            }

        }
        .on_sale{
            height: 60px;
            width: 60px;
            .price {
                line-height: 30px;
                text-align: center;
                color: $author-btn-keppel;
            }
            p:last-child {
                    font-size: 12px;
                }
        }
    }
    .book_release {
        position: absolute;
        right: 0;
        bottom: -1px;
        height: 50%;
        width: 35%;
        box-shadow: 0 -40px 20px 20px rgba(0, 0, 0, 0.552);
        h5 {
            color: $author-text-saffron;
            font-size: 12px;
            word-spacing: 0.2rem;
        }
        p {
            color: $author-text-suva_gray;
            font-size: 12px;
            font-family: "DM Sans";
        }
        .buy_amazon {
            font-family: "DM Sans";
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
            box-shadow: 0 0 10px 3px rgba(173, 216, 230, 0.601);
            border: 1px solid $author-btn-pumice;
            transition: 500ms;
            font-size: 14px;
            &:hover {
                border: 1px solid $author-btn-keppel;
                background-color: $author-text-white;
            }
        }
        .buy_appstore {
            font-family: "DM Sans";
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            box-shadow: 3px 0 10px 3px rgba(173, 216, 230, 0.607);
            border: 1px solid $author-btn-pumice;
            transition: 500ms;
            font-size: 14px;

            &:hover {
                border: 1px solid $author-btn-keppel;
                background-color: $author-text-white;
            }
        }
    }
}

.h_100 {
    height: 100px;
}
</style>
