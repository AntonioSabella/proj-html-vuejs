<template>
    
    <footer id="site_footer">
        <div class="container-fluid h-100">
          <div class="row row-cols-2 h-100">
            <div class="col w-25 d-flex align-items-center justify-content-center h-75 pb-3">
              <LogoFooterComponent />
            </div>
            <div class="col w_70">
              <div class="row row-cols-3 h-100 py-5 ps-0 pe-5 footer_sections">
                <AboutComponent v-for='aboutItem in aboutItems' :key='aboutItem.id' :smallText='aboutItem.text' />
                <UsefulComponent />
                <ContactsComponent />
              </div>
            </div>
          </div>
        </div>
    </footer>

</template>

<script>
import ContactsComponent from '@/components/footer-components/ContactsComponent.vue';
import AboutComponent from '@/components/footer-components/AboutComponent.vue';
import UsefulComponent from '@/components/footer-components/UsefulComponent.vue';
import LogoFooterComponent from '@/components/footer-components/LogoFooterComponent.vue';




export default {
  name: 'FooterComponent',
  components: {
    ContactsComponent,
    AboutComponent,
    UsefulComponent,
    LogoFooterComponent
  },
   data() {
      return {
           aboutItems: [
                    {
                        id: 1,
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam cumque officiis itaque, debitis exercitationem ipsa ipsum atque, obcaecati in expedita.",
                    },
                ]
      }
  }
}
</script>

<style lang='scss' scoped>
#site_footer {
    background-image: url('@/assets/img/footer-3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: left ;
    height: 550px;
    .footer_sections {
      ul {
        list-style: none;
        padding: 0;
      }
      h5 {
        color: $author-text-white;
        padding-bottom: 1rem;
        font-size: 22px;
        font-weight: 500;
      }
      p {
        color: $author-btn-pumice;
      }
      li {
        padding-bottom: 0.5rem;
        a {
          text-decoration: none;
          color: $author-btn-pumice;
        }
        span {
          color: $author-text-white;
          margin-right: 0.6rem;
          font-size: 11px;
        }
      }
      .footer_useful {
        color: $author-text-white;
      }
      .contact_list {
        li:hover .active {
          color: $author-text-saffron;
        }
      }
      .social_list {
        color: $author-btn-pumice;
        li:hover {
          color: $author-text-saffron;
        }
      }
    }
}
</style>