"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, LogOutIcon, UserRound } from "lucide-react";
import Navitems from "./Navitems";

const UserDropdown = () => {

    const router = useRouter();

    const handleSignout = async () => {
        router.push("/signin")
    }

    const user = { name: "Pritesh", email: "mailforpritesh@gmail.com" };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className="flex items-center gap-2 hover:text-yellow-500">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block font-medium text-gray-200 ">
                        {user.name}
                    </div>

                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ">
                        <span >{user.name}</span>
                        <span>{user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuLabel onClick={handleSignout} className="cursor-pointer text-sm gap-1 flex items-center hover:text-yellow-300">
                    <LogOut className="h-3 w-3" />
                    Sign Out
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="sm:hidden" />
                <DropdownMenuItem className="sm:hidden">
                    <nav >
                        <Navitems />
                    </nav>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
