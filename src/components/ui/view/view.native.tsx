import { View as RNView, Pressable } from 'react-native'

type ViewProps = React.ComponentPropsWithoutRef<typeof RNView> & {
  onClick?: () => void
}

export function View (props: ViewProps) {
  if (props.onClick) {
    return (
      <Pressable onPress={props.onClick}>
        <RNView {...props} />
      </Pressable>
    )
  }
  
  return <RNView {...props} />
}