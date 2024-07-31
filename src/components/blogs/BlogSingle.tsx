import Image from "next/image";
import Link from "next/link";

const BlogSingle = () => {
  return (
    <div className="mt-6">
      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600">Jun 1, 2020</span>
          <Link
            href="#"
            className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
          >
            Laravel
          </Link>
        </div>
        <div className="mt-2">
          <Link
            href="#"
            className="text-2xl font-bold text-gray-700 hover:underline"
          >
            Build Your New Idea with Laravel Freamwork.
          </Link>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link href="#" className="text-blue-500 hover:underline">
            Read more
          </Link>
          <div>
            <Link href="#" className="flex items-center">
              <div className="w-10 h-10 sm:block hidden object-cover mx-4 relative">
                <Image
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  fill={true}
                  className="rounded-full "
                />
              </div>

              <h1 className="font-bold text-gray-700 hover:underline">
                Alex John
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSingle;
