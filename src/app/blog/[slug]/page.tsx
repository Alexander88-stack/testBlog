import BlogCategories from "@/models/BlogCategories";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params }: any) => {
  const category = await BlogCategories.findOne({ slug: params.slug });
  if (!category) {
    notFound();
  }
  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
};

export default CategoryPage;
