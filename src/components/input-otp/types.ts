export const REGEXP_ONLY_DIGITS = "^\\d+$"
export const REGEXP_ONLY_CHARS = "^[a-zA-Z]+$"
export const REGEXP_ONLY_DIGITS_AND_CHARS = "^[a-zA-Z0-9]+$"

export type OTPProps = {
  length: number
  onInputComplete: (otp: string) => void
  pattern?: 'digits' | 'chars' | 'digitsAndChars'
}
