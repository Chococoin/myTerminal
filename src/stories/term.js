import React from 'react';
import { storiesOf } from '@storybook/react';
import Term from '../components/term';

storiesOf('Term', module)
  .add('Terminal container', () => (
    <Term />
  ))
