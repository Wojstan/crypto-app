import { useEffect, useState } from "react";
import { Typography, Spin } from "antd";

import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

import styles from "./Currency.module.css";
import { useGetAllCoinsQuery } from "../../services/cryptoAPI";
import millify from "millify";

const { Text } = Typography;

const Currency = () => {
  const [index, setIndex] = useState(0);
  const [currentCurrency, setCurrent] = useState<{
    symbol: string;
    change: number;
    price: number;
    color: string;
    iconUrl: string;
  }>({
    symbol: "",
    price: 0,
    change: 0,
    color: "",
    iconUrl: "",
  });

  const { data, isFetching } = useGetAllCoinsQuery(0);
  const { price, change, symbol, color, iconUrl } = currentCurrency;

  useEffect(() => {
    if (!isFetching) {
      const coins = data?.data?.coins;
      setCurrent(coins[index]);

      setTimeout(() => {
        setIndex(coins.length - 1 > index ? index + 1 : 0);
      }, 5000);
    }
  }, [isFetching, index, data]);

  return (
    <span className={styles.text}>
      {isFetching ? (
        <Spin size="large" />
      ) : (
        <>
          <img className={styles.img} height={30} src={iconUrl} alt="" />
          <strong style={{ color: color }}>{symbol} </strong>
          <Text strong style={{ marginRight: "1rem" }}>
            ${millify(price)}
          </Text>
          <Text
            style={change > 0 ? { color: "#3f8600" } : { color: "#cf1322" }}
          >
            {change}% {change > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          </Text>
        </>
      )}
    </span>
  );
};

export default Currency;
