import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getAPILimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription";

const DashBoardLayout = async ({children} : {children: React.ReactNode}) => {
    
    const apiLimitCount = await getAPILimitCount();
    const isPro = await checkSubscription();

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-700">
                <div>
                    <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
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