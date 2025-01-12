import { GetChild } from "@/service/child";

export default async function ChildTask() {
    const child = await GetChild()
    return (
        <div>
<div>
    <p>Name: {child.name}</p>
    <p>ID: {child.id}</p>
    <p>Telegram ID: {child.telegram_id}</p>
</div>
        </div>
    )
}