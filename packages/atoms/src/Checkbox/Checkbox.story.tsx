import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
// import docs from './Checkbox.docs.mdx';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Checkbox.spec.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Checkbox
        type="checkbox"
        ml={0}
        pl={0}
        onPress={action('onPress')}
        // checked={boolean('checked', false)}
        disabled={boolean('disabled', false)}
      />
    </Wrapper>
  ));
