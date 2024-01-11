import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { theme } from '../globalStyles.js';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 12
  },
  last: {
    marginBottom: 0
  },
  indicatorCircle: {
    width: 5,
    height: 5,
    border: `1px solid ${theme.color.grey.light}`,
    borderRadius: 100,
    marginRight: 10,
    marginTop: 2
  },
  indicatorLine: {
    borderLeft: `1px solid ${theme.color.grey.light}`,
    marginRight: 10
  },
  details: {
    flex: 1
  },
  time: {
    fontSize: 7,
    color: theme.color.grey.main
  },
  prop: {
    fontSize: 7,
    margin: '2px 0'
  },
  company: {
    fontSize: 9,
    margin: '2px 0'
  },
  smallCompany: {
    fontSize: 8
  },
  value: {
    color: theme.color.grey.main
  },
  projects: {
    marginTop: 12
  }
});

const MainItem = ({ item, inner = false, last }) => {
  return (
    <View style={[styles.item, last && styles.last]}>
      {inner && <View style={styles.indicatorLine}></View>}
      {!inner && <View style={styles.indicatorCircle}></View>}
      <View style={styles.indicator}></View>
      <View style={styles.details}>
        {item.time && (
          <Text style={styles.time}>
            {item.time[0]} - {item.time[1]}
          </Text>
        )}
        <Text style={[styles.company, inner && styles.smallCompany]}>
          {item.company && (
            <>
              {item.company} | {item.city}, {item.country}
            </>
          )}
          {item.name && <>{item.name}</>}
        </Text>
        {item.department && (
          <Text style={styles.prop}>
            {item.department}, specialty: {item.specialty}
          </Text>
        )}
        {item.role && (
          <Text style={styles.prop}>
            Role: <Text style={styles.value}>{item.role}</Text>
          </Text>
        )}
        {item.description && (
          <Text style={styles.prop}>
            Description: <Text style={styles.value}>{item.description}</Text>
          </Text>
        )}
        {item.technologies && (
          <Text style={styles.prop}>
            Technologies: <Text style={styles.value}>{item.technologies.join(', ')}</Text>
          </Text>
        )}

        {item.projects && (
          <View style={styles.projects}>
            {item.projects.map((project, index) => (
              <MainItem key={index} item={project} inner={true} last={index === item.projects.length - 1} />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default MainItem;
