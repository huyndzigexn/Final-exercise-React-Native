import { useState, useEffect } from "react";
import { Text } from "react-native";
import Style from "./Style";

const Button = (props: any) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interVal = setInterval(() => {
      console.log("Log " + props.position);
      setCount((count) => {
        return count > 0 ? count - 1 : 0;
      });
    }, 1000);

    return () => {
      clearInterval(interVal);
    };
  }, []);

  return <Text style={Style.waiting}>{count}</Text>;
};

export default Button;
