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
        label: 'ações',
        iconLib: Ionicons,
        iconName: 'walk',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
    ],
  },
  {
    sectionTitle: 'PESSOAL',
    items: [
      {
        id: 'lugares',
        label: 'lugares',
        iconLib: Ionicons,
        iconName: 'location-outline',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
      {
        id: 'emocoes',
        label: 'emoções',
        iconLib: MaterialIcons,
        iconName: 'emoji-emotions',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
      {
        id: 'dores',
        label: 'dores',
        iconLib: MaterialCommunityIcons,
        iconName: 'emoticon-cry-outline',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
      {
        id: 'saudacoes',
        label: 'saudações',
        iconLib: Ionicons,
        iconName: 'hand-left-outline',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
    ],
  },
  {
    sectionTitle: 'ALIMENTOS',
    items: [
      {
        id: 'comida',
        label: 'comida',
        iconLib: FontAwesome5,
        iconName: 'utensils',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
      {
        id: 'bebida',
        label: 'bebida',
        iconLib: FontAwesome5,
        iconName: 'glass-whiskey',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
      {
        id: 'frutas',
        label: 'frutas',
        iconLib: MaterialCommunityIcons,
        iconName: 'food-apple-outline',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
      {
        id: 'doce',
        label: 'doce',
        iconLib: MaterialCommunityIcons,
        iconName: 'ice-cream',
        sound: require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3'),
      },
    ],
  },
];
