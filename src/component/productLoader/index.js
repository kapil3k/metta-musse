import { Card, Col, Skeleton } from "antd";
import "./style.css";

const ProductLoader = ({ showFilter }) => {
  return (
    <>
      {[...Array(9)].map((e, i) => (
        <Col key={i} xs={12} md={showFilter ? 8 : 6}>
          <Card
            hoverable
            cover={<Skeleton.Image className="product-image" active={true} />}
          >
            <Skeleton.Input size="small" active={true} />
            <Skeleton.Input
              size="small"
              className="mt-1 ske-height"
              active={true}
              block={true}
            />
            <Skeleton.Input
              size="small"
              className="mt-1 ske-height"
              active={true}
              block={true}
            />
            <Skeleton.Input
              size="small"
              className="mt-1 ske-height"
              active={true}
            />
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ProductLoader;
