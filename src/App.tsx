import { Layout, Button, Typography } from "antd";
import Currency from "./components/Currency/Currency";
import Menu from "./components/Menu/Menu";

import { ReloadOutlined } from "@ant-design/icons";

import Home from "./views/Home/Home";

import { Link } from "react-router-dom";

const { Title } = Typography;

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        width="18rem"
      >
        <Menu />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: "18rem" }}>
        <Header>
          <Currency />
          <Button type="primary">
            Refresh data <ReloadOutlined />
          </Button>
        </Header>
        <Content>
          <Home />
        </Content>
        <Footer>
          <Title level={5} style={{ textAlign: "center" }}>
            Copyright © 2021 <Link to="/">CryptoHouse</Link>
          </Title>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
