<script>
    // Project data
    const projects = [
        {
            name: 'Arcana',
            description: 'Time tracking in 3 clicks',
            image: 'arcanaScreen.png',
            color: '#FE7743'
        },
        {
            name: 'DeskSpacing',
            description: 'A 3D interface to build your dream desk setup',
            image: 'projects/deskspacing1.png',
            color: '#FE7743'
        },
        {
            name: 'CoderPrep',
            description: 'Learning roadmaps and simplified education',
            image: 'projects/coderprep/coderprep3.png',
            color: '#FE7743'
        }
    ];

    let currentIndex = $state(0);
    let currentProject = $derived(projects[currentIndex]);

    function goToProject(index) {
        currentIndex = index;
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % projects.length;
    }

    function previousProject() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    }
</script>

<div class="flex flex-col items-center w-full">
    <!-- Main Image Display -->
    <div 
        class="w-full mx-12 aspect-[7/4] md:w-[700px] md:h-[400px] rounded-[10px] relative overflow-hidden shadow-2xl transition duration-500 ease-in-out"
        style="background-image: url('{currentProject.image}'); background-size: cover; background-position: center;"
    >
        <!-- Gradient Overlay -->
        <div class="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b to-black from-transparent to-[85%] rounded-bl-[10px]"></div>
        
        <!-- Project Info -->
        <div class="absolute z-40 bottom-3 left-4 md:bottom-5 md:left-8 text-white">
            <p class="text-lg md:text-xl font-bold mb-0.5 drop-shadow-lg">
                {currentProject.name}
            </p>
            <p class="text-xs md:text-sm opacity-90 drop-shadow-md">
                {currentProject.description}
            </p>
        </div>

        <!-- Full-Height Left Navigation Area hover:bg-neutral-600/30 -->
        <button 
            onclick={previousProject}
            class="absolute left-0 top-0 w-32 h-full bg-transparent group cursor-pointer  hover:bg-opacity-20 transition-all duration-200 flex items-center justify-start pl-4"
            aria-label="Previous project"
        >
            <svg class="w-8 h-8 p-1 text-white drop-shadow-lg rounded-full group-hover:bg-neutral-500/40 transition duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        
        <!-- Full-Height Right Navigation Area hover:bg-neutral-600/30 -->
        <button 
            onclick={nextProject}
            class="absolute right-0 top-0 w-32 h-full bg-transparent group  cursor-pointer  hover:bg-opacity-20 transition-all duration-200 flex items-center justify-end pr-4"
            aria-label="Next project"
        >
            <svg class="w-8 h-8 p-1 text-white drop-shadow-lg rounded-full group-hover:bg-neutral-500/40 transition duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>

    <!-- Navigation Dots -->
    <div class="flex space-x-2 md:space-x-4 mt-6 md:mt-8">
        {#each projects as project, index}
            <button
                onclick={() => goToProject(index)}
                class="w-16 h-3 cursor-pointer  hover:opacity-80"
                style="background-color: {index === currentIndex ? project.color : '#737373'}"
                aria-label="Go to {project.name}"
            />
        {/each}
    </div>

    <!-- Project Counter -->
    <!-- <div class="mt-4 text-sm text-gray-600">
        {currentIndex + 1} / {projects.length}
    </div> -->
</div>