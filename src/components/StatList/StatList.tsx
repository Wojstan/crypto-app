import { Col, Typography } from "antd";
import styles from "./StatList.module.css";

const { Title, Text } = Typography;

type Props = {
  title: React.ReactNode;
  info: string;
  stats?: Array<{
    title: string;
    value: number | string;
    icon: React.ReactNode;
  }>;
  links?: Array<{
    url: string;
  }>;
};

const StatList = ({ title, info, stats, links }: Props) => (
  <Col span={24} xxl={8}>
    <Title level={2} style={{ fontWeight: 400 }}>
      {title}
    </Title>
    <Text type="secondary">{info}</Text>
    {links && (
      <ul className={styles.list}>
        {links.map(
          (stat, i) =>
            i < 4 && (
              <li key={i}>
                <a href={stat.url} target="_blank" rel="noreferrer">
                  {stat.url}
                </a>
              </li>
            )
        )}
      </ul>
    )}

    {stats && (
      <ul className={styles.list}>
        {stats.map((stat, i) => (
          <li key={i}>
            <div className="d-flex">
              {stat.icon}{" "}
              <Title level={4} style={{ margin: 0 }}>
                {stat.title}
              </Title>
            </div>
            <Title level={4}>{stat.value}</Title>
          </li>
        ))}
      </ul>
    )}
  </Col>
);

export default StatList;
