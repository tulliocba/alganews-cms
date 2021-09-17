import { useEffect, useState } from "react";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { transformEditorMonthlyEarningsIntoChartJs } from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import { MetricService } from "../../sdk/services/Metric.service";
import { Chart, ChartProps } from "../components/Chart/Chart";
import Skeleton from "react-loading-skeleton";

export const UserPerformance = withBoundaryError(() => {

  const [error, setError] = useState<Error>();
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch(err => setError(new Error(err.message)))
  }, []);

  if (error) throw error;

  if (!editorEarnings) 
  return <div>
    <Skeleton height={150}/>
  </div>;

  return <Chart title="Média de performance nos últimos 6 meses" data={editorEarnings} />
}, "performance");