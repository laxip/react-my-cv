import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { theme } from '../globalStyles.js';
import BrainSvg from './assets/BrainSvg.jsx';
import BulbSvg from './assets/BulbSvg.jsx';
import CodeSvg from './assets/CodeSvg.jsx';
import MotoSvg from './assets/MotoSvg.jsx';
import PeopleSvg from './assets/PeopleSvg.jsx';
import WorkflowSvg from './assets/WorkflowSvg.jsx';

const icons = {
  moto: MotoSvg,
  bulb: BulbSvg,
  brain: BrainSvg,
  people: PeopleSvg,
  workflow: WorkflowSvg,
  code: CodeSvg
};

// Create styles
const styles = StyleSheet.create({
  skill: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '2px 0'
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 16,
    height: 16,
    border: `1px solid ${theme.color.grey.light}`,
    marginRight: 5
  },
  title: {
    fontSize: 7
  }
});

const Skill = ({ type, text }) => {
  const Icon = icons[type];

  return (
    <View style={styles.skill}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Skill;
