import { ComponentMeta, Story } from '@storybook/react';

import { Info, InfoProps } from '../app/components/Info/Info';

export default {
  title: 'Example/Info',
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Post não encontrado',
  description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.'
};