import type { IconType } from 'react-icons'
import { FaDiscord, FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { SiRoblox } from 'react-icons/si'
import type { SocialPlatform } from '../../types'

type ContactIconProps = {
  name: SocialPlatform
}

const icons: Record<SocialPlatform, IconType> = {
  x: FaXTwitter,
  youtube: FaYoutube,
  discord: FaDiscord,
  roblox: SiRoblox,
  github: FaGithub,
}

export function ContactIcon({ name }: ContactIconProps) {
  const Icon = icons[name]

  return <Icon aria-hidden="true" focusable="false" />
}
