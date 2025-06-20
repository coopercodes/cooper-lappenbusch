


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
                <h1 class="text-5xl font-bold text-black mb-4 leading-14 mr-6">On Portfolio Design</h1>
                <p class=" text-black w-full pr-12 md:pr-0 md:w-[400px]">
                    My journey through building a design ethos for cooperlappenbusch.com. My attempt at building a portfolio that felt "genuine".
                </p>
            </div>
            <div class="flex flex-col    bg-black text-white p-4">
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

        
        </div>
        <div class="flex justify-center my-10">
            <div class="h-[1px] w-[50%] bg-black"></div>
        </div>

        <p class="text-lg text-black">
            I've always had a problem with building my own personal website. The problem is that I take the design principles I know from building web applications and apply them to the creative process of building my portfolio.
        </p>

        <p class="text-lg text-black mt-4">
            As engineers, whether product or software, we exist in a place that is a step above our creations. We have thoughts, technical knowledge, and skills that allows to build software.
        </p>

        <p class="text-lg text-black mt-4">
            So when we build portfolios with an identical approach to how we build products, we tend to fail. We fail to showcase our creativity, and instead showcase another display of standard development practice. I'm not saying that your portfolio has to be overly creative, or underly creative, I'm just saying it should be a geniune representation of what you are. Not just what the software you build is.
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Building a better portfolio
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            So I started thinking. How can I build a better portfolio? One that doesn't feel like my software projects, and better represents who I am cohesively?
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                I Have My Ethos, Now What?
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            I've defined what I want to portray through my portfolio site, but now I have to think about how can I use design effectively to portray my message. I wanted to showcase thoughts and ideas, so I gravitated towards designs which were more text heavy and less art heavy. I wanted to showcase written ideas.
        </p>

        <p class="text-lg text-black mt-8">
            I naturally settled on the idea of copying design inspiration from magazines, newspapers, and other text heavy content sites. Great artists copy? Sure.
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
        </p>


    <div class="my-32 h-[800px] w-full md:w-[500px] bg-transparent flex items-center">
    </div>
</div>