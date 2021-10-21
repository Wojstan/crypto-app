import { Typography, Row, Spin } from "antd";
import GlobalStat from "../../components/GlobalStat/GlobalStat";

import { useGetGlobalStatsQuery } from "../../services/cryptoAPI";

import styles from "./Home.module.css";
import millify from "millify";
import MainTable from "../../components/MainTable/MainTable";

import {
  WalletOutlined,
  MoneyCollectOutlined,
  DollarCircleOutlined,
  UserSwitchOutlined,
  TransactionOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetGlobalStatsQuery(0);

  const statData = data?.data;

  return (
    <>
      <header className={styles.header}>
        <Title>Global Statistics</Title>
        <Row gutter={16}>
          {isFetching ? (
            <Spin size="large" />
          ) : (
            <>
              <GlobalStat
                icon={<MoneyCollectOutlined />}
                value={millify(statData.total24hVolume)}
                title="Total 24h Volume"
              />
              <GlobalStat
                value={millify(statData.totalCoins)}
                title="Total Coins"
                icon={<WalletOutlined />}
              />
              <GlobalStat
                value={statData.totalExchanges}
                title="Total Exchanges"
                icon={<UserSwitchOutlined />}
              />
              <GlobalStat
                value={millify(statData.totalMarketCap)}
                title="Total Market Cap"
                icon={<DollarCircleOutlined />}
              />
              <GlobalStat
                value={millify(statData.totalMarkets)}
                title="Total Markets"
                icon={<TransactionOutlined />}
              />
              <GlobalStat
                value={millify(statData.totalCoins)}
                title="Total Coins"
                icon={<WalletOutlined />}
              />
            </>
          )}
        </Row>
      </header>
      <div className={styles.main}>
        <Title level={2}>Most popular cryptos</Title>
        <MainTable />
      </div>
    </>
  );
};

export default Home;
