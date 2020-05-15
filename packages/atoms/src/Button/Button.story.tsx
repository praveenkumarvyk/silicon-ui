import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './Button';
// import docs from './Button.docs.mdx';

import storiesOf from '../../storybook/storiesOf';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <>
      <Button
        onClick={action('onClick')}
        onPress={action('onPress')}
        styled={boolean('styled', false)}
      >
        {text('children', 'click me')}
      </Button>
    </>
  ));
