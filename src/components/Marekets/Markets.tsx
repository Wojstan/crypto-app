import { Card, Spin, Row, Col } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import millify from "millify";
import { useGetExchangeMarketsQuery } from "../../services/cryptoAPI";

const { Meta } = Card;
type Props = {
  query: string;
};

const Markets = ({ query }: Props) => {
  const { data, isFetching } = useGetExchangeMarketsQuery(query);

  const marketData = data?.data?.exchanges;

  if (isFetching) {
    return <Spin size="large" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {marketData.map((market: any) => (
        <Col key={market.uuid} xl={6} md={12} span={24}>
          <Card>
            <Meta
              avatar={<Avatar src={market.iconUrl} />}
              title={
                <a
                  href={market.coinrankingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {market.name}
                </a>
              }
              description={`${millify(market.price)}$`}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Markets;
