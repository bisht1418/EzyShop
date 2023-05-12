import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import styles from '../Styling/Cart.module.css'
function Toster() {
  const toast = useToast();
  return (
    <button
      style={{width:"100%"}}
      onClick={() =>
        toast({
          title: "Congratulations",
          description: "The product has been added to your cart.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Add to Cart
    </button>
  );
}

export default Toster;