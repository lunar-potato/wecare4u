import { Footer } from "./_components/footer";

const mainHome = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-slate-100">
            <main className="pt-5 pb-5 bg-slate-100">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default mainHome;