import { Metric, MetricService } from "cms-alganews-sdk";
import { useCallback, useState } from "react";

export const useTopTags = () => {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([]);

  const fetchTopThreeTags = useCallback(() => {
    MetricService.getTopThreeTags().then(setTopTags);
  }, []);

  return { topTags, fetchTopThreeTags };
};
