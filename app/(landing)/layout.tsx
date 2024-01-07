
const LandingLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <main className="bg-[#111827] min-h-screen">
            <div className="mx-auto max-w-screen-lg h-full w-full">
                {children}
            </div>

        </main>
    )
}

export default LandingLayout;