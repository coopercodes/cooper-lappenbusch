<script>
  import { onMount } from 'svelte';

  let messages = $state([]);
  let inputValue = $state('');
  let isLoading = $state(false);
  let chatContainer;
  let textareaRef;
  let activeTab = $state('chat'); // 'chat', 'settings', 'help'
  let agentExpertise = $state('Svelte'); // 'Svelte', 'TypeScript', 'Custom'
  let customPrompt = $state('');

  let {
    nodes = $bindable(),
    edges = $bindable()
  } = $props();
  
  // Predefined prompts for different expertise areas
  const expertisePrompts = {
    'Svelte': 'You are a Svelte Subject Matter Expert who specializes in breaking down complex Svelte concepts into clear, digestible explanations. Your goal is to help users deeply understand Svelte 5, SvelteKit, reactivity, components, and best practices by using analogies, step-by-step breakdowns, and practical examples. Always explain the "why" behind concepts, not just the "how". Start with fundamentals and build up to advanced topics progressively.',
    'TypeScript': 'You are a TypeScript Subject Matter Expert who excels at demystifying complex type systems and TypeScript concepts. Your specialty is breaking down intricate TypeScript features, generics, utility types, and advanced patterns into understandable pieces. Use real-world analogies, visual explanations, and progressive examples to help users truly grasp TypeScript concepts from basic types to complex type manipulation. Focus on building intuitive understanding, not just syntax memorization.'
  };

  // Auto-resize textarea
  function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // Scroll to bottom of chat
  function scrollToBottom() {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  // Send message to Claude API
  async function sendMessage() {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    inputValue = '';
    
    // Reset textarea height
    if (textareaRef) {
      textareaRef.style.height = 'auto';
    }

    // Add user message
    messages = [...messages, { role: 'user', content: userMessage }];
    isLoading = true;

    // Scroll to bottom after adding message
    setTimeout(scrollToBottom, 0);

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      console.log(data);

        // Add Claude's response
        messages = [...messages, { role: 'assistant', content: data.text }];
        console.log(nodes);
        nodes = data.nodes;
        console.log(edges);
        edges = data.edges;
      
    } catch (error) {
      console.error('Error:', error);
      messages = [...messages, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error while processing your request. Please try again.' 
      }];
    } finally {
      isLoading = false;
      setTimeout(scrollToBottom, 0);
    }
  }

  // Handle textarea input
  function handleInput(event) {
    inputValue = event.target.value;
    autoResize(event.target);
  }

  // Handle key press
  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  // Clear chat
  function clearChat() {
    messages = [];
  }

  // Switch tabs
  function switchTab(tab) {
    activeTab = tab;
  }

  // Handle expertise change
  function handleExpertiseChange(event) {
    agentExpertise = event.target.value;
    if (agentExpertise !== 'Custom') {
      customPrompt = '';
    }
  }

  onMount(() => {
    scrollToBottom();
  });
</script>

<div class="fixed right-8 bottom-[24px] w-[600px] z-[200] h-[calc(100vh-48px)] rounded-[10px] bg-gray-900 border border-gray-700 flex flex-col">
  <!-- Header with Tabs -->
   <!-- <button onclick={() => {
    nodes = [
        { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
        { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    
        { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } }
    ];
    
   }} class="text-white cursor-pointer">BRUH</button> -->
  <div class="border-b border-gray-700">
    <div class="flex items-center justify-between p-4 pb-2">
      <div class="flex items-center w-full justify-between space-x-2">
        
        <h2 class="text-white font-semibold">{agentExpertise} SME Agent</h2>
        <div class="flex items-center">
            <div class="rounded-full bg-blue-500 w-3 h-3 mr-2">
            </div>
            <h2 class="text-gray-100 font-semibold text-sm">{nodes?.length || 0} topic nodes</h2>
        </div>
      </div>
    </div>
    
    <!-- Tab Navigation -->
    <div class="flex px-4">
      <button
        onclick={() => switchTab('chat')}
        class="px-4 py-2 text-sm font-medium border-b-2 transition-colors {activeTab === 'chat' 
          ? 'text-blue-400 border-blue-400' 
          : 'text-gray-400 border-transparent hover:text-gray-300'}"
      >
        Chat
      </button>
      <button
        onclick={() => switchTab('settings')}
        class="px-4 py-2 text-sm font-medium border-b-2 transition-colors {activeTab === 'settings' 
          ? 'text-blue-400 border-blue-400' 
          : 'text-gray-400 border-transparent hover:text-gray-300'}"
      >
        Agent Settings
      </button>
      <button
        onclick={() => switchTab('help')}
        class="px-4 py-2 text-sm font-medium border-b-2 transition-colors {activeTab === 'help' 
          ? 'text-blue-400 border-blue-400' 
          : 'text-gray-400 border-transparent hover:text-gray-300'}"
      >
        Help
      </button>
    </div>
  </div>

  <!-- Tab Content -->
  {#if activeTab === 'chat'}
    <!-- Chat Tab Content -->
    <!-- Messages Container -->
    <div 
      bind:this={chatContainer}
      class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
    >
      {#each messages as message, i (i)}
        <div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'}">
          <div class="max-w-[85%] {message.role === 'user' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-800 text-gray-100'
          } rounded-2xl px-4 py-2 shadow-sm">
            <div class="text-sm whitespace-pre-wrap break-words">
              {message.content}
            </div>
          </div>
        </div>
      {/each}

      {#if isLoading}
        <div class="flex justify-start">
          <div class="bg-gray-800 text-gray-100 rounded-2xl px-4 py-2">
            <div class="flex items-center space-x-2">
              <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
              </div>
              <span class="text-sm text-gray-400">Claude is thinking...</span>
            </div>
          </div>
        </div>
      {/if}

      {#if messages.length === 0}
        <div class="flex items-center justify-center h-full text-gray-500">
          <div class="text-center">
            <svg class="w-12 h-12 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <p class="text-lg font-medium mb-2">Start a conversation</p>
            <p class="text-sm">Ask Claude anything to get started</p>
          </div>
        </div>
      {/if}
    </div>

    <!-- Input Area -->
    <div class="p-4 border-t border-gray-700">
      <div class="relative">
        <textarea
          bind:this={textareaRef}
          bind:value={inputValue}
          oninput={handleInput}
          onkeydown={handleKeyDown}
          placeholder="Message Claude..."
          disabled={isLoading}
          class="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          rows="1"
          style="min-height: 48px; max-height: 120px;"
        ></textarea>
        
        <button
          onclick={sendMessage}
          disabled={!inputValue.trim() || isLoading}
          class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
          title="Send message"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </button>
      </div>
      
      <div class="flex items-center justify-between mt-2 text-xs text-gray-500">
        <span>Press Enter to send, Shift+Enter for new line</span>
        <span>{inputValue.length}/4000</span>
      </div>
    </div>
  {:else if activeTab === 'settings'}
    <!-- Agent Settings Tab Content -->
    <div class="flex-1 overflow-y-auto p-4">
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Agent Configuration</h3>
          
          <!-- Agent Expertise Dropdown -->
          <div class="space-y-3">
            <label class="block text-sm font-medium text-gray-300">
              Agent Expertise
            </label>
            <select 
              bind:value={agentExpertise}
              onchange={handleExpertiseChange}
              class="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Svelte">Svelte Expert</option>
              <option value="TypeScript">TypeScript Expert</option>
              <option value="Custom">Custom Agent</option>
            </select>
          </div>

          <!-- Show predefined prompt for Svelte/TypeScript -->
          {#if agentExpertise !== 'Custom'}
            <div class="mt-4 space-y-2">
              <label class="block text-sm font-medium text-gray-300">
                Agent Prompt
              </label>
              <div class="bg-gray-800 border border-gray-600 rounded-lg p-3">
                <p class="text-sm text-gray-300 leading-relaxed">
                  {expertisePrompts[agentExpertise]}
                </p>
              </div>
            </div>
          {/if}

          <!-- Custom prompt input -->
          {#if agentExpertise === 'Custom'}
            <div class="mt-4 space-y-2">
              <label class="block text-sm font-medium text-gray-300">
                Custom Agent Prompt
              </label>
              <textarea
                bind:value={customPrompt}
                placeholder="Create a Subject Matter Expert that specializes in breaking down complex concepts. Example: 'You are a React Subject Matter Expert who excels at explaining hooks, state management, and component patterns through clear analogies and step-by-step breakdowns...'"
                class="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
              ></textarea>
              <p class="text-xs text-gray-500">
                Tip: Focus on creating an expert who breaks down complex concepts into understandable pieces using analogies and progressive explanations.
              </p>
            </div>
          {/if}

          <!-- Save button -->
          <div class="mt-6">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  {:else if activeTab === 'help'}
    <!-- Help Tab Content -->
    <div class="flex-1 overflow-y-auto p-4">
      <div class="text-center text-gray-400 mt-8">
        <svg class="w-12 h-12 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-lg font-medium mb-2">Help & Support</p>
        <p class="text-sm">Help content will be added here</p>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Custom scrollbar for webkit browsers */
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  
  .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
    background-color: #4b5563;
    border-radius: 3px;
  }
  
  .scrollbar-track-gray-800::-webkit-scrollbar-track {
    background-color: #1f2937;
  }
</style>