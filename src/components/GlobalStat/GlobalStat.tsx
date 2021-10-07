import { Col, Card, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

type Props = {
  value: number | string;
  title: string;
  rise: boolean;
};

const GlobalStat = ({ value, title, rise }: Props) => (
  <Col xl={4} lg={8} md={12} sm={24}>
    <Card>
      <Statistic
        title={title}
        value={value}
        valueStyle={rise ? { color: "#3f8600" } : { color: "#cf1322" }}
        prefix={rise ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        precision={2}
      />
    </Card>
  </Col>
);

export default GlobalStat;
