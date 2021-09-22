import { LoadingWrapper } from "./Loading.styles"

export interface LoadingProps {
    show?: boolean;
}

export const Loading = ({ show }: LoadingProps) => {

    if (!show) return null;

    return <LoadingWrapper>
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </LoadingWrapper>
}