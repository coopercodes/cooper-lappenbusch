
<script lang="ts">
    import { Node, Svelvet, Minimap, Controls } from 'svelvet';

    const mermaidConfig = {
        theme: 'default',
        themeVariables: {
        primaryColor: '#4f46e5',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#3730a3',
        lineColor: '#6b7280',
        fontSize: '14px'
        },
        flowchart: {
        nodeSpacing: 50,
        rankSpacing: 60,
        curve: 'basis'
        }
    };

</script>

<style>
    :root[svelvet-theme='custom-theme'] {
		--node-color: hsl(225, 30%, 50%);
		--node-border-color: hsl(225, 20%, 40%);
		--node-selection-color: hsl(45, 90%, 60%);
		--text-color: hsl(0, 0%, 100%);

		--background-color: 	hsl(48, 14%, 93%);
		--dot-color: hsl(225, 10%, 50%);

		--accent-color: hsl(45, 90%, 60%);
		--primary-color: hsl(225, 30%, 66%);

		--edge-color: hsl(0, 0%, 16%);
		--target-edge-color: hsl(225, 20%, 40%);

		--anchor-border-color: hsl(45, 90%, 87%);
		--anchor-connected: hsl(45, 90%, 100%);
		--anchor-connected-border: hsl(225, 20%, 20%);

		--anchor-connecting: hsl(225, 30%, 40%);
		--anchor-connecting-border: hsl(0, 0%, 100%);

		--anchor-hovering: hsl(225, 20%, 46%);
		--anchor-hovering-border: hsl(0, 0%, 0%);

		--minimap-background-color: hsl(210, 2%, 78%);

		--minimap-node-color: hsl(225, 30%, 20%);

		--controls-background-color: hsl(225, 20%, 27%);
		--controls-text-color: hsl(0, 0%, 100%);

		--theme-toggle-text-color: hsl(0, 0%, 100%);
		--theme-toggle-color: hsl(225, 20%, 27%);
	}

    .placeholder-container {
            width: 100%;
            max-width: 800px;
        }

        .gradient-placeholder {
            width: 100%;
            aspect-ratio: 16/9;
            background: linear-gradient(135deg, 
                #182761 0%, 
                #142f46 50%, 
                #081518 75%, 
                #0b2943 100%);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }



        .gradient-placeholder::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 50%, 
                rgba(255, 255, 255, 0.05) 100%);
            pointer-events: none;
        }

        

        .placeholder-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: rgba(255, 255, 255, 0.9);
            font-size: 24px;
            font-weight: 300;
            text-align: center;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            letter-spacing: 1px;
        }

        .placeholder-subtitle {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 8px;
            font-weight: 400;
        }

        /* Responsive design */
        @media (max-width: 600px) {
            .placeholder-text {
                font-size: 18px;
            }
            .placeholder-subtitle {
                font-size: 12px;
            }
        }
</style>

<div class="pt-[74px] flex flex-col w-full md:w-[750px] mx-auto px-6">
        
        
        <div class="flex items-center w-full  mt-12">
            <div class="flex flex-col w-full ">
                <h1 class="text-5xl font-bold text-black mb-4 leading-14 mr-24">Using LLMs To Build Knowledge Graphs</h1>
                <p class=" text-black w-full pr-12 md:pr-0 md:w-[400px]">
                    Exploring how we can use LLMs to build knowledge graphs for any sector of education. 
                </p>
            </div>
            <div class="flex flex-col    bg-black text-white p-4">
                <div class="flex justify-between">
                    <p>written by</p>
                </div>
                <p class="text-wrap font-black whitespace-nowrap">Cooper Lappenbusch</p>
                <a href="https://x.com/cooperlappenbus" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-gray-300 cursor-pointer group mt-1">
                        
                        <svg class="w-4 h-4 text-gray-300 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <p class='ml-1 -mt-0.5 group-hover:text-blue-400 '>cooperlappenbus</p>
                </a>
                <p class="mt-4 mb-1 text-sm">share</p>
                <div class="flex max-w-xs space-x-4">
                    <!-- Twitter/X Share Button -->
                    <button class="cursor-pointer w-8 h-8 border border-neutral-700  bg-black  hover:border-blue-500 transition-colors duration-200 flex items-center justify-center group">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </button>

                    <!-- Reddit Share Button -->
                    <button class="cursor-pointer w-8 h-8 border border-neutral-700  bg-black  hover:border-orange-500 transition-colors duration-200 flex items-center justify-center group">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                    </button>

                    <!-- Copy Link Button -->
                    <button class="cursor-pointer w-8 h-8 border border-neutral-700  bg-black  hover:border-green-500 transition-colors duration-200 flex items-center justify-center group">
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                    </button>
                </div>
            </div>

        
        </div>
        <div class="flex justify-center my-10">
            <div class="h-[1px] w-[50%] bg-black"></div>
        </div>

        <p class="text-lg text-black">
            I'm Cooper, I'm a guy interested in education. I'm interested in how people learn, why they learn, and how we can build better systems for education.
        </p>

        <p class="text-lg text-black mt-8">
            The discussion throughout this blog post may be confusing to some, which is partly my fault. This post serves as an introduction to the ideas I have regarding solving the problem of online education, so some things may be underexplained as a result. It assumes decent LLM knowledge, and it also assumes an understanding of graphs (node based graphs) and how they work.
        </p>

        <p class="text-lg text-black mt-8">
            The main focus of this post is to show how we can use LLMs to build node based graphs of information for any given educational subject. In future posts I may discuss how we can use these graphs to build better learning algorithims, but the focus here is mainly on the generation of the graphs themselves.
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Introduction To Knowledge Graphs
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            Connected graph structures are powerful when it comes to relating information, which is a fundamental part of how people learn. We can build graphs to represent all of the individual knowledge nodes of a given subject. We can also build connections between nodes in our graphs, representing the order in which knowledge should be obtained.
        </p>

        <div class="w-full flex flex-col items-center mt-8">
            <img 
                src="/posts/educational-sme-agents/knowledge.png" 
                alt="Project showcase design" 
                class="w-full h-92 object-cover border border-black"
            />
            <p class="text-gray-500 text-sm text-center mt-4 italic">
                abstract idea of the connections in a graph network
            </p>
        </div>

        <p class="text-lg text-black mt-8">
            For example: In a network about learning JavaScript, we may include a node for "defining constant variables". Other nodes might include "for loops", "async / await", etc. 
        </p>

        <p class="text-lg text-black mt-8">
            LLMs can help us generate these knowledge graphs, and in my research I have found them to be expressively powerful in a way that no other technology even comes close. LLMs are powerful especially when ordering knowledge, they are almost always correct when evaluating the nodes that a given user should learn first.
        </p>

        <p class="text-lg text-black mt-8">
            Why does this all matter for education? Knowledge graphs matter because we can use them as a source of truth for learners. Instead of telling an LLM "teach me division", we can tell it "teach me division, knowing that I already know addition and subtraction", allowing for more targeted and effective learning with data based learning systems. The flaw of LLMs is their generality, by creating knowledge graphs and effective context we can reduce the flaw of generality in a signifigant way.
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Building A Generalized SME AI Agent
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            At this point, I've defined the value of knowledge graphs and only vaguely explained their exact function. A knowledge graph is built up of nodes, each node represents a concept, and each node is directed towards one other concept.
        </p>

        <p class="text-lg text-black mt-8">
            A basic example would be the knowledge graph for arithmetic. <br/> Addition -> Subtraction -> Multiplication -> Division. This is the order in which most students will learn arithmetic.
        </p>

        <p class="text-lg text-black mt-8">
            Let's go ahead and test a basic version of this idea, just to see that it has some standing in reality. I went over to Claude (Sonnet 4) and entered the following prompt:
        </p>

        <p class="text-lg text-black mt-8 italic">
            Can you make a basic learning graph of how most students will learn arithmetic? Just one topic pointing to another topic pointing to another. It should be one directional.
        </p>

        <p class="text-lg text-black mt-8">
            Claude responded with the following graph:
        </p>
        <div class="h-[500px] mt-8 w-[702px] border ">
            <Svelvet 
                width={700}
                theme="custom-theme"
                id="arithmetic-learning-canvas" 
                mermaid={`A[Counting 1-10] --> B[Number Recognition]
    B --> C[Basic Addition]
    C --> D[Basic Subtraction]
    D --> E[Skip Counting]
    E --> F[Multiplication Tables]
    F --> G[Division]
    G --> H[Multi-digit Addition]
    H --> I[Multi-digit Subtraction]
    I --> J[Multi-digit Multiplication]
    J --> K[Long Division]
    K --> L[Fractions]
    L --> M[Decimals]
    M --> N[Percentages]`}
                TD
                minimap 
                controls
                locked 
                snapTo={50}
            >
            </Svelvet>
            
        </div>
        <p class="text-gray-500 text-sm text-center mt-4 italic">
            Graph output from Claude
        </p>

        <p class="text-lg text-black mt-8">
            Sure, it's not the most impressive thing ever. B
        </p>

        <p class="text-lg text-black mt-8">
            Note: It is also possible that a node points to multiple topics, but for now I am going to keep it basic. One starting node, and then a defined list of nodes that follow.
        </p>

        <p class="text-lg text-black mt-8">
            To test my theories, I built a basic SME Agent playground. It features a chat box and a graph structure that updates as you make requests to the agent.
        </p>

        <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Tunneling, Graph Backtracking For Learning
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div>

        <p class="text-lg text-black mt-8">
            This is likely the most interesting discovery from building SME knowledge graphs. We can take a given node in a graph, and ask to create another knowledge graph of the given node. This gives depth to the overall learning structure, and establishes more practical ways of learning certain concepts.
        </p>

        <p class="text-lg text-black mt-8">
            This is a bold claim for a random blog post, but I believe that effective tunneling systems are likely the key to a new generation of online learning websites. 
        </p>

        <!-- <p class="text-lg text-black mt-8">
            To understand these ideas more specifically, let's think about two different students using a learning platform:
        </p>

        <p class="text-lg text-black mt-8">
            <span class="font-bold">Student A</span>: Enrolled in an introduction to Algebra course.
        </p>

        <p class="text-lg text-black mt-8">
            <span class="font-bold">Student B</span>: Enrolled in an Advanced Algebra course.
        </p>

        <p class="text-lg text-black mt-8">
            Graph structures can help us better understand each student in this scenario.
        </p> -->

        
        
        <!-- <div class="flex items-center  mt-16">
            <p class="text-2xl font-bold text-black">
                Building a better portfolio
            </p>
            <div class="w-[128px] h-[1px] bg-black ml-8"></div>
        </div> -->

        

      
        <!-- <div class="w-full flex flex-col items-center mt-8">
            <img 
                src="/posts/on-portfolio-design/projectShowcase.png" 
                alt="Project showcase design" 
                class="w-full h-auto border border-black "
            />
            <p class="text-gray-500 text-sm text-center mt-4 italic">
                Magazine-inspired layout with columns and text-heavy design
            </p>

        </div> -->

     


    <div class="my-32 h-[800px] w-full md:w-[500px] bg-transparent flex items-center">
    </div>
</div>