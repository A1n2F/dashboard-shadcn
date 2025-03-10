import { Aside } from "./aside";
import { ContentList } from "./contentList";

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <Aside />
            <ContentList />
        </div>
    )
}