import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { theme } from '../globalStyles.js';
import LinearList from '../utils/LinearList.jsx';
import PointedList from '../utils/PointedList.jsx';
import SectionImage from '../utils/SectionImage.jsx';
import Skill from '../utils/Skill.jsx';

const styles = StyleSheet.create({
  inner: {
    marginRight: 24
  },
  header: {
    alignItems: 'center',
    padding: '40px 0'
  },
  name: {
    fontSize: '18px',
    textTransform: 'uppercase'
  },
  position: {
    fontSize: '9px',
    color: theme.color.grey.main,
    textTransform: 'uppercase',
    marginTop: 5
  },
  metrics: {
    padding: '29px 0'
  },
  softSkills: {
    padding: '28px 0'
  },
  skills: {
    padding: '30px 0 25px 0'
  },
  metric: {
    flexDirection: 'row',
    margin: '1px 0'
  },
  title: {
    textTransform: 'uppercase',
    color: theme.color.grey.main,
    fontSize: 7,
    width: 60
  },
  value: {
    fontSize: 7
  }
});

const MainSection = ({ description }) => {
  return (
    <View style={styles.inner}>
      <View style={styles.header}>
        <Text style={styles.name}>{description.main.name}</Text>
        <Text style={styles.name}>{description.main.surname}</Text>
        <Text style={styles.position}>{description.main.position}</Text>
      </View>

      <SectionImage type="user" />

      <View style={styles.metrics}>
        {description.metrics.map((entry, index) => (
          <View key={index} style={styles.metric}>
            <Text style={styles.title}>{entry[0]}:</Text>
            <Text style={styles.value}>{entry[1]}</Text>
          </View>
        ))}
      </View>

      <SectionImage type="heart" />

      <View style={styles.softSkills}>
        {description.softSkills.map((entry) => (
          <Skill key={entry[0]} type={entry[0]} text={entry[1]} />
        ))}
      </View>

      <SectionImage type="skills" />

      <View style={styles.skills}>
        {description.skills.map((skill, index) => {
          if (skill.type === 'pointed') {
            return <PointedList key={index} {...skill} />;
          } else if (skill.type === 'linear') {
            return <LinearList key={index} {...skill} />;
          }

          return null;
        })}
      </View>
    </View>
  );
};

export default MainSection;
