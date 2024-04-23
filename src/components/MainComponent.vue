<template>
    <!--  SECTION 1 -->
    <section class=" bg-img">
        <div class="container pt-50 ">
            <div class="row">
                <div class="col-6 p-20 d-flex flex-column gap-20">
                    <div class="">I'M WINGMAN</div>
                    <div class="fs-70 ">Peace On Earth A Wonderful Wish But No Way</div>
                    <p>Success isn't overnight. It's when everday you get a little better than the day before. it all
                        adds up.</p>
                    <button class="button-lightgreen p-20"><strong>Get Started For Free <font-awesome-icon
                                :icon="['fas', 'arrow-right']" /></strong></button>
                </div>
                <div class="col-6">
                    <img src="/public/img/home-movation-hero-image.png" alt="" class="bg-faceline">
                </div>
            </div>
        </div>
    </section>
    <!--  SECTION 2 -->
    <section>
        <div class="container pt-50 ">
            <div class="row bg-section2">
                <div class="col-3 d-flex flex-column ai-center gap-20">
                    <div class="c-lightgreen fs-30"><strong>1.926</strong></div>
                    <div>FINISCHED SESSION</div>
                </div>
                <div class="col-3 d-flex flex-column ai-center gap-20">
                    <div class="c-lightgreen fs-30"><strong>100%</strong></div>
                    <div>SATISFACTION RATE</div>
                </div>
                <div class="col-3 d-flex flex-column ai-center gap-20">
                    <div class="c-lightgreen fs-30"><strong>3082+</strong></div>
                    <div>ENROLLED LEARNES</div>
                </div>
                <div class="col-3 d-flex flex-column ai-center gap-20">
                    <div class="c-lightgreen fs-30"><strong>200</strong></div>
                    <div>ONLINE INSTRUCTORS</div>
                </div>
            </div>
        </div>
    </section>
    <!--  SECTION 3 -->
    <section class="p-section">
        <div class="container">
            <div class="row">
                <div class="col-6 p-20 d-flex flex-column gap-20">
                    <div class="c-lightgreen">ABOUT ME</div>
                    <div class="fs-50 ">How to be an Alpha Male: The 15 Habits of True Alphas</div>
                </div>
                <div class="col-6 p-20 d-flex flex-column gap-20 jc-center">
                    <p><strong>Want to learn how to be <span class="c-lightgreen">a alpha male</span>? How to be more
                            masculine? how to be the man you've always wanted to be?</strong></p>
                    <p>Your goal is to show the consistency of business, core values, and customer care.
                        punctuality, resposibility, individuality, accuracy, enthusiasm - you have to clearly
                        explane how these qualities are applicable to your work. And the important things is you do love
                        what you do.
                    </p>
                </div>

            </div>
        </div>
    </section>
    <!--  SECTION 4 -->
    <section class="p-section">
        <div class="container">
            <div class="row">
                <div class="col-8 p-relative p-40">
                    <img src="/public/img/home-movation-video-poster-670x450.jpg" alt="" class="border-radius-5">
                    <img src="/public/img/icon-youtube-play.png" alt="" class="p-absolute position-youtube">
                </div>
                <div class="col-4 d-flex flex-column gap-20 p-20 jc-center">
                    <p class="fs-30 lh-50">"Every morning you have two choise: continue ti sleep with your dreams, or
                        wake up and ehase them."</p>
                    <img src="/public/img/home-movation-shape-01.png" alt="" class="w-30">
                    <div><strong>Kaixa Stark</strong></div>
                    <div class="c-grey">WINGMAN</div>
                </div>
            </div>
        </div>
    </section>

    <!--  SECTION 5 -->
    <section class="p-section">
        <div class="container">
            <div class=" d-flex flex-column ai-center gap-20">
                <div class="c-grey fs-12">BEGIN YOUR JOURNEY AT MAXCOACH</div>
                <div class="fs-30 p-section">Latest <span class="c-lightgreen">Online Courses</span></div>
            </div>
            <div class="row gap-40 jc-center">
                <CardComponent v-for="(card, i) in this.cards" :key="i" :item="card" class="card" />
                <button class="button-lightgreen p-20 d-flex jc-center"><strong>VIew all courses <font-awesome-icon
                            :icon="['fas', 'arrow-right']" /></strong></button>
            </div>
        </div>
    </section>

    <!--  SECTION 6 -->
    <section class="p-section">
        <div class="container">
            <div class="row">
                <div class="col-4 d-flex flex-column gap-20">
                    <div class="p-20">BOOK STORE ONLINE</div>
                    <div class="fs-50">Be Alpha With</div>
                    <div class="c-lightgreen fs-50">Wingman's Book</div>
                    <div v-for="check in this.freeBookchecks"><span class="c-lightgreen"><font-awesome-icon
                                :icon="['fas', 'check']" class="pr-10" /></span>{{ check.check }}</div>

                    <button class="button-lightgreen p-20 d-flex jc-center"><strong>Get Free Ebook</strong></button>

                </div>
                <div class="col-8 d-flex gap-20">
                    <BookComponent v-for="(book, i) in books" :key="i" :book="book" />
                </div>
            </div>
        </div>
    </section>

    <!--  SECTION 7 -->
    <section class="p-section">
        <div class="container">
            <div class="row jc-spacebetween c-lightgrey ai-center">
                <ClientComponent v-for="(client, i) in clients" :key="i" :client="client" />
            </div>
        </div>
    </section>

    <!--  SECTION 8 -->
    <section>
        <div class="container-full">
            <div class="row">
                <div class="col-6 bg-img d-flex flex-column ai-center gap-20 p-stories bg-stories jc-center">
                    <div class="c-lightgreen">Real stories</div>
                    <p class="lh-30">I am free to learn at my own pace, follow my own schedule and choose the subject i
                        want to learn
                        from the syllabus. Great study portal for people like me.</p>
                    <div><img src="/public/img/testimonial-avata-02.jpg" alt="" class="img-stories"></div>
                    <div>MINA HOLLACE</div>
                    <div class="fs-12 c-lightgrey">/Freelancer</div>
                </div>

                <div class="col-6 p-relative">
                    <img src="/public/img/home-movation-testimonial-image.jpg" alt="" class="d-block">
                    <div class="p-absolute change-stories d-flex flex-column ai-center bg-white">
                        <font-awesome-icon :icon="['fas', 'sort-up']" class="c-lightgrey" />
                        <div>1/4</div>
                        <font-awesome-icon :icon="['fas', 'sort-down']" class="c-lightgrey" />
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!--  SECTION 9 -->
    <section class="p-section">
        <div class="container">
            <div class="d-flex flex-column gap-20">
                <div class="fs-12">BLOG UPDATED</div>
                <div class="fs-25">Interesting <span class="c-lightgreen">articles updated</span> daily</div>
            </div>

            <div class="row gap-20">

                <DailyArticlesComponent v-for="(article, i) in articles" :key="i" :article="article"
                    class="d-flex flex-column" />



            </div>
        </div>
    </section>


</template>

<script>
import CardComponent from './CardComponent.vue'
import BookComponent from './BookComponent.vue'
import ClientComponent from './ClientComponent.vue'
import DailyArticlesComponent from './DailyArticlesComponent.vue'

export default {
    components: {
        CardComponent,
        BookComponent,
        ClientComponent,
        DailyArticlesComponent
    },
    data() {
        return {

            cards: [
                {
                    image: '/public/img/motivation-course-06-480x298.jpg',
                    price: '$30.00',
                    description: 'How to be Successful: Create A Growth Mindset For Success',
                    lessons: '3 lessons',
                    students: '50 Students'
                },
                {
                    image: '/public/img/motivation-course-05-480x298.jpg',
                    price: '$30.00',
                    description: 'How to Build Confidence in Your Abilities',
                    lessons: '1 lessons',
                    students: '50 Students'
                },
                {
                    image: '/public/img/motivation-course-04-480x298.jpg',
                    price: '$20.00',
                    description: 'Productivity Machine - Focus in a Distracted World',
                    lessons: '5 lessons',
                    students: '50 Students'
                },
                {
                    image: '/public/img/motivation-course-03-480x298.jpg',
                    price: '$20.00',
                    description: 'Effective Time Menagement Mastery - Complete Guide',
                    lessons: '18 lessons',
                    students: '50 Students'
                },
                {
                    image: '/public/img/motivation-course-02-480x298.jpg',
                    price: '$25.99',
                    description: 'Body language Secrets for Entrepreneurs',
                    lessons: '19 lessons',
                    students: '50 Students'
                },
                {
                    image: '/public/img/motivation-course-01-480x298.jpg',
                    price: '$19.99',
                    description: 'Management Skills: The Science of Leadeship',
                    lessons: '17 lessons',
                    students: '50 Students'
                },
            ],
            freeBookchecks: [
                {
                    check: 'Help you understand yourself better'
                },
                {
                    check: 'Revealing mature tips'
                },
                {
                    check: 'Give the right advice'
                },
                {
                    check: 'Fascinating examples of alpha man'
                },
            ],
            books: [
                {
                    image: 'public/img/product-book-11-400x400.jpg',
                    title: 'Alpha man by Maxcoach',
                    price: '$29.00'
                },
                {
                    image: 'public/img/product-book-10-400x400.jpg',
                    title: 'Real man 4.0 by Maxcoach',
                    price: '$29.00'
                },
            ],
            clients: [
                {
                    image: 'public/img/client-logo-05-primary.png'
                },
                {
                    image: 'public/img/client-logo-06-primary.png'
                },
                {
                    image: 'public/img/client-logo-01-primary.png'
                },
                {
                    image: 'public/img/client-logo-02-primary.png'
                },
                {
                    image: 'public/img/client-logo-03-primary.png'
                },
                {
                    image: 'public/img/client-logo-04-primary.png'
                },
            ],
            articles: [
                {
                    image: 'public/img/motivation-blog-04-480x325.jpg',
                    date: 'May 13,2020',
                    articlesTitle: 'How to stay True to Your Personal Brand',
                    description: 'when it comes to your business or career, you want...'
                },
                {
                    image: 'public/img/motivation-blog-03-480x325.jpg',
                    date: 'May 13,2020',
                    articlesTitle: '5 Vital Lessons in 5 years of Freelancing',
                    description: 'Being self-emplayed and working from home, it s easy to get ...'
                },
                {
                    image: 'public/img/motivation-blog-02-480x325.jpg',
                    date: 'May 13,2020',
                    articlesTitle: '11 Super Useful Tips for Small-Business Owners',
                    description: 'Being a small-business owner poses a ton of challenges. We...'
                },
                {
                    image: 'public/img/motivation-blog-01-480x325.jpg',
                    date: 'May 13,2020',
                    articlesTitle: 'How to Give Yourself Grace to Start Again',
                    description: 'Forgive yourself for bad habits you may have started or...'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use './style/general';

.bg-white {
    background-color: white;
}

.button-lightgreen {
    border: none;
    background-color: #20ad96;
    color: white;
    padding: 15px 40px;
    border-radius: 5px;
    cursor: pointer;
    width: 300px;

    &:hover {
        background-color: #3f3a64;
        ;
    }
}

.fs-70 {
    font-size: 70px;
}

.bg-faceline {
    background-image: url(/public/img/home-movation-shape-face-600x534.png);
}

.bg-section2 {
    background-image: url(/public/img/background-pattern-grid-line-06.png);
}

.fs-50 {
    font-size: 50px;
}

.position-youtube {
    width: 100px;
    top: 45%;
    left: 45%;
}

.w-30 {
    width: 30px;
}

.lh-50 {
    line-height: 50px;
}

.lh-30 {
    line-height: 30px;
}



.fs-12 {
    font-size: 12px;
}

.gap-40 {
    gap: 40px;
}

.card:hover {
    background-color: rgb(228, 226, 226);
    cursor: pointer;
    border-radius: 5px;
}

.pr-10 {
    padding-right: 10px;
}

.p-stories {
    padding: 70px 100px;
}

.bg-stories {
    background-color: #f5f7fa;
}

.img-stories {
    width: 70px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
}

.change-stories {
    padding: 20px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    top: 45%;
    left: -30px;
}

.fs-25 {
    font-size: 25px;
}
</style>