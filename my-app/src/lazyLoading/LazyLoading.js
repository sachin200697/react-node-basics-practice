//npm i react-error-boundary  for error handling in lazy loading

import React, { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import DataLazyLoading from "./components/DataLazyLoading";

const LazyUser = lazy(() => import("./components/User"));

//handle name exports in lazy loading
const LazyAbout = lazy(()=>import('./components/About').then(module=>({default: module.About})));

function LazyLoading() {
    const onReset = ()=>{
        //can give some code to retry the failed operation
        window.location.reload();
    }
  return (
    <div>
      <h1>This is lazy component</h1>

      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
        <Suspense fallback={<Loading />}>
          <LazyUser />
          <LazyAbout />
        </Suspense>
      </ErrorBoundary>
      <DataLazyLoading />
    </div>
  );
}

export default LazyLoading;
