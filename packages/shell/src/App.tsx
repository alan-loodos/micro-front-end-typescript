import React, { lazy } from "react";
const renderMFE = (MFE: React.FunctionComponent) => {
  return (
    <React.Suspense fallback="Loading...">
      <MFE />
    </React.Suspense>
  );
};
const ProductApp = lazy(() => import("product/App"));
const UserApp = lazy(() => import("user/App"));

function App() {
  return (
    <div>
      <div>Header</div>
      <>{renderMFE(ProductApp)}</>
      <>{renderMFE(UserApp)}</>
      <div>Footer</div>
    </div>
  );
}

export default App;
