import React from 'react';
import { Container } from './Level.styled';
import PropTypes from 'prop-types';

 const Level = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

Level.propTypes = {
   children: PropTypes.any.isRequired,
};

export default Level;
