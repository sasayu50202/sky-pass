import { Box } from "@chakra-ui/react";
import { FC } from "react";
const products = [
  {
    title: "基礎学習パック",
    description: "パイロット試験の基礎から応用まで、体系的に学べる総合教材",
    price: 29800,
  },
  {
    title: "実践問題集",
    description: "過去問題と模擬試験で実践的な試験対策ができる問題集",
    price: 19800,
  },
];

export const Products: FC = () => {
  return (
    <section>
      <Box>
        <h2>note一覧</h2>

        <Box>
          {products.map((product, index) => (
            <Box key={index}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Box>
                <span>¥{product.price.toLocaleString()}</span>
                <span>税込</span>
              </Box>
              <button>購入する</button>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};
