import { StyleSheet, View } from '@react-pdf/renderer';

import { theme } from '../globalStyles.js';
import ExperienceSvg from './assets/ExperienceSvg.jsx';
import HeartSvg from './assets/HeartSvg.jsx';
import SchoolSvg from './assets/SchoolSvg.jsx';
import SkillsSvg from './assets/SkillsSvg.jsx';
import UserSvg from './assets/UserSvg.jsx';

const icons = {
  user: UserSvg,
  heart: HeartSvg,
  skills: SkillsSvg,
  experience: ExperienceSvg,
  school: SchoolSvg
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  line: {
    flex: 1,
    height: '50%',
    borderBottom: `1px solid ${theme.color.grey.light}`
  },
  wrapper: {
    width: 30,
    height: 30,
    margin: '0 20px'
  },
  circle: {
    flex: 1,
    backgroundColor: theme.color.grey.dark,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const SectionImage = ({ type }) => {
  const Icon = icons[type];

  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.wrapper}>
        <View style={styles.circle}>
          <Icon />
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default SectionImage;
