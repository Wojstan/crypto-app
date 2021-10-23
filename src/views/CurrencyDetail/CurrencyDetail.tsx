import React, { useState } from "react";
import { useParams } from "react-router";
import {
  useGetCoinHistoryQuery,
  useGetCurrencyDetailsQuery,
} from "../../services/cryptoAPI";
import { Typography, Spin, Card, Select, Row, Col } from "antd";
import styles from "./CurrencyDetail.module.css";
import CoinChart from "../../components/CoinChart/CoinChart";
import millify from "millify";
import {
  CalendarOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  DollarOutlined,
  GlobalOutlined,
  PayCircleOutlined,
  StarOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const timeOptions = ["24h", "7d", "30d", "1y", "5y"];

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

  console.log(coinDetails);

  if (isFetching) {
    return <Spin size="large" />;
  }

  const mainStats = [
    {
      title: "Rank",
      value: coinDetails.rank,
      icon: <StarOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "Volume",
      value: `${millify(coinDetails.volume)}$`,
      icon: <CreditCardOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "Market Cap",
      value: `${millify(coinDetails.marketCap)}$`,
      icon: <DollarOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "Exchanges",
      value: coinDetails.numberOfExchanges,
      icon: <WalletOutlined style={{ color: coinDetails.color }} />,
    },
  ];

  const moreStats = [
    {
      title: "Total Supply",
      value: `${millify(coinDetails.totalSupply)}$`,
      icon: <GlobalOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "Circulating Supply",
      value: `${millify(coinDetails.circulatingSupply)}$`,
      icon: <DollarCircleOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "Markets",
      value: coinDetails.numberOfMarkets,
      icon: <PayCircleOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "First seen",
      value: new Date(coinDetails.firstSeen).toLocaleDateString(),
      icon: <CalendarOutlined style={{ color: coinDetails.color }} />,
    },
  ];

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
              <span style={{ color: coinDetails.color, fontWeight: 700 }}>
                {millify(coinDetails.price)}$
              </span>
            </Title>
          </div>
          <div className={styles.chart}>
            <CoinChart coinHistory={coinHistory} color={coinDetails.color} />
          </div>
        </Card>
      </div>

      <div className={styles.about}>
        <Row gutter={64}>
          <Col span={24} xxl={8}>
            <Title level={2} style={{ fontWeight: 400 }}>
              <strong style={{ color: coinDetails.color, fontWeight: 700 }}>
                {coinDetails.name}
              </strong>{" "}
              main statistics
            </Title>
            <Text type="secondary">
              The most important statistics of {coinDetails.name} like rank or
              market cap.
            </Text>
            <ul className={styles.list}>
              {mainStats.map((stat, i) => (
                <li key={i}>
                  <div>
                    {stat.icon} {stat.title}
                  </div>
                  <strong style={{ fontWeight: 500 }}>{stat.value}</strong>
                </li>
              ))}
            </ul>
          </Col>

          <Col span={24} xxl={8}>
            <Title level={2} style={{ fontWeight: 400 }}>
              More statistics
            </Title>
            <Text type="secondary">
              The rest of {coinDetails.name} statistics.
            </Text>
            <ul className={styles.list}>
              {moreStats.map((stat, i) => (
                <li key={i}>
                  <div>
                    {stat.icon} {stat.title}
                  </div>
                  <strong style={{ fontWeight: 500 }}>{stat.value}</strong>
                </li>
              ))}
            </ul>
          </Col>

          <Col span={24} xxl={8}>
            <Title level={2} style={{ fontWeight: 400 }}>
              <strong style={{ color: coinDetails.color, fontWeight: 700 }}>
                {coinDetails.name}
              </strong>{" "}
              links
            </Title>
            <Text type="secondary">
              The rest of {coinDetails.name} statistics.
            </Text>
            <ul className={styles.list}>
              {coinDetails.links.map(
                (stat: any, i: number) =>
                  i < 4 && (
                    <li key={i}>
                      <a href={stat.url} target="_blank" rel="noreferrer">
                        {stat.url}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CurrencyDetail;
