import Product from "@/components/Product";
import ProductLoading from "@/components/Product/Loading";
import { Suspense } from "react";

const ProductPage = async () => {
  return (
    <Suspense fallback={<ProductLoading />}>
      <Product />
    </Suspense>
    // <Product />
  );
};

export default ProductPage;
