import type { MinimalUser, Optional, PublicUser, RawUser } from '../types'

export function toPublicUser(user: Optional<RawUser, 'passwd' | 'passwdSalt'>): PublicUser {
  const { passwd, passwdSalt, ...result } = user
  return result
}

export function toMinimalUser(user: MinimalUser): MinimalUser {
  const { userId, userName, nickName } = user
  return { userId, userName, nickName }
}
