import React from 'react';
import { ButtonSolid } from '../../src/_ui/AppButton/AppButton';

export default {
  title: 'Button',
  component: ButtonSolid,
  args: {
    children: 'Button',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'ghostBlue',
          'ghostBlack',
          'dangerPrimary',
          'dangerSecondary',
          'dangerTertiary',
          'dangerGhost',
        ],
      },
    },
    size: { control: { type: 'radio', options: ['lg', 'md', 'sm', 'xs'] } },
    disabled: { control: { type: 'boolean' } },
    leftIcon: {
      // options: Object.keys(),
      control: { type: 'select' },
    },
    rightIcon: {
      // options: Object.keys(),
      control: { type: 'select' },
    },
    onClick: {
      control: 'none',
    },
    type: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

const Template = (args) => <ButtonSolid {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { variant: 'tertiary' };

export const Ghostblue = Template.bind({});
Ghostblue.args = { variant: 'ghostBlue' };

export const Ghostblack = Template.bind({});
Ghostblack.args = { variant: 'ghostBlack' };

export const DangerPrimary = Template.bind({});
DangerPrimary.args = { variant: 'dangerPrimary' };

export const DangerSecondary = Template.bind({});
DangerSecondary.args = { variant: 'dangerSecondary' };

export const DangerTertiary = Template.bind({});
DangerTertiary.args = { variant: 'dangerTertiary' };

export const DangerGhost = Template.bind({});
DangerGhost.args = { variant: 'dangerGhost' };
