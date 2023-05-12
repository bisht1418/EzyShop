import React, { useState } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Checkbox, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { StarIcon } from "@chakra-ui/icons";
// import { getVitaminsside } from "../Redux/productReducer/action";
import { useSearchParams } from "react-router-dom";
import { getShoesDataAction } from "../Redux/ShoesReducer/action";
import { getWomenShoesDataAction } from "../Redux/WomenShoesReducer/action";


const brands = [
  "Reebok",
  "ASIAN",
  "Red Tape",
  "Puma",
  "Sparx",
  "Campus",
  "DOCTOR EXTRA SOFT",
  "layasa",
  "Flavia",
  "Denill",
  "Liberty",
  "PrasKing",
  "Vendoz",
  "HOCKWOOD",
  "MACTREE",
  "Birde",
  "THE ALL WAY",
];

export default function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandSearch, setBrandSearch] = useState(
    searchParams.getAll("brand") || []
  );
  const [vitaminSearch, setvitaminSearch] = useState(
    searchParams.getAll("category") || []
  );
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState(searchParams.get("_order") || "");
  const [PriceUnder, setPriceUnder] = useState(
    searchParams.get("price_gte") != null
      ? [searchParams.get("price_gte"), searchParams.get("price_lte")]
      : []
  );

  const handleChange = (e) => {
    if (e.target.checked) {
      setBrandSearch([...brandSearch, e.target.value]);
    } else {
      let newBrandList = brandSearch.filter((ele) => ele !== e.target.value);
      setBrandSearch(newBrandList);
    }
  };

  let handleChangevitamin = (e) => {
    if (e.target.checked) {
      setvitaminSearch([...vitaminSearch, e.target.value]);
    } else {
      let newBrandList = vitaminSearch.filter((ele) => ele !== e.target.value);
      setvitaminSearch(newBrandList);
    }
    // console.log(vitaminSearch);
  };

  const handleChangesort = (e) => {
    if (e.target.checked) {
      setSortBy(e.target.value);
    } else {
      setSortBy("");
    }
    console.log(sortBy);
  };

  const PriceUnder300 = (e) => {
    if (e.target.checked) {
      setPriceUnder([0, 300]);
    } else {
      setPriceUnder([]);
    }
  };

  const PriceUnder500 = (e) => {
    if (e.target.checked) {
      setPriceUnder([300, 500]);
    } else {
      setPriceUnder([]);
    }
  };

  const PriceUnder1000 = (e) => {
    if (e.target.checked) {
      setPriceUnder([500, 1000]);
    } else {
      setPriceUnder([]);
    }
  };

  const PriceUnder1500 = (e) => {
    if (e.target.checked) {
      setPriceUnder([1000, 1500]);
    } else {
      setPriceUnder([]);
    }
  };

  const PriceUnder1500Above = (e) => {
    if (e.target.checked) {
      setPriceUnder([1500, 100000]);
    } else {
      setPriceUnder([]);
    }
  };

  React.useEffect(() => {
    let obj = {};
    if (sortBy) {
      obj._sort = "price";
      obj._order = sortBy;
    }
    if (brandSearch) {
      obj.brand = brandSearch;
    }
    if (vitaminSearch) {
      obj.category = vitaminSearch;
    }
    if (PriceUnder.length > 1) {
      obj.price_gte = PriceUnder[0];
      obj.price_lte = PriceUnder[1];
    }
    setSearchParams(obj);
    getWomenShoesDataAction(dispatch, obj);
  }, [brandSearch, PriceUnder, sortBy, vitaminSearch]);

  return (
    <Container>
      <Box m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          brands
        </Heading>
        {brands.map((brand) => (
          <div key={brand}>
            <Checkbox
              // className={Styles.SideBar__Text}
              size="md"
              value={brand}
              isChecked={searchParams.getAll("brand").includes(brand)}
              onChange={handleChange}
              border="grey"
            >
              <Text fontSize="sm">{brand}</Text>
            </Checkbox>
            <br />
          </div>
        ))}
      </Box>
      <Box m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          Price
        </Heading>
        <Checkbox
          // className={Styles.SideBar__Text}
          size="md"
          value={1}
          onChange={PriceUnder300}
          border="grey"
          isChecked={searchParams.get("price_lte") == 300}
        >
          <Text fontSize="sm">Under ₹300</Text>
        </Checkbox>
        <br />
        <Checkbox
          // className={Styles.SideBar__Text}
          size="md"
          onChange={PriceUnder500}
          border="grey"
          isChecked={searchParams.get("price_lte") == 500}
        >
          <Text fontSize="sm">₹300 - ₹500</Text>
        </Checkbox>
        <br />
        <Checkbox
          // className={Styles.SideBar__Text}
          size="md"
          onChange={PriceUnder1000}
          border="grey"
          isChecked={searchParams.get("price_lte") == 1000}
        >
          <Text fontSize="sm">₹500 - ₹1000</Text>
        </Checkbox>
        <br />
        <Checkbox
          // className={Styles.SideBar__Text}
          size="md"
          onChange={PriceUnder1500}
          border="grey"
          isChecked={searchParams.get("price_lte") == 1500}
        >
          <Text fontSize="sm"> ₹1000 - ₹1500</Text>
        </Checkbox>
        <br />
        <Checkbox
          // className={Styles.SideBar__Text}
          size="md"
          onChange={PriceUnder1500Above}
          border="grey"
          isChecked={searchParams.get("price_lte") == 100000}
        >
          <Text fontSize="sm"> Over ₹1500</Text>
        </Checkbox>
        <br />
      </Box>
      <Box m={1} color="black" p="10px">
        <Heading color={"teal"} as="h5" size="sm">
          Sort By Price
        </Heading>
        <Text>
          <Checkbox
            // className={Styles.SideBar__Text}
            size="md"
            border="grey"
            value={"asc"}
            onChange={handleChangesort}
            isChecked={searchParams.get("_order") == "asc"}
          >
            <Text fontSize="sm">asc</Text>
          </Checkbox>
        </Text>
        <Text>
          <Checkbox
            // className={Styles.SideBar__Text}
            size="md"
            border="grey"
            value={"desc"}
            onChange={handleChangesort}
            isChecked={searchParams.get("_order") == "desc"}
          >
            <Text fontSize="sm">desc</Text>
          </Checkbox>
        </Text>
      </Box>
    </Container>
  );
}
