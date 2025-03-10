import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-900">
                        Últimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-5 h-5" />
                </div>

                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/devfraga.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-sm sm:text-base font-semibold">Tyrell Wellick</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@email.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/devfraga.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-sm sm:text-base font-semibold">Tyrell Wellick</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@email.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/devfraga.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="text-sm sm:text-base font-semibold">Tyrell Wellick</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@email.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}