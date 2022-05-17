<template>
    <div :smallText='smallText' class="col w_30 h-75 d-flex justify-content-center flex-column footer_about">
        <h5>About Me</h5>
        <p class="w-75">{{smallText}}</p>
     </div>
</template>

<script>
export default {
    name: 'AboutComponent',
    props: {
        smallText: String,
    }
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