import { lazy, Suspense } from "react";

const LazyShop = lazy(() => import("./Shop"));

export const Shop = (props) => (
  <Suspense
    fallback={<div style={{ textAlign: "center" }}>Loading Products....</div>}
  >
    <LazyShop {...props} />
  </Suspense>
);
