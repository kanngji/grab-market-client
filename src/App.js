import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import logo from "./logo.svg";
import "./App.css";
import MainPageCompoent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          {/* 기본메인페이지로 돌아가기 */}
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>

          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageCompoent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
