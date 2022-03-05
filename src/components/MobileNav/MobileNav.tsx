import { HomeOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      {" "}
      <Typography.Title
        level={2}
        type="secondary"
        style={{ margin: "0rem 1rem 0rem 0rem" }}
      >
        <span className="blue">C</span>H
      </Typography.Title>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MobileNav;
