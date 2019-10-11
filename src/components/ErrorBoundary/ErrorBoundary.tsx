import React, {ErrorInfo, FunctionComponent} from 'react';

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component {
    state: ErrorBoundaryState = {
        hasError: false
    };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        //logErrorToMyService(error, errorInfo);
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

const withErrorBoundary = (Component: FunctionComponent) => () => (
    <ErrorBoundary>
        <Component />
    </ErrorBoundary>
);

export {
    ErrorBoundary,
    withErrorBoundary
}

export default ErrorBoundary;
