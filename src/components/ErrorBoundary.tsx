import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log error to console in development
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // In production, you could log to an error reporting service
        // Example: logErrorToService(error, errorInfo);
    }

    handleReset = (): void => {
        this.setState({
            hasError: false,
            error: null
        });
        // Optionally reload the page
        window.location.href = '/';
    };

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-background flex items-center justify-center px-6">
                    <div className="max-w-2xl w-full bg-surface border border-white/10 rounded-2xl p-8 md:p-12">
                        {/* Error Icon */}
                        <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-6 mx-auto">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>

                        {/* Error Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4 text-center font-display">
                            Oops! Something went wrong
                        </h1>

                        {/* Error Description */}
                        <p className="text-muted text-center mb-8 text-lg">
                            We encountered an unexpected error. Don&apos;t worry, your data is safe. You can try refreshing the page or return to the homepage.
                        </p>

                        {/* Error Details (only in development) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="bg-black/50 border border-red-500/20 rounded-lg p-4 mb-8">
                                <p className="text-red-400 font-mono text-sm mb-2 font-semibold">Error Details:</p>
                                <p className="text-red-300 font-mono text-xs break-all">
                                    {this.state.error.message}
                                </p>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={this.handleReset}
                                className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:bg-white transition-colors uppercase tracking-wider"
                            >
                                Return Home
                            </button>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-8 py-3 border border-white/20 text-text font-medium rounded-lg hover:bg-white/5 transition-colors uppercase tracking-wider"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
