import React, { Suspense } from "react";
import ReactDom from "react-dom";

const MyCo2 = import(
  /* webpackChunkName: "my-async-components" */ "./asyncComponent"
);

const MyCo = import(
  /* webpackChunkName: "my-async-components" */ "./alsoMyComponent"
);

const LazyComponent = React.lazy(() => MyCo);
const LazyComponent2 = React.lazy(() => MyCo2);

const Main = () => <div></div>;

ReactDom.render(
  <div>
    <Suspense fallback={() => <div>Loading...</div>}>
      <LazyComponent />
      <LazyComponent2 />
    </Suspense>
  </div>,
  document.querySelector("body")
);
