import { lazy, Suspense } from "react";

const LazyShop = lazy(() => import("./Shop"));

export const Shop = (props) => (
  <Suspense fallback={<>Loading....</>}>
    <LazyShop {...props} />
  </Suspense>
);
