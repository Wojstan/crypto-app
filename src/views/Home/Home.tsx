import { Typography, Row, Spin } from "antd";
import GlobalStat from "../../components/GlobalStat/GlobalStat";

import { useGetGlobalStatsQuery } from "../../services/cryptoAPI";

import styles from "./Home.module.css";
import millify from "millify";
import MainTable from "../../components/MainTable/MainTable";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetGlobalStatsQuery(0);

  const statData = data?.data;

  return (
    <>
      <div className={styles.header}>
        <Title>Global Statistics</Title>
        <Row gutter={16}>
          {isFetching ? (
            <Spin size="large" />
          ) : (
            <>
              <GlobalStat
                value={millify(statData.total24hVolume)}
                title="Total 24h Volume"
                rise
              />
              <GlobalStat
                value={statData.totalCoins}
                title="Total Coins"
                rise={false}
              />
              <GlobalStat
                value={statData.totalExchanges}
                title="Total Exchanges"
                rise
              />
              <GlobalStat
                value={millify(statData.totalMarketCap)}
                title="Total Market Cap"
                rise
              />
              <GlobalStat
                value={millify(statData.totalMarkets)}
                title="Total Markets"
                rise={false}
              />
              <GlobalStat
                value={statData.totalCoins}
                title="Total Coins"
                rise
              />
            </>
          )}
        </Row>
      </div>
      <div className={styles.main}>
        <Title level={2}>Most popular cryptos</Title>
        <MainTable />
      </div>
    </>
  );
};

export default Home;
