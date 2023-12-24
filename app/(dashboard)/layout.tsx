import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getAPILimitCount } from "@/lib/api-limit"

const DashBoardLayout = async ({children} : {children: React.ReactNode}) => {
    
    const apiLimitCount = await getAPILimitCount();

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-700">
                <div>
                    <Sidebar apiLimitCount={apiLimitCount} />
                </div>
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
           

        </div>
    )
}

export default DashBoardLayout