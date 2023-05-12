import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getShoesDataAction } from "../Redux/ShoesReducer/action";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
// import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const ProductList = () => {
  const { shoes: products } = useSelector((store) => store.ShoesReducer);

  const { isLoading } = useSelector((store) => store.ShoesReducer);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getShoesDataAction);
  // }, []);

  if (isLoading) {
    return (
      <>
        <Grid templateColumns="repeat(4, 1fr)" gap={3}>
          {new Array(12).fill(0).map((ele) => (
            <Box key={Math.random()} padding="30" boxShadow="lg" bg="white">
              <SkeletonCircle size="20" />
              <SkeletonText
                mt="4"
                noOfLines={2}
                width="160px"
                spacing="2"
                skeletonHeight="4"
              />
            </Box>
          ))}
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: 2, md: 2 }}
      >
        {products?.map((product, index) => (
          <GridItem key={product.id} colSpan={1}>
            <ProductCard key={product.id} {...product} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;