import { transparentize } from "polished";
import { Component } from "react";
import { ErrorDisplay } from "./ErrorDisplay";

interface ErrorBoundaryProps { 
    component?: string;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error?: {
        message?: string
    }
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error: {
                message: error.message
            }
        }
    }

    public render() {
        if (this.state.hasError) {
            return <div
                style={{
                    padding: 24,
                    border: '1px solid ' + transparentize(0.9, '#274060')
                }}
            >
                <ErrorDisplay
                    title={`Erro ao renderizar ${this.props.component || 'componente'}`}
                    message={this.state.error?.message}
                />
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary