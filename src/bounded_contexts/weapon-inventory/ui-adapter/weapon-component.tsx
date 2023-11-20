import { Weapon } from "../domain/Weapon"

export const WeaponComponent = ({ weapon }: { weapon: Weapon }) => <>
    <h2 className="weapon" key={weapon.name}>
        <span className="weapon-name">{weapon.name}</span>
        <span>&nbsp;</span>
        <span className="weapon-count">{weapon.count}</span>
        <span className="weapon-count">power : {weapon.power}</span>
    </h2>
</>