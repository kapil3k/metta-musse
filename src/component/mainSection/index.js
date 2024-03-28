import { DownOutlined, LeftOutlined } from "@ant-design/icons";
import { Checkbox, Col, Collapse, Divider, Dropdown, Row } from "antd";
import { useEffect, useState } from "react";
import ProductCard from "../productCard";
import ProductLoader from "../productLoader";
import useWindowSize from "./../customHook/useWindowSize";
import "./style.css";

const MainSection = () => {
  const windowSize = useWindowSize();

  const [selectedtRec, setSelectedtRec] = useState("Recommended");
  const [showFilter, setShowFilter] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProductsData(json))
      .finally(() => setLoader(false));
  }, []);

  const handleFilter = () => {
    setShowFilter((pre) => !pre);
  };

  const items = [
    {
      label: (
        <div
          className={`${
            selectedtRec === "Recommended" ? "text-bolder" : ""
          } pointer`}
          onClick={() => setSelectedtRec("Recommended")}
        >
          Recommended
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <span
          className={`${
            selectedtRec === "Newest First" ? "text-bolder" : ""
          } pointer`}
          onClick={() => setSelectedtRec("Newest First")}
        >
          Newest First
        </span>
      ),
      key: "1",
    },
    {
      label: (
        <span
          className={`${
            selectedtRec === "Popular" ? "text-bolder" : ""
          } pointer`}
          onClick={() => setSelectedtRec("Popular")}
        >
          Popular
        </span>
      ),
      key: "2",
    },
    {
      label: (
        <span
          className={`${
            selectedtRec === "Price : Low To High" ? "text-bolder" : ""
          } pointer`}
          onClick={() => setSelectedtRec("Price : Low To High")}
        >
          Price : Low To High
        </span>
      ),
      key: "3",
    },
    {
      label: (
        <span
          className={`${
            selectedtRec === " Price : High To Low" ? "text-bolder" : ""
          } pointer`}
          onClick={() => setSelectedtRec(" Price : High To Low")}
        >
          Price : High To Low
        </span>
      ),
      key: "4",
    },
  ];

  const CollapseItems = [
    {
      key: "1",
      label: (
        <>
          <strong>Ideal For</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <strong>Ocassion</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <strong>Work</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <>
          <strong>Fabric</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <>
          <strong>Segment</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <>
          <strong>Suitable For</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "7",
      label: (
        <>
          <strong>Raw Material</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "8",
      label: (
        <>
          <strong>Pattern</strong>
          <br />
          All
        </>
      ),
      children: (
        <div>
          <div className="text-grey text-decoration-underline mb-2">
            <Checkbox>Unselect all</Checkbox>
          </div>
          <div>
            <div>
              <Checkbox>Men</Checkbox>
            </div>
            <div>
              <Checkbox>Women</Checkbox>{" "}
            </div>
            <div>
              <Checkbox>Baby And Kids</Checkbox>{" "}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="row m-0">
      <div className={`${windowSize > 600 ? "col-10" : "col-12"} m-auto`}>
        <Divider className="colour-black" />
        <div className="d-flex justify-content-between">
          <div>
            {windowSize > 600 && <strong>2343 Items</strong>}
            <span className={windowSize > 600 && "mx-4"}>
              <LeftOutlined className="mx-1" />
              <span
                onClick={handleFilter}
                className="text-decoration-underline pointer"
              >
                {showFilter ? "HIDE" : "Show"} FILTERS
              </span>
            </span>
          </div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            placement="bottom"
            className="pointer"
          >
            <strong>
              Recommended <DownOutlined />
            </strong>
          </Dropdown>
        </div>
        <Divider className="colour-black divder-mobile" />
        <Row gutter={16}>
          <Col sm={6}>
            <Row gutter={16}>
              <Col
                className={`${
                  showFilter && windowSize > 600 ? "d-block" : "d-none"
                }`}
                sm={24}
              >
                <div>
                  <Checkbox>
                    <strong>Customizble</strong>
                  </Checkbox>
                </div>
                <Divider className="colour-black mb-0" />
                <Collapse
                  ghost
                  defaultActiveKey={null}
                  expandIconPosition="end"
                  items={CollapseItems}
                />
              </Col>
            </Row>
          </Col>
          <Col span={showFilter && windowSize > 600 ? 18 : 24}>
            <Row gutter={[16, 16]}>
              {loader ? (
                <ProductLoader showFilter={showFilter} />
              ) : (
                <ProductCard
                  productsData={productsData}
                  showFilter={showFilter}
                />
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainSection;
