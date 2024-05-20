import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
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

  const patternMap = {
    digits: REGEXP_ONLY_DIGITS,
    chars: REGEXP_ONLY_CHARS,
    digitsAndChars: REGEXP_ONLY_DIGITS_AND_CHARS,
  }

  const onValueChange = (value: string) => {
    if (value.length === length) {
      onInputComplete(value)
    }
  }

  return (
    <InputOTP
      maxLength={length}
      pattern={patternMap[pattern]}
      onChange={(value) => onValueChange(value)}
    >
      <InputOTPGroup>
        {new Array(length).fill(null).map((_, index) => (
          <InputOTPSlot key={index} index={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  )
}