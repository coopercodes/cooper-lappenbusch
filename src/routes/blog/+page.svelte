<script lang="ts">
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    $effect(() => {
        goto('blog/1')
    })

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


