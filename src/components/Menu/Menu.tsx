import { Menu, Typography } from "antd";
import { MoneyCollectOutlined, HomeOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

const { Title } = Typography;

const MyMenu = () => {
  return (
    <>
      <div className={styles.brand}>
        <Title level={2} type="secondary">
          <span className="blue">Crypto</span>House
        </Title>
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MyMenu;
