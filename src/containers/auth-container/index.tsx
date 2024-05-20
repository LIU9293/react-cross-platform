import { useState } from 'react'
import { Text, Input, View, Button } from '@/components/ui'
import { InputOPT } from '@/components/input-otp'

export function AuthContainer () {
  const [step, setStep] = useState(0)

  const onSendOTP = () => {
    setStep(1)
  }

  const onLoginWithOPT = (value: string) => {
    setStep(0)
  }

  return (
    <View className='flex flex-col p-2 gap-1'>
      <View className='flex flex-col mb-2'>
        <Text className='font-bold'>Mobile login</Text>
        <Text className='text-sm'>An account will be created automaticlly if the phone number is not used yet</Text>
      </View>
      {step === 0 && <Input placeholder="Phone number" type='number' />}
      {step === 1 && <InputOPT onInputComplete={onLoginWithOPT} length={6} />}
      <View className='mt-4 flex flex-col w-full items-end'>
        <Button variant={'default'} onClick={onSendOTP}>Login</Button>
      </View>
    </View>
  )
}