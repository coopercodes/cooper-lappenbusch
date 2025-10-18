

<script lang="ts">

    const tagColors = {
        "Svelte": "bg-orange-500",
        "PostgreSQL": "bg-green-500",
        "General": "bg-neutral-800",
        "Education": "bg-cyan-600",
        "Philosophy": "bg-blue-600"
    }
</script>


<style>
    .placeholder-container {
            width: 100%;
            max-width: 800px;
        }

        .gradient-placeholder {
            width: 100%;
            aspect-ratio: 16/9;
            background: linear-gradient(135deg, 
                #182761 0%, 
                #142f46 50%, 
                #081518 75%, 
                #0b2943 100%);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }



        .gradient-placeholder::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 50%, 
                rgba(255, 255, 255, 0.05) 100%);
            pointer-events: none;
        }

        

        .placeholder-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: rgba(255, 255, 255, 0.9);
            font-size: 24px;
            font-weight: 300;
            text-align: center;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            letter-spacing: 1px;
        }

        .placeholder-subtitle {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 8px;
            font-weight: 400;
        }

        /* Responsive design */
        @media (max-width: 600px) {
            .placeholder-text {
                font-size: 18px;
            }
            .placeholder-subtitle {
                font-size: 12px;
            }
        }
</style>

<div class="pt-[74px] flex flex-col w-full md:w-[750px] mx-auto px-6">
        
         
        <div class="flex items-center w-full  mt-12">
            <div class="flex flex-col w-full ">
                <div class="flex space-x-2 mb-4">

                
                {#each ["Philosophy", "Education"] as tag}
                    <span class="{tagColors[tag] || 'bg-gray-500'} text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {tag}
                    </span>
                {/each}
                </div>
                <h1 class="text-5xl font-bold text-black pb-4 leading-12 mr-6">Education, Where Do We Need It?</h1>
                <p class=" text-black w-full pr-12 md:pr-0 md:w-[400px]">
                    An analysis of my personal values, and how education can result in a world I perceive as more beautiful. An introduction to my core philosophies and my views on online education.
                </p>

                <p class=" w-full pt-4 md:pr-0 md:w-[400px] text-xs text-neutral-800">Friday, October 17th, 2025</p>
            </div>

            <div class="flex flex-col space-y-4 max-w-62">
                <div class="flex flex-col bg-black text-white p-4">
                    <div class="flex justify-between">
                        <p>written by</p>
                    </div>
                    <p class="text-wrap font-black whitespace-nowrap">Cooper Lappenbusch</p>
                    <a href="https://x.com/cooperlappenbus" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-gray-300 cursor-pointer group mt-1">
                            
                            <svg class="w-4 h-4 text-gray-300 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            <p class='ml-1 -mt-0.5 group-hover:text-blue-400 '>cooperlappenbus</p>
                    </a>
                    <p class="mt-4 mb-1 text-sm">share</p>
                    <div class="flex max-w-xs space-x-4">
                        <!-- Twitter/X Share Button -->
                        <button class="cursor-pointer w-8 h-8 border border-neutral-700  bg-black  hover:border-blue-500 transition-colors duration-200 flex items-center justify-center group">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </button>

                        <!-- Reddit Share Button -->
                        <button class="cursor-pointer w-8 h-8 border border-neutral-700  bg-black  hover:border-orange-500 transition-colors duration-200 flex items-center justify-center group">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                            </svg>
                        </button>

                        <!-- Copy Link Button -->
                        <button class="cursor-pointer w-8 h-8 border border-neutral-700  bg-black  hover:border-green-500 transition-colors duration-200 flex items-center justify-center group">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col bg-neutral-300 text-black p-4">
                    <p class="text-xs font-bold">no more roboto!</p>
                    <p class="text-xs">written by Cooper, without the assistance of chatgpt or llm tools</p>
                </div>
            </div>

        
        </div>
        <div class="flex justify-center my-10">
            <div class="h-[1px] w-[50%] bg-black"></div>
        </div>

        <p class="text-lg text-black">
            I've always had a passion for education, whether it was tutoring a friend on software engineering interviews, building a 10,000 subscriber YouTube channel, or researching AI tutoring usecases (in the OpenAI GPT-3 days). After everything I've done, I've always found myself pondering the question of "Where do we need education?"
        </p>

        <!-- <p class="text-lg text-black mt-8">
            It seems like a trivial question, "Where do we need education?", and to the untrained eye it might seem laughable even. But I believe that choosing an educational focus is likely the central problem of modern education today. Do we really NEED a WW2 historical analysis? Does this type of education REALLY provide value to what we as humans desire? In the same vein, do we really NEED a highly techincal programming tutorial? Does this really give us anything at all? The truth is, I don't know the answer to any of these questions. Maybe a deeper lens of history would result in a more prosperous society, and maybe a deeper technical skillset in programming would also result in prosperity. This is why asking the question of "Where do we need education?" is becoming increasingly important.
        </p> -->


        <p class="text-lg text-black mt-8">
             In this blog post, I'm going to ask a lot of questions, it's probably not going to make sense, but that is where my thinking is at right now. I might get "better" at this writing thing, but for now I'm just going to see what happens. It's messy, I'm not perfect, welcome.
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                What Is Education Missing?
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            I always had this feeling in the back of my mind that the world of education was missing something, a fundamental something. Like a pen missing paper.
        </p>

        <p class="text-lg text-black mt-8">
            As a YouTuber, I would upload an educational tutorial and it would instantly be thrown into a disconnected education ether. I hated how education was connected to my brand as a YouTuber, doesn't a tutorial have value for the sake of education itself being valuable? A tutorial, that someone watches, like it's Mr Beast, that goes up some recommendation algorithim just like all of the other YouTube slop. Isn't education different, doesn't it require a deeper insight, a deeper analysis of how we educate ourselves, and a more thorough search into how we consume education?
        </p>

        <p class="text-lg text-black mt-8">
            We can't just take the YouTube algorithim and expect it to be the most ideal recommendation algorithim for education, when in reality the algorithim is optimized for watch time, click through rates, and keeping you on the platform. The truth is that learning things is difficult, it requires us to ponder, to step away, to rethink, to go on a walk, to approach a problem once, twice, or maybe even a hundred times. 
        </p>

        <p class="text-lg text-black mt-8">
            This brings me to a fundamental question: Isn't education valuable enough to deserve a platform of it's own? Maybe that is what education is missing, a platform. I'm not talking about YouTube, Udemy, or Coursera, or anything that exists currently. The platforms that currently exist are just regurgitated content machines: fueled by venture capital, a lack of ambition, and advertising teams that sell the dream of education instead of selling the power of the education itself.
        </p>

        <p class="text-lg text-black mt-8">
            The world is missing an education platform that actually educates. I do not believe there is a single online platform that effectively educates at scale. Even the Duolingos of the world are failing, sacrificing real educational depth for superficial platform time and gamified surface dwelling. The interface of Duolingo itself sacrifices depth, they couldn't even fit an entire paragraph on the screen if they wanted to. A language learning platform, where even the most advanced user is unable to view an entire paragraph of foreign text. Hilariously incomponent and laughable, a suitable description for most modern education platforms. Education isn't the goal, money is. In my opinion, a short sighted view of money. 
        </p>

        <p class="text-lg text-black mt-8">
            Let's talk money real quick. A core part of my philosophy is that education, real education, can single handedly transform a society. I'm not just talking about the white collars, I'm talking about everything. Educate the software engineers, educate the plumbers, educate every single person who is limited by their skillset and not their own physical and mental force. Teach an entire society how to be productive and you will see money like you've never seen before, abundance like you've never seen before, and competition like you've never seen before.
        </p>

        <p class="text-lg text-black mt-8">
            We don't need more knives in this world, we need sharper ones, we need a people who have the ability to think critically, rationally, and deeply. We are entering a depression soon, the United States Dollar has gone to shit, and we will soon begin to understand that REAL value will have an increasing importance. Real value? Warmth, food, shelter, safety, and a foundational structure to develop stronger minds to solve more intense problems. Watch how far your dollar goes when we don't have the structures to support the building of anything, an entire world sitting on their hands in expectation of something. We could sit here dying in expectation, or realize that our expectations will be fruitless in advance. We need to engage, educate, and develop into productive beings in order to simultaneously be consumers.
        </p>

        <p class="text-lg text-black mt-8">
            This is a somewhat childish rant to some I'm sure, "just create an ideal society bro!". But what if we have the power to build tools that actually inspire this change into higher productivity and effectiveness? In my philosophy, we do have the power to build these tools. 
        </p>

        <p class="text-lg text-black mt-8">
            My goal is to build the education tool that saves the world. To inspire effectiveness for any human, and to allow any willing human to contribute as much value to their systems as they desire. 
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Base Education Product Principles
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            When building an education platform (as I have built, and failed, with CoderPrep) you start to realize that the following concepts are at the core of any great educational product:
        </p>

        <div class="flex items-center mt-8">
            <p class="text-lg font-semibold text-black">
                Motivation
            </p>
             <div class="w-[24px] h-[1px] bg-black ml-8"></div>
        </div>

        <!-- <p class="text-lg text-black mt-4">
            For people to use an educational product, they need to find the motivation to use the product in the first place. This may sound amateurish, but the reality is that modern education websites abuse this principle by creating education that is too "fun", too useless, and designed to stimulate instead of develop. This isn't to say that it isn't fun to learn complex things. I'm instead bringing attention to the fact that a platform to learn complex things does not exist in a beautiful way yet. 
        </p> -->

        <p class="text-lg text-black mt-4">
            For most people, motivation is a concern of value. If I tell you that you can learn something in 10 hours, and make $100,000 dollars instantly, then you're going to be pretty motivated to learn. If I tell you that you can instantly gain social status after learning one thing then you will likely be motivated to learn it, if you value social status of course (motivation isn't always monetary). This is why the college degree is so sought after nowadays, because people are convinced of it's value (which yes, it is valuable).
        </p>

        <p class="text-lg text-black mt-8">
            When building educational products we have to ask the question of "what do people need to learn, that would be valuable to them, that they currently cannot learn effectively?" This question forces us to find the areas where educators, educational products, and resources are most necessary and lacking.
        </p>

        <p class="text-lg text-black mt-8">
            Gamified learning systems, engaging learning interfaces, and ways to get through learning roadblocks are all fundamentally important in increasing a users motivation over time. Someone is stuck on a topic, and can't break through? Say goodbye to their motivation. Motivation is a big concept, this is the tip of the iceberg.
        </p>


        <div class="flex items-center mt-8">
            <p class="text-lg font-semibold text-black">
                Content
            </p>
             <div class="w-[24px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-4">
            Whether it is books, practice questions, learning excersies, tutor responses, or entire courses: content is king in the education space. Most education related content is not great, most of it being low hanging fruit, quickly produced, sometimes AI written, low effort nonsense. Why is it like this? Great writing is difficult, it requires philosophy, understanding the learner, and taking the time to analyze each step of the learning process. I have found that content is a central flaw, even to content driven education businesses.
        </p>


        <div class="flex items-center mt-8">
            <p class="text-lg font-semibold text-black">
                Time
            </p>
             <div class="w-[24px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-4">
            A user must have the time to use your platform. If a user literally does not have a single minute of free time to use your platform, then the platform effectively means nothing to that user. You can generate time by minimizing a users commute, minimizing time spent on other platforms (tiktok / gaming / literally any other platform), decreasing hours in working schedules, or give them opportunities to use the platform in school. 
        </p>

        <p class="text-lg text-black mt-8">
            This is quick overview of time, and I don't mean to imply that a student should quit their part time job in order to study physics. I intend to discuss time from a logical perspective, where we understand that time is a finite resource from the perspective of a user. Some users literally do not have the time to learn, and that is an important thing to understand when looking at user behaviour.
        </p>



        <!-- <p class="text-lg text-black mt-8">
            Awareness (they're even aware you exist / you're the better solution)
        </p> -->

        <!-- <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Working With Society To Find Where Education Fits In
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            When building education products you very quickly
        </p>

        <p class="text-lg text-black mt-8">
            People are resistant to learning, too easy / too difficult paradox.
        </p>

        <p class="text-lg text-black mt-8">
            Class based struggles remove hope, and at times this lack of hope can be valid.
        </p> -->

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                I Decided to Pursue Building an SAT Test Prep Platform
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            I'm likely going to write more about my market research of the many areas I considered before choosing SAT prep, but yeah SAT prep is pretty legit. The below paragraphs are just going to be some introspection into different reasons as to why I think SAT prep itself is a powerful category.
        </p>

        <p class="text-lg text-black mt-8">
            SAT prep is a powerful niche because of a looming United States class problem. The wealth gap is only increasing but still around 70-80% of high school students take the SAT. A class widening only increases the importance of the SAT and may result in a Japanese/Korean-esque education culture in the United States with a massive entrance exam focus.
        </p>

        <p class="text-lg text-black mt-8">
            The SAT has a measurable input and output, which is MASSIVELY important for guaging the effectiveness of an education platform. A student can enter the platform with an 1150 score, and leave with a 1480 score. We can then study the inputted time, the exercises completed, and overall platform activity to guage effectiveness in a highly granular way. Do this process for a large amount of users, and you begin to develop massively interesting education insights.
        </p>

        <p class="text-lg text-black mt-8">
            The SAT prep industry is already nearing $7 billion dollars a year worldwide, and the industry is rapidly adopting technology first options. There are a handful of large players (does not operate like a monopoly) and building a seat at the table is a pursuable goal. I'm also not impressed by the current competition, and I believe that their "technology first approach" feels more like an older internet where it should feel like the future. Plus the market is younger people, possibly more interested in a "cutting edge" approach compared to an older audience.
        </p>

        <p class="text-lg text-black mt-8">
            SAT prep doesn't require a network effect. Users can use a learning platform in isolation, and find results in isolation. This is helpful for the early days, where I'm likely to be working with just a handful of early adopters. Using the network effect to scale it would be cool, but it would be a stretch goal instead of the main focus of the platform: higher SAT scores.
        </p>

        <p class="text-lg text-black mt-8">
            The SAT has defined question sets / difficulty ranges. This makes it easier to build a recommendation algorithim, as most of the difficulty has already been labeled for us. I already have a decent algorithim I have been working on, which I will likely discus in a future post.
        </p>

        <p class="text-lg text-black mt-8">
            Mentioned above, but $7B a year (for just the SAT btw) is not a small number. If I want this thing to be a company, I gotta find a way to make some cash (sorry socialists). I think my selfish want to build an education company aligns with the selfish want of students dreaming of a higher SAT score, the wants connect.
        </p>

        <p class="text-lg text-black mt-8"> 
            I'm too lazy to cite my sources, and lots of what I'm referencing above comes from market research. Interesting article on market size: 
            https://www.bizstim.com/news/article/sat-prep-services-a-booming-business-amidst-college-admissions-changes
        </p>
        <p class="text-lg text-black mt-8"> 
            Interesting market research paper (shows decent competition / non monopoly metrics in overview): 
            https://www.marketresearch.com/Global-Industry-Analysts-v1039/Test-Preparation-41288703/
        </p>


        <div class="flex justify-center my-24">
            <div class="h-[1px] w-[50%] bg-black">- end</div>
        </div>

        <p class="text-lg text-black ">
            this post is just an attempt to begin an overall understanding as to how the world views education. It's incomplete and biased, just like everyone. Thanks for reading.
        </p>

        <p class="text-lg text-black mt-8">
            - cooper lappenbusch
        </p>

        <!-- <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Building a better portfolio
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            So I started thinking. How can I build a better portfolio? One that doesn't feel like my software projects, and better represents who I am cohesively?
        </p>


        <div class="w-full flex flex-col items-center mt-8">
            <img 
                src="/posts/on-portfolio-design/projectShowcase.png" 
                alt="Project showcase design" 
                class="w-full h-auto border border-black "
            />
            <p class="text-gray-500 text-sm text-center mt-4 italic">
                Magazine-inspired layout with columns and text-heavy design
            </p>
        </div>

        <p class="text-lg text-black mt-8">
            Side note: I found this PDF which discusses the importance of columns and sidebars in magazine layouts, definitely an interesting read if this type of design resonates with you. <a class="text-blue-600 underline" href="https://www.momentumpress.com/Resources/Type_2/Columns%E2%80%94Part%201.pdf">link to pdf</a>
        </p> -->


    <div class="my-32 h-[700px] w-full md:w-[500px] bg-transparent flex items-center">
    </div>
</div>