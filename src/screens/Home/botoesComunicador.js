import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const botoesComunicador = [
  {
    sectionTitle: 'DIA A DIA',
    items: [
      {
        id: 'acoes',
        label: 'não',
        iconLib: Ionicons,
        iconName: 'walk',
        sound: require('../../../assets/sounds/masculino-não.mp3'),
      },
       {
        id: 'lugares',
        label: 'Sim',
        iconLib: Ionicons,
        iconName: 'location-outline',
        sound: require('../../../assets/sounds/masculino-sim.mp3'),
      }
    ],
  },
  {
    sectionTitle: 'PESSOAL',
    items: [
     
      {
        id: 'emocoes',
        label: 'Terminei',
        iconLib: MaterialIcons,
        iconName: 'emoji-emotions',
        sound: require('../../../assets/sounds/masculino- terminei .mp3'),
      },
      {
        id: 'dores',
        label: 'Para',
        iconLib: MaterialCommunityIcons,
        iconName: 'emoticon-cry-outline',
        sound: require('../../../assets/sounds/masculino-para.mp3'),
      },
      {
        id: 'saudacoes',
        label: 'Eu faço',
        iconLib: Ionicons,
        iconName: 'hand-left-outline',
        sound: require('../../../assets/sounds/masculino-faço.mp3'),
      },
    ],
  },
  {
    sectionTitle: 'ALIMENTOS',
    items: [
      {
        id: 'comida',
        label: 'Fome',
        iconLib: FontAwesome5,
        iconName: 'utensils',
        sound: require('../../../assets/sounds/masculino-fome.mp3'),
      },
      {
        id: 'Águar',
        label: 'Água',
        iconLib: FontAwesome5,
        iconName: 'glass-whiskey',
        sound: require('../../../assets/sounds/masculino-agua.mp3'),
      },
      {
        id: 'frutas',
        label: 'Olhe',
        iconLib: MaterialCommunityIcons,
        iconName: 'food-apple-outline',
        sound: require('../../../assets/sounds/masculino-olhe.mp3'),
      },
      {
        id: 'doce',
        label: 'Pega',
        iconLib: MaterialCommunityIcons,
        iconName: 'ice-cream',
        sound: require('../../../assets/sounds/masculino-pega.mp3'),
      },
    ],
  },
];
