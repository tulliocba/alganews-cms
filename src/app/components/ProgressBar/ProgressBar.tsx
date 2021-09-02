import { CurrentProgress, TextShadow, Wrapper } from "./ProgressBar.styles";

export interface ProgressBarProps {
    title: string;
    progress: number;
    theme: 'primary' | 'secondary'
    width?: number;
}

export const ProgressBar = ({ title, width = 256, progress, theme }: ProgressBarProps) => {

    if (progress > 100) {
        progress = 100;
    } else if (progress < 0) {
        progress = 0
    }

    return (
        <Wrapper width={width}>
            <TextShadow progress={progress} theme={theme}>
                {title}
            </TextShadow>
            <CurrentProgress progress={progress} theme={theme}>
                <span>
                    {title}
                </span>
            </CurrentProgress>
        </Wrapper>
    );
}