import { Layout } from "antd";
import Menu from "./components/Menu/Menu";

import Home from "./views/Home/Home";

const App = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <Sider width="18rem">
        <Menu />
      </Sider>
      <Layout>
        <Header></Header>
        <Content>
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
