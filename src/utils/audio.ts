/**
 * Web Audio API Romantic Ambient Instrument & Music Box
 * Generates an ethereal, warm piano-like arpeggio progression in C major / A minor
 * Smoothly loops, zero external dependencies, never autoplays without user trigger.
 */

class RomanticAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private gainNode: GainNode | null = null;
  private currentStep = 0;

  // Romantic chord arpeggio progression notes (in Hz)
  // Progression: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4 / G
  private chords = [
    // Cmaj9: C3, G3, B3, E4, G4, D5
    [130.81, 196.00, 246.94, 329.63, 392.00, 587.33],
    // Am9: A2, E3, G3, C4, E4, B4
    [110.00, 164.81, 196.00, 261.63, 329.63, 493.88],
    // Fmaj7: F2, C3, E3, A3, C4, E4
    [87.31, 130.81, 164.81, 220.00, 261.63, 329.63],
    // Gsus4 -> G: G2, D3, G3, B3, D4, G4
    [98.00, 146.83, 196.00, 246.94, 293.66, 392.00],
  ];

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.init();
    if (!this.ctx || !this.gainNode) return;
    this.isPlaying = true;
    this.currentStep = 0;

    // Play immediate intro note
    this.playChordArpeggio();

    // Step every 1.8 seconds for a dreamy, peaceful tempo
    this.intervalId = window.setInterval(() => {
      this.playChordArpeggio();
    }, 1800);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private playTone(freq: number, delay: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) {
    if (!this.ctx || !this.gainNode) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

    // Warm envelope
    const startTime = this.ctx.currentTime + delay;
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(volume, startTime + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(volume * 0.4, startTime + duration * 0.4);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    // Subtle gentle chime overtone
    const overtone = this.ctx.createOscillator();
    const overtoneGain = this.ctx.createGain();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 2, startTime);
    overtoneGain.gain.setValueAtTime(0.0001, startTime);
    overtoneGain.gain.exponentialRampToValueAtTime(volume * 0.18, startTime + 0.04);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.6);

    osc.connect(noteGain);
    noteGain.connect(this.gainNode);

    overtone.connect(overtoneGain);
    overtoneGain.connect(this.gainNode);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
    overtone.start(startTime);
    overtone.stop(startTime + duration + 0.1);
  }

  private playChordArpeggio() {
    if (!this.isPlaying) return;
    const chordIndex = Math.floor(this.currentStep / 2) % this.chords.length;
    const chord = this.chords[chordIndex];
    const isSubStep = this.currentStep % 2 === 1;

    // Bass root note
    this.playTone(chord[0], 0, 2.4, 'sine', 0.22);
    // Fifth
    this.playTone(chord[1], 0.2, 2.0, 'sine', 0.16);

    if (!isSubStep) {
      // Arpeggiate up
      this.playTone(chord[2], 0.45, 1.8, 'triangle', 0.14);
      this.playTone(chord[3], 0.75, 1.6, 'sine', 0.15);
      this.playTone(chord[4], 1.05, 1.5, 'sine', 0.16);
      this.playTone(chord[5], 1.35, 2.0, 'triangle', 0.18);
    } else {
      // Gentle alternate melody
      this.playTone(chord[4], 0.35, 1.8, 'sine', 0.16);
      this.playTone(chord[3], 0.65, 1.6, 'triangle', 0.14);
      this.playTone(chord[5], 0.95, 2.2, 'sine', 0.19);
      this.playTone(chord[2], 1.30, 1.5, 'sine', 0.13);
    }

    this.currentStep++;
  }

  // Play a soft cute chime when Meher smiles or clicks a heart
  public playHeartChime() {
    this.init();
    if (!this.ctx || !this.gainNode) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      this.playTone(freq, i * 0.1, 1.2, 'sine', 0.12);
    });
  }
}

export const romanticAudio = new RomanticAudioPlayer();
