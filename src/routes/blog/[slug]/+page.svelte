<script lang="ts">
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    const tagColors = {
        "Svelte 5": "bg-orange-500",
        "PostgreSQL": "bg-green-500"
    }

    const allBlogs = [
        {
            id: "thisPost",
            title: "Getting Started with Svelte 5 Runes: A Complete Guide",
            description: "Learn how to use Svelte 5's new reactivity system with runes like $state, $derived, and $effect. This comprehensive guide covers everything you need to know about the new reactive primitives.",
            date: "June 15, 2025",
            tags: ["Svelte 5"]
        },
        {
            id: "postgresql-setup-optimization",
            title: "PostgreSQL Performance Optimization: Indexing Strategies",
            description: "Master PostgreSQL indexing techniques to dramatically improve query performance. Learn about B-tree, Hash, GIN, and GiST indexes with practical examples and benchmarks.",
            date: "June 12, 2025",
            tags: ["Svelte 5", "PostgreSQL"]
        }
    ];

    // Search and filter state
    let searchText = $state("");
    let selectedTags = $state([]);

    // Get all unique tags from all blogs
    const allTags = $derived.by(() => {
        const tags = new Set();
        allBlogs.forEach(blog => {
            blog.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    });

    // Filter blogs based on search text and selected tags
    const filteredBlogs = $derived.by(() => {
        return allBlogs.filter(blog => {
            const matchesText = searchText === "" || 
                blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchText.toLowerCase());
            
            const matchesTags = selectedTags.length === 0 || 
                selectedTags.every(tag => blog.tags.includes(tag));
            
            return matchesText && matchesTags;
        });
    });

    // Get current page from URL parameter
    let currentPage = $state(1);
    const blogsPerPage = 5;

    // Update currentPage when page store changes
    $effect(() => {
        const pageParam = page.params.page;
        currentPage = pageParam ? parseInt(pageParam) : 1;
    });

    // Reset to page 1 when filters change
    $effect(() => {
        currentPage = 1;
    });

    // Calculate pagination based on filtered blogs
    const totalPages = $derived(Math.ceil(filteredBlogs.length / blogsPerPage));
    const startIndex = $derived((currentPage - 1) * blogsPerPage);
    const endIndex = $derived(startIndex + blogsPerPage);
    const currentBlogs = $derived(filteredBlogs.slice(startIndex, endIndex));

    // Tag selection functions
    function toggleTag(tag) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }
    }

    function clearFilters() {
        searchText = "";
        selectedTags = [];
    }

    function goToPage(page: number) {
        if (page >= 1 && page <= totalPages) {
            goto(`/blog/${page}`);
        }
    }

    function nextPage() {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    }
</script>

<div class="pt-[124px] flex flex-col w-full md:w-[800px] mx-auto px-6">
    <div class="flex items-center">
        <div class="flex flex-col">
            <h1 class="text-4xl font-bold text-black mb-2">Blog</h1>
            <p class=" mb-2 text-black w-full pr-12 md:pr-0 md:w-[370px]">My blog is a place to store my ideas. Whether it is an idea on music, software engineering, product, or just modern life, you will find it written here.</p>
        </div>
        <div class="md:flex hidden w-[1px] h-[84px] bg-black mx-12"></div>
        <div class="md:flex hidden  flex-col justify-center w-full bg-[#273F4F] rounded-[10px] p-6.5">
            <p class="text-white font-extrabold">Writing Philosophy</p>
            <p class="text-white">Ideas are more poweful when shared. The gap between ideas and real world value is proper execution.</p>
        </div>
    </div>

    <!-- Search and Filter Component -->
    <div class="mt-12 mb-0 space-y-3">
        <!-- Search Bar -->
          <div class='flex flex-col'>

          <div class="flex flex-wrap gap-2">
                {#each allTags as tag}
                    <button
                        onclick={() => toggleTag(tag)}
                        class="px-2 py-1.5 cursor-pointer text-sm font-medium border  transition-all duration-200 {
                            selectedTags.includes(tag) 
                                ? `${tagColors[tag] || 'bg-gray-500'} text-white border-transparent` 
                                : 'bg-neutral-200 text-black border-neutral-400 border rounded hover:bg-neutral-300'
                        }"
                    >
                        {tag}
                        <!-- {#if selectedTags.includes(tag)}
                            <span class="ml-1">×</span>
                        {/if} -->
                    </button>
                    
                {/each}
                
                <div class="relative grow">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        bind:value={searchText}
                        placeholder="Search posts by title or description..."
                        class="block w-full pl-10 pr-3 py-3 bg-neutral-200 outline-neutral-400 border-0 rounded px-4 outline-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
            </div>
            <div class="flex justify-between h-4 mt-4">
                {#if selectedTags.length > 0 || searchText !== ""}
                    <div class="flex items-center">
                        <h3 class="text-sm text-gray-600 mr-2">{selectedTags.length} filter{selectedTags.length == 1 ? "" : "s"} applied</h3>
                        <button
                            onclick={clearFilters}
                            class="text-sm text-gray-600 hover:text-black transition-colors underline"
                        >
                            Clear filters
                        </button>
                    </div>
                {:else}
                    <button></button>
                {/if}
                <div class="text-sm text-gray-600">
                    {filteredBlogs.length} of {allBlogs.length} posts
                </div> 
            </div>
            </div>
      
        

  

        <!-- Results Count -->
        <!-- <div class="text-sm text-gray-600">
            {filteredBlogs.length} of {allBlogs.length} posts
        </div> -->
    </div>

    <div class="space-y-8 mt-12">
        {#each currentBlogs as blog, index}
            <a href="/blog/{blog.id}" class="flex items-center cursor-pointer group border border-black p-6 hover:shadow-md transition-shadow duration-200">
                <div class="flex-1 pr-6">
                    <div class="flex justify-between mb-3">
                        <div class="flex items-center gap-2">
                            {#each blog.tags as tag}
                                <span class="{tagColors[tag] || 'bg-gray-500'} text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {tag}
                                </span>
                            {/each}
                        </div>
                        <div class="flex items-center text-sm text-gray-700">
                            <span>{blog.date}</span>
                        </div>
                    </div>
                    
                    <h2 class="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 cursor-pointer transition-colors">
                        {blog.title}
                    </h2>
                    <p class="text-black leading-relaxed">
                        {blog.description}
                    </p>
                </div>
            </a>

            {#if index < currentBlogs.length - 1}
                <div class="h-[1px] w-24 bg-neutral-400 mx-auto"></div>
            {/if}
        {/each}
    </div>  

    <div class="flex justify-center items-center space-x-4 mt-16 mb-16">
        <button 
            onclick={prevPage}
            disabled={currentPage === 1}
            class="px-4 w-20 py-2 cursor-pointer border border-black text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
        >
            Prev
        </button>

        <div class="flex space-x-2">
            {#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNum}
                <button
                    onclick={() => goToPage(pageNum)}
                    class="px-3 w-10 cursor-pointer aspect-square py-2 border border-black text-black hover:bg-black hover:text-white transition-colors {pageNum === currentPage ? 'bg-black text-white' : ''}"
                >
                    {pageNum}
                </button>
            {/each}
        </div>

        <button 
            onclick={nextPage}
            disabled={currentPage === totalPages}
            class="px-4 w-20 py-2 cursor-pointer border border-black text-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
        >
            Next
        </button>
    </div>

    <div class="my-32 h-[500x] w-full md:w-[500px] bg-transparent flex items-center">
    </div>
</div>