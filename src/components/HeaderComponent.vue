<template>

    <header id="site_header">
        <nav id="site_nav" class="navbar navbar-expand-lg navbar-light d-flex justify-content-end pe-5">
            
                <div class="navbar-nav h_100" v-for="navSection in navSections" :key="navSection.id">
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>{{navSection.nome}}</span></a>
                   <!-- MarkUp eliminato perché aggiunto dinamicamente
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span> About Me</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Testimonials</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>My Blog</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Meetups</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Shop</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Contact Me</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Icona</span></a> -->
                </div>
            
        </nav>
    </header>

</template>

<script>
export default {
  name: 'HeaderComponent',
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
                    {
                        id: 8,
                        nome: "Icona",
                        icon: ''
                    },
                ]
      }
  }
}
</script>

<style lang='scss' scoped>

#site_header {
    background-color: blue;
    height: 500px;
    #site_nav {
    background-color: cornflowerblue;
    height: 100px;
    a {
        display: inline-block;
        height: 100px;
        border-top: 5px solid transparent;
        color: white;
        margin-right: 1rem;
        font-size: 14px;
        &:hover {
            border-top: 5px solid orangered;
            color: orangered;
        }
    }
    }
}

.h_100 {
    height: 100px;
}
</style>
