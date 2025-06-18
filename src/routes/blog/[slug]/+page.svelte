<script lang="ts">
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    const allBlogs = [
        {
            id: "svelte5-runes-intro",
            title: "Getting Started with Svelte 5 Runes: A Complete Guide",
            description: "Learn how to use Svelte 5's new reactivity system with runes like $state, $derived, and $effect. This comprehensive guide covers everything you need to know about the new reactive primitives.",
            date: "June 15, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-setup-optimization",
            title: "PostgreSQL Performance Optimization: Indexing Strategies",
            description: "Master PostgreSQL indexing techniques to dramatically improve query performance. Learn about B-tree, Hash, GIN, and GiST indexes with practical examples and benchmarks.",
            date: "June 12, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-state-management",
            title: "Advanced State Management in Svelte 5 with Runes",
            description: "Explore complex state management patterns using Svelte 5's runes system. Learn how to create reactive stores, handle side effects, and manage global application state.",
            date: "June 10, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-json-operations",
            title: "Working with JSON Data in PostgreSQL: Advanced Techniques",
            description: "Discover powerful JSON operations in PostgreSQL including querying, indexing, and manipulating JSON data. Perfect for modern web applications with complex data structures.",
            date: "June 8, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-component-composition",
            title: "Component Composition Patterns in Svelte 5",
            description: "Learn advanced component composition techniques using Svelte 5's new features. Explore render props, compound components, and flexible API design patterns.",
            date: "June 5, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-connection-pooling",
            title: "PostgreSQL Connection Pooling: PgBouncer vs Built-in Solutions",
            description: "Compare different connection pooling strategies for PostgreSQL. Learn when to use PgBouncer, connection pooling in your application, and how to optimize for high traffic.",
            date: "June 3, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-forms-validation",
            title: "Building Robust Forms in Svelte 5 with Real-time Validation",
            description: "Create sophisticated form handling systems in Svelte 5. Learn about validation strategies, error handling, and creating reusable form components with the new runes system.",
            date: "June 1, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-backup-strategies",
            title: "PostgreSQL Backup and Recovery: Production Best Practices",
            description: "Implement bulletproof backup and recovery strategies for PostgreSQL in production. Learn about WAL archiving, point-in-time recovery, and automated backup solutions.",
            date: "May 29, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-ssr-hydration",
            title: "Server-Side Rendering and Hydration in Svelte 5",
            description: "Master SSR concepts in Svelte 5 and SvelteKit. Learn about hydration strategies, performance optimization, and building SEO-friendly applications.",
            date: "May 27, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-replication-setup",
            title: "Setting Up PostgreSQL Streaming Replication for High Availability",
            description: "Configure PostgreSQL streaming replication for high availability and load distribution. Learn about primary-replica setups, failover strategies, and monitoring.",
            date: "May 25, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-testing-strategies",
            title: "Testing Svelte 5 Components: Unit and Integration Testing",
            description: "Comprehensive guide to testing Svelte 5 applications. Learn about testing runes, component testing with Vitest, and end-to-end testing strategies.",
            date: "May 22, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-partitioning-guide",
            title: "PostgreSQL Table Partitioning: Scaling Large Datasets",
            description: "Learn how to implement table partitioning in PostgreSQL to handle massive datasets efficiently. Covers range, list, and hash partitioning strategies.",
            date: "May 20, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-animations-transitions",
            title: "Creating Smooth Animations in Svelte 5",
            description: "Master animation techniques in Svelte 5. Learn about built-in transitions, custom animations, and creating fluid user interfaces with the new reactivity system.",
            date: "May 18, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-security-hardening",
            title: "PostgreSQL Security: Hardening Your Database",
            description: "Comprehensive security guide for PostgreSQL. Learn about authentication, authorization, SSL configuration, and protecting against common security vulnerabilities.",
            date: "May 15, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-custom-stores",
            title: "Building Custom Stores in Svelte 5 with Runes",
            description: "Create powerful custom stores using Svelte 5's runes system. Learn about reactive patterns, store composition, and building reusable state management solutions.",
            date: "May 13, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-monitoring-tools",
            title: "PostgreSQL Monitoring: Tools and Techniques for Production",
            description: "Set up comprehensive monitoring for PostgreSQL databases. Learn about pg_stat views, monitoring tools, alerting strategies, and performance diagnostics.",
            date: "May 10, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-accessibility-guide",
            title: "Building Accessible Web Apps with Svelte 5",
            description: "Create inclusive web applications using Svelte 5. Learn about ARIA attributes, keyboard navigation, screen reader compatibility, and accessibility testing.",
            date: "May 8, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-migration-strategies",
            title: "PostgreSQL Database Migrations: Version Control for Your Schema",
            description: "Implement robust database migration strategies using tools like Flyway and Liquibase. Learn about schema versioning, rollback strategies, and team collaboration.",
            date: "May 5, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        },
        {
            id: "svelte5-performance-optimization",
            title: "Performance Optimization Techniques in Svelte 5",
            description: "Advanced performance optimization for Svelte 5 applications. Learn about bundle optimization, lazy loading, and leveraging the new reactivity system for better performance.",
            date: "May 3, 2025",
            category: "Svelte 5",
            categoryColor: "bg-orange-600"
        },
        {
            id: "postgresql-full-text-search",
            title: "Implementing Full-Text Search in PostgreSQL",
            description: "Build powerful search functionality using PostgreSQL's full-text search capabilities. Learn about text search vectors, ranking, and advanced search techniques.",
            date: "May 1, 2025",
            category: "PostgreSQL",
            categoryColor: "bg-blue-700"
        }
    ];

    // Get current page from URL parameter
    let currentPage = $state(1);
    const blogsPerPage = 5;

    // Update currentPage when page store changes
    $effect(() => {
        const pageParam = page.params.page;
        currentPage = pageParam ? parseInt(pageParam) : 1;
    });

    // Calculate pagination
    const totalPages = $derived(Math.ceil(allBlogs.length / blogsPerPage));
    const startIndex = $derived((currentPage - 1) * blogsPerPage);
    const endIndex = $derived(startIndex + blogsPerPage);
    const currentBlogs = $derived(allBlogs.slice(startIndex, endIndex));

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



<!-- <div class="absolute bottom-20 left-12 max-w-xs">
                <h3 class="text-lg font-black text-black">Philosophy</h3>
                <p class="text-sm w-52 text-black leading-relaxed">
                    Beautiful products are built through simple and effective pieces.
                </p>
            </div> -->
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

        <div class="space-y-8 mt-12">

            {#each currentBlogs as blog, index}
                <a href="/blog/{blog.id}" class="flex items-center cursor-pointer group border border-black p-6 hover:shadow-md transition-shadow duration-200">
                    <div class="flex-1 pr-6">
                        <div class="flex justify-between mb-3">
                            <div class="flex items-center gap-2">
                                <span class="{blog.categoryColor} text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {blog.category}
                                </span>
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