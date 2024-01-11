import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useMemo } from 'react';

import useDescription from '../cv/hooks/useDescription.js';
import Cv from '../cv/index.jsx';

const Link = () => {
  const name = useMemo(() => `cv-${new Date().getFullYear()}.pdf`, []);
  const description = useDescription();

  return (
    <PDFDownloadLink document={<Cv description={description} />} fileName={name}>
      {({ loading }) => (loading ? 'loading...' : name)}
    </PDFDownloadLink>
  );
};

export default Link;
