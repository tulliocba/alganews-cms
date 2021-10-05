import { useEffect } from "react";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { Chart } from "../components/Chart/Chart";
import Skeleton from "react-loading-skeleton";
import { usePerformance } from "../../core/hooks/usePerformance";

export const UserPerformance = withBoundaryError(() => {
  const { fetchPerformance, performance } = usePerformance();

  useEffect(() => {
    fetchPerformance();
  }, [fetchPerformance]);

  if (!performance)
    return (
      <div>
        <Skeleton height={227} />
      </div>
    );

  return (
    <Chart
      title="Média de performance nos últimos 6 meses"
      data={performance}
    />
  );
}, "performance");
