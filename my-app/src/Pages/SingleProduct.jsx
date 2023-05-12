import { Box, Grid, GridItem, Img, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillAmazonCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BankofferDrawer from "../Components/BankofferDrawer";
import Description from "../Components/Description";
import NocostEmiDrawer from "../Components/NocostEmiDrawer";
import PartnerOfferDrawer from "../Components/PartnerOfferDrawer";
import Toster from "../Components/Toster";
import {
  getSingleProductAction,
  handleAddAction,
} from "../Redux/CartReducer/action";
import styles from "../Styling/Cart.module.css";

const SingleProduct = () => {
  let dispatch = useDispatch();
  const [data, setdata] = useState({});
  let { id } = useParams();
  const [quan, setquan] = useState(1);
  useEffect(() => {
    getSingleProductAction(id).then((res) => {
      setdata(res);
    });
  }, []);
  let addSingleProduct = () => {
    dispatch(handleAddAction(data, quan));
  };
  let handleChangeSingle = (e) => {
    setquan(e.target.value);
  };
  return (
    <Box m={{ sm: "0px", md: "0px 10px" }} p={"20px"}>
      <Box display="flex" justifyContent={"center"} m={"35px 0px"}>
        <Img src="https://m.media-amazon.com/images/I/21G8dTQtvdL.jpg"></Img>
      </Box>
      <Grid gridTemplateColumns={{ base: "1fr", md: "70% 1fr" }} gap={6}>
        <GridItem>
          <Grid
            gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
            columnGap={10}
          >
            <GridItem>
              <Img
                src={data.image}
                height={{ base: "90%", md: "20%" }}
                width={"80%"}
              ></Img>
            </GridItem>
            <GridItem>
              <Text className={`${styles.cartGreen} ${styles.cartUnderLine}`}>
                Brand: {data.brand}
              </Text>
              <Text className={styles.title}>{data.description}</Text>
              <Text
                display={"inline"}
                color={"#ffa41c"}
                fontSize={"23px"}
                marginRight={"10px"}
              >
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </Text>
              <Text display={"inline"} marginRight={"10px"} color="#ffa41c">
                3 ratings
              </Text>
              <br />
              <Text
                display={"inline"}
                marginRight={"10px"}
                color="#cc39a2"
                fontSize={"20px"}
              >
                -{Math.floor(Math.random() * 50 || 1)}%
              </Text>
              <Text
                display={"inline"}
                className={styles.priceCart}
                fontSize={"24px"}
              >
                ₹ {data.price}
              </Text>
              <Text
                fontWeight={500}
                textDecoration="line-through"
                color={"#9b9c9c"}
                mt={"5px"}
              >
                M.R.P.: ₹{data.price + Math.floor(Math.random() * 50 || 1)}
              </Text>
              <Text fontSize={"14px"} fontWeight={500} mb={"10px"}>
                Inclusive of all taxes
              </Text>
              <hr />
              <Text fontWeight={700} m={"10px 0px"}>
                Offers
              </Text>
              <Grid gridTemplateColumns={"repeat(3,1fr)"} pb={"15px"} gap={4}>
                <GridItem
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                  p={"10px"}
                >
                  <Text fontSize={"14px"} fontWeight={700}>
                    No Cost EMI
                  </Text>
                  <Text fontSize={"14px"}>
                    Avail No Cost EMI on select cards for orders above ₹3000
                  </Text>
                  <NocostEmiDrawer />
                </GridItem>
                <GridItem
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                  p={"10px"}
                >
                  <Text fontSize={"14px"} fontWeight={700}>
                    Bank Offer
                  </Text>
                  <Text fontSize={"14px"}>
                    Upto ₹22.90 discount on select Credit Cards, Federal Bank...
                  </Text>
                  <BankofferDrawer />
                </GridItem>
                <GridItem
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                  p={"10px"}
                >
                  <Text fontSize={"14px"} fontWeight={700}>
                    Partner Offers
                  </Text>
                  <Text fontSize={"14px"}>
                    Get GST invoice and save up to 28% on business Sign up...
                  </Text>
                  <PartnerOfferDrawer />
                </GridItem>
              </Grid>
              <hr />
              <Grid
                gridTemplateColumns={"repeat(4,1fr)"}
                m={"10px 0px"}
                gap={4}
              >
                <GridItem>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
                    height={"50px"}
                    width={"50px"}
                  ></img>
                  <Text color={"#3a91a0"} fontSize={"14px"} fontWeight={500}>
                    Pay on Delivery
                  </Text>
                </GridItem>
                <GridItem>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                    height={"50px"}
                    width={"50px"}
                  ></img>
                  <Text color={"#3a91a0"} fontSize={"14px"} fontWeight={500}>
                    10 days Return & Exchange
                  </Text>
                </GridItem>
                <GridItem>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                    height={"50px"}
                    width={"50px"}
                  ></img>
                  <Text color={"#3a91a0"} fontSize={"14px"} fontWeight={500}>
                    Amazon Delivered
                  </Text>
                </GridItem>
                <GridItem>
                  <img
                    src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"
                    height={"50px"}
                    width={"50px "}
                  ></img>
                  <Text color={"#3a91a0"} fontSize={"14px"} fontWeight={500}>
                    Secure transaction
                  </Text>
                </GridItem>
              </Grid>
              <Text
                fontSize={"14px"}
                fontWeight={500}
                color={"#ffa41c"}
                m={"10px 0px"}
              >
                Size Chart
              </Text>
              <ul className={styles.ulsingle}>
                <li>Care Instructions: Machine Wash</li>
                <li>Fit Type: Oversized Fit</li>
                <li>Fabric - Cotton</li>
                <li>Size-S/M/L/XL</li>
                <li>Trend - Oversized</li>
                <li>Printed</li>
                <li>
                  Disclaimer- Product color may sligh vary due to photographic
                  light souce.
                </li>
              </ul>
              <Box
                display={"flex"}
                m={"15px 0px"}
                border="1px solid #cccccc"
                p={"10px"}
              >
                <Box height={"100px"}>
                  <Img
                    src="https://m.media-amazon.com/images/I/61fNBDEL2FL._UY679_.jpg"
                    width={"150px"}
                    height="100px"
                  ></Img>
                </Box>
                <Box>
                  <Text fontWeight={500}>Save 66%</Text>
                  <Text fontWeight={700}>JUGULAR Mens Cotton</Text>
                  <Text display={"inline"} color={"#ffa41c"} fontSize={"23px"}>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </Text>
                  <Text m={"5px 0px"}>
                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"></img>
                  </Text>
                  <Text
                    display={"inline"}
                    className={styles.priceCart}
                    color="#cb6304"
                    marginRight={"10px"}
                  >
                    ₹{data.price}
                  </Text>
                  <Text
                    display={"inline"}
                    fontWeight={500}
                    textDecoration="line-through"
                    color={"#9b9c9c"}
                    mt={"5px"}
                  >
                    M.R.P.: ₹1,599
                  </Text>
                </Box>
              </Box>
              <Box color={"#e4795b"} fontWeight={"bold"} fontSize={"105%"}>
                The maximum order quantity for this product is limited to 5
                units per customer
              </Box>
              <Box
                display={"grid"}
                m={"20px 0px"}
                gridTemplateColumns={"20% 1fr"}
              >
                <Box>
                  <Img
                    src="https://m.media-amazon.com/images/G/31/img15/rcx-events/test/HQP_VQL2._CB485935692_.png"
                    h={"100%"}
                  ></Img>
                </Box>
                <Text fontSize={"14px"} fontWeight={500}>
                  Please note that orders which exceed the quantity limit will
                  be auto-canceled. This is applicable across sellers.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          gridColumnStart={{ base: 1, md: "auto" }}
          gridColumnEnd={{ base: -1, md: "auto" }}
          m={{ sm: "0px 20px", md: 0 }}
        >
          <Box
            border="1px solid #d5d9d9"
            p={"20px"}
            borderRadius={"10px"}
            pb={"40px"}
          >
            <Text className={styles.priceCart} fontWeight={500} m={"5px 0px"}>
              ₹{data.price}.00
            </Text>
            <Text fontSize={"14px"} mb="5px">
              <Text color={"#178bba"} display="inline">
                FREE delivery
              </Text>
              <Text display={"inline"} fontWeight={500} marginLeft={"5px"}>
                Tuesday, 4 April
              </Text>{" "}
              on first order. Order within
              <Text display={"inline"} color="teal" fontWeight={500}>
                21 hrs 44 mins.
              </Text>
            </Text>
            <Text mb="5px" fontWeight={700}>
              Available to ship in 1-{Math.floor(Math.random() * 10) || 2} days
            </Text>
            <Text
              mb="5px"
              className={styles.cartGreen}
              fontSize={"14px"}
              fontWeight={500}
            >
              In stock
            </Text>
            <Text mb="5px">
              Sold by &nbsp;
              <Text display={"inline"} color="teal" fontWeight={500}>
                Cocoblu Retail
              </Text>
              &nbsp; and &nbsp;
              <Text display={"inline"} color="teal" fontWeight={500}>
                Fulfilled by Amazon.
              </Text>
            </Text>
            <Text display={"inline"} marginRight={"10px"}>
              Quantity:
            </Text>
            <Select
              w={"110px"}
              className={styles.cartSelect}
              display="inline-block"
              onChange={handleChangeSingle}
            >
              <option>--Select--</option>
              <option value={1}>Qty: 1</option>
              <option value={2}>Qty: 2</option>
              <option value={3}>Qty: 3</option>
              <option value={4}>Qty: 4</option>
              <option value={5}>Qty: 5</option>
              <option value={6}>Qty: 6</option>
              <option value={7}>Qty: 7</option>
            </Select>
            <br />
            <button className={styles.cartbtnsingle} onClick={addSingleProduct}>
              <Toster />
            </button>
            <br />
            <Img
              display={"inline"}
              marginRight={"10px"}
              src="https://m.media-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png"
            ></Img>
            <Text
              display={"inline"}
              color="teal"
              fontWeight={500}
              position="relative"
              top={"-5px"}
            >
              Secure transaction
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Box m={"20px 0px"} p={"0px 20px"} mb={"50px"}>
        <Box mb={"10px"}>
          <Img
            src="https://m.media-amazon.com/images/I/11sUgaVRsYL.png"
            display={"inline"}
            height={"20px"}
          ></Img>
          <Text display={"inline"} fontWeight={700} fontSize={"24px"}>
            Amazon Brand - Symbol
          </Text>
        </Box>
        <Box>
          <Img
            display={"inline"}
            marginRight={"10px"}
            src="https://m.media-amazon.com/images/I/01S5bawZYgL.png"
          ></Img>
          <Text display={"inline"} position="relative" top={"-5px"}>
            85% positive ratings from 100K+ customers
          </Text>
        </Box>
        <Box>
          <Img
            display={"inline"}
            marginRight={"10px"}
            src="https://m.media-amazon.com/images/I/01S5bawZYgL.png"
          ></Img>
          <Text display={"inline"} position="relative" top={"-5px"}>
            100K+ recent orders from this brand
          </Text>
        </Box>
        <Img
          display={"inline"}
          marginRight={"10px"}
          src="https://m.media-amazon.com/images/I/01S5bawZYgL.png"
        ></Img>
        <Text display={"inline"} position="relative" top={"-5px"}>
          6+ years on Amazon
        </Text>
      </Box>
      <hr />
      <Box
        paddingLeft={"20px"}
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Text fontWeight={700} fontSize={"24px"} m={"20px 0px"}>
          Special offers and product promotions
        </Text>
        <ul className={styles.speciallisingle}>
          <li>
            Amazon Brands Essential Offer: Buy 2 Get extra 5% Off, Buy 3 or more
            Get extra 7% Of
          </li>
          <li>
            10% Instant Discount up to INR 500 on IDBI Bank Card Trxns. Min
            purchase value INR 2000{" "}
          </li>
          <li>
            10% Instant Discount up to INR 300 on Federal Bank Debit Card Trxns.
            Minimum purchase value INR 1500{" "}
          </li>
          <li>
            10% Instant Discount up to INR 300 on Federal Bank Credit Card
            Trxns. Minimum purchase value INR 2000{" "}
          </li>
          <li>
            5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card
            Transactions. Minimum purchase value INR 1000{" "}
          </li>
          <li>
            No cost EMI available on select cards. Please check 'EMI options'
            above for more details.
          </li>
          <li>Get GST invoice and save up to 28% on business purchases.</li>
        </ul>
      </Box>
      <Description />
    </Box>
  );
};

export default SingleProduct;
