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
    },

    /**
     * ORCHESTRA HICKUPS: orchestra_hickups.wav
     * 
     * Easy difficulty - Tutorial-like busywork removing coughs and mistakes
     * 4 layers representing different orchestra sections with overlapping hickups
     */
    'orchestra_hickups.wav': {
        name: 'orchestra_hickups.wav',
        totalDuration: 300, // 5 minutes - long track for practice
        gradientClass: 'orchestra-waveform-gradient',
        layers: {
            'violin-section': {
                name: 'Violin_Section',
                displayName: 'Layer 1',
                color: '#e74c3c',
                baseHeight: 25,
                clips: [
                    { id: 'violin_opening_movement', left: '1%', width: '18%', title: 'Opening violin movement' },
                    { id: 'violin_cough_1', left: '19%', width: '2%', title: 'Violinist cough' },
                    { id: 'violin_lyrical_section', left: '22%', width: '15%', title: 'Lyrical violin section' },
                    { id: 'violin_page_turn', left: '37%', width: '1%', title: 'Page turn noise' },
                    { id: 'violin_development_passage', left: '39%', width: '22%', title: 'Development passage with arpeggios and tremolo' },
                    { id: 'violin_bow_scratch', left: '61%', width: '2%', title: 'Bow scratch' },
                    { id: 'violin_dramatic_crescendo', left: '64%', width: '16%', title: 'Dramatic crescendo build' },
                    { id: 'violin_chair_creak', left: '80%', width: '1%', title: 'Chair creak' },
                    { id: 'violin_finale_coda', left: '82%', width: '17%', title: 'Finale and coda' },
                    { id: 'violin_sneeze', left: '84%', width: '2%', title: 'Sneeze' },
                    { id: 'violin_string_snap', left: '92%', width: '1%', title: 'String snap' },
                    { id: 'violin_tuning', left: '95%', width: '2%', title: 'Quick tuning' }
                ]
            },
            'brass-section': {
                name: 'Brass_Section',
                displayName: 'Layer 2',
                color: '#f39c12',
                baseHeight: 60,
                clips: [
                    { id: 'brass_fanfare_opening', left: '2%', width: '20%', title: 'Grand brass fanfare opening' },
                    { id: 'trumpet_spit', left: '22%', width: '1%', title: 'Trumpet spit valve' },
                    { id: 'brass_harmonic_development', left: '24%', width: '18%', title: 'Brass harmonic development section' },
                    { id: 'trombone_bump', left: '42%', width: '2%', title: 'Trombone stand bump' },
                    { id: 'brass_chorale_movement', left: '45%', width: '25%', title: 'Majestic brass chorale movement' },
                    { id: 'horn_cough', left: '70%', width: '2%', title: 'French horn cough' },
                    { id: 'brass_climactic_finale', left: '73%', width: '24%', title: 'Climactic brass finale with all sections' },
                    { id: 'brass_valve_click', left: '85%', width: '1%', title: 'Valve click' },
                    { id: 'tuba_wheeze', left: '90%', width: '2%', title: 'Tuba player wheeze' },
                    { id: 'trombone_slide_squeak', left: '95%', width: '1%', title: 'Slide squeak' }
                ]
            },
            'woodwind-section': {
                name: 'Woodwind_Section',
                displayName: 'Layer 3',
                color: '#27ae60',
                baseHeight: 95,
                clips: [
                    { id: 'woodwind_pastoral_opening', left: '1%', width: '16%', title: 'Pastoral woodwind opening with flute and oboe' },
                    { id: 'clarinet_squeak', left: '17%', width: '1%', title: 'Clarinet squeak' },
                    { id: 'woodwind_development', left: '19%', width: '21%', title: 'Woodwind development with clarinet scales and bassoon' },
                    { id: 'oboe_reed_pop', left: '40%', width: '1%', title: 'Oboe reed pop' },
                    { id: 'woodwind_ensemble_movement', left: '42%', width: '26%', title: 'Full woodwind ensemble movement' },
                    { id: 'flute_key_click', left: '68%', width: '1%', title: 'Flute key click' },
                    { id: 'piccolo_screech', left: '70%', width: '1%', title: 'Piccolo screech' },
                    { id: 'woodwind_harmonic_finale', left: '72%', width: '25%', title: 'Woodwind harmonic finale with all sections' },
                    { id: 'clarinet_cough', left: '80%', width: '2%', title: 'Clarinetist cough' },
                    { id: 'flute_breath_pop', left: '90%', width: '1%', title: 'Breath pop' },
                    { id: 'sax_honk', left: '93%', width: '2%', title: 'Saxophone honk' },
                    { id: 'woodwind_rustle', left: '96%', width: '1%', title: 'Music stand rustle' }
                ]
            },
            'percussion-section': {
                name: 'Percussion_Section',
                displayName: 'Layer 4',
                color: '#9b59b6',
                baseHeight: 130,
                clips: [
                    { id: 'percussion_rhythmic_foundation', left: '3%', width: '28%', title: 'Rhythmic foundation - timpani, snare, and ensemble' },
                    { id: 'cymbal_touch', left: '31%', width: '1%', title: 'Accidental cymbal touch' },
                    { id: 'percussion_melodic_section', left: '33%', width: '22%', title: 'Melodic percussion - xylophone and mallet instruments' },
                    { id: 'stick_drop', left: '55%', width: '1%', title: 'Drumstick drop' },
                    { id: 'timpani_foot_tap', left: '57%', width: '1%', title: 'Foot pedal tap' },
                    { id: 'percussion_dramatic_build', left: '59%', width: '28%', title: 'Dramatic build with all percussion to finale' },
                    { id: 'triangle_ding', left: '73%', width: '1%', title: 'Early triangle' },
                    { id: 'drum_rim_hit', left: '80%', width: '1%', title: 'Rim shot' },
                    { id: 'percussion_cough', left: '85%', width: '2%', title: 'Percussionist cough' },
                    { id: 'mallet_drop', left: '90%', width: '1%', title: 'Mallet drop' },
                    { id: 'snare_buzz', left: '95%', width: '2%', title: 'Snare buzz' }
                ]
            }
        }
    },

    /**
     * VOCAL HARMONY: vocal_harmony.wav
     * 
     * Medium difficulty - Volume leveling task with single layer
     * Simple structure focusing on precision volume matching
     */
    'vocal_harmony.wav': {
        name: 'vocal_harmony.wav',
        totalDuration: 120, // 2 minutes
        gradientClass: 'vocal-waveform-gradient',
        layers: {
            'vocal-track': {
                name: 'Vocal_Track',
                displayName: 'Layer 1',
                color: '#e67e22',
                baseHeight: 50,
                clips: [
                    { id: 'verse_one', left: '5%', width: '20%', title: 'First verse - needs boost' },
                    { id: 'chorus_one', left: '28%', width: '22%', title: 'First chorus - too loud' },
                    { id: 'verse_two', left: '53%', width: '18%', title: 'Second verse - good level' },
                    { id: 'chorus_two', left: '73%', width: '22%', title: 'Second chorus - needs boost' },
                    { id: 'outro_whisper', left: '96%', width: '3%', title: 'Whispered outro - needs major boost' }
                ]
            }
        }
    },

    /**
     * GETAWAY ANALYSIS: getaway_analysis.wav
     * 
     * Easy difficulty - Simple noise removal to reveal evidence
     * Minimal complexity with just 2 layers and 2 clips
     */
    'getaway_analysis.wav': {
        name: 'getaway_analysis.wav',
        totalDuration: 10, // Very short and focused
        gradientClass: 'forensic-waveform-gradient',
        layers: {
            'digital-corruption': {
                name: 'Digital_Corruption',
                displayName: 'Layer 1',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'recording_static', left: '5%', width: '90%', title: 'Digital corruption masking evidence' }
                ]
            },
            'engine-signature': {
                name: 'Engine_Signature',
                displayName: 'Layer 2',
                color: '#3498db',
                baseHeight: 80,
                clips: [
                    { id: 'vehicle_engine', left: '10%', width: '80%', title: 'Hidden engine sound signature' }
                ]
            }
        }
    },

    /**
     * SEASONAL BIRDS: seasonal_birds.wav
     * 
     * Medium difficulty - Isolate specific bird call among forest sounds
     * Overlapping layers requiring careful frequency separation
     */
    'seasonal_birds.wav': {
        name: 'seasonal_birds.wav',
        totalDuration: 20, // Short but intense
        gradientClass: 'nature-waveform-gradient',
        layers: {
            'target-bird-call': {
                name: 'Target_Bird_Call',
                displayName: 'Layer 1',
                color: '#27ae60',
                baseHeight: 30,
                clips: [
                    { id: 'robin_spring_song', left: '25%', width: '50%', title: 'Robin territorial call - spring indicator' }
                ]
            },
            'forest-ambience': {
                name: 'Forest_Ambience',
                displayName: 'Layer 2',
                color: '#2c3e50',
                baseHeight: 70,
                clips: [
                    { id: 'wind_through_leaves', left: '10%', width: '40%', title: 'Wind masking bird call' },
                    { id: 'distant_stream', left: '60%', width: '35%', title: 'Stream noise interference' }
                ]
            },
            'viola-breathing': {
                name: 'Viola_Breathing',
                displayName: 'Layer 3',
                color: '#8e44ad',
                baseHeight: 110,
                clips: [
                    { id: 'recording_breath', left: '15%', width: '70%', title: 'Viola recording herself - why?' }
                ]
            },
            'unknown-presence': {
                name: 'Unknown_Presence',
                displayName: 'Layer 4',
                color: '#e74c3c',
                baseHeight: 150,
                clips: [
                    { id: 'footsteps_nearby', left: '45%', width: '25%', title: 'Someone else is there...' }
                ]
            }
        }
    },
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