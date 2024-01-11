import { StyleSheet, View } from '@react-pdf/renderer';

import MainItem from '../utils/MainItem.jsx';
import SectionImage from '../utils/SectionImage.jsx';

const styles = StyleSheet.create({
  list: {
    padding: '20px 0'
  },
  inner: {
    marginLeft: 24
  }
});

const ExperienceAndSchoolSection = ({ description }) => {
  return (
    <View style={styles.inner}>
      <SectionImage type="experience" />

      <View style={styles.list}>
        {description.experience.map((experience, index) => (
          <MainItem key={index} item={experience} last={index === description.experience.length - 1} />
        ))}
      </View>

      <SectionImage type="school" />

      <View style={styles.list}>
        {description.schools.map((experience, index) => (
          <MainItem key={index} item={experience} last={index === description.schools.length - 1} />
        ))}
      </View>
    </View>
  );
};

export default ExperienceAndSchoolSection;
