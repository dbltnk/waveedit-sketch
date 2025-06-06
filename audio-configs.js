// Audio file configurations for the FMOD Music Editor
const AUDIO_CONFIGS = {
    'find_the_murderer.wav': {
        name: 'find_the_murderer.wav',
        totalDuration: 47, // seconds
        gradientClass: 'main-waveform-gradient', // Uses existing gradient from gradients.css
        layers: {
            'evidence-recording': {
                name: 'Evidence_Recording',
                displayName: 'Layer 1',
                color: '#e74c3c',
                baseHeight: 30,
                clips: [
                    { id: 'initial_scream', left: '15%', width: '15%', title: 'Initial scream' },
                    { id: 'struggle_sounds', left: '45%', width: '20%', title: 'Struggle sounds' },
                    { id: 'last_words', left: '80%', width: '15%', title: 'Last words' }
                ]
            },
            'ghost-voices': {
                name: 'Ghost_Voices',
                displayName: 'Layer 2',
                color: '#8e44ad',
                baseHeight: 90,
                clips: [
                    { id: 'whisper_1', left: '20%', width: '10%', title: 'Second whisper' },
                    { id: 'whisper_2', left: '35%', width: '10%', title: 'Third whisper' },
                    { id: 'whisper_3', left: '55%', width: '7%', title: 'Fourth whisper' },
                    { id: 'whisper_4', left: '70%', width: '9%', title: 'Fifth whisper' }
                ]
            },
            'investigation': {
                name: 'Investigation_Notes',
                displayName: 'Layer 3',
                color: '#27ae60',
                baseHeight: 150,
                clips: [
                    { id: 'police_report', left: '40%', width: '15%', title: 'Police recording' },
                    { id: 'witness_statement', left: '70%', width: '20%', title: 'Witness statement' }
                ]
            },
            'ambient-static-wave': {
                name: 'Ambient_Static',
                displayName: 'Layer 4',
                color: '#34495e',
                baseHeight: 210,
                clips: [
                    { id: 'room_tone', left: '10%', width: '20%', title: 'Room tone' },
                    { id: 'static_burst', left: '35%', width: '20%', title: 'Static burst' },
                    { id: 'tape_hiss', left: '70%', width: '25%', title: 'Tape hiss' }
                ]
            }
        }
    },

    'morse_code.wav': {
        name: 'morse_code.wav',
        totalDuration: 32, // seconds
        gradientClass: 'morse-waveform-gradient',
        layers: {
            'morse-signals': {
                name: 'Morse_Signals',
                displayName: 'Layer 1',
                color: '#3498db',
                baseHeight: 50,
                clips: [
                    { id: 'dot_dot_dot', left: '5%', width: '8%', title: 'S - ... (SOS start)' },
                    { id: 'dash_dash_dash', left: '18%', width: '12%', title: 'O - --- (SOS middle)' },
                    { id: 'dot_dot_dot_2', left: '35%', width: '8%', title: 'S - ... (SOS end)' },
                    { id: 'help_signal', left: '50%', width: '25%', title: 'HELP - .... . .-.. .--..' },
                    { id: 'coordinates', left: '80%', width: '15%', title: 'Grid coordinates' }
                ]
            },
            'radio-static': {
                name: 'Radio_Static',
                displayName: 'Layer 2',
                color: '#95a5a6',
                baseHeight: 120,
                clips: [
                    { id: 'carrier_wave', left: '5%', width: '25%', title: 'Carrier wave background' },
                    { id: 'interference_1', left: '40%', width: '15%', title: 'Signal interference' },
                    { id: 'interference_2', left: '70%', width: '20%', title: 'Atmospheric noise' }
                ]
            }
        }
    },

    'noise_profiling.wav': {
        name: 'noise_profiling.wav',
        totalDuration: 28, // seconds
        gradientClass: 'noise-waveform-gradient',
        layers: {
            'vocal-track': {
                name: 'Vocal_Track',
                displayName: 'Layer 1',
                color: '#e74c3c',
                baseHeight: 20,
                clips: [
                    { id: 'clean_speech', left: '10%', width: '20%', title: 'Clean speech sample' },
                    { id: 'distorted_voice', left: '40%', width: '25%', title: 'Distorted voice' },
                    { id: 'whispered_words', left: '75%', width: '20%', title: 'Whispered words' }
                ]
            },
            'background-noise': {
                name: 'Background_Noise',
                displayName: 'Layer 2',
                color: '#f39c12',
                baseHeight: 50,
                clips: [
                    { id: 'room_ambience', left: '5%', width: '25%', title: 'Room ambience baseline' },
                    { id: 'hvac_hum', left: '40%', width: '25%', title: 'HVAC system hum' }
                ]
            },
            'electrical-interference': {
                name: 'Electrical_Interference',
                displayName: 'Layer 3',
                color: '#1abc9c',
                baseHeight: 80,
                clips: [
                    { id: 'power_line_buzz', left: '20%', width: '25%', title: '60Hz power line buzz' },
                    { id: 'fluorescent_flicker', left: '60%', width: '25%', title: 'Fluorescent light flicker' }
                ]
            },
            'mechanical-sounds': {
                name: 'Mechanical_Sounds',
                displayName: 'Layer 4',
                color: '#e67e22',
                baseHeight: 110,
                clips: [
                    { id: 'fan_motor', left: '15%', width: '25%', title: 'Cooling fan motor' },
                    { id: 'hard_drive_seek', left: '50%', width: '15%', title: 'Hard drive seek noise' },
                    { id: 'keyboard_clicks', left: '75%', width: '20%', title: 'Keyboard clicking' }
                ]
            },
            'digital-artifacts': {
                name: 'Digital_Artifacts',
                displayName: 'Layer 5',
                color: '#9b59b6',
                baseHeight: 140,
                clips: [
                    { id: 'compression_artifacts', left: '25%', width: '20%', title: 'Compression artifacts' },
                    { id: 'quantization_noise', left: '50%', width: '25%', title: 'Quantization noise' },
                    { id: 'clock_jitter', left: '80%', width: '10%', title: 'Clock jitter' }
                ]
            },
            'frequency-sweeps': {
                name: 'Frequency_Sweeps',
                displayName: 'Layer 6',
                color: '#27ae60',
                baseHeight: 170,
                clips: [
                    { id: 'low_freq_sweep', left: '10%', width: '25%', title: 'Low frequency sweep' },
                    { id: 'mid_freq_sweep', left: '40%', width: '25%', title: 'Mid frequency sweep' },
                    { id: 'high_freq_sweep', left: '70%', width: '25%', title: 'High frequency sweep' }
                ]
            },
            'calibration-tones': {
                name: 'Calibration_Tones',
                displayName: 'Layer 7',
                color: '#34495e',
                baseHeight: 200,
                clips: [
                    { id: 'reference_tone_440', left: '5%', width: '15%', title: '440Hz reference tone' },
                    { id: 'reference_tone_1k', left: '25%', width: '15%', title: '1kHz reference tone' },
                    { id: 'pink_noise_burst', left: '45%', width: '20%', title: 'Pink noise burst' },
                    { id: 'white_noise_burst', left: '70%', width: '20%', title: 'White noise burst' },
                    { id: 'silence_test', left: '92%', width: '6%', title: 'Silence test' }
                ]
            }
        }
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUDIO_CONFIGS;
} 