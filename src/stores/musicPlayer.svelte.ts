// stores/musicPlayer.js
import { writable } from 'svelte/store';

class MusicPlayer {
  constructor() {
    this.audio = null;
    this.currentTrackId = $state(null);
    this.isPlaying = $state(false);
    this.isLoading = $state(false);
    this.volume = $state(1.0);
    this.currentTime = $state(0);
    this.duration = $state(0);
    this.name = $state(null);
  }

  async startTrack(trackId, name) {
    try {
      this.isLoading = true;
      
      // Stop current track if playing
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }

      // Create new audio instance
      this.audio = new Audio(`/music/${trackId}.mp3`);
      this.currentTrackId = trackId;
      this.name = name;

      // Set up event listeners
      this.audio.addEventListener('loadedmetadata', () => {
        this.duration = this.audio.duration;
        this.isLoading = false;
      });

      this.audio.addEventListener('timeupdate', () => {
        this.currentTime = this.audio.currentTime;
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.currentTime = 0;
      });

      this.audio.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        this.isLoading = false;
        this.isPlaying = false;
      });

      // Set volume and play
      this.audio.volume = this.volume;
      await this.audio.play();
      this.isPlaying = true;
      
    } catch (error) {
      console.error('Error starting track:', error);
      this.isLoading = false;
      this.isPlaying = false;
    }
  }

  endTrack(trackId) {
    if (this.currentTrackId === trackId && this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
      this.currentTime = 0;
      this.currentTrackId = null;
      this.audio = null;
      this.name = null;
    }
  }

  // Additional control methods
  pause() {
    if (this.audio && this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  resume() {
    if (this.audio && !this.isPlaying) {
      this.audio.play();
      this.isPlaying = true;
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  seek(time) {
    if (this.audio) {
      this.audio.currentTime = time;
      this.currentTime = time;
    }
  }
}

// Create global instance
export const musicPlayer = new MusicPlayer();