<script>
  import { SvelteFlow } from '@xyflow/svelte';
 
  import '@xyflow/svelte/dist/style.css';
    import Chat from './Chat.svelte';
 
  let nodes = $state.raw([
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ]);
 
  let edges = $state.raw([
    { id: 'e1-2', source: '1', target: '2' },
  ]);

//   $effect(() => {
//     nodes;
//     edges;
//     nodes = [...nodes];
//     edges = [...edges];
//   })
</script>
 
<div class="absolute top-0 z-[100] w-screen h-screen">
    <SvelteFlow 
        bind:nodes 
        bind:edges 
        fitView
        class="!bg-[#121212]"
        colorMode="dark"
        
        attributionPosition="bottom-left"
    />

    <!-- right side of screen, chat input fully managed-->
    <Chat
        bind:nodes 
        bind:edges
    />

    <div class="fixed top-4 left-4 h-10 w-10  z-[200]  rounded-[10px] bg-gray-900 border border-gray-700 flex flex-col">
        
    </div>
</div>