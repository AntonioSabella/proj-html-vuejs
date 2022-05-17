<template>
       <ul :linkItem='linkItem'>
            <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">{{linkItem}}</a></li>
<!--             <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Upcoming Events</a></li>
            <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Recent Articles</a></li>
            <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Business Enquiries</a></li>
            <li><span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span><a href="#">Visit my Foundation</a></li> -->

        </ul>
</template>

<script>
export default {
    name: 'UsefulList',
    props: {
        linkItem: String,
    }
}
</script>

<style lang='scss' scoped>
        .footer_sections {
      ul {
        list-style: none;
        padding: 0;
        margin: 0.25rem;
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
        a {
          text-decoration: none;
          color: $author-btn-pumice;
          &:hover {
          color: $author-text-white;

          }
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
