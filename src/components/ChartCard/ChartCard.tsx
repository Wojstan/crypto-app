import { Card, Select, Typography } from "antd";
import millify from "millify";
import { useState } from "react";
import { useGetCoinHistoryQuery } from "../../services/cryptoAPI";
import CoinChart from "../CoinChart/CoinChart";
import styles from "./ChartCard.module.css";

const { Option } = Select;
const { Title, Text } = Typography;

type Props = {
  coinId: string;
  color: string;
  price: number;
};

const ChartCard = ({ coinId, price, color }: Props) => {
  const timeOptions = ["24h", "7d", "30d", "1y", "5y"];
  const [timeframe, setTimeframe] = useState("24h");

  const { data: coinHistory } = useGetCoinHistoryQuery({
    coinId: coinId,
    timeframe: timeframe,
  });

  const handleChange = (value: string) => {
    setTimeframe(value);
  };

  return (
    <Card>
      <div className={styles.cardheader}>
        <div>
          <Text className={styles.label}>Timeframe: </Text>
          <Select
            defaultValue="24h"
            style={{ width: 220 }}
            onChange={handleChange}
          >
            {timeOptions.map((option, i) => (
              <Option key={i} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </div>
        <Title type="secondary" level={4}>
          Current price:{" "}
          <span style={{ color: color, fontWeight: 700 }}>
            {millify(price)}$
          </span>
        </Title>
      </div>
      <div className={styles.chart}>
        <CoinChart coinHistory={coinHistory} color={color} />
      </div>
    </Card>
  );
};

export default ChartCard;
