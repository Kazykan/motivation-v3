import { ModeToggle } from "@/components/mode-toggle"
import { ToggleGroupCalendar } from "@/components/toggle-calendar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Button>Hi</Button>
        <ModeToggle />
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="m-2">
              <ToggleGroupCalendar />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
