export interface Device {
  id?: string
  ip: string
}

export interface DeviceCache extends Device {
  id: string
  refreshToken: string
}
