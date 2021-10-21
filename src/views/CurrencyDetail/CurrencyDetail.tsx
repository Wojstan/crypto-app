import React, { useState } from "react";
import { useParams } from "react-router";
import {
  useGetCoinHistoryQuery,
  useGetCurrencyDetailsQuery,
} from "../../services/cryptoAPI";
import { Typography, Spin, Card, Select } from "antd";
import styles from "./CurrencyDetail.module.css";
import CoinChart from "../../components/CoinChart/CoinChart";

const { Title, Text } = Typography;
const { Option } = Select;

const timeOptions = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

const CurrencyDetail = () => {
  const { coinId } = useParams<{ coinId?: string }>();
  const { data, isFetching } = useGetCurrencyDetailsQuery(coinId as string);

  const [timeframe, setTimeframe] = useState("24h");

  const { data: coinHistory } = useGetCoinHistoryQuery({
    coinId: coinId as string,
    timeframe: timeframe,
  });

  const coinDetails = data?.data?.coin;

  const handleChange = (value: string) => {
    setTimeframe(value);
  };

  if (isFetching) {
    return <Spin size="large" />;
  }

  return (
    <>
      <header className={styles.header}>
        <img height={60} src={coinDetails.iconUrl} alt="" />
        <span>
          <Title>
            {coinDetails.name} ({coinDetails.slug})
          </Title>
          <Text type="secondary">
            Live price, history, market cap and supply.
          </Text>
        </span>
      </header>

      <div className={styles.main}>
        <Card className={styles.card}>
          <Text style={{ display: "block" }}>Timeframe: </Text>
          <Select
            defaultValue="24h"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            {timeOptions.map((option) => (
              <Option value={option}>{option}</Option>
            ))}
          </Select>
          <CoinChart coinHistory={coinHistory} color={coinDetails.color} />
        </Card>
      </div>
    </>
  );
};

export default CurrencyDetail;
