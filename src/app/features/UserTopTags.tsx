import { useEffect, useState } from "react";
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
    }, [])

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