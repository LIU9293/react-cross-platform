import { useState, useRef, useEffect } from 'react'
import { View, Input } from '@/components/ui'
import {
  OTPProps,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from './types'

export function InputOPT ({
  length = 6,
  pattern = 'digitsAndChars',
  onInputComplete = () => {}
}: OTPProps) {
  const [opt, setOpt] = useState('')
  const inputRefs = new Array(length).fill(null).map(() => useRef(null))

  const patternMap = {
    digits: REGEXP_ONLY_DIGITS,
    chars: REGEXP_ONLY_CHARS,
    digitsAndChars: REGEXP_ONLY_DIGITS_AND_CHARS,
  }

  const onValueChange = (value: string, index: number) => {
    if (value.match(patternMap[pattern])) {
      setOpt(prev => {
        const newValue = prev.split('')
        newValue[index] = value
        return newValue.join('')
      })

      // focus next input
      if (index < length - 1) {
        // @ts-expect-error
        inputRefs[index + 1].current.focus()
      }
    }
  }

  useEffect(() => {
    if (opt.length === length) {
      onInputComplete(opt)
    }
  }, [opt])

  return (
    <View className='flex flex-row gap-2 flex-1 w-full mb-12'>
      {new Array(length).fill(null).map((_, index) => (
        <View className='mt-6 flex flex-1 items-center justify-center' key={index}>
          <Input
            ref={inputRefs[index]}
            type='number'
            className='pl-6 pr-6'
            maxLength={1}
            onTextInput={e => onValueChange(e.nativeEvent.text, index)}
          />
        </View>
      ))}
    </View>
  )
}