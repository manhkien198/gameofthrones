import { LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Avt from "../../assets/Setting.svg";
import { useGlobalContext } from "../../Context/Context";
import Books from "../pages/Books";
export default function MainLayout() {
  const { Header, Content } = Layout;
  const navi = useNavigate();
  const { setLogged } = useGlobalContext();

  const handleLogout = () => {
    setLogged(false);
    navi("/");
  };
  return (
    <Layout>
      <Header className="header">
        <div className="header__logo">
          <Link to="/home">GAMEOFTHRONES</Link>
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
