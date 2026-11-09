import {flushSync} from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

// The module script is render-blocking (see vite.config.ts), so commit synchronously: the browser
// then paints the finished page first and never shows an empty or fallback frame between pages.
const root = createRoot(document.getElementById('root')!);
flushSync(() => {
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
});
