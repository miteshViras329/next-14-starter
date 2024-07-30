const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
};
export default AuthLayout;
