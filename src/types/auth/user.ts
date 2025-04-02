import type { RawGroup } from './group'
import type { RawPrivilege } from './privilege'
import type { RawRole } from './role'

export interface RawUser {
  userId: number
  userName: string
  nickName: string
  passwd: string
  passwdSalt?: string
  mobile?: string
  email?: string
  roles?: RawRole[]
  groups?: RawGroup[]
  status: number
  createBy: number
  updateBy: number
  privileges?: RawPrivilege[]
  github?: string
  linuxdo?: string
}

export type PublicUser = Omit<RawUser, 'passwd' | 'passwdSalt'>
export type RegisterUser = Pick<RawUser, 'userName' | 'nickName' | 'mobile' | 'email' | 'passwd'>
