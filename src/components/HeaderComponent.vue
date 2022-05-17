<template>

    <header id="site_header">
        <div class="logo">
            <img width="150" src="@/assets/img/author-logo-round-200x205.png" alt="">
        </div>
        <NavComponent />
        <div class="slide_review container w_40 text-white">
            <h1 class="mb-3">Damon Vaugh</h1>
            <div class="row row-cols-1 flex-nowrap overflow-auto flex-column">
                <div class="col w-100">
                    <p class="font-weight-bold mb-4">Best selling author and the most influential public intellectual in the western world right now</p>
                    <p class="newspaper h5 mb-4">- The New York Times</p>
                </div>
                <div class="arrows">
                    <span class="me-1"> <font-awesome-icon icon="fa-solid fa-arrow-left" /> </span>
                    <span> <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                </div>
            </div>
        </div>
        <div class="small_banners d-flex flex-column">
            <div class="demos bg-white rounded p-2 mb-2">
               <span><font-awesome-icon icon="fa-solid fa-folder-plus" /></span>
               <p>Demos</p>
            </div>
            <div class="on_sale bg-white rounded p-2">
                <p class="price h4 m-0"><sup>$</sup>39</p>
                <p class="m-0 text-center">on sale</p>
            </div>
        </div>
        <div class="book_release bg-white">
            <div class="container h-100 p-5">
                <div class="row row-cols-2">
                    <div class="col d-flex align-items-center p-0">
                        <img width="200" src="@/assets/img/book-widget.png">
                    </div>
                    <div class="col align-items-center p-0">
                        <h4 class="h5 pt-4">Latest Book Release</h4>
                        <h5 class="h6 text-uppercase pt-1 pb-2">D. Vaughn Autobiography</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui consequuntur obcaecati amet enim numquam.</p>
                    </div>
                    <div class="col d-flex justify-content-center w-100 h-50 py-3 px-0">
                        <button class="w-50 py-2 buy_amazon"><span class="pe-1"><font-awesome-icon icon="fa-brands fa-amazon" /></span> Buy on Amazon</button>
                        <button class="w-50 py-2 buy_appstore"><span class="pe-1"><font-awesome-icon icon="fa-brands fa-apple" /></span> Buy on Appstore</button>
                    </div>
                </div>
            </div>
        </div>

    </header>

</template>

<script>
import NavComponent from '@/components/header-components/NavComponent.vue'
export default {
  name: 'HeaderComponent',
  components: {
      NavComponent
  },
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
