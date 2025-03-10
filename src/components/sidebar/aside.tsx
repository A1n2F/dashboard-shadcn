import { Home, LogOut, Package, Settings2, ShoppingBag, Users } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import Link from "next/link";

export function Aside() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r border-gray-300 bg-gray-50 sm:flex flex-col">
            <nav className="flex flex-col items-center gap-4 px-2 py-5">
                <TooltipProvider>
                    <Link href="#" className="flex w-9 h-9 shrink-0 items-center justify-center bg-gray-900 text-white rounded-full">
                        <Package className="w-4 h-4"/>
                        <span className="sr-only">DashBoard Avatar</span>
                    </Link>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-gray-500
                            transition-colors hover:text-gray-900">
                                <Home className="w-5 h-5"/>
                                <span className="sr-only">Início</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="text-lg">Início</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-gray-500
                            transition-colors hover:text-gray-900">
                                <ShoppingBag className="w-5 h-5"/>
                                <span className="sr-only">Pedidos</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="text-lg">Pedidos</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-gray-500
                            transition-colors hover:text-gray-900">
                                <Package className="w-5 h-5"/>
                                <span className="sr-only">Produtos</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="text-lg">Produtos</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-gray-500
                            transition-colors hover:text-gray-900">
                                <Users className="w-5 h-5"/>
                                <span className="sr-only">Clientes</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="text-lg">Clientes</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-gray-500
                            transition-colors hover:text-gray-900">
                                <Settings2 className="w-5 h-5"/>
                                <span className="sr-only">Configurações</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="text-lg">Configurações</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>

            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-gray-500
                            transition-colors hover:text-gray-900">
                                <LogOut className="w-5 h-5 text-red-500"/>
                                <span className="sr-only">Sair</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="text-lg">Sair</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}