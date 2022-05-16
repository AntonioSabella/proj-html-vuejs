<template>
    
    <footer id="site_footer">
      <div class="container-fluid h-100">
        <div class="row row-cols-2 h-100">
          <div class="col w-25 d-flex align-items-center justify-content-center h-100 pb-3">
            <div class="logo_footer">
              <img width="200" src="@/assets/img/author-logo-round-200x205.png" alt="">
            </div>
          </div>
          <div class="col w_70">
            <div class="row row-cols-3 h-100 p-5 justify-content-between footer_sections">
              <div class="col w_30 d-flex justify-content-center flex-column footer_about">
                <h5>About Me</h5>
                <ul>
                  <li><a href="#">Eccomi</a></li>
                  <li><a href="#">Eccomi</a></li>
                  <li><a href="#">Eccomi</a></li>
                  <li><a href="#">Eccomi</a></li>
                </ul>
              </div>
              <div class="col w_30 d-flex justify-content-center flex-column footer_useful">
                <h5>Useful Links</h5>
                  <ul>
                    <li><a href="#">Eccomi</a></li>
                    <li><a href="#">Eccomi</a></li>
                    <li><a href="#">Eccomi</a></li>
                    <li><a href="#">Eccomi</a></li>
                  </ul>
              </div>
              <div class="col w_30 d-flex justify-content-center flex-column footer_contacts">
                <h5>Contact info</h5>
                  <ul class="text-white">
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-arrow-left" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li>
                    <li><a href="#"><font-awesome-icon icon="fa-solid fa-angle-right" /></a></li>
                    <li><font-awesome-icon icon="fa-brands fa-youtube"/></li>
                    <li><font-awesome-icon icon="fa-brands fa-facebook-f"/></li>
                    <li><font-awesome-icon icon="fa-brands fa-twitter"/></li>
                    <li><font-awesome-icon icon="fa-brands fa-instagram"/></li>
                    <li><font-awesome-icon icon="fa-brands fa-linkedin-in"/></li>
                    <li><font-awesome-icon icon="fa-brands fa-amazon"/></li>
                    <li><font-awesome-icon icon="fa-brands fa-apple"/></li>


                                
            
            
            
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
        font-size: 28px;
        font-weight: 500;
      }
      li {
        padding-bottom: 0.5rem;
        a {
          text-decoration: none;
          color: $author-text-suva_gray;
        }
        
      }
    }
}
</style>