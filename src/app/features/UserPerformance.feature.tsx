import { useEffect, useState } from "react";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { transformEditorMonthlyEarningsIntoChartJs } from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
import { Chart, ChartProps } from "../components/Chart/Chart";
import Skeleton from "react-loading-skeleton";
import { MetricService } from "cms-alganews-sdk";

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
    <Skeleton height={227}/>
  </div>;

  return <Chart title="Média de performance nos últimos 6 meses" data={editorEarnings} />
}, "performance");