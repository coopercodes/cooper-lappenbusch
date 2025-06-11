
<script lang="ts">

    let images = [
        {
            url: 'arcanaScreen.png',
            title: 'Easy to use',
            description: 'Users select a tag and then press start to begin a focus session'
        },
        {
            url: 'arcanaIntegrated.png',
            title: 'Windows, MacOS, Linux Integrations',
            description: 'Arcana exists at the OS level, giving users a better sense of their time'
        },
        {
            url: 'arcanaAnalytics.png',
            title: 'Calendar Integration',
            description: 'Local SQLite DB saves user sessions instantly'
        }
    ];

    // Current active image index
    let currentIndex = $state(0);

    // Function to change to specific image
    function goToImage(index) {
        currentIndex = index;
    }

    // Function to go to next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Function to go to previous image
    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
</script>

<div class="  pt-[124px] flex flex-col items-center ">

    <div class="w-[700px] h-[400px] rounded-[10px] relative overflow-hidden shadow-2xl" 
            style="background-image: url('arcanaScreen.png'); background-size: cover; background-position: center;">
        
        <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b to-black from-transparent to-[85%] rounded-bl-[10px]"></div>
        
        <div class="absolute bottom-5 left-8 text-white">
            <p class="text-xl font-bold mb-0.5 drop-shadow-lg">Arcana</p>
            <p class="text-sm opacity-90 drop-shadow-md">Time tracking in 3 clicks</p>
        </div>
    </div>


    <div class="flex space-x-4 mt-8">
        <div class="w-16 h-3 bg-[#FE7743] cursor-pointer"></div>
        <div class="w-16 h-3 bg-neutral-500  cursor-pointer"></div>
        <div class="w-16 h-3 bg-neutral-500  cursor-pointer"></div>
        <div class="w-16 h-3 bg-neutral-500  cursor-pointer"></div>
    </div>
    <div class="flex  items-center  mt-16">

    
        <div class="flex flex-col">
            <p class="text-3xl">Hi, I'm</p>
            <p class="text-6xl font-extrabold">Cooper</p>
        </div>
        <div class="w-[1px] h-[110px] bg-black mx-16"></div>
        <div class="flex flex-col">
            <p class="text-3xl leading-10 mt-2">I'm a software engineer, educator, <br/>
and product designer. </p>
        </div>
    </div>

    <div class="my-40 h-[1px] w-[500px] bg-neutral-300 flex items-center"></div>

    <div class="w-[1300px] h-[500px] ">
        <div class="flex h-full ">
            
            <div class="flex flex-col  w-[630px]">
                <div class="flex items-center space-x-6">
                    <p class="text-4xl font-bold">Arcana</p>
                    <div class="w-full bg-black h-[1px]"></div>
                    <button class="bg-[#FE7743] hover:bg-[#FE7743] hover:text-black border border-transparent hover:border-[#FE7743]  transition-all duration-200 cursor-pointer px-4 text-white rounded-[8px] font-bold text-nowrap">
                        Read The Post
                    </button>
                </div>
                <p class="text-xl mt-4 pr-0">
                    Meet Arcana, my answer to the eternal question: "Where did 
my day go?". Arcana is a timer that sits in the system tray of 
your operating system, making it easy to click the Arcana icon,
click your tag (ex: Studying),  and start tracking your time.

                </p>
                <div class="flex items-center my-4">
                    <div class="w-full bg-black h-[1px] "></div>
                    <div class="w-[70px]"></div>
                    <div class="w-[1px] bg-transparent h-[16px] "></div>
                </div>

                <div class="flex space-x-4">
                    <div class="flex flex-col">
                        <p class="text-xl font-bold pr-0">
                        What I Learned
                        </p>
                        <p class="text-xl mt-2 pr-0">
                            When building products, sometimes
                            the most simple solutions are the
                            most effective ones. <br/> <br/>
                            By focusing on the most essential
                            parts of building a product, such as
                            time tracking and tags, you can 
                            remove the other bloat that makes
                            applications feel tiresome.
                        </p>
                    </div>
                     <div class="flex flex-col w-[300px] h-full bg-[#273F4F]   px-4 ">
                        <div class="flex items-center justify-between pt-4 w-full">
                            <p class="text-white font-extrabold leading-6.5 text-lg">Tech Stack</p>
                            <div class="flex flex-col overflow-hidden items-center space-x-4 pl-2">
                                <div class="w-[8px] h-[20px] bg-white"></div>
                                <div class="w-[8px] h-[20px] bg-white"></div>
                            </div>
                        </div>

                        <div class="w-full h-[1px] bg-white my-2"></div>
                    
                        <div class="flex flex-col space-y-2 text-lg  w-full justify-around overflow-hidden">
                            
                            <p class="text-white text-left leading-6.5 ">TypeScript</p>
                            <p class="text-white leading-6.5 ">Rust</p>
                            <p class="text-white leading-6.5 ">Svelte 5</p>
                                                    <p class="text-white leading-6.5">Tauri 2.0</p>

                        </div>
                        
                    </div>
                </div>
                
            </div>
            <!-- DIVIDER HERE -->
             <div class="w-[1px] h-full bg-transparent mx-12"></div>
             
            <div class="flex flex-col justify-center w-[750px]  ">
                <div class="flex items-center relative" >
                    
                    <!-- Main image container -->
                    <div class="w-full h-[400px] rounded-[12px] relative overflow-hidden shadow-xl transition-opacity  duration-500 ease-in-out" 
                        style="background-image: url('{images[currentIndex].url}'); background-size: cover; background-position: center;">
                        
                        <!-- Gradient overlay -->
                        <div class="absolute z-10 bottom-0 left-0 w-full h-32 bg-gradient-to-b to-black from-transparent to-[85%] rounded-bl-[12px]"></div>                        
                                                <!-- Image content -->
                                <div class="absolute bottom-6 left-6 z-20 backdrop-blur-md bg-[#273F4F]/10 border border-white/30 rounded-lg px-4 py-3 shadow-lg">
                            <p class="text-xl font-bold mb-0.5 drop-shadow-lg transition-all duration-300 text-white">
                                {images[currentIndex].title}
                            </p>
                            <p class="text-sm opacity-90 drop-shadow-md transition-all duration-300 max-w-md text-white">
                                {images[currentIndex].description}
                            </p>
                        </div>

                        <!-- Navigation arrows -->
                        <button 
                        class="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
                        onclick={previousImage}
                        aria-label="Previous image">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        </button>

                        <button 
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
                        onclick={nextImage}
                        aria-label="Next image">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        </button>
                    </div>
                </div>
                <!-- <div class="flex flex-col items-center justify-center -mt-4">
                    <div class="p-2 shadow-2xl px-8 flex items-center justify-center border border-[#FE7743] bg-[#313131] z-20 w-max rounded-[12px]">
                        <div class="flex space-x-8">
                        {#each images as image, index}
                            <button
                            class="h-5 w-5 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 {index === currentIndex ? 'bg-[#FE7743]' : 'bg-[#A4A4A4] hover:bg-[#FE7743]/60'}"
                            onclick={() => goToImage(index)}
                            aria-label="Go to image {index + 1}">
                            </button>
                        {/each}
                        </div>
                    </div>

                     <div class="mt-2 text-sm text-gray-600">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div> -->
                <div class="mt-4 flex justify-center space-x-4">
                    {#each images as image, index}
                        <button
                        class="w-24 h-16 cursor-pointer antialiased rounded-lg overflow-hidden border-2 transition-all duration-200 {index === currentIndex ? 'border-[#FE7743] scale-105' : 'border-gray-300 hover:border-[#FE7743]/60'}"
                        onclick={() => goToImage(index)}
                        style="background-image: url('{image.url}'); background-size: cover; background-position: center;">
                        </button>
                    {/each}
                </div>
                <!-- <div class="flex  w-full h-[72px] bg-[#273F4F] mt-4 items-center px-4 ">
                    <p class="text-white font-extrabold leading-6.5 text-2xl">Tech <br/> Stack</p>
                   
                    <div class="flex items-center  w-full justify-around overflow-hidden">
                         <div class="flex flex-col overflow-hidden items-center space-x-4 pl-2">
                            <div class="w-[8px] h-[20px] bg-white"></div>
                            <div class="w-[8px] h-[20px] bg-white"></div>
                        </div>
                        <p class="text-white leading-6.5 text-2xl">TypeScript</p>
                        <p class="text-white leading-6.5 text-2xl">Rust</p>
                        <p class="text-white leading-6.5 text-2xl">Svelte 5</p>
                                                <p class="text-white leading-6.5 text-2xl">Tauri 2.0</p>

                    </div>
                    
                </div> -->
                
            </div>
            <!-- <div class="w-[1px] h-full bg-black mx-12"></div> -->
             
        </div>
    </div>


    <!-- <div class="my-32 h-[500x] w-[500px] bg-transparent flex items-center">
        
    </div> -->
    <div class="my-40 h-[1px] w-[500px] bg-neutral-300 flex items-center">
        
    </div>

    <!-- <div class="my-32 h-[500x] w-[500px] bg-transparent flex items-center">
        
    </div> -->

     <div class="w-full max-w-7xl mx-auto h-[700px] flex gap-12 p-8">
        <!-- Left Column - Philosophy with decorative bars -->
        <div class="flex-1 relative overflow-hidden  rounded-lg p-8">
            <!-- Orange bars positioned absolutely -->
            <div class="absolute bottom-64 right-12 w-64 h-5 bg-orange-500 rounded-full transform rotate-[60deg] origin-left"></div>
            <div class="absolute bottom-100 -right-24 w-64 h-5 bg-orange-500 rounded-full transform rotate-[80deg] origin-left"></div>
            <div class="absolute bottom-128 right-52 w-64 h-5 bg-orange-500 rounded-full transform rotate-[80deg] origin-left"></div>

            <div class="absolute top-64 right-16 w-64 h-5 bg-orange-500 rounded-full transform -rotate-45 origin-left"></div>
            
            <!-- Philosophy text -->
            <div class="absolute bottom-20 left-12 max-w-xs">
                <h3 class="text-lg font-black text-black">Philosophy</h3>
                <p class="text-sm w-52 text-black leading-relaxed">
                    Beautiful products are built through simple and effective pieces.
                </p>
            </div>
        </div>
        
        
        <!-- Right Column - Contact Form -->
        <div class="flex-1 flex items-center justify-center">
            <div class="w-full max-w-md">
                <h1 class="text-5xl font-bold text-black mb-2">Let's Work</h1>
                <p class="text-lg mb-2 text-black">I'm for hire. Need educational products built? Let's do it. Need a solid player for your next startup? I'm there. Reach out and let's talk.</p>
                <p class="mb-8 text-sm">email - cooper.lappenbusch@gmail.com</p>

                <form class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Name</label>
                        <input type="text" class="w-full h-12 bg-neutral-200 border-0 rounded px-4 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                        <input type="email" class="w-full h-12 bg-neutral-200 border-0 rounded px-4 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Note (Hiring, need consulting, etc)</label>
                        <textarea rows="5" class="w-full bg-neutral-200 border-0 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                    </div>
                    
                    <button type="submit" class="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition-colors duration-200">
                        Send To Cooper
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
    

    <div class="my-32 h-[500x] w-[500px] bg-transparent flex items-center">
        
    </div>
</div>