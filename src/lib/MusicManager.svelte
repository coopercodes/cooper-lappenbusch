<!-- MusicManager.svelte -->
<script>
  import { musicPlayer } from "../stores/musicPlayer.svelte";

  
  // Format time helper
  function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Control handlers
  function togglePlayPause() {
    if (musicPlayer.isPlaying) {
      musicPlayer.pause();
    } else {
      musicPlayer.resume();
    }
  }
  
  function handleVolumeChange(event) {
    musicPlayer.setVolume(event.target.value);
  }
  
  function stopTrack() {
    musicPlayer.endTrack(musicPlayer.currentTrackId);
  }
</script>

{#if musicPlayer.currentTrackId}
  <div class="music-manager" class:visible={musicPlayer.currentTrackId}>
    <div class="track-info">
      <!-- Music note icon -->
        <div 
            
            class="flex items-center shrink-0 justify-center bg-[#FE7743] w-8 h-8 rounded-[4px] transition-colors duration-200" 
            id="playButton"
        >
            <svg class="music-icon" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
        </div>
      
      
      <div class="track-details ml-1">
        <span class="track-name">{musicPlayer.name}</span>
        <span class="track-time">
            <span class="w-6.5">{formatTime(musicPlayer.currentTime)}</span>
            <span class="w-2">/ </span>
            <span class="w-6.5">{formatTime(musicPlayer.duration)}</span></span>
      </div>
    </div>
    
    <div class="controls">
      <!-- Play/Pause button -->
      <button class="control-btn" on:click={togglePlayPause}>
        {#if musicPlayer.isPlaying}
          <!-- Pause icon -->
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        {:else}
          <!-- Play icon -->
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        {/if}
      </button>
      
      <!-- Stop button -->
      <button class="control-btn" on:click={stopTrack}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6h12v12H6z"/>
        </svg>
      </button>
      
      <!-- Volume control -->
      <div class="volume-control">
        <svg class="volume-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={musicPlayer.volume}
          on:input={handleVolumeChange}
          class="volume-slider"
        />
      </div>
    </div>
  </div>
{/if}

<style>
  .music-manager {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    width: 400px;
    background: rgba(12, 12, 12, 0.9);
    backdrop-filter: blur(10px);
    color: white;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease-out;
  }
  
  .music-manager.visible {
    transform: translateX(-50%) translateY(0);
  }
  
  .track-info {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }
  
  .music-icon {
    width: 20px;
    height: 20px;
    color: #60a5fa;
    flex-shrink: 0;
  }
  
  .track-details {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    flex: 1;
  }
  
  .track-name {
    font-weight: 500;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .track-time {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    gap: 2px;
  }
  
  .time-current,
  .time-duration {
    width: 28px;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
  
  .time-separator {
    opacity: 0.5;
  }
  
  .controls {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  
  .control-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }
  
  .control-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .control-btn svg {
    width: 16px;
    height: 16px;
  }
  
  .volume-control {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .volume-icon {
    width: 16px;
    height: 16px;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .volume-slider {
    width: 60px;
    height: 3px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    outline: none;
    appearance: none;
    cursor: pointer;
  }
  
  .volume-slider::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background: #FE7743;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .volume-slider::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #FE7743;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
  
  /* Responsive design */
  @media (max-width: 350px) {
    .music-manager {
      width: 280px;
    }
    
    .volume-control {
      display: none;
    }
  }
</style>