import {
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  StarOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import BurgerMenu from "../burgerMenu";
import useWindowSize from "../customHook/useWindowSize";
import "./style.css";

export const TopBar = () => {
  const windowSize = useWindowSize();

  const items = [
    {
      label: <h6>ENG</h6>,
      key: "0",
    },
    {
      label: <h6>HIN</h6>,
      key: "1",
    },
    {
      label: <h6>CHN</h6>,
      key: "2",
    },
  ];

  return (
    <div className="row px-2 py-3 m-0">
      <div className="row">
        <div className="col-4 d-flex align-items-center">
          {windowSize < 600 && <BurgerMenu />}
          <StarOutlined className="h2" />
        </div>
        <h1 className="logo col-4 d-flex justify-content-center">Logo</h1>
        <div
          className={`${
            windowSize > 600 ? "" : "p-0"
          } col-4 d-flex justify-content-end align-items-center`}
        >
          <SearchOutlined
            className={`${windowSize > 600 ? "mr-10" : "mr-5"} h5 pointer`}
          />
          <HeartOutlined
            className={`${windowSize > 600 ? "mr-10" : "mr-5"} h5 pointer`}
          />
          <WalletOutlined
            className={`${windowSize > 600 ? "mr-10" : ""} h5 pointer`}
          />
          <UserOutlined
            className={`${windowSize > 600 ? "mr-10" : "d-none"} h5 pointer`}
          />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div>
              <h6 className={`${!(windowSize > 600) && "d-none"} mr-2 pointer`}>
                ENG
                <DownOutlined />
              </h6>
            </div>
          </Dropdown>
        </div>
        <div
          className={`${
            !(windowSize > 600) && "d-none"
          } col-md-7 col-sm-12 d-flex justify-content-between mx-auto my-4`}
        >
          <div>
            <h5>SHOP</h5>
          </div>
          <div>
            <h5>SKILLS</h5>
          </div>
          <div>
            <h5>STORIES</h5>
          </div>
          <div>
            <h5>ABOUT</h5>
          </div>
          <div>
            <h5>CONTACT US</h5>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-12 d-flex justify-content-center m-auto flex-column">
        <h2 className="mx-auto my-3">DISCOVER OUR RPODUCTS</h2>
        <p className="m-auto text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
    </div>
  );
};
