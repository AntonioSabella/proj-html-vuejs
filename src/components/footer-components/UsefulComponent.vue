<template>
    <div class="col w_30 h-75 d-flex justify-content-center flex-column footer_useful">
        <h5>Useful Links</h5>
        <UsefulList v-for='usefulItem in usefulItems' :key='usefulItem.id' :linkItem='usefulItem.link'/>
    </div>
</template>

<script>
import UsefulList from '@/components/footer-components/UsefulList.vue'
export default {
    name: 'UsefulComponent',
    components: {
        UsefulList,
    },
       data() {
      return {
           usefulItems: [
             {
               id: 1,
               link: 'Latest Books'
             },
                          {
               id: 2,
               link: 'Upcoming Events'
             },
                          {
               id: 3,
               link: 'Recent Articles'
             },
                          {
               id: 4,
               link: 'Business Enquiries'
             },
                          {
               id: 5,
               link: 'Visit my Foundation'
             },
           ]
      }
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