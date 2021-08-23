import { Story, ComponentMeta } from '@storybook/react';

import { ValueDescriptor, ValueDescriptorProps } from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
} as ComponentMeta<typeof ValueDescriptor>;

const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default =  Template.bind({});
Default.args = {
    description: 'Ganhos no mês',
    value: 560322.02
}

export const DefaultCurrency =  Template.bind({});
DefaultCurrency.args = {
    description: 'Ganhos no mês',
    isCurrency: true,
    value: 560322.02
}

export const Primary =  Template.bind({});
Primary.args = {
    description: 'Ganhos no mês',
    value: 560322.02,
    color: 'primary'
}

export const PrimaryCurrency =  Template.bind({});
PrimaryCurrency.args = {
    description: 'Ganhos no mês',
    value: 560322.02,
    isCurrency: true,
    color: 'primary'
}