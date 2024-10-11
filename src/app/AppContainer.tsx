import { ErrorBoundary } from 'react-error-boundary';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ErrorFallback from '@/components/error/ErrorFallback';
import theme from '@/utils/theme';
import Navbar from '@/components/navbar/Navbar';

type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  );
};
export default AppContainer;
