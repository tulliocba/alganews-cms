import { ComponentMeta, Story } from '@storybook/react';

import { Table, TableProps } from '../components/Table/Table';

export default {
  title: 'Example/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {};
