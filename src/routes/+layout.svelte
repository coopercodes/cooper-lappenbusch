<script lang="ts">
	import '../app.css';
    import MusicManager from '$lib/MusicManager.svelte';

    let isMenuOpen = $state(false);
    let modalOpen = $state(false);
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    
    function closeMenu() {
        isMenuOpen = false;
    }

    function openModal() {
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }

    let copied = $state(false);
  
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('cooper.lappenbusch@gmail.com');
      copied = true;
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  }


	let { children } = $props();
</script>


<div class="sticky top-[24px]  md:top-[24px] z-50  md:mx-auto flex items-center  w-full md:w-[700px]  ">
    <div class="flex justify-between px-4 w-full bg-[#273F4F] py-2.5  mx-4 rounded-[8px]">
        <div class="flex items-center">
            <a href="/" class="text-white font-bold text-lg">Cooper Lappenbusch</a>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-6 ml-6 text-white">
                <a href="/blog">Blog</a>
                <a href="/music">Music</a>
            </div>
        </div>

        <!-- Desktop Button -->
        <button 
        onclick={openModal}
            class="hidden md:block bg-[#FE7743] hover:bg-[#FE7743] hover:text-black border border-transparent hover:border-[#FE7743] transition-all duration-200 cursor-pointer px-4 text-white rounded-[8px] font-extrabold">
            Reach Out
        </button>
        
        <!-- Mobile Menu Button -->
        <button 
            onclick={toggleMenu}
            class="md:hidden text-white focus:outline-none"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>
</div>

{#if modalOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 transition duration-300">
        <!-- Background blur overlay -->
        <div 
            class="absolute inset-0 bg-black/20 transition-all duration-300 backdrop-blur-lg" 
            onclick={closeModal}
        ></div>
        
        <!-- Modal card -->
        <div 
            class="relative bg-white rounded-lg shadow-xl p-12 max-w-xl w-full mx-4"
            onclick={(e) => e.stopPropagation()}
        >
            <div class="flex-1 flex items-center justify-center">
            <div class="w-full md:max-w-xl">
                <p class="text-5xl leading-12 font-semibold text-black mb-2">Let's Work</p>
                <p class="text-lg mb-4 text-black">I'm for hire. Need educational products built? Let's do it. Need a solid player for your next startup? I'm there. Reach out and let's talk.</p>
                <p class="mb-0 text-sm">email (click to copy)</p>
                <button onclick={copyEmail} class="text-2xl mb-4 cursor-pointer">cooper.lappenbusch@gmail.com {#if copied}
                    <span class="text-sm text-green-600 ml-2">✓ Copied!</span>
                {/if}</button>
                <p class=" text-black">Send me an email. I respond to every single email I receive.</p>

                <!-- <form class="space-y-6">
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
                    
                </form> -->
            </div>
        </div>
        </div>
    </div>
{/if}


<!-- Mobile Dropdown Menu -->
{#if isMenuOpen}
    <div class="fixed inset-0 z-40 md:hidden" onclick={closeMenu}>
        <div class="absolute top-[80px] left-4 right-4 bg-[#273F4F] rounded-[8px] shadow-lg" onclick={(e) => e.stopPropagation()}>
            <div class="py-2">
                <a href="/blog" class="block px-4 py-3 text-white hover:bg-[#34495e] transition-colors duration-200" onclick={closeMenu}>Blog</a>
                <a href="/music" class="block px-4 py-3 text-white hover:bg-[#34495e] transition-colors duration-200" onclick={closeMenu}>Music</a>
                <div class="px-4 py-3">
                    <button 
                        onclick={openModal}
                        class="w-full bg-[#FE7743] hover:bg-[#FE7743] hover:text-black border border-transparent hover:border-[#FE7743] transition-all duration-200 cursor-pointer px-4 py-2 text-white rounded-[8px] font-extrabold"
                    >
                        Reach Out
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}

<MusicManager />

{@render children()}
