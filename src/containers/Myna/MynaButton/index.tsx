import React from 'react';
import { ContentType } from '..';
import ContainedButton from '@components/Button/ContainedButton';
import Link from 'next/link';
import { styled } from '@mui/material';

interface MynaButtonProps {
  button: ContentType['button'];
};

const StyledButton = styled(ContainedButton)(({ theme }) => ({
  alignSelf: 'center',
  justifySelf: 'end',
  marginTop: 'auto',
}));

const MynaButton: React.FC<MynaButtonProps> = ({ button }) => {
  return (
    <React.Fragment>
      {
        button && (
          button.link ? (
            <StyledButton
              color="secondary"
              aria-label='view more about us'
              vocab='view more about us'
              component={Link}
              href={button.link}
            >
              {button.buttonText}
            </StyledButton>
          ) : (
            <StyledButton
              color="secondary"
              aria-label='view more about us'
              vocab='view more about us'
              onClick={button.onClick}
            >
              {button.buttonText}
            </StyledButton>
          )
        )
      }
    </React.Fragment>
  )
}

export default MynaButton;