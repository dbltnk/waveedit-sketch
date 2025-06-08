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
     * DAY 1: Police surveillance tape restoration
     * Vincent's first assignment - simple forensic work for local authorities
     * TOOLS: Basic mute function only
     */
    '1_simple_getaway_analysis.wav': {
        name: '1_simple_getaway_analysis.wav',
        totalDuration: 15, // Short but not too brief
        gradientClass: 'forensic-waveform-gradient',
        availableTools: ['mute'], // Only mute tool available for first day
        layers: {
            'digital-corruption': {
                name: 'Digital_Corruption',
                displayName: 'Interference',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'transmission_static', left: '5%', width: '90%', title: 'Digital transmission interference', type: 'large' }
                ]
            },
            'engine-signature': {
                name: 'Engine_Audio',
                displayName: 'Target Signal',
                color: '#3498db',
                baseHeight: 80,
                clips: [
                    { id: 'vehicle_engine_idle', left: '10%', width: '35%', title: 'Vehicle engine idle', type: 'large' },
                    { id: 'vehicle_engine_rev', left: '55%', width: '35%', title: 'Engine acceleration', type: 'large' }
                ]
            }
        }
    },

    /**
     * DAY 2: Local band demo restoration
     * Volume balancing for Munich indie band's demo tape
     * TOOLS: Volume control introduction
     */
    '2_simple_vocal_harmony.wav': {
        name: '2_simple_vocal_harmony.wav',
        totalDuration: 25, // Logical progression from 15s
        gradientClass: 'vocal-waveform-gradient',
        availableTools: ['mute', 'volume'], // Add volume control to previous mute
        layers: {
            'vocal-track': {
                name: 'Lead_Vocals',
                displayName: 'Lead Vocals',
                color: '#e67e22',
                baseHeight: 40,
                clips: [
                    { id: 'verse_one', left: '5%', width: '20%', title: 'Verse 1 - too quiet', type: 'large' },
                    { id: 'chorus_one', left: '28%', width: '20%', title: 'Chorus 1 - too loud', type: 'large' },
                    { id: 'verse_two', left: '53%', width: '18%', title: 'Verse 2 - good level', type: 'large' },
                    { id: 'outro_vocals', left: '75%', width: '20%', title: 'Outro - needs boost', type: 'large' }
                ]
            },
            'backing-vocals': {
                name: 'Backing_Vocals',
                displayName: 'Backing Vocals',
                color: '#f39c12',
                baseHeight: 80,
                clips: [
                    { id: 'harmony_one', left: '28%', width: '20%', title: 'Chorus harmony', type: 'large' },
                    { id: 'harmony_two', left: '75%', width: '20%', title: 'Outro harmony', type: 'large' }
                ]
            }
        }
    },

    /**
     * DAY 3: Historical archive restoration
     * Cold War era radio transmission for Munich historical society
     * TOOLS: Noise reduction and signal enhancement
     */
    '3_medium_morse_code.wav': {
        name: '3_medium_morse_code.wav',
        totalDuration: 35, // Progressive duration increase
        gradientClass: 'morse-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch'], // Add noise reduction and clarity tools
        layers: {
            'morse-signals': {
                name: 'Morse_Transmission',
                displayName: 'Signal',
                color: '#3498db',
                baseHeight: 40,
                clips: [
                    { id: 'sos_transmission', left: '10%', width: '25%', title: 'SOS emergency signal', type: 'large' },
                    { id: 'coordinates_message', left: '45%', width: '30%', title: 'Grid coordinate transmission', type: 'large' },
                    { id: 'end_transmission', left: '80%', width: '15%', title: 'Transmission end signal', type: 'large' }
                ]
            },
            'radio-static': {
                name: 'Background_Static',
                displayName: 'Interference',
                color: '#95a5a6',
                baseHeight: 80,
                clips: [
                    { id: 'atmospheric_noise', left: '5%', width: '90%', title: 'Atmospheric radio interference', type: 'large' }
                ]
            }
        }
    },

    /**
     * DAY 4: Biological research field recording
     * Ornithology department needs specific bird species isolated
     * TOOLS: Frequency filtering introduction
     */
    '4_medium_seasonal_birds.wav': {
        name: '4_medium_seasonal_birds.wav',
        totalDuration: 45, // Longer duration for complexity
        gradientClass: 'nature-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'highpass', 'lowpass'], // Add frequency filtering
        layers: {
            'target-bird-call': {
                name: 'Robin_Calls',
                displayName: 'Target Species',
                color: '#27ae60',
                baseHeight: 40,
                clips: [
                    { id: 'robin_morning_call', left: '15%', width: '20%', title: 'Robin territorial call', type: 'large' },
                    { id: 'robin_mating_song', left: '45%', width: '25%', title: 'Robin courtship song', type: 'large' },
                    { id: 'robin_alarm_call', left: '75%', width: '15%', title: 'Robin alarm call', type: 'large' }
                ]
            },
            'ambient-forest-noise': {
                name: 'Forest_Ambience',
                displayName: 'Background Noise',
                color: '#2c3e50',
                baseHeight: 80,
                clips: [
                    { id: 'wind_noise', left: '5%', width: '35%', title: 'Wind through trees', type: 'large' },
                    { id: 'distant_stream', left: '35%', width: '30%', title: 'Distant water sound', type: 'large' },
                    { id: 'rustling_leaves', left: '70%', width: '25%', title: 'Leaf rustling', type: 'large' }
                ]
            },
            'other-bird-species': {
                name: 'Other_Birds',
                displayName: 'Interference',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'crow_cawing', left: '20%', width: '15%', title: 'Crow interference', type: 'large' },
                    { id: 'woodpecker_drilling', left: '60%', width: '10%', title: 'Woodpecker drilling', type: 'large' },
                    { id: 'small_bird_chatter', left: '80%', width: '15%', title: 'Mixed small bird calls', type: 'large' }
                ]
            }
        }
    },

    /**
     * DAY 5: First Viola tape - experimental vocal layers
     * Vincent receives his first assignment from the mysterious Viola collection
     * TOOLS: Time manipulation tools introduced for experimental audio
     */
    '5_medium_find_the_murderer.wav': {
        name: '5_medium_find_the_murderer.wav',
        totalDuration: 55, // Longer for complex Viola analysis
        gradientClass: 'main-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'highpass', 'lowpass', 'reverse', 'speed'], // Add time manipulation

        layers: {
            'viola-voice-forward': {
                name: 'Primary_Vocals',
                displayName: 'Viola Voice',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'verse_fragment', left: '10%', width: '25%', title: 'Fragmented verse - clear', type: 'large' },
                    { id: 'emotional_passage', left: '45%', width: '30%', title: 'Emotional vocal passage', type: 'large' },
                    { id: 'whispered_ending', left: '80%', width: '15%', title: 'Whispered conclusion', type: 'large' }
                ]
            },
            'backwards-vocals': {
                name: 'Reversed_Elements',
                displayName: 'Hidden Layers',
                color: '#8e44ad',
                baseHeight: 80,
                clips: [
                    { id: 'backwards_message_1', left: '20%', width: '15%', title: 'Reversed vocal fragment', type: 'large' },
                    { id: 'backwards_message_2', left: '55%', width: '20%', title: 'Hidden backwards speech', type: 'large' }
                ]
            },
            'field-recording-base': {
                name: 'Field_Recording',
                displayName: 'Ambience',
                color: '#27ae60',
                baseHeight: 120,
                clips: [
                    { id: 'outdoor_recording', left: '5%', width: '90%', title: 'Outdoor field recording ambience', type: 'large' }
                ]
            },
            'tape-artifacts': {
                name: 'Tape_Degradation',
                displayName: 'Technical Issues',
                color: '#34495e',
                baseHeight: 160,
                clips: [
                    { id: 'tape_warble', left: '15%', width: '25%', title: 'Tape speed variation', type: 'large' },
                    { id: 'magnetic_dropouts', left: '50%', width: '20%', title: 'Magnetic tape dropouts', type: 'large' },
                    { id: 'analog_hiss', left: '75%', width: '20%', title: 'Analog tape hiss', type: 'large' }
                ]
            }
        }
    },

    /**
     * DAY 6: Second Viola tape - complex layered experimental composition
     * More sophisticated Viola recording requiring advanced technical analysis
     * TOOLS: Advanced stereo and technical processing tools
     */
    '6_complex_noise_profiling.wav': {
        name: '6_complex_noise_profiling.wav',
        totalDuration: 65, // Complex analysis requires time
        gradientClass: 'noise-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'highpass', 'lowpass', 'reverse', 'speed', 'bitrate', 'stereo'], // Full technical toolkit
        layers: {
            'viola-vocal-layers': {
                name: 'Primary_Voice',
                displayName: 'Viola Voice',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'vocal_harmony_base', left: '10%', width: '30%', title: 'Primary vocal harmony', type: 'large' },
                    { id: 'processed_vocals', left: '50%', width: '25%', title: 'Electronically processed voice', type: 'large' },
                    { id: 'natural_voice_end', left: '80%', width: '15%', title: 'Raw vocal ending', type: 'large' }
                ]
            },
            'synthesizer-textures': {
                name: 'Synth_Elements',
                displayName: 'Electronic Layers',
                color: '#f39c12',
                baseHeight: 80,
                clips: [
                    { id: 'modular_drones', left: '15%', width: '35%', title: 'Modular synthesizer drones', type: 'large' },
                    { id: 'filtered_sequences', left: '60%', width: '30%', title: 'Filtered sequence patterns', type: 'large' }
                ]
            },
            'found-sound-elements': {
                name: 'Found_Sounds',
                displayName: 'Field Recordings',
                color: '#1abc9c',
                baseHeight: 120,
                clips: [
                    { id: 'water_sounds', left: '5%', width: '25%', title: 'Water field recording', type: 'large' },
                    { id: 'industrial_ambience', left: '40%', width: '30%', title: 'Industrial ambience', type: 'large' },
                    { id: 'nature_textures', left: '75%', width: '20%', title: 'Nature texture layers', type: 'large' }
                ]
            },
            'tape-manipulation': {
                name: 'Tape_Effects',
                displayName: 'Analog Processing',
                color: '#e67e22',
                baseHeight: 160,
                clips: [
                    { id: 'speed_variations', left: '20%', width: '25%', title: 'Tape speed manipulation', type: 'large' },
                    { id: 'reverse_sections', left: '55%', width: '20%', title: 'Reversed tape sections', type: 'large' }
                ]
            },
            'technical-artifacts': {
                name: 'Recording_Issues',
                displayName: 'Technical Problems',
                color: '#9b59b6',
                baseHeight: 200,
                clips: [
                    { id: 'analog_saturation', left: '5%', width: '90%', title: 'Analog tape saturation and noise', type: 'large' }
                ]
            }
        }
    },

    /**
     * DAY 7: Final Viola tape - experimental orchestra session
     * Viola's most complex recording with multiple performance interruptions to remove
     * TOOLS: Complete Vincent's toolkit for masterful restoration
     */
    '7_complex_orchestra_hickups.wav': {
        name: '7_complex_orchestra_hickups.wav',
        totalDuration: 75, // Reasonable length for final challenge
        gradientClass: 'orchestra-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'highpass', 'lowpass', 'reverse', 'speed', 'bitrate', 'stereo'], // Vincent's complete toolkit
        layers: {
            'viola-experimental-strings': {
                name: 'String_Section',
                displayName: 'Viola & Strings',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'experimental_violin_melody', left: '10%', width: '30%', title: 'Experimental violin melody', type: 'large' },
                    { id: 'violin_cough_mistake', left: '45%', width: '3%', title: 'Violinist cough interruption', type: 'small' },
                    { id: 'viola_solo_section', left: '55%', width: '25%', title: 'Viola solo - Viola herself playing', type: 'large' },
                    { id: 'string_section_finale', left: '85%', width: '12%', title: 'String section finale', type: 'large' }
                ]
            },
            'wind-instruments': {
                name: 'Wind_Section',
                displayName: 'Winds & Brass',
                color: '#f39c12',
                baseHeight: 80,
                clips: [
                    { id: 'atmospheric_winds', left: '5%', width: '35%', title: 'Atmospheric wind instruments', type: 'large' },
                    { id: 'reed_squeak', left: '42%', width: '2%', title: 'Reed instrument squeak', type: 'small' },
                    { id: 'brass_harmony_section', left: '50%', width: '30%', title: 'Brass harmony section', type: 'large' },
                    { id: 'musician_cough', left: '83%', width: '3%', title: 'Musician cough', type: 'small' }
                ]
            },
            'percussion-and-found-sounds': {
                name: 'Rhythm_Section',
                displayName: 'Percussion & Objects',
                color: '#27ae60',
                baseHeight: 120,
                clips: [
                    { id: 'experimental_percussion', left: '15%', width: '40%', title: 'Experimental percussion and found objects', type: 'large' },
                    { id: 'accidental_knock', left: '58%', width: '2%', title: 'Accidental equipment knock', type: 'small' },
                    { id: 'rhythmic_finale', left: '65%', width: '30%', title: 'Complex rhythmic finale', type: 'large' }
                ]
            },
            'session-ambience': {
                name: 'Room_Tone',
                displayName: 'Session Atmosphere',
                color: '#9b59b6',
                baseHeight: 160,
                clips: [
                    { id: 'studio_ambience', left: '5%', width: '40%', title: 'Recording studio ambience', type: 'large' },
                    { id: 'chair_creak', left: '48%', width: '2%', title: 'Chair creak during session', type: 'small' },
                    { id: 'tape_machine_hum', left: '55%', width: '35%', title: 'Tape machine background hum', type: 'large' },
                    { id: 'session_end_chatter', left: '92%', width: '5%', title: 'End of session chatter', type: 'small' }
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