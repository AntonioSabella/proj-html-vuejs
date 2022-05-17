<template>
            <nav id="site_nav" class="navbar navbar-expand-lg navbar-light d-flex justify-content-end pe-5">
            <NavbarList v-for="navSection in navSections" :key="navSection.id" :nameItem='navSection.nome' />
            <div class="navbar-nav h_100">
                <a class="nav-item nav-link d-flex align-items-center" href="#"><span><font-awesome-icon icon="fa-solid fa-cart-shopping" /></span></a>
            </div>
        </nav>
</template>
<script>
import NavbarList from '@/components/header-components/NavbarList.vue';
export default {
    name: 'NavComponent',
    components: {
        NavbarList
    },
      data() {
      return {
           navSections: [
                    {
                        id: 1,
                        nome: "Home",
                    },
                    {
                        id: 2,
                        nome: "About Me",
                    },
                    {
                        id: 3,
                        nome: "Testimonials",
                    },
                    {
                        id: 4,
                        nome: "My Blog",
                    },
                    {
                        id: 5,
                        nome: "Meetups",
                    },
                    {
                        id: 6,
                        nome: "Shop",
                    },
                    {
                        id: 7,
                        nome: "Contact Me",
                    },
                ]
      }
  } 
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
        color: #ffffff9a;
        margin-right: 1rem;
        font-size: 14px;
        &:hover {
            border-top: 5px solid $author-text-saffron;
            color: $author-text-saffron;
        }
    }
    }
}    
</style>
