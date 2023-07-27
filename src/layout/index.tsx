import { FC, lazy, Suspense } from "react";
import { NavBar, TabBar } from "antd-mobile";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

import styles from "./index.module.css";
import { PageLoading } from "../components/page-loading";
const Home = lazy(() => import("../pages/home"));
const Todo = lazy(() => import("../pages/todo"));
const Message = lazy(() => import("../pages/message"));
const PersonalCenter = lazy(() => import("../pages/personal-center"));

const Footer: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    console.log(value);
    navigate(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/todo",
      title: "待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/message",
      title: "消息",
      icon: <MessageOutline />,
    },
    {
      key: "/me",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar
      activeKey={pathname}
      onChange={(value) => {
        setRouteActive(value);
      }}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <NavBar
      onBack={() => {
        navigate(-1);
      }}
    >
      配合路由使用
    </NavBar>
  );
};

function Layout() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <div className={styles.app}>
          <div className={styles.top}>
            <Header />
          </div>
          <div className={styles.body}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/message" element={<Message />} />
              <Route path="/me" element={<PersonalCenter />} />
            </Routes>
          </div>
          <div className={styles.bottom}>
            <Footer />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default Layout;
