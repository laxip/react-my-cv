import { Document, Page, View } from '@react-pdf/renderer';

import globalStyles from './globalStyles.js';
import AnnotationSection from './sections/annotations.jsx';
import ExperienceAndSchoolSection from './sections/experienceAndSchool.jsx';
import MainSection from './sections/main.jsx';

const Cv = ({ description }) => {
  return (
    <Document>
      <Page size="A4" style={globalStyles.page}>
        <View style={globalStyles.content}>
          <View style={globalStyles.left}>
            <MainSection description={description} />
          </View>
          <View style={globalStyles.right}>
            <ExperienceAndSchoolSection description={description} />
          </View>
        </View>

        <AnnotationSection />
      </Page>
    </Document>
  );
};

export default Cv;
