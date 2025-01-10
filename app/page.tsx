import { Header } from "@/components/header"
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
      <main>
        <Header />
          <Button>Hi</Button>

          <Card className="w-[330px] ml-2">
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
  )
}
