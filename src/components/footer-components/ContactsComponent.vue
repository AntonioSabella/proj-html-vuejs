<template>
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
</template>

<script>
export default {
    name: 'ContactsComponent',
}

</script>

<style lang='scss' scoped>
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
</style>
