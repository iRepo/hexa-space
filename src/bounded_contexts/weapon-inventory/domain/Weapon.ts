import { SpaceShip } from "./SpaceShip"

export type Weapon = {
    name: string,
    count: number,
    power?: number,
    inStock?: number
    mountedOn?: [{ ship: SpaceShip, count: number }]
}