import { Layout, Button, Typography } from "antd";
import Currency from "./components/Currency/Currency";
import Menu from "./components/Menu/Menu";
import { Switch, Route, Link } from "react-router-dom";

import { SyncOutlined } from "@ant-design/icons";

import Home from "./views/Home/Home";
import CurrencyDetail from "./views/CurrencyDetail/CurrencyDetail";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
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
          Refresh data <SyncOutlined />
        </Button>
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/currency/:coinId">
            <CurrencyDetail />
          </Route>
        </Switch>
      </Content>
      <Footer>
        <Title level={5} style={{ textAlign: "center" }}>
          Copyright © 2021 <Link to="/">CryptoHouse</Link>
        </Title>
      </Footer>
    </Layout>
  </Layout>
);

export default App;
