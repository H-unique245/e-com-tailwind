import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

function Products() {
  return (
    <Layout>
      <Link
        className="bg-blue-600 text-white p-1.5 m-2 rounded-lg"
        href={"/products/create"}
      >
        Add Product
      </Link>
    </Layout>
  );
}

export default Products;
