import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import {Home} from './page/home';

const Pages = () => {
    return (
        <React.Suspense
          fallback={<div>Loading...</div>}
        >
            <Routes>
              <Route
                path="/"
                Component={Home}
                ErrorBoundary={() => <div>Error</div>}
              />
            </Routes>
        </React.Suspense>
    )
};

export const App = (
  <Router>
    <Pages />
  </Router>
);
