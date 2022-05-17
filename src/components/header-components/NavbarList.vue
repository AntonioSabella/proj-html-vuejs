<template>
         <div class="navbar-nav h_100" :nameItem='nameItem'>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>{{nameItem}}</span></a>
                   <!-- MarkUp eliminato perché aggiunto dinamicamente
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span> About Me</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Testimonials</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>My Blog</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Meetups</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Shop</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Contact Me</span></a>
                    <a class="nav-item nav-link d-flex align-items-center" href="#"><span>Icona</span></a> -->
        </div>
</template>
<script>
export default {
    name:'NavbarList',
    props: {
        nameItem: String,
    }
}
</script>

<style lang='scss' scoped>
    #site_nav {
    font-family: "DM Sans";
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
</style>