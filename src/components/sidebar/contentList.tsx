import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import { Home, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react";

export function ContentList() {
    return (
        <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b border-gray-300 bg-background gap-4 sm:static
            sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden cursor-pointer">
                            <PanelBottom className="w-5 h-5"/>
                            <span className="sr-only">Abrir / fechar menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="sm:max-w-x">
                        <SheetTitle className="sr-only">
                            Menu
                        </SheetTitle>
                        
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link href="#" className="flex ml-4 mt-3 w-10 h-10 bg-gray-900 rounded-full text-lg items-center justify-center text-white
                            md:text-base gap-2" prefetch={false}>
                                <Package className="w-5 h-5 transition-all"/>
                            </Link>

                            <Link href="#" className="flex items-center gap-4 px-6 text-gray-500 hover:text-gray-700" prefetch={false}>
                                <Home className="w-5 h-5 transition-all"/>
                                Início
                            </Link>

                            <Link href="#" className="flex items-center gap-4 px-6 text-gray-500 hover:text-gray-700" prefetch={false}>
                                <ShoppingBag className="w-5 h-5 transition-all"/>
                                Pedidos
                            </Link>

                            <Link href="#" className="flex items-center gap-4 px-6 text-gray-500 hover:text-gray-700" prefetch={false}>
                                <Package className="w-5 h-5 transition-all"/>
                                Produtos
                            </Link>

                            <Link href="#" className="flex items-center gap-4 px-6 text-gray-500 hover:text-gray-700" prefetch={false}>
                                <Users className="w-5 h-5 transition-all"/>
                                Clientes
                            </Link>

                            <Link href="#" className="flex items-center gap-4 px-6 text-gray-500 hover:text-gray-700" prefetch={false}>
                                <Settings2 className="w-5 h-5 transition-all"/>
                                Configurações
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                <h2>Menu</h2>
            </header>
        </div>
    )
}