import { Col, Card, Statistic } from "antd";

type Props = {
  value: number | string;
  title: string;
  icon: JSX.Element;
};

const GlobalStat = ({ value, title, icon }: Props) => (
  <Col xxl={4} xl={8} md={12} span={24} style={{ margin: "1rem 0rem" }}>
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
