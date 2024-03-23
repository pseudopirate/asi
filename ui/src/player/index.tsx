/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1AskG90KrUK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Player() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Tervetuloa!</CardTitle>
        <CardDescription>Kirjaudu sisään valitsemalla ryhmäsi</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username1">Käyttäjätunnus</Label>
          <Input id="username1" placeholder="Käyttäjätunnus" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password1">Salasana</Label>
          <Input id="password1" placeholder="Salasana" type="password" />
        </div>
        <Button className="w-full">Kirjaudu sisään</Button>
      </CardContent>
    </Card>
  )
}