import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="mb-2 mx-3" onClick={showDrawer}>
        <MenuOutlined />
      </div>
      <Drawer
        title={null}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="contact">Contact Us</Menu.Item>
          <Menu.Item key="skills">Skills</Menu.Item>
          <Menu.Item key="stories">Stories</Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
