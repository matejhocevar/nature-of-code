const params = new URLSearchParams(window.location.search);
const chapter = params.get('chapter');

switch (chapter) {
  case '0':
    import('./chapter_0_randomness/sketch.js');
    break;
  case '1':
    import('./chapter_1_vectors/sketch.js');
    break;
  case '2':
    import('./chapter_2_forces/sketch.js');
    break;
  case '3':
    import('./chapter_3_oscilation/sketch.js');
    break;
  case '4':
    import('./chapter_4_particle_systems/sketch.js');
    break;
  case '5':
    import('./chapter_5_autonomous_agents/sketch.js');
    break;
  case '6':
    import('./chapter_6_physics_libraries/sketch.js');
    break;
  case '7':
    import('./chapter_7_cellular_automata/sketch.js');
    break;
  case '8':
    import('./chapter_8_fractals/sketch.js');
    break;
  case '9':
    import('./chapter_9_evolutionary_computing/sketch.js');
    break;
  case '10':
    import('./chapter_10_neural_networks/sketch.js');
    break;
  case '11':
    import('./chapter_11_neuroevolution/sketch.js');
    break;
  default:
    console.log('Please select a chapter');
}