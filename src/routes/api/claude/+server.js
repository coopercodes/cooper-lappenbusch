// src/routes/api/claude/+server.js
import { json } from '@sveltejs/kit';
import { ANTHROPIC_API_KEY } from '$env/static/private';

export async function POST({ request }) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // Enhanced system prompt to instruct Claude to return structured JSON
    const systemMessage = `You are helping to create a node graph visualization. Please respond with a JSON object that has this exact structure:

{
  "nodes": [
    { "id": "unique_id", "position": { "x": number, "y": number }, "data": { "label": "text" } }
  ],
  "edges": [
    { "id": "unique_edge_id", "source": "source_node_id", "target": "target_node_id" }
  ],
  "text": "Your explanation or response text here"
}

Always return valid JSON in this format. The nodes should have reasonable x,y positions for visualization (e.g., spaced 100-200 pixels apart). Make sure all IDs are unique strings.`
    ;


    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        messages: messages,
        temperature: 0.7,
        system: systemMessage
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error:', errorData);
      return json(
        { error: 'Failed to get response from Claude' }, 
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Extract the text content from Claude's response
    const rawContent = data.content?.[0]?.text || 'No response received';

    function extractJSON(text) {
        const match = text.match(/```json\s*\n?([\s\S]*?)```/);
        return match ? match[1].trim() : text;
    }
    
    try {
       console.log(rawContent);
    
        // Clean the response content before parsing
        const cleanedContent = extractJSON(rawContent);
        
        // Try to parse the cleaned response as JSON
        const parsedResponse = JSON.parse(cleanedContent);
        
        // Your parsed JSON is now ready to use
        console.log('Parsed JSON:', parsedResponse);
      
      // Validate the structure
      if (parsedResponse.nodes && parsedResponse.edges && parsedResponse.text) {
        return json({
          nodes: parsedResponse.nodes,
          edges: parsedResponse.edges,
          text: parsedResponse.text
        });
      } else {
        // If structure is invalid, return fallback format
        return json({
          nodes: [],
          edges: [],
          text: rawContent
        });
      }
    } catch (parseError) {
      // If JSON parsing fails, return the raw content in the expected format
      console.warn('Failed to parse Claude response as JSON:', parseError);
      return json({
        nodes: [],
        edges: [],
        text: rawContent
      });
    }

  } catch (error) {
    console.error('Server error:', error);
    return json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}