import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { Metric } from "../../sdk/@types";
import { MetricService } from "../../sdk/services/Metric.service";
import { CircleChart } from "../components/CircleChart";

export const UserTopTags = withBoundaryError(() => {
    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

    useEffect(() => {
        MetricService.getTopThreeTags()
            .then(setTopTags)
    }, []);

    if (!topTags.length) {
        return <Wrapper style={{ height: 123 }}>
            <Skeleton height={88} width={88} circle />
            <Skeleton height={88} width={88} circle />
            <Skeleton height={88} width={88} circle />
        </Wrapper>
    }

    return (
        <Wrapper>
            {
                topTags.map((tag, index) => (
                    <CircleChart
                        key={tag.tagName}
                        progress={Math.ceil(tag.percentage)}
                        size={88}
                        caption={tag.tagName}
                        theme={index === 0 ? 'primary' : 'default'} />
                ))
            }
        </Wrapper>
    );
}, "tags");

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`;