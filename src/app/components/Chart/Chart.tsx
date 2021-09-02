import { Line } from 'react-chartjs-2';
import { NoData } from '../NoData/NoData';
import { Heading } from '../Typography/Heading';
import { Wrapper } from './Chart.styles';

export interface ChartProps {
    data?: Chart.ChartData;
    title: string;
}

const options: Chart.ChartOptions = {
    maintainAspectRatio: true,
    elements: {
        line: {
            tension: 0
        }
    },
    legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
            usePointStyle: true
        }
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    display: false
                }
            }
        ],
        yAxes: [
            {
                type: 'linear',
                display: false,
                position: 'left',
                id: 'cashflow',
            },
        ],
    },
};

export const Chart = ({ data, title }: ChartProps) => {

    return <Wrapper>
        <div style={{ marginBottom: '16px' }}>
            <Heading level={3}>
                {title}
            </Heading>
        </div>
        {
            data ?
                <Line
                    type="line"
                    height={139}
                    width={600}
                    data={data}
                    options={options}
                />
                :
                <NoData height={139}/>
        }

    </Wrapper>
}