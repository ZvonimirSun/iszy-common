export interface Device {
  id?: string
  ip: string
  name: string
  current?: boolean
  createdAt?: Date
  updatedAt?: Date
  [key: string]: any
}

export interface DeviceCache extends Device {
  id: string
  refreshToken: string
}
