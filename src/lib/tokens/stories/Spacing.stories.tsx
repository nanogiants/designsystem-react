import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Source,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { Story } from '@storybook/react/types-6-0';
import React, { useEffect, useState } from 'react';
import './Spacing.stories.css';

export default {
  title: 'Tokens/Spacing',
  argTypes: {
    size: {
      options: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <div>
            The spacing gets exposed as multiple css variables so you can use it
            like so in your css:
          </div>
          <Source
            language="css"
            code={`
.someclass {
  padding: var(--spacing-xxs);
}
  `}
          />
          <div>The following suffixes are available:</div>
          <code>['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']</code>
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
};

const Template: Story = (args) => {
  const getSpacing = () =>
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`--spacing-${args.size}`);

  const [spacing, setSpacing] = useState(getSpacing());

  const onResize = () => {
    setSpacing(getSpacing());
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`spacing spacing-${args.size}`}>
      <div className="inner">{spacing}</div>
    </div>
  );
};

export const Spacing: Story = Template.bind({});

Spacing.args = {
  size: 'xxxl',
};
