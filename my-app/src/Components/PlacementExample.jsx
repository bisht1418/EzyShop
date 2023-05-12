import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Grid,
  GridItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchCard from "./SearchCard";
import { getSearchDataAction } from "../Redux/SearchReducer/action";

export default function PlacementExample() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading } = useSelector((store) => store.SearchReducer);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { SearchData: products } = useSelector((store) => store.SearchReducer);

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  // console.log(isLoading);

  // if (isLoading) {
  //   return (
  //     <>
  //       <Grid templateColumns="repeat(4, 1fr)" gap={3}>
  //         {new Array(12).fill(0).map((ele) => (
  //           <Box key={Math.random()} padding="30" boxShadow="lg" bg="white">
  //             <SkeletonCircle size="20" />
  //             <SkeletonText
  //               mt="4"
  //               noOfLines={2}
  //               width="160px"
  //               spacing="2"
  //               skeletonHeight="4"
  //             />
  //           </Box>
  //         ))}
  //       </Grid>
  //     </>
  //   );
  // }

  return (
    <>
      {["full"].map((size) => (
        <Button
          style={{ color: "black", backgroundColor: "rgb(255, 255, 255)" }}
          onClick={() => handleClick(size)}
          key={size}
          width={"90%"}
          textAlign={"center"}
          margin="auto"
        >{`Search Product`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            style={{ color: "black" }}
            onClick={() => console.log("Neeraj")}
          />
          {/* <DrawerHeader>{`Search Product...`}</DrawerHeader> */}

          {isLoading ? (
            <>
              <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                {new Array(12).fill(0).map((ele) => (
                  <Box
                    key={Math.random()}
                    padding="30"
                    boxShadow="lg"
                    bg="white"
                  >
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
          ) : (
            <>
              <DrawerBody>
                <>
                  <Box textAlign={"center"} mb={10}>
                    <input
                      style={{
                        color: "black",
                        border: "1px solid black",
                        marginLeft: "10px",
                        borderRadius: "10px",
                        padding: "5px",
                        fontFamily: "bold",
                        width: "400px",
                      }}
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                      }}
                      type="text"
                      placeholder="Search Product"
                      color="black"
                    />
                    <button
                      onClick={() => {
                        // console.log("ckick me");
                        dispatch(getSearchDataAction(inputValue));
                        setInputValue("");
                      }}
                      style={{
                        color: "black",
                        border: "1px solid black",
                        marginLeft: "10px",
                        borderRadius: "10px",
                        padding: "5px",
                        backgroundColor: "rgb(255,216,20)",
                        fontFamily: "bold",
                      }}
                    >
                      Search
                    </button>
                  </Box>

                  <Grid
                    templateColumns={{
                      base: "repeat(1, 1fr)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(4, 1fr)",
                    }}
                    gap={{ base: 2, md: 2 }}
                  >
                    {products.length>0?products.map((product, index) => (
                      <GridItem key={product.id} colSpan={1}>
                        <SearchCard key={product.id} {...product} />
                      </GridItem>
                    )):
                    <div style={{textAlign:"center"}}><h1 style={{fontWeight:"bolder"}}>Search Something</h1></div>
                    }
                  </Grid>
                </>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
