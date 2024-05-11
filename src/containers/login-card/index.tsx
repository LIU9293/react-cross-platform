import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { View } from "@/components/ui/view"

export function LoginCard () {
  return (
    <View className="flex pt-8 pb-8 w-full items-center justify-center bg-gray-100">
      <View className="mx-4 w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg sm:p-8">
        <View className="flex flex-col items-center space-y-2">
          <Text>Testing App</Text>
          <Text className="text-3xl font-bold tracking-tight">Welcome bilibili</Text>
          <Text className="text-gray-500">Sign in to your account to continue</Text>
        </View>
        <View className="flex flex-col gap-4">
          <View className="flex flex-col gap-2">
            <Text>Email</Text>
            <Input id="email" placeholder="name@example.com" type="text"  />
          </View>
          <View className="flex flex-col gap-2">
            <Text>Password</Text>
            <Input id="password" type="password" />
          </View>
          <Button className="w-full">Sign in</Button>
        </View>
      </View>
    </View>
  )
}