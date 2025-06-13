<script lang="ts">
	import '../app.css';
    import MusicManager from '$lib/MusicManager.svelte';

    let isMenuOpen = $state(false);
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    
    function closeMenu() {
        isMenuOpen = false;
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
        <button class="hidden md:block bg-[#FE7743] hover:bg-[#FE7743] hover:text-black border border-transparent hover:border-[#FE7743] transition-all duration-200 cursor-pointer px-4 text-white rounded-[8px] font-extrabold">
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

<!-- Mobile Dropdown Menu -->
{#if isMenuOpen}
    <div class="fixed inset-0 z-40 md:hidden" onclick={closeMenu}>
        <div class="absolute top-[80px] left-4 right-4 bg-[#273F4F] rounded-[8px] shadow-lg" onclick={(e) => e.stopPropagation()}>
            <div class="py-2">
                <a href="/blog" class="block px-4 py-3 text-white hover:bg-[#34495e] transition-colors duration-200" onclick={closeMenu}>Blog</a>
                <a href="/music" class="block px-4 py-3 text-white hover:bg-[#34495e] transition-colors duration-200" onclick={closeMenu}>Music</a>
                <div class="px-4 py-3">
                    <button 
                        class="w-full bg-[#FE7743] hover:bg-[#FE7743] hover:text-black border border-transparent hover:border-[#FE7743] transition-all duration-200 cursor-pointer px-4 py-2 text-white rounded-[8px] font-extrabold"
                        onclick={closeMenu}
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
