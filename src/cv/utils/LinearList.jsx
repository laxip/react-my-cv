import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { theme } from '../globalStyles.js';

const styles = StyleSheet.create({
  list: {
    marginBottom: 10
  },
  title: {
    fontSize: 7
  },
  values: {
    fontSize: 7,
    color: theme.color.grey.main,
    textAlign: 'justify'
  }
});

const LinearList = ({ title, items }) => {
  return (
    <View style={styles.list}>
      <Text>
        <Text style={styles.title}>{title}: </Text>
        <Text style={styles.values}>{items.join(', ')}</Text>
      </Text>
    </View>
  );
};

export default LinearList;
