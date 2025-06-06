/**
 * FMOD Music Editor - Audio File Configurations
 * 
 * This file contains all audio file configurations for the dynamic track system.
 * Each configuration defines the layers, clips, and visual properties for an audio file.
 * 
 * STRUCTURE OVERVIEW:
 * - Each audio file has a unique configuration object
 * - Each file can have unlimited layers (recommended: 2-7 for optimal UX)
 * - Each layer contains multiple audio clips with positioning data
 * - Visual properties like gradients and colors are also defined here
 * 
 * HOW TO ADD A NEW AUDIO FILE:
 * 1. Add a new key to AUDIO_CONFIGS object using a made-up filename (e.g., 'my_audio.wav')
 * 2. Define the file properties (name, duration, gradientClass)
 * 3. Create layer configurations with unique IDs and properties
 * 4. Add clip definitions with positioning and metadata
 * 5. Create corresponding CSS gradient class in gradients.css
 * 6. Add layer-specific color CSS rules in index.html
 * 
 * IMPORTANT CONSTRAINTS:
 * - Clip widths must NOT exceed 25% (270px) to be selectable with the drag box when "analyzing"
 * - Layer IDs must be unique across the entire application
 * - Clip IDs must be unique within each layer
 * - Layer IDs should use kebab-case (hyphen-separated)
 * - baseHeight values should be spaced 30-70px apart for visual clarity
 * 
 * CSS REQUIREMENTS:
 * When adding new layers, you MUST add corresponding CSS rules in index.html:
 * 1. Individual layer colors: #layer-id .audio-clip { color: #colorcode; }
 * 2. Merged view colors: #merged .audio-clip[data-layer="layer-id"] { color: #colorcode; }
 * 
 * CLIP POSITIONING GUIDELINES:
 * - left: Position as percentage (0% = start, 100% = end)
 * - width: Size as percentage (max 25% = 270px)
 * - Ensure clips don't overlap: next_left >= previous_left + previous_width
 * - Leave 2-5% margin between clips for visual separation
 * 
 * GRADIENT CLASSES:
 * Create unique gradient classes in gradients.css for each file:
 * - Use descriptive names: 'main-waveform-gradient', 'morse-waveform-gradient'
 * - Follow existing pattern for consistency
 * - Test across different screen sizes
 * 
 * LAYER NAMING BEST PRACTICES:
 * - Use descriptive, technical names: 'vocal-track', 'background-noise'
 * - Avoid spaces, use hyphens: 'electrical-interference' not 'Electrical Interference'
 * - Keep displayName user-friendly: 'Layer 1', 'Background Noise'
 * - name should be readable: 'Vocal_Track', 'Background_Noise'
 * 
 * COMMON GOTCHAS:
 * - Forgetting to add CSS color rules results in black text/invisible patterns
 * - Layer ID conflicts cause dynamic layer creation to fail
 * - Missing gradientClass causes merged view to have no background
 * - baseHeight conflicts cause clips to overlap in merged view
 * - totalDuration mismatch affects playback controls and timeline
 */
const AUDIO_CONFIGS = {
    /**
     * EXAMPLE CONFIGURATION: find_the_murderer.wav
     * 
     * This is the default/reference configuration showing proper structure.
     * Use this as a template when creating new audio file configurations.
     */
    'find_the_murderer.wav': {
        // File display name (shown in merged track info)
        name: 'find_the_murderer.wav',

        // Total audio duration in seconds (affects playback controls and timeline)
        totalDuration: 47,

        // CSS class name for merged view background gradient (must exist in gradients.css)
        gradientClass: 'main-waveform-gradient',

        // Layer definitions - each layer represents a track with audio clips
        layers: {
            /**
             * LAYER CONFIGURATION EXAMPLE:
             * Each layer needs: unique ID, display properties, positioning, and clips array
             */
            'evidence-recording': {
                // Technical name for display (with underscores for readability)
                name: 'Evidence_Recording',

                // User-friendly name shown in UI
                displayName: 'Layer 1',

                // Color for this layer's clips (must match CSS rules in index.html)
                color: '#e74c3c',

                // Vertical position in merged view (avoid conflicts with other layers)
                baseHeight: 30,

                // Array of audio clips in this layer
                clips: [
                    // Each clip needs: unique id, position (left %), size (width %), and tooltip
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

    /**
     * MORSE CODE CONFIGURATION: morse_code.wav
     * 
     * Example of a 2-layer configuration with radio/communication theme.
     * Shows how to create themed content with appropriate naming and colors.
     */
    'morse_code.wav': {
        name: 'morse_code.wav',
        totalDuration: 32, // Shorter duration than default
        gradientClass: 'morse-waveform-gradient', // Custom gradient for morse code theme
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

    /**
     * COMPLEX CONFIGURATION: noise_profiling.wav
     * 
     * Example of a 7-layer configuration showing maximum complexity.
     * Demonstrates proper baseHeight spacing and technical audio clip naming.
     * Use this as reference for multi-layer configurations.
     */
    'noise_profiling.wav': {
        name: 'noise_profiling.wav',
        totalDuration: 28, // Shortest duration example
        gradientClass: 'noise-waveform-gradient', // Multi-color gradient theme
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

/**
 * TEMPLATE FOR NEW AUDIO FILE:
 * 
 * Copy this template when adding new audio files. Replace ALL_CAPS placeholders.
 * 
 * 'YOUR_FILENAME.wav': {
 *     name: 'YOUR_FILENAME.wav',
 *     totalDuration: DURATION_IN_SECONDS,
 *     gradientClass: 'your-custom-gradient-class',
 *     layers: {
 *         'your-layer-id': {
 *             name: 'Your_Layer_Name',
 *             displayName: 'Layer N',
 *             color: '#HEXCOLOR',
 *             baseHeight: HEIGHT_VALUE, // Use: 20, 50, 80, 110, 140, 170, 200...
 *             clips: [
 *                 { id: 'clip_name', left: 'X%', width: 'Y%', title: 'Descriptive title' },
 *                 // Add more clips as needed, ensure no overlaps
 *             ]
 *         },
 *         // Add more layers as needed
 *     }
 * },
 * 
 * CHECKLIST FOR NEW AUDIO FILES:
 * □ Added configuration object to AUDIO_CONFIGS
 * □ Created gradient class in gradients.css
 * □ Added CSS color rules in index.html (individual + merged view)
 * □ Verified all clip widths are ≤25%
 * □ Tested layer creation and analysis game
 * □ Checked for layer ID conflicts
 * □ Ensured proper baseHeight spacing
 * □ Validated clip positioning (no overlaps)
 * □ Added descriptive tooltips for all clips
 * □ Updated dropdown menu in index.html if needed
 */

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUDIO_CONFIGS;
} 