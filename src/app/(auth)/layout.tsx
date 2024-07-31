const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="">
        <div className="bg-gray-50 h-screen py-52">
          <div className="flex bg-white rounded-lg shadow-xl overflow-hidden mx-auto lg:max-w-5xl">
            <div
              className="hidden lg:block lg:w-1/2 bg-cover"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)",
              }}
            ></div>
            <div className="w-full p-8 lg:w-1/2">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
