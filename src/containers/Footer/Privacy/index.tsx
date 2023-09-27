import React from 'react';
import { BoxProps, Box, styled } from '@mui/material';
import Link from '@components/Link';

interface PrivacyProps extends BoxProps {
};

const Privacy: React.FC<PrivacyProps> = (props) => {
  return (
    <Box {...props}>
      <Link href='legal/visitor-agreement'>
        Visitor Agreement
      </Link>
      <Link href="legal/privacy-notice">
        Privacy Notice
      </Link>
      <Link href="legal/website-accessibility-statement">
        Website Accessibility Statement
      </Link>
      <Link href="legal/code-of-ethics">
        Code of Ethics
      </Link>
      <Link href="legal/faqs">
        FAQs
      </Link>
    </Box>
  )
};

export default styled(Privacy)(({ theme }) => ({
  gridColumn: '11 / 21',
  gridRow: '20 / 21',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));