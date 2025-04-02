import type { RawRole } from './role'

export interface RawGroup {
  id?: number
  name: string
  alias: string
  parentId?: number
  roles?: RawRole[]
}
