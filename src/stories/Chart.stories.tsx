import { ComponentMeta, Story } from '@storybook/react';

import { Chart, ChartProps } from '../components/Chart/Chart';

export default {
  title: 'Example/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: '#0099FF',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [13, 10, 20, 5, 4, 9],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  data: data,
  title: 'Média de performance nos últimos 12 meses'
};

export const WithoutData = Template.bind({});
WithoutData.args = {
  title: 'Média de performance nos últimos 12 meses'
};