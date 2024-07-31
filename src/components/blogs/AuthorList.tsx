import Image from "next/image";
const AuthorList = () => {
  const authors = [];
  for (let index = 0; index < 10; index++) {
    authors.push(
      <li className="flex items-center shadow-sm">
        <div className="object-cover w-10 h-10 mx-4 relative">
          <Image
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
            alt="avatar"
            fill
            className="rounded-full"
          />
        </div>

        <p>
          <a href="#" className="mx-1 font-bold text-gray-700 hover:underline">
            Alex John
          </a>
          <span className="text-sm font-light text-gray-700">
            Created 23 Posts
          </span>
        </p>
      </li>
    );
  }
  return (
    <div className="px-8">
      <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
      <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
        <ul className="-mx-4 flex flex-col gap-y-2">{authors}</ul>
      </div>
    </div>
  );
};
export default AuthorList;
