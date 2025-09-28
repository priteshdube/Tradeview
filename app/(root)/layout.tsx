import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen text-gray-400">
              <Header />
            <div className="container m-5 p-10">{children}</div>
        </main>
    );
};

export default layout;
