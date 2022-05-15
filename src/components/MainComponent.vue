<template>

    <main id="site_main">
      <div class="more_about container py-5 mx-auto mb-5">
        <h2 class="display-4 pt-5 pb-2">More About Damon Vaugh</h2>
        <p class="pb-4">Damon Vaugh is a professor of psychology at the university of Toronto, a clinical psychologist <br> and the author of multi-million copy bestseller "The story of my life"</p>
        <a href="#" class="btn">Meet the Author</a>
      </div>
      <div class="audiobook">
        <div class="brands container-fluid">
          <div class="row row-cols-4 w_60 mx-auto py-5">
            <div class="col d-flex justify-content-center p-0" v-for="audioBrand in audioBrands" :key="audioBrand.id">
              <img width="160" :src="audioBrand.img" :alt="audioBrand.name">
            </div>
           <!-- Eliminati perché inseriti dinamicamente
               <div class="col d-flex justify-content-center p-0">
              <img  width="160" src="@/assets/img/audible-logotan-2x-200x66.png" alt="">
            </div>
            <div class="col d-flex justify-content-center p-0">
              <img  width="160" src="@/assets/img/bb-logotan-2x-200x66.png" alt="">
            </div>
            <div class="col d-flex justify-content-center p-0">
              <img  width="160" src="@/assets/img/kindlefire-logotan-2x-200x66.png" alt="">
            </div> -->
          </div>
        </div>
        <div class="new_audiobook container-fluid">
          <div class="container w-50">
            <div class="row row-cols-2 pt_4rem">
              <div class="col">
                <img src="@/assets/img/audible-app-2x-400x418.png" alt="">
              </div>
              <div class="col">
                <div class="newAudiobook_text text-center pt_5rem px-4">
                  <h4 class="h2 pb-2">New Audiobook</h4>
                  <h6 class="text-uppercase pb-3">No time to read? No problem. Listen to it</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br> Ut non rem voluptate mollitia illo facere possimus dolorum.</p>
                </div>
                <div class="audio_brands d-flex justify-content-between">
                  <img width="100" src="@/assets/img/audible-logo.png" alt="">
                  <img width="100" src="@/assets/img/bn-logo-tall.png" alt="">
                  <img width="100" src="@/assets/img/kindle-logo-tall.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="critics mt-5 container">
        <div class="row row-cols-2 justify-content-between">
          <div class="col">
            <div class="titles">
              <h3>What the Critics Say</h3>
              <h6 class="text-uppercase">Testimonials from around the world</h6>
            </div>
          </div>
          <div class="col d-flex justify-content-end align-items-center">
            <div class="testimonals_button">
              <a class="btn" href="#">Read all Testimonials</a>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 justify-content-between pb-5">
          <div class="col w_60 px-4">
            <div class="author_generation_bg text-white pt_4rem pb_4rem px-5 h-100">
              <div class="author_generation">
                <h3>Best author of his Generation</h3>
                <h6>This book will change your perspective on life</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta dolorum tenetur vitae culpa sunt fugit delectus, impedit vel corporis sapiente harum quibusdam explicabo pariatur doloribus sint!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta dolorum tenetur vitae culpa sunt fugit delectus, impedit vel corporis sapiente harum quibusdam explicabo pariatur doloribus sint!</p>

              </div>
            </div>

          </div>
          <div class="col w_40 ps-4">
            <div class="reviews ">
              <div class="review">
                <div class="inner_review p-4">
                  <div class="text_review text-center">
                    <h6>A true masterpiece, Bravo!</h6>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam aliquam debitis expedita eos rem cum, nostrum repudiandae harum adipisci quisquam dolorum itaque, dicta aut excepturi voluptates, obcaecati dolores inventore totam aperiam.</p>
                  </div>
                  <div class="pseudo-triangle"></div>
                </div>
                <div class="newspaper_name d-flex w-50 justify-content-between align-items-center py-3 px-2">
                  <img height="25" src="@/assets/img/theguardian-xsmall.png" alt="">
                  <p class="m-0">Nome autore, testata</p>
                </div>
              </div>
               <div class="review">
                <div class="inner_review p-4">
                  <div class="text_review text-center">
                    <h6>A true masterpiece, Bravo!</h6>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam aliquam debitis expedita eos rem cum, nostrum repudiandae harum adipisci quisquam dolorum itaque, dicta aut excepturi voluptates, obcaecati dolores inventore totam aperiam.</p>
                  </div>
                  <div class="pseudo-triangle"></div>
                </div>
                <div class="newspaper_name d-flex w-50 justify-content-between align-items-center py-3 px-2">
                  <img height="25" src="@/assets/img/globe-xsmall.png" alt="">
                  <p class="m-0">Nome autore, testata</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </main>

</template>

<script>
export default {
  name: 'MainComponent',
    data() {
      return {
           audioBrands: [
                    {
                        id: 1,
                        name: "Ebay",
                        img: require ("@/assets/img/ebay-logotan-2x-200x66.png")
                    },
                    {
                        id: 2,
                        name: "Audible",
                        img: require ("@/assets/img/audible-logotan-2x-200x66.png")
                    },
                    {
                        id: 3,
                        name: "Barnes&Noble",
                        img: require ("@/assets/img/bb-logotan-2x-200x66.png")
                    },
                    {
                        id: 4,
                        name: "Kindle fire",
                        img: require ("@/assets/img/kindlefire-logotan-2x-200x66.png")
                    },
                ]
      }
  }
}
</script>

<style lang='scss' scoped>
#site_main {
    background-color: white;
    .more_about {
      width: 1200px;
      text-align: center;
      h2 {
        color: $author-text-saffron;
      }
      p {
        font-weight:500;
        font-size: 25px;
      }
      a {
        font-size: 13px;
        padding: 0.4rem 1.2rem;
        background-color: transparent;
        color: $author-text-black;
        border: 1px solid $author-text-suva_gray;
        &:hover {
        background-color: $author-btn-keppel;
        color: $author-text-white;
        border: 1px solid transparent;
        }
      }
    }
    .audiobook {
      .brands {
      background-color: $author-bg-brands-dawn_pink;
     }
     .new_audiobook {
       background-image: url('@/assets/img/banner.jpg');
       h4 {
         color: $author-text-white;
       }
       h6 {
         color: $author-text-saffron;
         font-size: 13px;
         word-spacing: 3px;
         font-weight: 400;
       }
       p {
         font-size: 12px;
         color: $author-text-suva_gray;
       }
     }
    }
    .critics {
      width: 65%;
      h6 {
        color: $author-btn-keppel;
        font-size: 13px;
        word-spacing: 3px;
        font-weight: 500;
      }
      .testimonals_button {
        a {
          color: $author-text-white;
          background-color: $author-btn-anzac;
          font-size: 12px;
          padding: 0.4rem 2rem;
          line-height: 20px;
          font-weight: 500;
        }
      }
      .author_generation_bg {
        background-image: url('@/assets/img/testimonial2-2x.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border-bottom-right-radius: 3rem;
        box-shadow: inset 5px -50px 120px 50px rgba(0, 0, 0, 0.501);
        .author_generation {
          width: 90%;
          margin: 0 auto;
          h3 {
            padding-bottom: 2rem;
            border-bottom: 1px solid $author-text-suva_gray;
          }
        }
      }
      .reviews {
        .review {
          .inner_review {
            background-color: $author-bg-brands-dawn_pink;
            position: relative;
            .pseudo-triangle {
              height: 15px;
              width: 15px;
              position: absolute;
              bottom: -6px;
              left: 30px;
              background-color: $author-bg-brands-dawn_pink;
              transform: rotate(45deg);
            }
            .text_review {
              background-color: transparent;
              h6 {
                font-size: 25px;
                color: $author-text-black;
              }
            }
          }
        }
      }
    }

}
</style>