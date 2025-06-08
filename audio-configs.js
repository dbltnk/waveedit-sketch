/**
 * AUDIO CONFIGURATIONS FOR IMPRINTED AUDIO MANIPULATION PROTOTYPE
 * 
 * Vincent's Journey Through the Viola Fossati Mystery
 * Complete narrative spanning 18 levels across 10 days
 * 
 * STRUCTURE:
 * - Each level contains multiple audio layers with positioning data
 * - MISC clips (small hidden elements) appear from Day 2 onward
 * - Tool availability progresses with narrative complexity
 * - Colors and themes reflect the supernatural escalation
 * 
 * NARRATIVE ARC:
 * Days 1-2: Normal professional work, discovery of Viola
 * Days 3-4: Investigation and mystery solving
 * Days 5-6: Supernatural elements emerge
 * Days 7-8: Reality breakdown and entity contact
 * Days 9-10: Final confrontation and choice
 */

const AUDIO_CONFIGS = {
    /**
     * DAY 1 - DAILY LIFE
     * Vincent's normal professional routine helping friends and colleagues
     */

    // Level 1: Evening Police Work - ULTRA-MINIMAL START
    '1_police_surveillance.wav': {
        name: '1_police_surveillance.wav',
        totalDuration: 15,
        gradientClass: 'forensic-waveform-gradient',
        availableTools: ['mute', 'volume'],
        layers: {
            'target-conversation': {
                name: 'Target_Audio',
                displayName: 'Surveillance Target',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'suspect_conversation', left: '20%', width: '60%', title: 'Target conversation', type: 'large' }
                ]
            },
            'environmental-noise': {
                name: 'Background_Noise',
                displayName: 'Environmental Audio',
                color: '#34495e',
                baseHeight: 80,
                clips: [
                    { id: 'street_interference', left: '5%', width: '90%', title: 'Street noise', type: 'large' }
                ]
            }
        }
    },

    // Level 2: Mike's EVP Session - STILL SIMPLE
    '2_mike_evp_debunk.wav': {
        name: '2_mike_evp_debunk.wav',
        totalDuration: 25,
        gradientClass: 'vocal-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise'],
        layers: {
            'mikes-recording': {
                name: 'EVP_Audio',
                displayName: 'Mike\'s Recording',
                color: '#f39c12',
                baseHeight: 40,
                clips: [
                    { id: 'supposed_ghost_voice_1', left: '15%', width: '12%', title: 'First EVP claim', type: 'large' },
                    { id: 'supposed_ghost_voice_2', left: '45%', width: '8%', title: 'Second EVP claim', type: 'medium' }
                ]
            },
            'environmental-explanation': {
                name: 'Real_Sources',
                displayName: 'Actual Causes',
                color: '#27ae60',
                baseHeight: 80,
                clips: [
                    { id: 'building_settling', left: '10%', width: '20%', title: 'Building settling sounds', type: 'large' },
                    { id: 'heating_pipes', left: '60%', width: '30%', title: 'Old heating system', type: 'large' }
                ]
            }
        }
    },

    /**
     * DAY 2 - INSPIRATION  
     * Vincent discovers Viola Fossati and becomes intrigued
     */

    // Level 3: Pavel's Mystery Package - FIRST REAL COMPLEXITY
    '3_first_viola_restoration.wav': {
        name: '3_first_viola_restoration.wav',
        totalDuration: 35,
        gradientClass: 'main-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice'],
        layers: {
            'viola-voice': {
                name: 'Primary_Vocals',
                displayName: 'Viola\'s Voice',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'viola_experimental_verse', left: '8%', width: '22%', title: 'Experimental vocal melody', type: 'large' },
                    { id: 'viola_harmonic_layer', left: '35%', width: '18%', title: 'Harmonic vocal layer', type: 'medium' },
                    { id: 'viola_signature_whisper', left: '70%', width: '25%', title: 'Viola Fossati, Antola, 1972', type: 'large' }
                ]
            },
            'tape-degradation': {
                name: 'Tape_Issues',
                displayName: 'Analog Artifacts',
                color: '#95a5a6',
                baseHeight: 80,
                clips: [
                    { id: 'analog_hiss_layer_1', left: '5%', width: '40%', title: 'Primary analog hiss', type: 'large' },
                    { id: 'analog_hiss_layer_2', left: '50%', width: '45%', title: 'Secondary hiss layer', type: 'large' },
                    { id: 'tape_warble', left: '20%', width: '15%', title: 'Tape speed warble', type: 'medium' }
                ]
            },
            'studio-atmosphere': {
                name: 'Studio_Ambience',
                displayName: 'Recording Environment',
                color: '#27ae60',
                baseHeight: 120,
                clips: [
                    { id: 'studio_reverb', left: '10%', width: '80%', title: 'Studio natural reverb', type: 'large' },
                    { id: 'antola_wind_outside', left: '60%', width: '30%', title: 'Wind outside Antola studio', type: 'medium' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 160,
                clips: [
                    { id: 'tape_splice_1', left: '32%', width: '1%', title: 'First tape splice', type: 'small' },
                    { id: 'studio_chair_creak', left: '56%', width: '2%', title: 'Studio chair movement', type: 'small' },
                    { id: 'pencil_on_paper', left: '78%', width: '1%', title: 'Pencil marking paper', type: 'small' }
                ]
            }
        }
    },

    // Level 4: Forum Entry Test - TECHNICAL CHALLENGE SPIKE
    '4_audiophile_forum_test.wav': {
        name: '4_audiophile_forum_test.wav',
        totalDuration: 30,
        gradientClass: 'noise-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch'],
        layers: {
            'frequency-tests': {
                name: 'Test_Signals',
                displayName: 'Technical Test Signals',
                color: '#3498db',
                baseHeight: 40,
                clips: [
                    { id: 'freq_sweep_20hz', left: '5%', width: '8%', title: '20Hz test tone', type: 'medium' },
                    { id: 'freq_sweep_440hz', left: '15%', width: '6%', title: '440Hz reference', type: 'medium' },
                    { id: 'freq_sweep_1khz', left: '23%', width: '7%', title: '1kHz test tone', type: 'medium' },
                    { id: 'freq_sweep_8khz', left: '32%', width: '5%', title: '8kHz high freq test', type: 'medium' },
                    { id: 'freq_sweep_20khz', left: '39%', width: '4%', title: '20kHz limit test', type: 'small' }
                ]
            },
            'stereo-tests': {
                name: 'Stereo_Signals',
                displayName: 'Stereo Separation Tests',
                color: '#27ae60',
                baseHeight: 80,
                clips: [
                    { id: 'left_channel_test', left: '50%', width: '8%', title: 'Left channel only', type: 'medium' },
                    { id: 'right_channel_test', left: '60%', width: '8%', title: 'Right channel only', type: 'medium' },
                    { id: 'center_mono_test', left: '70%', width: '6%', title: 'Center mono test', type: 'medium' },
                    { id: 'stereo_phase_test', left: '78%', width: '5%', title: 'Phase coherence', type: 'small' },
                    { id: 'stereo_width_test', left: '85%', width: '7%', title: 'Stereo width test', type: 'medium' }
                ]
            },
            'compression-artifacts': {
                name: 'Digital_Issues',
                displayName: 'Compression Problems',
                color: '#e67e22',
                baseHeight: 120,
                clips: [
                    { id: 'mp3_128_artifacts', left: '8%', width: '12%', title: 'MP3 128kbps artifacts', type: 'medium' },
                    { id: 'mp3_96_artifacts', left: '25%', width: '10%', title: 'MP3 96kbps artifacts', type: 'medium' },
                    { id: 'ogg_artifacts', left: '45%', width: '8%', title: 'OGG compression artifacts', type: 'small' },
                    { id: 'aac_artifacts', left: '60%', width: '9%', title: 'AAC encoding artifacts', type: 'small' },
                    { id: 'wav_dither', left: '80%', width: '6%', title: 'WAV dither noise', type: 'small' }
                ]
            },
            'technical-precision': {
                name: 'Precision_Elements',
                displayName: 'Technical Precision Tests',
                color: '#9b59b6',
                baseHeight: 160,
                clips: [
                    { id: 'timing_test_1ms', left: '12%', width: '3%', title: '1ms timing precision', type: 'small' },
                    { id: 'timing_test_5ms', left: '18%', width: '4%', title: '5ms timing test', type: 'small' },
                    { id: 'bit_depth_test_16', left: '35%', width: '5%', title: '16-bit depth test', type: 'small' },
                    { id: 'bit_depth_test_24', left: '47%', width: '5%', title: '24-bit depth test', type: 'small' },
                    { id: 'sample_rate_44', left: '65%', width: '6%', title: '44.1kHz sample rate', type: 'small' },
                    { id: 'sample_rate_96', left: '76%', width: '6%', title: '96kHz sample rate', type: 'small' }
                ]
            }
        }
    },

    /**
     * DAY 3 - FINDING VIOLA
     * Investigation deepens with morse code and coordinates
     */

    // Level 5: The Hidden Message - DECEPTIVE COMPLEXITY
    '5_morse_code_test.wav': {
        name: '5_morse_code_test.wav',
        totalDuration: 55,
        gradientClass: 'morse-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse'],
        layers: {
            'viola-surface-layer': {
                name: 'Surface_Audio',
                displayName: 'Viola\'s Experimental Music',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'viola_melody_part_1', left: '5%', width: '25%', title: 'Opening experimental melody', type: 'large' },
                    { id: 'viola_melody_part_2', left: '35%', width: '20%', title: 'Middle experimental section', type: 'large' },
                    { id: 'viola_melody_part_3', left: '60%', width: '30%', title: 'Closing experimental passage', type: 'large' }
                ]
            },
            'morse-signals-primary': {
                name: 'Primary_Morse',
                displayName: 'Main Morse Signals',
                color: '#3498db',
                baseHeight: 80,
                clips: [
                    { id: 'morse_coord_latitude', left: '12%', width: '18%', title: 'Latitude coordinates', type: 'large' },
                    { id: 'morse_coord_longitude', left: '35%', width: '20%', title: 'Longitude coordinates', type: 'large' },
                    { id: 'morse_location_name', left: '60%', width: '15%', title: 'Location identifier', type: 'medium' }
                ]
            },
            'morse-signals-hidden': {
                name: 'Hidden_Morse',
                displayName: 'Reverse Morse Signals',
                color: '#f39c12',
                baseHeight: 120,
                clips: [
                    { id: 'backwards_morse_1', left: '8%', width: '12%', title: 'Backwards coordinate fragment', type: 'medium' },
                    { id: 'backwards_morse_2', left: '25%', width: '15%', title: 'Reversed location data', type: 'medium' },
                    { id: 'backwards_morse_3', left: '50%', width: '10%', title: 'Hidden coordinate verification', type: 'medium' },
                    { id: 'backwards_morse_4', left: '70%', width: '12%', title: 'Final reversed confirmation', type: 'medium' }
                ]
            },
            'radio-interference': {
                name: 'Radio_Static',
                displayName: 'Radio Interference',
                color: '#95a5a6',
                baseHeight: 160,
                clips: [
                    { id: 'static_layer_1', left: '3%', width: '30%', title: 'Primary static interference', type: 'large' },
                    { id: 'static_layer_2', left: '40%', width: '25%', title: 'Secondary static burst', type: 'large' },
                    { id: 'carrier_wave_drift', left: '72%', width: '20%', title: 'Carrier wave frequency drift', type: 'medium' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 200,
                clips: [
                    { id: 'viola_breath_1', left: '18%', width: '1%', title: 'Viola\'s breath between notes', type: 'small' },
                    { id: 'morse_key_click', left: '33%', width: '2%', title: 'Morse key clicking sound', type: 'small' },
                    { id: 'radio_tube_hum', left: '47%', width: '1%', title: 'Radio tube warming hum', type: 'small' },
                    { id: 'viola_breath_2', left: '66%', width: '1%', title: 'Second breath marking', type: 'small' },
                    { id: 'coordinate_verification', left: '85%', width: '2%', title: 'Coordinate cross-check tone', type: 'small' }
                ]
            }
        }
    },

    // Level 6: Coordinate Revelation - DROP BACK (atmospheric focus)
    '6_coordinate_decode.wav': {
        name: '6_coordinate_decode.wav',
        totalDuration: 65,
        gradientClass: 'nature-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed'],
        layers: {
            'final-morse': {
                name: 'Complete_Signal',
                displayName: 'Complete Morse Coordinates',
                color: '#3498db',
                baseHeight: 40,
                clips: [
                    { id: 'full_latitude_sequence', left: '15%', width: '35%', title: 'Complete latitude coordinates', type: 'large' },
                    { id: 'full_longitude_sequence', left: '55%', width: '30%', title: 'Complete longitude coordinates', type: 'large' }
                ]
            },
            'ligurian-atmosphere': {
                name: 'Field_Recording',
                displayName: 'Ligurian Environment',
                color: '#27ae60',
                baseHeight: 80,
                clips: [
                    { id: 'morning_forest_ambience', left: '5%', width: '25%', title: 'Morning forest sounds', type: 'large' },
                    { id: 'distant_church_bells', left: '35%', width: '20%', title: 'Antola church bells', type: 'large' },
                    { id: 'mountain_wind', left: '60%', width: '30%', title: 'Mountain wind through trees', type: 'large' }
                ]
            },
            'human-presence': {
                name: 'Recording_Session',
                displayName: 'Vincent & Claudia',
                color: '#e74c3c',
                baseHeight: 120,
                clips: [
                    { id: 'vincent_map_rustling', left: '20%', width: '8%', title: 'Vincent examining map', type: 'medium' },
                    { id: 'claudia_realization', left: '45%', width: '6%', title: 'Claudia\'s realization gasp', type: 'medium' },
                    { id: 'coordinate_confirmation', left: '75%', width: '10%', title: 'Coordinate cross-reference', type: 'medium' }
                ]
            }
        }
    },

    /**
     * DAY 4 - VILLA FOSSATI
     * Mike explores Viola's house, supernatural elements begin
     */

    // Level 7: Sound Lock Puzzle - MECHANICAL FOCUS (15 clips)
    '7_villa_sound_lock.wav': {
        name: '7_villa_sound_lock.wav',
        totalDuration: 35,
        gradientClass: 'orchestra-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass'],
        layers: {
            'lock-tone-sequence': {
                name: 'Lock_Tones',
                displayName: 'Required Sound Sequence',
                color: '#34495e',
                baseHeight: 40,
                clips: [
                    { id: 'tone_c_major', left: '15%', width: '8%', title: 'C major tone', type: 'medium' },
                    { id: 'tone_e_major', left: '28%', width: '7%', title: 'E major tone', type: 'medium' },
                    { id: 'tone_g_major', left: '40%', width: '8%', title: 'G major tone', type: 'medium' },
                    { id: 'tone_b_flat', left: '53%', width: '6%', title: 'B flat tone', type: 'small' },
                    { id: 'lock_success_sound', left: '75%', width: '5%', title: 'Lock opening', type: 'small' }
                ]
            },
            'mechanical-resonance': {
                name: 'Lock_Mechanics',
                displayName: 'Mechanical Components',
                color: '#95a5a6',
                baseHeight: 80,
                clips: [
                    { id: 'spring_mechanism', left: '12%', width: '6%', title: 'Spring mechanism', type: 'small' },
                    { id: 'gear_rotation', left: '25%', width: '8%', title: 'Gear rotation', type: 'medium' },
                    { id: 'pin_tumbler_click', left: '38%', width: '5%', title: 'Pin tumbler', type: 'small' },
                    { id: 'metal_resonance', left: '50%', width: '10%', title: 'Metal resonance', type: 'medium' },
                    { id: 'final_release_click', left: '72%', width: '7%', title: 'Final release', type: 'medium' }
                ]
            },
            'villa-acoustics': {
                name: 'Villa_Environment',
                displayName: 'Villa Acoustic Space',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'stone_wall_echo', left: '8%', width: '20%', title: 'Stone wall echoes', type: 'large' },
                    { id: 'wooden_floor_creak', left: '35%', width: '15%', title: 'Wooden floor creaking', type: 'medium' },
                    { id: 'room_reverb_tail', left: '55%', width: '25%', title: 'Room reverb response', type: 'large' },
                    { id: 'wind_outside', left: '85%', width: '10%', title: 'Wind outside villa', type: 'medium' }
                ]
            }
        }
    },

    // Level 8: Evidence for Giorgio - EVIDENCE EXPLOSION (35+ clips)
    '8_police_evidence_analysis.wav': {
        name: '8_police_evidence_analysis.wav',
        totalDuration: 80,
        gradientClass: 'forensic-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo'],
        layers: {
            'witness-testimonies': {
                name: 'Witness_Audio',
                displayName: 'Witness Statements',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'neighbor_testimony_1', left: '5%', width: '8%', title: 'Neighbor - heard screaming', type: 'medium' },
                    { id: 'neighbor_testimony_2', left: '15%', width: '10%', title: 'Neighbor - saw strange lights', type: 'medium' },
                    { id: 'postman_statement', left: '28%', width: '7%', title: 'Postman - unusual mail delivery', type: 'medium' },
                    { id: 'shopkeeper_account', left: '38%', width: '9%', title: 'Shopkeeper - Viola\'s last visit', type: 'medium' },
                    { id: 'doctor_statement', left: '50%', width: '8%', title: 'Doctor - refused medical help', type: 'medium' },
                    { id: 'priest_testimony', left: '61%', width: '11%', title: 'Priest - spiritual concerns', type: 'medium' },
                    { id: 'caretaker_account', left: '75%', width: '9%', title: 'Caretaker - found the body', type: 'medium' },
                    { id: 'giorgio_interview', left: '87%', width: '10%', title: 'Giorgio\'s original interview', type: 'medium' }
                ]
            },
            'crime-scene-audio': {
                name: 'Scene_Evidence',
                displayName: 'Crime Scene Recordings',
                color: '#34495e',
                baseHeight: 80,
                clips: [
                    { id: 'room_acoustic_analysis', left: '3%', width: '12%', title: 'Room acoustic analysis', type: 'large' },
                    { id: 'furniture_position_notes', left: '18%', width: '8%', title: 'Furniture position notes', type: 'medium' },
                    { id: 'tape_equipment_discovery', left: '29%', width: '10%', title: 'Recording equipment found', type: 'medium' },
                    { id: 'music_sheets_rustling', left: '42%', width: '6%', title: 'Music sheets examination', type: 'small' },
                    { id: 'window_condition_notes', left: '51%', width: '7%', title: 'Window condition notes', type: 'small' },
                    { id: 'door_lock_analysis', left: '61%', width: '9%', title: 'Door lock analysis', type: 'medium' },
                    { id: 'blood_spatter_notes', left: '73%', width: '8%', title: 'Evidence pattern notes', type: 'medium' },
                    { id: 'coroner_initial_notes', left: '84%', width: '12%', title: 'Coroner\'s initial assessment', type: 'large' }
                ]
            },
            'police-communications': {
                name: 'Police_Radio',
                displayName: 'Police Communications',
                color: '#3498db',
                baseHeight: 120,
                clips: [
                    { id: 'initial_dispatch', left: '2%', width: '6%', title: 'Initial emergency dispatch', type: 'medium' },
                    { id: 'backup_request', left: '10%', width: '5%', title: 'Backup unit request', type: 'small' },
                    { id: 'coroner_dispatch', left: '18%', width: '7%', title: 'Coroner dispatch call', type: 'medium' },
                    { id: 'detective_arrival', left: '28%', width: '5%', title: 'Detective arrival confirmation', type: 'small' },
                    { id: 'evidence_team_call', left: '36%', width: '8%', title: 'Evidence team request', type: 'medium' },
                    { id: 'media_control_order', left: '47%', width: '6%', title: 'Media control order', type: 'small' },
                    { id: 'family_notification', left: '56%', width: '7%', title: 'Family notification protocol', type: 'medium' },
                    { id: 'case_number_assignment', left: '66%', width: '5%', title: 'Case number assignment', type: 'small' },
                    { id: 'shift_change_briefing', left: '74%', width: '9%', title: 'Shift change briefing', type: 'medium' },
                    { id: 'report_filing_confirmation', left: '86%', width: '8%', title: 'Report filing confirmation', type: 'medium' }
                ]
            },
            'forensic-details': {
                name: 'Forensic_Analysis',
                displayName: 'Forensic Evidence',
                color: '#27ae60',
                baseHeight: 160,
                clips: [
                    { id: 'fingerprint_analysis', left: '4%', width: '6%', title: 'Fingerprint collection', type: 'small' },
                    { id: 'photography_setup', left: '12%', width: '4%', title: 'Evidence photography', type: 'small' },
                    { id: 'measurement_recordings', left: '19%', width: '5%', title: 'Scene measurements', type: 'small' },
                    { id: 'fiber_collection', left: '27%', width: '4%', title: 'Fiber evidence collection', type: 'small' },
                    { id: 'tape_analysis_notes', left: '34%', width: '7%', title: 'Audio equipment analysis', type: 'medium' },
                    { id: 'chemical_trace_notes', left: '44%', width: '5%', title: 'Chemical trace analysis', type: 'small' },
                    { id: 'timeline_reconstruction', left: '52%', width: '8%', title: 'Timeline reconstruction', type: 'medium' },
                    { id: 'lab_sample_preparation', left: '63%', width: '6%', title: 'Lab sample preparation', type: 'small' },
                    { id: 'chain_of_custody', left: '72%', width: '7%', title: 'Chain of custody logging', type: 'medium' },
                    { id: 'preliminary_conclusions', left: '82%', width: '10%', title: 'Preliminary conclusions', type: 'medium' }
                ]
            },
            'administrative-background': {
                name: 'Admin_Audio',
                displayName: 'Administrative Background',
                color: '#95a5a6',
                baseHeight: 200,
                clips: [
                    { id: 'typewriter_reports', left: '6%', width: '8%', title: 'Report typing sounds', type: 'medium' },
                    { id: 'file_cabinet_access', left: '17%', width: '5%', title: 'File cabinet opening', type: 'small' },
                    { id: 'phone_coordination', left: '25%', width: '7%', title: 'Phone coordination calls', type: 'medium' },
                    { id: 'stamp_certification', left: '35%', width: '4%', title: 'Document stamping', type: 'small' },
                    { id: 'coffee_break_chatter', left: '42%', width: '6%', title: 'Coffee break discussion', type: 'small' },
                    { id: 'shift_handover', left: '51%', width: '8%', title: 'Shift handover briefing', type: 'medium' },
                    { id: 'evidence_room_access', left: '62%', width: '5%', title: 'Evidence room access', type: 'small' },
                    { id: 'case_file_organization', left: '70%', width: '7%', title: 'Case file organization', type: 'medium' },
                    { id: 'storage_preparation', left: '80%', width: '6%', title: 'Long-term storage prep', type: 'small' },
                    { id: 'archive_notation', left: '89%', width: '8%', title: 'Archive notation process', type: 'medium' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 240,
                clips: [
                    { id: 'viola_last_breath_echo', left: '8%', width: '1%', title: 'Echo of Viola\'s last breath', type: 'small' },
                    { id: 'supernatural_presence_1', left: '15%', width: '1%', title: 'Supernatural presence hint', type: 'small' },
                    { id: 'tape_machine_auto_stop', left: '23%', width: '2%', title: 'Tape machine auto-stopped', type: 'small' },
                    { id: 'temperature_drop_creak', left: '31%', width: '1%', title: 'Sudden temperature drop', type: 'small' },
                    { id: 'candle_flame_flicker', left: '38%', width: '1%', title: 'Candle flame disturbance', type: 'small' },
                    { id: 'music_sheet_movement', left: '46%', width: '2%', title: 'Music sheet moved by wind', type: 'small' },
                    { id: 'entity_first_manifestation', left: '54%', width: '1%', title: 'First entity manifestation', type: 'small' },
                    { id: 'viola_voice_echo', left: '62%', width: '2%', title: 'Viola\'s voice echo', type: 'small' },
                    { id: 'recording_equipment_hum', left: '70%', width: '1%', title: 'Recording equipment humming', type: 'small' },
                    { id: 'supernatural_presence_2', left: '78%', width: '1%', title: 'Second supernatural hint', type: 'small' },
                    { id: 'mike_future_echo', left: '86%', width: '2%', title: 'Mike\'s future involvement echo', type: 'small' },
                    { id: 'vincent_destiny_whisper', left: '94%', width: '1%', title: 'Vincent\'s destiny whisper', type: 'small' }
                ]
            }
        }
    },

    /**
     * DAY 5 - OLD CONNECTIONS
     * Deeper investigation reveals supernatural elements
     */

    // Level 9: Death Investigation
    '9_viola_death_scene.wav': {
        name: '9_viola_death_scene.wav',
        totalDuration: 45,
        gradientClass: 'main-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'death-scene-audio': {
                name: 'Scene_Recording',
                displayName: 'Death Scene Audio',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'viola_final_moments', left: '15%', width: '30%', title: 'Audio from Viola\'s final day', type: 'large' },
                    { id: 'mysterious_frequency', left: '60%', width: '25%', title: 'Unexplained frequency spike', type: 'large' }
                ]
            },
            'forensic-evidence': {
                name: 'Medical_Data',
                displayName: 'Forensic Audio',
                color: '#34495e',
                baseHeight: 80,
                clips: [
                    { id: 'eardrum_damage_simulation', left: '20%', width: '20%', title: 'Eardrum damage analysis', type: 'large' },
                    { id: 'throat_swelling_sounds', left: '50%', width: '25%', title: 'Throat constriction audio', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'anomalous_reading', left: '45%', width: '2%', title: 'Anomalous equipment reading', type: 'small' },
                    { id: 'silence_break', left: '85%', width: '1%', title: 'Unnatural silence break', type: 'small' }
                ]
            }
        }
    },

    // Level 10: Nostalgic Inspiration
    '10_vincent_first_composition.wav': {
        name: '10_vincent_first_composition.wav',
        totalDuration: 65,
        gradientClass: 'vocal-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'vincent-guitar': {
                name: 'Vincent_Music',
                displayName: 'Vincent\'s Guitar',
                color: '#f39c12',
                baseHeight: 40,
                clips: [
                    { id: 'nostalgic_melody', left: '10%', width: '40%', title: 'Nostalgic Ligurian melody', type: 'large' },
                    { id: 'viola_influenced_section', left: '55%', width: '35%', title: 'Viola-influenced progression', type: 'large' }
                ]
            },
            'liguria-memories': {
                name: 'Memory_Sounds',
                displayName: 'Childhood Memories',
                color: '#27ae60',
                baseHeight: 80,
                clips: [
                    { id: 'childhood_village_sounds', left: '5%', width: '45%', title: 'Childhood village memories', type: 'large' },
                    { id: 'teenage_band_practice', left: '60%', width: '30%', title: 'Teenage band practice echo', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'claudia_message_ping', left: '52%', width: '1%', title: 'Claudia\'s message notification', type: 'small' },
                    { id: 'guitar_string_break', left: '89%', width: '2%', title: 'Guitar string snapping', type: 'small' }
                ]
            }
        }
    },

    /**
     * DAY 6 - TAPE 1/92
     * Supernatural elements escalate, Vincent loses consciousness
     */

    // Level 11: Viola's Voice
    '11_viola_spoken_recordings.wav': {
        name: '11_viola_spoken_recordings.wav',
        totalDuration: 70,
        gradientClass: 'noise-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'viola-monologue': {
                name: 'Viola_Speech',
                displayName: 'Viola Speaking',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'viola_philosophy', left: '5%', width: '25%', title: 'Viola on art and nature', type: 'large' },
                    { id: 'viola_process', left: '35%', width: '30%', title: 'Viola describing her process', type: 'large' },
                    { id: 'viola_warnings', left: '70%', width: '25%', title: 'Viola\'s cryptic warnings', type: 'large' }
                ]
            },
            'italian-ambience': {
                name: 'Studio_Atmosphere',
                displayName: 'Recording Environment',
                color: '#27ae60',
                baseHeight: 80,
                clips: [
                    { id: 'villa_studio_room_tone', left: '10%', width: '80%', title: 'Villa studio room tone', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'viola_page_turn', left: '32%', width: '2%', title: 'Viola turning diary page', type: 'small' },
                    { id: 'strange_tone_1', left: '48%', width: '1%', title: 'First mysterious tone', type: 'small' },
                    { id: 'strange_tone_2', left: '65%', width: '1%', title: 'Second mysterious tone', type: 'small' }
                ]
            }
        }
    },

    // Level 12: The Waveform Ritual
    '12_giorgio_diagram_recreation.wav': {
        name: '12_giorgio_diagram_recreation.wav',
        totalDuration: 80,
        gradientClass: 'orchestra-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'waveform-recreation': {
                name: 'Ritual_Waveforms',
                displayName: 'Giorgio\'s Diagram',
                color: '#9b59b6',
                baseHeight: 40,
                clips: [
                    { id: 'diagram_wave_1', left: '15%', width: '20%', title: 'First diagram waveform', type: 'large' },
                    { id: 'diagram_wave_2', left: '40%', width: '20%', title: 'Second diagram waveform', type: 'large' },
                    { id: 'diagram_wave_3', left: '65%', width: '20%', title: 'Third diagram waveform', type: 'large' }
                ]
            },
            'supernatural-buildup': {
                name: 'Entity_Presence',
                displayName: 'Supernatural Activity',
                color: '#e74c3c',
                baseHeight: 80,
                clips: [
                    { id: 'reality_distortion_building', left: '5%', width: '90%', title: 'Reality distortion building', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'viola_tone_layered', left: '58%', width: '2%', title: 'Viola\'s tones layered', type: 'small' },
                    { id: 'vincent_consciousness_fade', left: '85%', width: '3%', title: 'Vincent\'s consciousness fading', type: 'small' }
                ]
            }
        }
    },

    /**
     * DAY 7 - HELLO VINCENT
     * Reality breaks down, Mike is erased
     */

    // Level 13: Everything's Wrong
    '13_campy_rock_wrongness.wav': {
        name: '13_campy_rock_wrongness.wav',
        totalDuration: 35,
        gradientClass: 'main-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'impossible-song': {
                name: 'Wrong_Music',
                displayName: 'Impossible Song',
                color: '#e67e22',
                baseHeight: 40,
                clips: [
                    { id: 'campy_rock_verse', left: '10%', width: '35%', title: 'Campy rock verse', type: 'large' },
                    { id: 'campy_rock_chorus', left: '55%', width: '35%', title: 'Campy rock chorus', type: 'large' }
                ]
            },
            'reality-glitches': {
                name: 'System_Errors',
                displayName: 'Reality Glitches',
                color: '#9b59b6',
                baseHeight: 80,
                clips: [
                    { id: 'interface_corruption', left: '5%', width: '90%', title: 'Interface corruption sounds', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'tool_malfunction', left: '42%', width: '2%', title: 'Tool malfunction glitch', type: 'small' },
                    { id: 'reality_skip', left: '78%', width: '1%', title: 'Reality skip artifact', type: 'small' }
                ]
            }
        }
    },

    // Level 14: Mike's Erasure
    '14_mike_voice_deletion.wav': {
        name: '14_mike_voice_deletion.wav',
        totalDuration: 90,
        gradientClass: 'vocal-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'mikes-song': {
                name: 'Mike_Performance',
                displayName: 'Mike\'s Voice',
                color: '#f39c12',
                baseHeight: 40,
                clips: [
                    { id: 'mike_verse_singing', left: '10%', width: '25%', title: 'Mike singing verse', type: 'large' },
                    { id: 'mike_chorus_attempt', left: '40%', width: '25%', title: 'Mike attempting chorus', type: 'large' },
                    { id: 'mike_final_notes', left: '70%', width: '20%', title: 'Mike\'s final notes', type: 'large' }
                ]
            },
            'entity-presence': {
                name: 'Imprinted_Force',
                displayName: 'The Imprinted',
                color: '#e74c3c',
                baseHeight: 80,
                clips: [
                    { id: 'entity_control_growing', left: '5%', width: '90%', title: 'Entity control intensifying', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'mike_pleading_1', left: '35%', width: '2%', title: 'Mike pleading in chat', type: 'small' },
                    { id: 'mike_pleading_2', left: '62%', width: '2%', title: 'Mike begging Vincent', type: 'small' },
                    { id: 'mike_erasure_complete', left: '88%', width: '3%', title: 'Mike\'s voice completely gone', type: 'small' }
                ]
            }
        }
    },

    /**
     * DAY 8 - LOSING CONTROL
     * Vincent can't escape, entity takes control
     */

    // Level 15: Can't Escape
    '15_entity_multiple_voices.wav': {
        name: '15_entity_multiple_voices.wav',
        totalDuration: 60,
        gradientClass: 'noise-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'entity-claudia': {
                name: 'False_Claudia',
                displayName: 'Entity as Claudia',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'entity_claudia_voice', left: '15%', width: '30%', title: 'Entity mimicking Claudia', type: 'large' }
                ]
            },
            'entity-giorgio': {
                name: 'False_Giorgio',
                displayName: 'Entity as Giorgio',
                color: '#3498db',
                baseHeight: 80,
                clips: [
                    { id: 'entity_giorgio_voice', left: '50%', width: '25%', title: 'Entity mimicking Giorgio', type: 'large' }
                ]
            },
            'entity-pavel': {
                name: 'False_Pavel',
                displayName: 'Entity as Pavel',
                color: '#f39c12',
                baseHeight: 120,
                clips: [
                    { id: 'entity_pavel_voice', left: '20%', width: '20%', title: 'Entity mimicking Pavel', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 160,
                clips: [
                    { id: 'chat_overlap_1', left: '45%', width: '2%', title: 'Multiple chats overlapping', type: 'small' },
                    { id: 'vincent_resistance', left: '78%', width: '3%', title: 'Vincent trying to resist', type: 'small' }
                ]
            }
        }
    },

    /**
     * DAY 9 - CREATING THE SONG
     * Understanding the Imprinted and creating the final song
     */

    // Level 16: Understanding the Imprinted
    '16_viola_imprinted_explanation.wav': {
        name: '16_viola_imprinted_explanation.wav',
        totalDuration: 75,
        gradientClass: 'main-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'viola-explanation': {
                name: 'Viola_Teaching',
                displayName: 'Viola\'s Explanation',
                color: '#e74c3c',
                baseHeight: 40,
                clips: [
                    { id: 'imprinted_nature', left: '5%', width: '30%', title: 'Nature of the Imprinted', type: 'large' },
                    { id: 'dark_places_theory', left: '40%', width: '35%', title: 'Dark places and accumulation', type: 'large' },
                    { id: 'musical_manifestation', left: '80%', width: '15%', title: 'Musical manifestation process', type: 'large' }
                ]
            },
            'imprinted-essence': {
                name: 'Entity_Core',
                displayName: 'Imprinted Essence',
                color: '#2c3e50',
                baseHeight: 80,
                clips: [
                    { id: 'accumulated_darkness', left: '10%', width: '80%', title: 'Accumulated human darkness', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'mass_grave_echo', left: '25%', width: '2%', title: 'Mass grave echo', type: 'small' },
                    { id: 'witch_burning_memory', left: '58%', width: '3%', title: 'Memory of witch burning', type: 'small' },
                    { id: 'munition_depot_resonance', left: '85%', width: '2%', title: 'Munition depot resonance', type: 'small' }
                ]
            }
        }
    },

    // Level 17: Song Assembly - ULTIMATE CREATION (80+ clips)
    '17_final_song_creation.wav': {
        name: '17_final_song_creation.wav',
        totalDuration: 120,
        gradientClass: 'orchestra-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'vincent-musical-soul': {
                name: 'Vincent_Core',
                displayName: 'Vincent\'s Musical Soul',
                color: '#f39c12',
                baseHeight: 40,
                clips: [
                    { id: 'vincent_childhood_melody_1', left: '2%', width: '4%', title: 'Childhood melody fragment 1', type: 'small' },
                    { id: 'vincent_childhood_melody_2', left: '8%', width: '3%', title: 'Childhood melody fragment 2', type: 'small' },
                    { id: 'vincent_teenage_composition', left: '13%', width: '5%', title: 'Teenage composition attempt', type: 'medium' },
                    { id: 'vincent_first_recording', left: '20%', width: '4%', title: 'First home recording', type: 'small' },
                    { id: 'vincent_harmony_instinct', left: '26%', width: '6%', title: 'Natural harmony instinct', type: 'medium' },
                    { id: 'vincent_rhythm_pattern_1', left: '34%', width: '3%', title: 'Personal rhythm pattern 1', type: 'small' },
                    { id: 'vincent_rhythm_pattern_2', left: '39%', width: '4%', title: 'Personal rhythm pattern 2', type: 'small' },
                    { id: 'vincent_melodic_signature', left: '45%', width: '8%', title: 'Vincent\'s melodic signature', type: 'medium' },
                    { id: 'vincent_emotional_core', left: '55%', width: '10%', title: 'Vincent\'s emotional musical core', type: 'large' },
                    { id: 'vincent_creative_potential', left: '67%', width: '12%', title: 'Unrealized creative potential', type: 'large' },
                    { id: 'vincent_professional_precision', left: '82%', width: '8%', title: 'Professional audio precision', type: 'medium' },
                    { id: 'vincent_final_inspiration', left: '92%', width: '6%', title: 'Final creative inspiration', type: 'medium' }
                ]
            },
            'viola-experimental-foundation': {
                name: 'Viola_Methods',
                displayName: 'Viola\'s Experimental Methods',
                color: '#e74c3c',
                baseHeight: 80,
                clips: [
                    { id: 'viola_technique_1', left: '1%', width: '5%', title: 'Viola\'s technique 1', type: 'medium' },
                    { id: 'viola_technique_2', left: '8%', width: '4%', title: 'Viola\'s technique 2', type: 'small' },
                    { id: 'viola_harmonic_theory', left: '14%', width: '7%', title: 'Viola\'s harmonic theory', type: 'medium' },
                    { id: 'viola_sound_texture_1', left: '23%', width: '6%', title: 'Sound texture exploration 1', type: 'medium' },
                    { id: 'viola_sound_texture_2', left: '31%', width: '5%', title: 'Sound texture exploration 2', type: 'medium' },
                    { id: 'viola_temporal_manipulation', left: '38%', width: '8%', title: 'Temporal manipulation method', type: 'medium' },
                    { id: 'viola_frequency_bending', left: '48%', width: '6%', title: 'Frequency bending technique', type: 'medium' },
                    { id: 'viola_space_acoustics', left: '56%', width: '9%', title: 'Spatial acoustics manipulation', type: 'large' },
                    { id: 'viola_emotional_channeling', left: '67%', width: '8%', title: 'Emotional channeling method', type: 'medium' },
                    { id: 'viola_reality_touch', left: '77%', width: '10%', title: 'Reality-touching technique', type: 'large' },
                    { id: 'viola_final_wisdom', left: '89%', width: '9%', title: 'Viola\'s final wisdom', type: 'large' }
                ]
            },
            'imprinted-darkness-integration': {
                name: 'Entity_Corruption',
                displayName: 'Imprinted Darkness Integration',
                color: '#2c3e50',
                baseHeight: 120,
                clips: [
                    { id: 'mass_grave_resonance_1', left: '3%', width: '4%', title: 'Mass grave resonance 1', type: 'small' },
                    { id: 'mass_grave_resonance_2', left: '9%', width: '5%', title: 'Mass grave resonance 2', type: 'medium' },
                    { id: 'witch_burning_echo_1', left: '16%', width: '3%', title: 'Witch burning echo 1', type: 'small' },
                    { id: 'witch_burning_echo_2', left: '21%', width: '4%', title: 'Witch burning echo 2', type: 'small' },
                    { id: 'munition_depot_vibration', left: '27%', width: '6%', title: 'Munition depot vibration', type: 'medium' },
                    { id: 'accumulated_fear_layer_1', left: '35%', width: '5%', title: 'Accumulated fear layer 1', type: 'medium' },
                    { id: 'accumulated_fear_layer_2', left: '42%', width: '6%', title: 'Accumulated fear layer 2', type: 'medium' },
                    { id: 'centuries_of_darkness', left: '50%', width: '8%', title: 'Centuries of accumulated darkness', type: 'medium' },
                    { id: 'entity_consciousness', left: '60%', width: '10%', title: 'Entity consciousness formation', type: 'large' },
                    { id: 'corrupted_beauty', left: '72%', width: '8%', title: 'Beauty corrupted by darkness', type: 'medium' },
                    { id: 'final_entity_integration', left: '82%', width: '12%', title: 'Final entity integration', type: 'large' },
                    { id: 'darkness_made_manifest', left: '96%', width: '3%', title: 'Darkness made manifest', type: 'small' }
                ]
            },
            'all-previous-levels-echo': {
                name: 'Level_Echoes',
                displayName: 'All Previous Levels Echoing',
                color: '#27ae60',
                baseHeight: 160,
                clips: [
                    { id: 'level_1_surveillance_echo', left: '4%', width: '2%', title: 'Level 1 surveillance echo', type: 'small' },
                    { id: 'level_2_evp_echo', left: '8%', width: '2%', title: 'Level 2 EVP echo', type: 'small' },
                    { id: 'level_3_viola_discovery_echo', left: '12%', width: '3%', title: 'Level 3 Viola discovery echo', type: 'small' },
                    { id: 'level_4_precision_tests_echo', left: '17%', width: '2%', title: 'Level 4 precision tests echo', type: 'small' },
                    { id: 'level_5_morse_signals_echo', left: '21%', width: '3%', title: 'Level 5 morse signals echo', type: 'small' },
                    { id: 'level_6_coordinates_echo', left: '26%', width: '2%', title: 'Level 6 coordinates echo', type: 'small' },
                    { id: 'level_7_sound_lock_echo', left: '30%', width: '3%', title: 'Level 7 sound lock echo', type: 'small' },
                    { id: 'level_8_evidence_explosion_echo', left: '35%', width: '4%', title: 'Level 8 evidence explosion echo', type: 'small' },
                    { id: 'level_9_death_scene_echo', left: '41%', width: '2%', title: 'Level 9 death scene echo', type: 'small' },
                    { id: 'level_10_mike_basement_echo', left: '45%', width: '3%', title: 'Level 10 Mike basement echo', type: 'small' },
                    { id: 'level_11_viola_speech_echo', left: '50%', width: '3%', title: 'Level 11 Viola speech echo', type: 'small' },
                    { id: 'level_12_waveform_ritual_echo', left: '55%', width: '4%', title: 'Level 12 waveform ritual echo', type: 'small' },
                    { id: 'level_13_wrongness_echo', left: '61%', width: '2%', title: 'Level 13 wrongness echo', type: 'small' },
                    { id: 'level_14_mike_erasure_echo', left: '65%', width: '3%', title: 'Level 14 Mike erasure echo', type: 'small' },
                    { id: 'level_15_multiple_voices_echo', left: '70%', width: '3%', title: 'Level 15 multiple voices echo', type: 'small' },
                    { id: 'level_16_imprinted_explanation_echo', left: '75%', width: '4%', title: 'Level 16 explanation echo', type: 'small' },
                    { id: 'all_levels_convergence', left: '81%', width: '8%', title: 'All levels converging', type: 'medium' },
                    { id: 'narrative_completion', left: '91%', width: '7%', title: 'Narrative completion', type: 'medium' }
                ]
            },
            'technical-creation-process': {
                name: 'Creation_Process',
                displayName: 'Technical Creation Process',
                color: '#9b59b6',
                baseHeight: 200,
                clips: [
                    { id: 'frequency_analysis_1', left: '2%', width: '3%', title: 'Frequency analysis stage 1', type: 'small' },
                    { id: 'frequency_analysis_2', left: '7%', width: '3%', title: 'Frequency analysis stage 2', type: 'small' },
                    { id: 'harmonic_layering_1', left: '12%', width: '4%', title: 'Harmonic layering pass 1', type: 'small' },
                    { id: 'harmonic_layering_2', left: '18%', width: '4%', title: 'Harmonic layering pass 2', type: 'small' },
                    { id: 'temporal_alignment_1', left: '24%', width: '3%', title: 'Temporal alignment 1', type: 'small' },
                    { id: 'temporal_alignment_2', left: '29%', width: '3%', title: 'Temporal alignment 2', type: 'small' },
                    { id: 'reverb_space_creation', left: '34%', width: '5%', title: 'Reverb space creation', type: 'medium' },
                    { id: 'dynamic_processing', left: '41%', width: '4%', title: 'Dynamic range processing', type: 'small' },
                    { id: 'stereo_field_sculpting', left: '47%', width: '5%', title: 'Stereo field sculpting', type: 'medium' },
                    { id: 'eq_frequency_carving', left: '54%', width: '4%', title: 'EQ frequency carving', type: 'small' },
                    { id: 'compression_dynamics', left: '60%', width: '4%', title: 'Compression dynamics', type: 'small' },
                    { id: 'final_mix_balancing', left: '66%', width: '6%', title: 'Final mix balancing', type: 'medium' },
                    { id: 'mastering_stage_1', left: '74%', width: '5%', title: 'Mastering stage 1', type: 'medium' },
                    { id: 'mastering_stage_2', left: '81%', width: '5%', title: 'Mastering stage 2', type: 'medium' },
                    { id: 'final_rendering', left: '88%', width: '6%', title: 'Final song rendering', type: 'medium' },
                    { id: 'creation_complete', left: '96%', width: '3%', title: 'Creation complete', type: 'small' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 240,
                clips: [
                    { id: 'mike_voice_fragment_1', left: '5%', width: '1%', title: 'Mike\'s voice fragment 1', type: 'small' },
                    { id: 'mike_voice_fragment_2', left: '12%', width: '1%', title: 'Mike\'s voice fragment 2', type: 'small' },
                    { id: 'claudia_memory_whisper', left: '19%', width: '1%', title: 'Claudia memory whisper', type: 'small' },
                    { id: 'giorgio_investigation_echo', left: '26%', width: '1%', title: 'Giorgio investigation echo', type: 'small' },
                    { id: 'pavel_enthusiasm_remnant', left: '33%', width: '1%', title: 'Pavel enthusiasm remnant', type: 'small' },
                    { id: 'forum_community_voices', left: '40%', width: '2%', title: 'Forum community voices', type: 'small' },
                    { id: 'villa_fossati_creaking', left: '47%', width: '1%', title: 'Villa Fossati creaking', type: 'small' },
                    { id: 'antola_mountain_wind', left: '54%', width: '2%', title: 'Antola mountain wind', type: 'small' },
                    { id: 'liguria_village_bells', left: '61%', width: '1%', title: 'Liguria village bells', type: 'small' },
                    { id: 'vincent_heartbeat_sync', left: '68%', width: '1%', title: 'Vincent\'s heartbeat sync', type: 'small' },
                    { id: 'reality_fabric_tear', left: '75%', width: '1%', title: 'Reality fabric tearing', type: 'small' },
                    { id: 'entity_satisfaction', left: '82%', width: '2%', title: 'Entity satisfaction', type: 'small' },
                    { id: 'creation_final_breath', left: '89%', width: '1%', title: 'Creation\'s final breath', type: 'small' },
                    { id: 'song_first_heartbeat', left: '96%', width: '1%', title: 'Song\'s first heartbeat', type: 'small' },
                    { id: 'imprinted_victory', left: '99%', width: '1%', title: 'Imprinted victory', type: 'small' }
                ]
            }
        }
    },

    /**
     * DAY 10 - FINAL CHOICE
     * Memory excavation to find the song
     */

    // Level 18: Memory Excavation
    '18_password_memory_dig.wav': {
        name: '18_password_memory_dig.wav',
        totalDuration: 85,
        gradientClass: 'noise-waveform-gradient',
        availableTools: ['mute', 'volume', 'noise', 'voice', 'pitch', 'reverse', 'speed', 'highpass', 'lowpass', 'stereo', 'bitrate'],
        layers: {
            'memory-fragments': {
                name: 'Memory_Echoes',
                displayName: 'Vincent\'s Memories',
                color: '#3498db',
                baseHeight: 40,
                clips: [
                    { id: 'childhood_liguria_village', left: '5%', width: '15%', title: 'Childhood Liguria village', type: 'large' },
                    { id: 'teenage_music_dreams', left: '25%', width: '15%', title: 'Teenage music dreams', type: 'large' },
                    { id: 'first_viola_hearing', left: '45%', width: '15%', title: 'First hearing Viola\'s music', type: 'large' },
                    { id: 'mike_friendship_moments', left: '65%', width: '15%', title: 'Mike friendship moments', type: 'large' },
                    { id: 'claudia_relationship_highs', left: '85%', width: '10%', title: 'Claudia relationship highs', type: 'large' }
                ]
            },
            'password-clues': {
                name: 'Hidden_Clues',
                displayName: 'Password Elements',
                color: '#e74c3c',
                baseHeight: 80,
                clips: [
                    { id: 'morse_code_numbers', left: '10%', width: '20%', title: 'Morse code coordinate numbers', type: 'large' },
                    { id: 'viola_signature_date', left: '35%', width: '20%', title: 'Viola signature date 1972', type: 'large' },
                    { id: 'forum_username_creation', left: '60%', width: '25%', title: 'Forum username creation', type: 'large' }
                ]
            },
            'misc-elements': {
                name: 'Hidden_Details',
                displayName: 'MISC',
                color: '#8e44ad',
                baseHeight: 120,
                clips: [
                    { id: 'password_hint_1', left: '18%', width: '1%', title: 'First password hint', type: 'small' },
                    { id: 'password_hint_2', left: '42%', width: '1%', title: 'Second password hint', type: 'small' },
                    { id: 'password_hint_3', left: '67%', width: '1%', title: 'Third password hint', type: 'small' },
                    { id: 'final_folder_unlock', left: '95%', width: '2%', title: 'Final folder unlocking', type: 'small' }
                ]
            }
        }
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUDIO_CONFIGS;
} 