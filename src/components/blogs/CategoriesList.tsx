import Link from "next/link";

const CategoriesList = () => {
  const categories = [];
  for (let index = 0; index < 10; index++) {
    categories.push(
      <li>
        <Link
          href="#"
          className="m-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
        >
          - AWS
        </Link>
      </li>
    );
  }

  return (
    <div className="px-8 mt-10">
      <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
      <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
        <ul>{categories}</ul>
      </div>
    </div>
  );
};
export default CategoriesList;
