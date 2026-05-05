type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      {children}
    </div>
  );
}

export default AuthLayout;