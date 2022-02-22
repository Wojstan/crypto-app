import { useParams } from "react-router";
import { useGetCurrencyDetailsQuery } from "../../services/cryptoAPI";
import { Typography, Spin, Row } from "antd";
import styles from "./CurrencyDetail.module.css";

import millify from "millify";
import {
  CreditCardOutlined,
  DollarCircleOutlined,
  DollarOutlined,
  GlobalOutlined,
  PayCircleOutlined,
  StarOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import StatList from "../../components/StatList/StatList";
import ChartCard from "../../components/ChartCard/ChartCard";

const { Title, Text } = Typography;

const CurrencyDetail = () => {
  const { coinId } = useParams<{ coinId?: string }>();
  const { data, isFetching } = useGetCurrencyDetailsQuery(coinId as string);

  const coinDetails = data?.data?.coin;

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
      value: `${millify(coinDetails["24hVolume"])}$`,
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
      value: `${millify(coinDetails.supply.total)}$`,
      icon: <GlobalOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "Circulating Supply",
      value: `${millify(coinDetails.supply.circulating)}$`,
      icon: <DollarCircleOutlined style={{ color: coinDetails.color }} />,
    },
    {
      title: "Markets",
      value: coinDetails.numberOfMarkets,
      icon: <PayCircleOutlined style={{ color: coinDetails.color }} />,
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <img height={60} src={coinDetails.iconUrl} alt="" />
        <span>
          <Title>
            {coinDetails.name} ({coinDetails.symbol})
          </Title>
          <Text type="secondary">
            Live price, history, market cap and supply.
          </Text>
        </span>
      </header>

      <div className={styles.main}>
        <ChartCard
          price={coinDetails.price}
          coinId={coinId as string}
          color={coinDetails.color}
        />
      </div>

      <div className={styles.about}>
        <Row gutter={64}>
          <StatList
            title={
              <>
                <strong style={{ color: coinDetails.color }}>
                  {coinDetails.name}
                </strong>{" "}
                main statistics
              </>
            }
            info={`The most important statistics of ${coinDetails.name} like rank or market cap`}
            stats={mainStats}
          />

          <StatList
            title="More stats"
            info={`The rest of ${coinDetails.name} statistics`}
            stats={moreStats}
          />

          <StatList
            title={
              <>
                <strong style={{ color: coinDetails.color }}>
                  {coinDetails.name}
                </strong>{" "}
                links
              </>
            }
            info={`${coinDetails.name} links`}
            links={coinDetails.links}
          />
        </Row>
      </div>
    </>
  );
};

export default CurrencyDetail;
