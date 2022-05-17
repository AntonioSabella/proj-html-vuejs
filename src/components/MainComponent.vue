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
                <div class="newAudiobook_text text-center pt_4rem px-4">
                  <h4 class="h2 pb-2">New Audiobook</h4>
                  <h6 class="text-uppercase pb-3">No time to read? No problem. Listen to it</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Ut non rem voluptate mollitia illo facere possimus dolorum.</p>
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
          <div class="col w_60 ps-2 pe-5">
            <div class="author_generation_bg text-white pt_4rem pb_4rem px-5 h-100">
              <div class="author_generation">
                <h3>Best author of his Generation</h3>
                <h6>This book will change your perspective on life</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta dolorum tenetur vitae culpa sunt fugit delectus, impedit vel corporis sapiente harum quibusdam explicabo pariatur doloribus sint!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta dolorum tenetur vitae culpa sunt fugit delectus, impedit vel corporis sapiente harum quibusdam explicabo pariatur doloribus sint!</p>
                <div class="times_review d-flex">
                  <img height="28" src="@/assets/img/nytimes-logo-white-xsmall.png" alt=""> <p>Justine Kilpatric, <span>The New York Times</span></p>
                </div>
              </div>
            </div>

          </div>
          <div class="col w_40 ps-4">
            <div class="reviews ">
              <div class="review">
                <div class="inner_review px-4 pt-4 pb-5">
                  <div class="text_review text-center">
                    <h6>A true masterpiece, Bravo!</h6>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam aliquam debitis expedita eos rem cum, nostrum repudiandae harum adipisci quisquam dolorum itaque, dicta aut excepturi voluptates, obcaecati dolores inventore totam aperiam.</p>
                  </div>
                  <div class="pseudo-triangle"></div>
                </div>
                <div class="newspaper_name d-flex w-75 align-items-center py-3 px-2">
                  <img height="25" src="@/assets/img/theguardian-xsmall.png" alt="">
                  <p class="m-0 ps-2">Gerard Hendley, The Guardian</p>
                </div>
              </div>
               <div class="review">
                <div class="inner_review px-4 pt-4 pb-5">
                  <div class="text_review text-center">
                    <h6>A true masterpiece, Bravo!</h6>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam aliquam debitis expedita eos rem cum, nostrum repudiandae harum adipisci quisquam dolorum itaque, dicta aut excepturi voluptates, obcaecati dolores inventore totam aperiam.</p>
                  </div>
                  <div class="pseudo-triangle"></div>
                </div>
                <div class="newspaper_name d-flex w-75 align-items-center py-3 px-2">
                  <img height="25" src="@/assets/img/globe-xsmall.png" alt="">
                  <p class="m-0 ps-2">Mary Maxey, The Globe And Mail</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div class="upcoming_events container-fluid p-5">
        <div class="titles_events text-center pb-5">
          <h3>Upcoming Events</h3>
          <h6 class="text-uppercase">Meet the author in person</h6>
        </div>
        <div class="cards_events">
          <div class="container">
            <div class="row row-cols-3">
              <div class="col">
                  <div class="event card text-center rounded-0">
                      <img class="card-img-top rounded-0" src="@/assets/img/event-05.jpg" alt="Chicago Book Signing">
                      <div class="overlay card-body bg-white p_2rem">
                        <h5 class="card-title pb-3">Chicago Book Signing</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quibusdam possimus perspiciatis. Minus fugiat magni, laudantium iusto illum at.</p>
                      </div>
                  </div>
              </div>
              <div class="col">
                 <div class="event card text-center rounded-0">
                      <img class="card-img-top rounded-0" src="@/assets/img/event-04.jpg" alt="Chicago Book Signing">
                      <div class="overlay card-body bg-white p_2rem">
                        <h5 class="card-title pb-3">Meet&Greet with Amanda</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quibusdam possimus perspiciatis. Minus fugiat magni, laudantium iusto illum at.</p>
                      </div>
                  </div>
              </div>
              <div class="col">
                 <div class="event card text-center rounded-0">
                      <img class="card-img-top rounded-0" src="@/assets/img/event-07.jpg" alt="Chicago Book Signing">
                      <div class="overlay card-body bg-white p_2rem">
                        <h5 class="card-title pb-3">Open Book: Dialogues</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quibusdam possimus perspiciatis. Minus fugiat magni, laudantium iusto illum at.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="newsletter_subscribe">
        <div class="container mx-auto w_35 p-5">
          <div class="newsletter_registration text-center p-5">
            <h3 class="text-capitalize text-white w-75 mx-auto pb-2">Subscribe To My Newsletter</h3>
            <h6 class="text-uppercase pb-4">Be notified about book signing tour dates</h6>
            <form action="">
              <input type="text" placeholder="insert your email...*">
              <button>Subscribe</button>
              <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quasi?</p>
            </form>
          </div>
        </div>
      </div>
      <div class="deeper_into container-fluid text-center py-5">
        <h3 class="text-capitalize">Dig a little deeper into damon vaughn</h3>
        <h6 class="text-uppercase">Find out more about the author himself</h6>
        <div class="more_author container mx-auto w_70">
          <div class="row row-cols-3 gx-4 w_80 mx-auto py-5">
            <div class="col" v-for="cardBox in cardBoxes" :key="cardBox.id">
              <div class="card_image">
                <img :src="cardBox.image_box">
                <div class="card_text">
                <h4 class="mb-2">{{cardBox.title}}</h4>
                <div class="box_border_bottom"></div>
                <p class="mb-0 pt-3">Vestibulum ante ipsum primis</p>
                </div>
              </div>
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
      </div>
      <div class="articles_bg container-fluid pb-5">
        <div class="recent_articles container w_80 mx-auto p-5">
          <div class="row row-cols-2 justify-content-between py-3">
            <div class="col w-25 px-0">
              <div class="titles_recent_articles">
                <h3>Recent Articles</h3>
                <h6 class="text-uppercase">Read the Latest entries</h6>
              </div>

            </div>
            <div class="col w-25 d-flex justify-content-end pe-0">
                <div class="all_articles_btn d-flex align-items-end">
                <a href="#" class="btn">All articles</a>
              </div>
            </div>
          </div>
          <div class="row row-cols-2 justify-content-between pb-3">
            <div class="col w_70 bg-white p-5">
              <div class="main_article">
                <div class="main_article_img">
                  <img src="@/assets/img/20-Tips-800x471.jpg" alt="">
                </div>
                <div class="main_article_text">
                  <h5>20 Creativity Tips</h5>
                  <div class="article_info">
                    <p>By <strong>admin</strong> | October 24th, 2019 | Categories: <span>Event,Trips & Tricks</span></p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas tenetur, ea amet dolores repellat ducimus tempore nisi? Voluptatibus voluptates aliquam eum odio aspernatur!</p>
                </div>    
              </div>
            </div>
            <div class="col w-25 bg-white p-4">
              <div class="secondary_article h-50">
                  <div class="secondary_article_img pb-3">
                    <img src="@/assets/img/thumb-13-2x-320x202.jpg" alt="">
                  </div>
                <h5>What's on your Booklist?</h5>
                  <div class="article_info">
                    <p>October 24th, 2019 | 0 Comments</p>
                  </div>
              </div>
              <div class="secondary_article h-50">
                  <div class="secondary_article_img pb-3">
                    <img src="@/assets/img/thumb-08-2x-320x202.jpg" alt="">
                  </div>
                  <h5>Istanbul Travel Guide</h5>
                  <div class="article_info">
                    <p>October 24th, 2019 | 0 Comments</p>
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
                ],
           cardBoxes: [
             {
               id: 1,
               image_box: require('@/assets/img/box-1.jpg'),
               title: 'About Me',
             },
                 {
               id: 2,
               image_box: require('@/assets/img/box-4.jpg'),
               title: 'My Latest Book',
             },
                 {
               id: 3,
               image_box: require('@/assets/img/box-3.jpg'),
               title: 'Book Signing',
             }
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
        font-family: "Kristi", serif;
        font-size: 65px;
      }
      p {
        font-weight:500;
        font-size: 25px;
        font-family: "DM Sans";
      }
      a {
        font-size: 13px;
        padding: 0.4rem 1.2rem;
        background-color: transparent;
        color: $author-btn-keppel;
        border: 1px solid $author-btn-keppel;
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
         font-size: 25px;
       }
       h6 {
         color: $author-text-saffron;
         font-family: "DM Sans";
         font-size: 11px;
         word-spacing: 3px;
         font-weight: 400;
       }
       p {
         font-family: "DM Sans";
         font-size: 12px;
         color: $author-text-suva_gray;
       }
     }
    }
    .critics {
      width: 65%;
      h6 {
        font-family: "DM Sans";
        font-weight: 600;
        color: $author-btn-keppel;
        font-size: 13px;
        word-spacing: 3px;
        font-weight: 500;
      }
      .testimonals_button {
        a {
          color: $author-text-black;
          background-color: transparent;
          border: 1px solid $author-btn-anzac;
          font-size: 12px;
          padding: 0.4rem 2rem;
          line-height: 20px;
          font-weight: 500;
          &:hover {
            color: $author-text-white;
            background-color: $author-btn-anzac;
            border: 1px solid transparent; 
          }
        }
      }
      .author_generation_bg {
        background-image: url('@/assets/img/testimonial2-2x.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        border-bottom-right-radius: 3rem;
        box-shadow: inset 5px -50px 120px 50px rgba(0, 0, 0, 0.501);
        .author_generation {
          width: 90%;
          margin: 0 auto;
          h3 {
            font-size: 30px;
            padding-top: 2rem ;
            padding-bottom: 2rem;
            border-bottom: 1px solid $author-text-suva_gray;
          }
          h6 {
            font-size: 16px;
            color: $author-text-white;
            padding: 1rem 0;
          }
          p {
            font-family: 'DM sans';
          }
          .times_review {
            column-gap: 0.7rem;
            p {
              color: $author-text-white;
            }
            span {
              color: $author-btn-keppel;
              font-weight: 600;
            }
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
                font-family: "DM Serif Display";
                font-size: 20px;
                color: $author-text-black;
              }
              p {
                font-family: 'DM sans';
                font-size: 14px;
                color: $author-text-suva_gray;
              }
            }
          }
        }
      }
    }
    .upcoming_events {
      background-color: $author-bg-brands-dawn_pink;
      .titles_events {
        h3 {
          font-weight: 500;
          font-size: 35px;
        }
        h6 {
          font-family: 'DM sans';
          color:$author-text-saffron;
          font-weight: 600;
          font-size: 16px;
        }
      }
      .event {
      overflow: hidden;
      img {
        transition: 500ms;
        z-index: 1;
      }
      .overlay {
          z-index: 2;
          h5 {
            border-bottom: 1px solid $author-btn-pumice;
            font-family: 'DM sans';
            font-weight: 600;
            font-size: 22px;
          }
          p {
            font-family: 'DM sans';
            color: $author-text-suva_gray;
          }
      }
      }
      .col:hover .event>img {
        filter: opacity(0.8);
        transform: scale(1.2);    
      }
     
    }
    .newsletter_subscribe {
      background-image: url('@/assets/img/banner-2.jpg');
      box-shadow: inset 0 0 100px 300px rgba(0, 0, 0, 0.425);
      .newsletter_registration {
        h6 {
          font-family: 'DM sans';
          color: $author-text-saffron;
          font-size: 13px;
          font-weight: 600;
        }
        input {
          width: 55%;
          padding: 0.6rem;
          text-align: left;
          margin-right: 0.8rem;
          border-radius: 0.4rem;
          font-size: 14px;

        }
        button {
          width: 40%;
          padding: 0.6rem 2rem;
          color: $author-text-white;
          background-color: transparent;
          border: 1px solid  $author-text-white;
          border-radius: 0.4rem;
          font-size: 14px;
          transition: 600ms;
          &:hover {
          color: $author-text-white;
          background-color: $author-btn-keppel;
          border: 1px solid  transparent;
          }
        }
        p {
          font-family: 'DM sans';
          font-size: 13px;
          color: $author-text-suva_gray;
        }
      }
    }
    .deeper_into {
      h6 {
        font-family: 'DM sans';
        color: $author-btn-keppel;
        font-size: 14px;
        font-weight: 600;
      }
      .more_author {
        .col {
            &:hover .card_image {
              transform: scale(1.1);
              box-shadow: 0 0 10px 6px $author-btn-pumice;
            }
          .card_image {
            height: 350px;
            border-bottom-right-radius: 3rem;
            overflow: hidden;
            position: relative;
            transition: 600ms;
            img {
              height: 100%;
              object-fit: cover;
              object-position: 15% 0;
              transform: scale(1.1);
              filter: brightness(0.7);
            }
            .card_text {
             position: absolute;
             left: 3rem;
             bottom: 1.5rem;
             .box_border_bottom {
               height: 40px;
               width: 45px;
               position: absolute;
               border-bottom: 2px solid gray;
               bottom: 2rem;
               left: 4rem;
             }
             h4 {
               font-family: 'DM sans';
               font-size: 20px;
               color: $author-text-white;
             }
             p {
               font-family: 'DM sans';
               font-size: 14px;
               color: $author-text-saffron ;
             }
              
          }
          }
         
        }
      }
    }
    .articles_bg {
      background-color: $author-bg-brands-dawn_pink;
      .titles_recent_articles {
        h6 {
          font-family: 'DM sans';
          font-weight: 500;
          color: $author-btn-keppel;
          font-size: 15px;
        }
      }
      .all_articles_btn {
        a {
          padding: 0.3rem 3.5rem;
          font-size: 13px;
          font-family: 'DM sans';
          color: $author-text-black;
          border: 1px solid $author-btn-anzac;
          background-color: transparent;
        }
        &:hover a {
          color: $author-text-white;
          border: 1px solid transparent;
          background-color: $author-btn-anzac;
        }
      }
      .main_article {
        font-family: 'DM sans';
        .main_article_text {
          padding: 2rem 0 0 0;
        }
      }
      .secondary_article {
        font-family: 'DM sans';
      }
    }
}
</style>