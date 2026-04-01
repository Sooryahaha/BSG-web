import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 text-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong.</h2>
                        <p className="text-gray-400 mb-8">
                            We encountered an unexpected error. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#FF3366] px-8 py-3 rounded-xl font-semibold hover:bg-[#FF3366]/90 transition-all"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
