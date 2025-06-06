<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>


<div class="relative sticky left-1/2 transform -translate-x-1/2  flex items-center mt-[24px] py-2.5 w-[700px] bg-[#273F4F] rounded-[8px]">
    <div class="flex justify-between  mx-4 w-full">
        <div class="flex items-center">
            <p class="text-white font-bold text-lg">Cooper Lappenbusch</p>
            <div class="flex items-center space-x-6 ml-6 text-white">
                <p>Blog</p>
                <p>Projects</p>
            </div>
        </div>

        <button class="bg-[#FE7743] hover:bg-black hover:text-[#FE7743] border border-transparent hover:border-[#FE7743]  transition-all duration-200 cursor-pointer px-4 text-white rounded-[8px] font-extrabold">
            Reach Out
        </button>
    </div>
</div>

{@render children()}
