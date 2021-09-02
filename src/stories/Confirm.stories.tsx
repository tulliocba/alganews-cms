import { ComponentMeta, Story } from '@storybook/react';

import { Confirm, ConfirmProps } from '../app/components/Confirm/Confirm';

export default {
  title: 'Example/Confirm',
  component: Confirm,
} as ComponentMeta<typeof Confirm>;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Deseja realmente sair?',
  onConfirm: () => console.log('Sim'),
  onCancel: () => console.log('Não'),
};