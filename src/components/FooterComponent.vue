<template>
    
    <footer id="site_footer">
        <div class="container-fluid h-100">
          <div class="row row-cols-2 h-100">
            <div class="col w-25 d-flex align-items-center justify-content-center h-75 pb-3">
              <div class="logo_footer">
                <img width="200" src="@/assets/img/author-logo-round-200x205.png" alt="">
              </div>
            </div>
            <div class="col w_70">
              <div class="row row-cols-3 h-100 py-5 ps-0 pe-5 footer_sections">
                <div class="col w_30 h-75 d-flex justify-content-center flex-column footer_about">
                  <h5>About Me</h5>
                  <p class="w-75">Lorem ipsum dolor sit amet <strong>consectetur adipisicing elit</strong> . Quaerat nam cumque officiis itaque, debitis exercitationem ipsa ipsum atque, obcaecati in expedita.</p>
                </div>
                <div class="col w_30 h-75 d-flex justify-content-center flex-column footer_useful">
                  <h5>Useful Links</h5>
                    <ul>
                      <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Latest Books</a></li>
                      <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Upcoming Events</a></li>
                      <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Recent Articles</a></li>
                      <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Business Enquiries</a></li>
                      <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Visit my Foundation</a></li>

                    </ul>
                </div>
                <div class="col w_40 h-75 pt-2 d-flex justify-content-center flex-column footer_contacts">
                  <h5 class="">Contact info</h5>
                    <ul class="contact_list text-white">
                      <li><a class="active" href="#">63 E. Studebaker Street Boolingbrook, IL 60440</a></li>
                      <li>Phone: <a class="active" href="#">(800) 000-000</a></li>
                      <li>Mobile: <a class="active" href="#">(800) 000-000</a></li>
                      <li>Email: <a class="active" href="#">info@your-company.com</a></li>
                    </ul>
                    <ul class="social_list d-flex">
                      <li class="pe-3"><font-awesome-icon icon="fa-brands fa-facebook-f"/></li>
                      <li class="pe-3"><font-awesome-icon icon="fa-brands fa-twitter"/></li>
                      <li class="pe-3"><font-awesome-icon icon="fa-brands fa-instagram"/></li>
                      <li class="pe-3"><font-awesome-icon icon="fa-brands fa-linkedin-in"/></li>
                      <li class="pe-3"><font-awesome-icon icon="fa-brands fa-youtube"/></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>

</template>

<script>
export default {
  name: 'FooterComponent'
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
        font-size: 25px;
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