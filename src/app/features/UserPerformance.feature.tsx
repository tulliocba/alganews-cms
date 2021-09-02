import { Chart } from "../components/Chart/Chart";

const FAKE_DATA = {
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

export const UserPerformance = () => {
    return <Chart title="Média de performance nos últimos 6 meses" data={FAKE_DATA}/>
}