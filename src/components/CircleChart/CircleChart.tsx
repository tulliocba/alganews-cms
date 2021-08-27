import { useEffect, useState } from "react";
import { Caption, Cicle, CicleBG, Percentage, Svg, SvgWrapper, Wrapper } from "./CircleChart.styles";

export interface CircleChartProps {
    size: number;
    progress: number;
    caption?: string;
    theme?: 'default' | 'primary';
    strokeWidth?: number;

}

export const CircleChart = ({ theme, strokeWidth = 8, size, progress, caption }: CircleChartProps) => {

    const getThemeColor = () => theme === 'primary' ? '#09f' : '#274060';

    const THEME = getThemeColor();

    const CENTER = size / 2;
    const RADIUS = CENTER - strokeWidth / 2
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    const [offset, setOffset] = useState(CIRCUMFERENCE);

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * CIRCUMFERENCE;
        setOffset(progressOffset);
    }, [CIRCUMFERENCE, progress, setOffset, offset]);


    return (
        <Wrapper>
            <SvgWrapper width={size} height={size} >
                <Svg width={size} height={size}>
                    <CicleBG
                        cy={CENTER}
                        cx={CENTER}
                        r={RADIUS}
                    />
                    <Cicle
                        fill="none"
                        cy={CENTER}
                        cx={CENTER}
                        r={RADIUS}
                        stroke={THEME}
                        strokeWidth={strokeWidth}
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={offset}
                    />
                </Svg>

                <Percentage color={THEME}>
                    {progress}%
                </Percentage>
            </SvgWrapper>
            {
                caption
                &&
                <Caption>
                    {caption}
                </Caption>
            }

        </Wrapper>
    );
}