import { Col, Card, Statistic } from "antd";

type Props = {
  value: number | string;
  title: string;
  icon: JSX.Element;
};

const GlobalStat = ({ value, title, icon }: Props) => (
  <Col xxl={4} xl={8} md={12} sm={24}>
    <Card>
      <Statistic
        title={title}
        value={value}
        valueStyle={{ color: "#1890ff " }}
        prefix={icon}
        precision={2}
      />
    </Card>
  </Col>
);

export default GlobalStat;
