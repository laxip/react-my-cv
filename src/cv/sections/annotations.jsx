import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { theme } from '../globalStyles.js';

const styles = StyleSheet.create({
  line: {
    color: theme.color.grey.main,
    fontSize: 6
  },
  firstLine: {
    marginBottom: 5
  }
});

const AnnotationSection = () => (
  <>
    <View style={styles.firstLine}>
      <Text style={styles.line}>
        Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w mojej ofercie pracy dla potrzeb niezbędnych do realizacji procesu
        rekreutacji (zgodnie z ustawą z dn. 29.08.97 roku o Ochronie Danych Osobowych Dz. Ust Nr 133 poz.833).
      </Text>
    </View>

    <View>
      <Text style={styles.line}>
        I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal
        Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European
        Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data
        and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
      </Text>
    </View>
  </>
);

export default AnnotationSection;
