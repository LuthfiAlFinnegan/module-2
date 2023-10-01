import { Box, Button, Flex } from "@chakra-ui/react";
import { useStopwatch } from "react-timer-hook";

function Stopwatch() {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  return (
    <Box
      w={"80%"}
      h={"90vh"}
      bg={"black"}
      margin={"auto"}
      marginTop={"25px"}
      borderRadius={"20px"}
    >
      <Flex
        justifyContent={"center"}
        color={"white"}
        fontSize={"5xl"}
        fontWeight={"bold"}
        paddingTop={"100px"}
      >
        <text>Stopwatch</text>
      </Flex>

      <Flex
        justifyContent={"center"}
        marginTop={"50px"}
        fontSize={"100px"}
        color={"white"}
        fontWeight={"bold"}
      >
        <text>
          <span>{minutes}</span>:<span>{seconds}</span>
        </text>
      </Flex>

      <Flex
        justifyContent={"center"}
        color={"black"}
        gap={"20px"}
        marginTop={"50px"}
      >
        <Button colorScheme="green" onClick={start}>
          start
        </Button>
        <Button colorScheme="red" onClick={pause}>
          pause
        </Button>
        <Button colorScheme="yellow" onClick={reset}>
          reset
        </Button>
      </Flex>
    </Box>
  );
}

export default Stopwatch;
