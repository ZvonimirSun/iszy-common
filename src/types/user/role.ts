import type { RawPrivilege } from './privilege'

export interface RawRole {
  id?: number
  name: string
  alias: string
  desc?: string
  privileges?: RawPrivilege[]
}
