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
  
  // Seek functionality
  function handleSeek(event) {
    const newTime = parseFloat(event.target.value);
    musicPlayer.seek(newTime);
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
    
    
    
    <!-- Seek bar -->
    <div class="seek-container">
      <div class="seek-track">
        <div class="seek-progress" style="width: {(musicPlayer.currentTime / (musicPlayer.duration || 1)) * 100}%"></div>
      </div>
      <input
        type="range"
        min="0"
        max={musicPlayer.duration || 0}
        step="0.1"
        value={musicPlayer.currentTime || 0}
        on:input={handleSeek}
        class="seek-slider"
      />
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
    flex-direction: column;
    gap: 8px;
    border-radius: 10px;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease-out;
  }
  
  .music-manager.visible {
    transform: translateX(-50%) translateY(0);
  }
  
  .music-manager > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  
  /* Seek bar styles */
  .seek-container {
    width: 100%;
    padding: 0 4px;
    position: relative;
  }
  
  /* Background track and progress */
  .seek-track {
    position: absolute;
    top: 50%;
    left: 4px;
    right: 4px;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
  }
  
  .seek-progress {
    height: 100%;
    background: #FE7743;
    border-radius: 3px;
    transition: width 0.01s ease;
  }
  
  .seek-slider {
    width: 100%;
    height: 20px;
    background: transparent;
    border-radius: 3px;
    outline: none;
    appearance: none;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }
  
  /* Track styling - make transparent since we use background div */
  .seek-slider::-webkit-slider-runnable-track {
    height: 6px;
    background: transparent;
    border-radius: 3px;
    border: none;
  }
  
  .seek-slider::-moz-range-track {
    height: 6px;
    background: transparent;
    border-radius: 3px;
    border: none;
  }
  
  /* Remove Firefox progress since we use our own */
  .seek-slider::-moz-range-progress {
    background: transparent;
  }
  
  /* Thumb styling - the draggable handle */
  .seek-slider::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    background: rgb(255, 110, 48);
    /* border: 2px solid white; */
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.01s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .seek-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }
  
  .seek-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #FE7743;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.01s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .seek-slider::-moz-range-thumb:hover {
    transform: scale(1.1);
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