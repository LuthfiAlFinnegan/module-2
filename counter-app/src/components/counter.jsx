import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <box>
      <Flex
        justifyContent={"center"}
        color={"black"}
        fontSize={"5xl"}
        fontWeight={"bold"}
      >
        <text>Counter Application</text>
      </Flex>

      <Flex
        display={"flex"}
        justifyContent={"center"}
        margin={"auto"}
        marginTop={"20px"}
        bg={"black"}
        color={"white"}
        w={"80%"}
        h={"80vh"}
        alignItems={"center"}
        gap={"40px"}
        fontSize={"9xl"}
        borderRadius={"20px"}
      >
        <Flex>
          <Button
            colorScheme="red"
            w={"100px"}
            h={"100px"}
            onClick={decrement}
            fontSize={"50px"}
          >
            <MinusIcon />
          </Button>
        </Flex>

        <Flex fontWeight={"bold"}>
          <text>{count}</text>
        </Flex>

        <Flex>
          <Button
            colorScheme="green"
            w={"100px"}
            h={"100px"}
            onClick={increment}
            fontSize={"50px"}
          >
            <AddIcon />
          </Button>
        </Flex>
      </Flex>
    </box>
  );
};

export default Counter;
