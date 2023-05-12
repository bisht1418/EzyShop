import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { getWomenShoesDataAction } from "../Redux/WomenShoesReducer/action";
import WomenShoesCard from "./WomenShoesCard";

const WomenShoesList = () => {
  const { WomenShoes: products } = useSelector(
    (store) => store.WomenShoesReducer
  );

  const { isLoading } = useSelector((store) => store.WomenShoesReducer);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getWomenShoesDataAction());
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
            <WomenShoesCard key={product.id} {...product} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default WomenShoesList;