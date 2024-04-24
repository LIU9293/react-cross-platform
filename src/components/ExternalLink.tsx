import React from 'react'
import { Link } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }
) {
  return (
    <Link
      target="_blank"
      {...props}
      // @ts-expect-error: External URLs are not typed.
      href={props.href}
      onPress={(e) => {        
        e.preventDefault()
        WebBrowser.openBrowserAsync(props.href as string)
      }}
    />
  )
}
