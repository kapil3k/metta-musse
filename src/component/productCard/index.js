import { Card, Col, Rate, Typography } from "antd";
import "./style.css";

const { Meta } = Card;
const { Text } = Typography;

const ProductCard = ({ productsData, showFilter }) => {
  return (
    <>
      {productsData.map((product) => (
        <Col xs={12} md={showFilter ? 8 : 6}>
          <Card
            hoverable
            cover={
              <img
                className="product-image"
                alt={product.title}
                src={product.image}
              />
            }
          >
            <Meta
              title={product.title}
              description={
                <>
                  <Text
                    className="w-100"
                    ellipsis={{
                      tooltip: product.description,
                    }}
                  >
                    {product.description}
                  </Text>
                </>
              }
            />
            <p className="mt-1 mb-1">Price: '$'{product.price}</p>
            <p>Category: {product.category}</p>
            <Rate allowHalf defaultValue={product.rating.rate} />
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ProductCard;
