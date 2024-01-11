import { Font, StyleSheet } from '@react-pdf/renderer';

import LoraBlackFont from './assets/Lora-Bold.ttf';
import LoraFont from './assets/Lora-Regular.ttf';

Font.register({
  family: 'Lora',
  fonts: [
    { src: LoraFont }, // font-style: normal, font-weight: normal
    { src: LoraBlackFont, fontWeight: 700 }
  ]
});

Font.registerHyphenationCallback((word) => [word]);

export const theme = {
  color: {
    grey: {
      main: '#8B8B8B',
      light: '#d7d7d7',
      dark: '#57585A'
    }
  }
};

// Create styles
const globalStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontSize: 9,
    fontFamily: 'Lora',
    padding: 24
  },
  grey: {
    color: theme.color.grey.main
  },
  content: {
    flexDirection: 'row',
    marginBottom: 24
  },
  left: {
    width: '38%',
    borderRight: `1px solid ${theme.color.grey.light}`
  },
  right: {
    width: '62%'
  }
});

export default globalStyles;
