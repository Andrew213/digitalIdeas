import Header from "@/components/Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-dvh flex-col bg-blue-100 bg-texture bg-blend-overlay bg-no-repeat bg-cover  px-32">
      <Header />
      <main className="shrink-0 grow basis-auto">{children}</main>
      <footer>футер</footer>
      {/* <main className="shrink-0 grow basis-auto">{children}</main>
      <footer className="shrink-0 grow-0 basis-auto">фоотер</footer> */}
    </div>
  );
};

export default Layout;
