export interface Device {
  id?: string
  ip: string
  current?: boolean
  name?: boolean
}

export interface DeviceCache extends Device {
  id: string
  refreshToken: string
}
