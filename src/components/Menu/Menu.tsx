import { Menu, Typography } from "antd";
import {
  MoneyCollectOutlined,
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

const { Title } = Typography;

const MyMenu = () => {
  return (
    <>
      <div className={styles.brand}>
        <Title level={2} type="secondary">
          <span className={styles.blue}>Crypto</span>Currencies
        </Title>
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ height: "94vh" }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MyMenu;
