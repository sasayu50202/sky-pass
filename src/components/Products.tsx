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
    <section className="bg-white py-24 px-4">
      <Box className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">note一覧</h2>

        <Box className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Box
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* <Plane className="w-12 h-12 text-blue-600 mb-6" /> */}
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p className="text-slate-600 mb-6">{product.description}</p>
              <Box className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold">
                  ¥{product.price.toLocaleString()}
                </span>
                <span className="text-slate-500">税込</span>
              </Box>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                購入する
              </button>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};
