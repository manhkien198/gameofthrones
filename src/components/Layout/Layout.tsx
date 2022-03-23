import { LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Avt from "../../assets/Setting.svg";
import Books from "../pages/Books";
export default function MainLayout() {
  const { Header, Content, Footer, Sider } = Layout;
  const navi = useNavigate();
  const handleLogout = () => {
    navi("/login");
  };
  return (
    <Layout>
      <Header className="header">
        <div className="header__logo">
          <Link to="/">GAMEOFTHRONES</Link>
        </div>
        <div className="header__add">
          <div className="header__add--user user">
            <a className="user__info" href="#!">
              <img src={Avt} alt="avatar" />
            </a>
          </div>
          <div className="header__add--actions">
            <a href="#!" onClick={handleLogout}>
              <LogoutOutlined /> Đăng xuất
            </a>
          </div>
        </div>
      </Header>
      <Content>
        <Books />
      </Content>
    </Layout>
  );
}
