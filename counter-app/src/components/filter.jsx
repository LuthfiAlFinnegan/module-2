import { Box, Flex, ListItem, OrderedList } from "@chakra-ui/react";
import { useState } from "react";

const itemList = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
  "Strawberry",
  "Persimmon",
];

const Filter = () => {
  const [filterList, setFilterList] = useState(itemList);

  const filterSearch = (event) => {
    const query = event.target.value;
    let updatedList = [...itemList];
    updatedList = updatedList.filter((item) => {
      return item.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
    });
    setFilterList(updatedList);
  };    

  return (
    <Box
      w={"50%"}
      h={"80vh"}
      bgGradient="linear(to-tl,purple,red,yellow)"
      margin={"auto"}
      marginTop={"5%"}
      borderRadius={"20px"}
    >
      <Flex
        justifyContent={"center"}
        color={"black"}
        fontWeight={"bold"}
        fontSize={"30px"}
      >
        <text>Filter Application</text>
      </Flex>
      <Flex
        justifyContent={"center"}
        gap={"5px"}
        color={"black"}
        marginTop={"20px"}
      >
        Search: <input onChange={filterSearch} />
      </Flex>
      <Flex justifyContent={"center"} marginTop={"5%"} fontSize={"20px"}>
        <OrderedList listStyleType={"none"}>
          {filterList.map((item, index) => (
            <ListItem
              border={"1px solid white"}
              bg={"white"}
              borderRadius={"5px"}
              marginTop={"10px"}
              marginLeft={"5px"}
              textAlign={"center"}
              color={"black"}
              padding={"0 20px"}
              key={index}
              cursor={"pointer"}
            >
              {item}
            </ListItem>
          ))}
        </OrderedList>
      </Flex>
    </Box>
  );
};

export default Filter;
