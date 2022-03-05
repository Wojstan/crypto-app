import { Layout, Typography } from "antd";
import Currency from "./components/Currency/Currency";
import Menu from "./components/Menu/Menu";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./views/Home/Home";
import CurrencyDetail from "./views/CurrencyDetail/CurrencyDetail";
import Exchange from "./views/Exchange/Exchange";
import MobileNav from "./components/MobileNav/MobileNav";

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
    <Layout className="site-layout">
      <Header>
        <Currency />
        <MobileNav />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/currency/:coinId">
            <CurrencyDetail />
          </Route>
          <Route exact path="/exchanges">
            <Exchange />
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
