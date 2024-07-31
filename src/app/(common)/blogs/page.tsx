import type { Metadata } from "next";
import AuthorList from "@/components/blogs/AuthorList";
import BlogSingle from "@/components/blogs/BlogSingle";
import CategoriesList from "@/components/blogs/CategoriesList";

export const metadata: Metadata = {
  title: "Blog Listing",
  description: "all blog listings are here.",
};

const BlogPage = () => {
  // Create an array to hold the BlogSingle components
  const blogPosts = [];

  // Use a for loop to push BlogSingle components into the array
  for (let i = 0; i < 10; i++) {
    blogPosts.push(<BlogSingle key={i} />);
  }

  return (
    <div className="container flex justify-between mx-auto">
      <div className="w-full lg:w-8/12">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
          <div>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Latest</option>
              <option>Last Week</option>
            </select>
          </div>
        </div>
        {/* Render the array of BlogSingle components */}
        {blogPosts}
      </div>
      <div className="hidden w-4/12 -mx-8 lg:block">
        <AuthorList />
        <CategoriesList />
      </div>
    </div>
  );
};

export default BlogPage;
