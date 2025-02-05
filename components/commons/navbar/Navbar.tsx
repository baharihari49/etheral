import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <>
            <div className="fixed z-50 w-full">
                <nav className="flex justify-between items-center p-4 container mx-auto">
                    <p className="text-3xl font-bold">Etheral</p>
                    <Button>Connect to wallet</Button>
                </nav>
            </div>
        </>
    )
}