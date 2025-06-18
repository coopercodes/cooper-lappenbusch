
<script lang="ts">
    import { musicPlayer } from "../../stores/musicPlayer.svelte";

    const musicLibrary = [
        {
            id: "song1",
            name: "Arcana",
            description: "An ambient track designed to be used in the background of my Arcana project. Creates a focused and goal oriented atmosphere.",
            date: "06/12/2025",
            duration: "3m 21s"
        },
        {
            id: "song2",
            name: "Her",
            description: "A film soundtrack inspired by Her, a simple delayed synth. Nothing special, but exploratory. Love the Her soundtrack :)",
            date: "06/12/2025",
            duration: "3m 21s"
        },
        {
            id: "tenet",
            name: "Tenet",
            description: "A film soundtrack similar to sounds from Tenet, with a focus on synth bass and reverbed / delayed guitars and bells. Custom sounds across.",
            date: "06/12/2025",
            duration: "1m 58s"
        },
        {
            id: "wikimedia",
            name: "WikiMedia Sound Logo Entry",
            description: "My entry to a contest for a Chime for Wikimedia, the Wikipedia for sound. ",
            date: "06/12/2025",
            duration: "1m 51s"
        }
    ]
</script>


<!-- <div class="absolute bottom-20 left-12 max-w-xs">
                <h3 class="text-lg font-black text-black">Philosophy</h3>
                <p class="text-sm w-52 text-black leading-relaxed">
                    Beautiful products are built through simple and effective pieces.
                </p>
            </div> -->
<div class="pt-[124px] flex flex-col w-full md:w-[800px] mx-auto px-6">
        
        
        <div class="flex items-center">
            <div class="flex flex-col">
                <h1 class="text-4xl font-bold text-black mb-2">Music</h1>
                <p class=" mb-2 text-black w-[370px]">This page is where I upload my music.  My main passion within music is for understanding how music influences film.</p>
            </div>
            <div class="md:flex hidden w-[1px] h-[84px] bg-black mx-12"></div>
            <div class="md:flex hidden flex-col justify-center w-full bg-[#273F4F] rounded-[10px] p-6.5">
                <p class="text-white font-extrabold">Art Philosophy</p>
                <p class="text-white">By creating art we are able to understand the subtle decisions that build great things.</p>
            </div>
        </div>

        <div class="space-y-8 mt-12">
            
            <!-- Blog Post 1 -->
            {#each musicLibrary as musicData, i}
                <div class="flex items-center cursor-pointer  transition-shadow duration-200">
                    <div class="flex-1 pr-6">
                        <div class="flex justify-between">
                            <div class="flex items-center space-x-6">
                                <button 
                                    onclick={() => {
                                        if (musicPlayer?.isPlaying && musicPlayer.currentTrackId === musicData.id) {
                                            // If this track is currently playing, stop/pause it
                                            musicPlayer.endTrack(musicData.id, musicData.name);
                                        } else {
                                            // If this track is not playing, start it
                                            musicPlayer.startTrack(musicData.id, musicData.name);
                                        }
                                    }} 
                                    class="flex items-center shrink-0 justify-center bg-[#FE7743] w-14 h-14 rounded-[10px] cursor-pointer hover:bg-[#E6653A] transition-colors duration-200" 
                                    id="playButton"
                                >
                                    {#if musicPlayer?.isPlaying && (musicPlayer.currentTrackId == musicData.id)}
                                        <!-- Show PAUSE icon when this track is playing -->
                                        <svg id="pauseIcon" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                                        </svg>
                                    {:else}
                                        <!-- Show PLAY icon when this track is not playing -->
                                        <svg id="playIcon" class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    {/if}
                                </button>
                                <div class="flex flex-col mr-12">
                                    <p class="text-lg font-bold">{musicData.name}</p>
                                    <p class="">{musicData.description}</p>
                                </div>
                            </div>
                            
                            <div class="flex flex-col justify-center text-sm text-gray-700">
                                <!-- <span>{musicData.date}</span> -->
                                <span class="text-sm font-normal text-nowrap ">{musicData.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {#if !(i == (musicLibrary.length - 1))}
                    <div class="h-[1px] w-24 bg-neutral-300"></div>
                {/if}

            {/each}


            

            
        </div>  

                <div class="my-32 h-[500x] w-full md:w-[500px] bg-transparent flex items-center">
</div>
</div>