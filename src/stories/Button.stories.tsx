import { ComponentMeta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../app/components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};


export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Button',
}

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'Button',
}

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  label: 'Button',
}
