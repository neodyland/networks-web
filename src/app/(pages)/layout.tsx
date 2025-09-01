import Header from "@/components/layout/Header";

const Layout: React.FC<LayoutProps<"/">> = ({ children }) => {
    return (
        <div className="layout bg-black">
            <Header />
            <main className="text-white max-w-4xl mx-auto w-full px-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
