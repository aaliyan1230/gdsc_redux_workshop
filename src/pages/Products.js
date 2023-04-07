import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "../components/Products/ProductCard";
import { useGetProductsQuery } from "../state/api/apiSlice";



const Products = () => {
  const { data: products } = useGetProductsQuery();

  return <ProductsWrapper></ProductsWrapper>;
};

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Products;
