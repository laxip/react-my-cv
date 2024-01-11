import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { theme } from '../globalStyles.js';

const styles = StyleSheet.create({
  list: {
    marginBottom: 10
  },
  title: {
    fontSize: 7
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '1px 0'
  },
  point: {
    width: 4,
    height: 4,
    border: `1px solid ${theme.color.grey.light}`,
    marginRight: 5,
    borderRadius: 100
  },
  value: {
    fontSize: 6,
    color: theme.color.grey.main
  }
});

const PointedList = ({ title, items }) => {
  return (
    <View style={styles.list}>
      <Text style={styles.title}>{title}:</Text>

      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.point}></View>
          <Text style={styles.value}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default PointedList;
