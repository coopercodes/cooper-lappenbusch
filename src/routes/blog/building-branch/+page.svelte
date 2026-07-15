

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
                <h1 class="text-5xl font-bold text-black pb-4 leading-12 mr-6">Building <br/> Branch</h1>
                <p class=" text-black w-full pr-12 md:pr-0 md:w-[400px]">
                    An introduction to the ideas I have for Branch, my education learning platform.
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
            It's been a while.
        </p>

        <!-- <p class="text-lg text-black mt-8">
            It seems like a trivial question, "Where do we need education?", and to the untrained eye it might seem laughable even. But I believe that choosing an educational focus is likely the central problem of modern education today. Do we really NEED a WW2 historical analysis? Does this type of education REALLY provide value to what we as humans desire? In the same vein, do we really NEED a highly techincal programming tutorial? Does this really give us anything at all? The truth is, I don't know the answer to any of these questions. Maybe a deeper lens of history would result in a more prosperous society, and maybe a deeper technical skillset in programming would also result in prosperity. This is why asking the question of "Where do we need education?" is becoming increasingly important.
        </p> -->


        <p class="text-lg text-black mt-8">
            I've been working on some ideas for what a learning system would look like in the future. I've somewhat consolidated my ideas into a learning platform called Branch, currently hosted at BranchLearn.com. It isn't completely done yet, and this blog is more of an expression of my ideas. My goal is to create a series of dev blogs related to Branch, and discuss the ideas I have towards UX, the algorithim, and how the 'startup' is going.
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                User Experience For Branch
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            I've reached the point where I've settled on a learning experience 
        </p>

        <img src="/posts/branchlayout.png" class="border border-neutral-400 rounded-md h-[400px] mt-8" />

        <p class="text-gray-800 mt-4 text-sm text-center">Branch layout</p>

        <p class="text-lg text-black mt-8">
            The interface is split into two distinct initial parts. The first part being the main screen on the top, where a user is shown content, questions, games, and more. It is intentionally spacious, allowing for simple flashcards or a complete advanced game. The bottom section is a sort of "Operating System" like navigation bar, where a user sees their current progress (The blue diamonds), their current learning path (Opposite & Adjacent), and the ability to access Leaf (AI Tutor) or their textbook (A reference to be used throughout the questions). 
        </p>

        <p class="text-lg text-black mt-8">
            Users can click on the buttons in the botton right of the screen to open up windows for the Leaf tutor or Textbook.
        </p>

        <img src="/posts/leaflayout.png" class="border border-neutral-400 rounded-md h-[400px] mt-8" />

        <p class="text-gray-800 mt-4 text-sm text-center">Leaf example</p>

        <p class="text-lg text-black mt-8">
            By allowing users to have access to Leaf in a window format, they can comfortably move it to wherever they like. Let's say a user is having a more consistent conversation with Leaf, they can also use the layout button in the furthest bottom right to shift the content to the side if preferred. 
        </p>

        <img src="/posts/leafshift.png" class="border border-neutral-400 rounded-md h-[400px] mt-8" />

        <p class="text-gray-800 mt-4 text-sm text-center">Leaf shift</p>

        <p class="text-lg text-black mt-8">
            The goal is to have an interface where users can interact with AI alongside their standard learning formats. With AI playing a primary role in their learning and development.
        </p>

        <p class="text-lg text-black mt-8">
            The goal is to have the interface be simple. Simplicity is a large reason as to why a platform similar to Branch doesn't fully exist yet, we need to be innovative in how we think about standard UI design because we want to be careful in not overwhelming the user.
        </p>

        <p class="text-lg text-black mt-8">
            This is more of a simple post to show what I've been working on. I have some gamification stuff I got cooking for validation knowledge for SAT level Trigonometry, should be on here soon.
        </p>
        

        <!-- <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                LLMs Are Not Effective Tutors In Isolation
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            How do I know that LLMs are not effective tutors when used in isolation? When I say "In isolation" I mean when not prompted with additional information relevant to a given students background. Well, the ineffectiveness is simple math.
        </p>

        <p class="text-lg text-black mt-8">
            Let's say we have a multiple choice question. With answers A, B, C, and D.
        </p>

        <p class="text-lg text-black mt-8">
            50% choose A. (correct)<br/>
            20% choose B. <br/>
            10% choose C. <br/>
            20% choose D. <br/>
        </p>

        <p class="text-lg text-black mt-8">
            Each of these options would represent a completely different educational background, with each answer representing a user with a completely different set of knowledge. All of the students who selected A know something that the B, C, and D responders don't know.
        </p>

        <p class="text-lg text-black mt-8">
            When LLMs are used in a tutoring context, they seem to "choose" what a learning knows at random. The LLM would just assume that a given user has an educational background of an "A responder", thus giving an ineffective explanation for the B, C, and D responders.
        </p>

        <p class="text-lg text-black mt-8">
            The LLM assumes students have the knowledge set of a student who selected A for the multiple choice EVERY SINGLE TIME (theoretically). This means that there is a 50% chance that the LLM gives an ineffective explanation... every single time they ask the chatbot a question. In reality this effect is MUCH worse, as a given question generally entails knowledge from a handful of categories where each student has a unique skill level in all of the given categories.
        </p>

        <p class="text-lg text-black mt-8">
            Half of the responses (minimum) from a chatbot are likely to not be effective.
        </p>

        <p class="text-lg text-black mt-8">
            So what can we do to create effective LLM tangential education? Create advanced data systems and advanced testing systems.
        </p>

        <p class="text-lg text-black mt-8">
            The goal of Branch is a completely data fueled learning system, where users are tested, play games, and progress forward with real validation of their knowledge. If we can get an exact image of what a given users knowledge set is, then we can make maximally effective decisions when choosing how to educate them.
        </p>

        <p class="text-lg text-black mt-8">
            Viewed through this lens, the current education system is terrible. An instructor makes "effective" teaching decisions for the average of 30 students, resulting in a lecture which helps minimally and doesn't target any given individuals learning backgrounds.
        </p> -->


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



        <div class="flex justify-center my-24">
            <div class="h-[1px] w-[50%] bg-black">- end</div>
        </div>

        <p class="text-lg text-black ">
            peace
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