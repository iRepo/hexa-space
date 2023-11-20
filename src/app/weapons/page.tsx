import { getWeaponInventory } from '@/bounded_contexts/weapon-inventory/api-adapter/getWeaponInventory';
import { WeaponComponent } from '@/bounded_contexts/weapon-inventory/ui-adapter/weapon-component';
import styles from '../page.module.css';


export default async function Ships() {
    const weaponInventory = await getWeaponInventory()

    const totalPowerWeapons = weaponInventory.reduce((totalPower, weapon) => totalPower + (weapon.power ?? 0), 0);
    console.log("---------------", totalPowerWeapons)
    return (
        <main className={styles.main}>

            <h1>Weapon Inventory</h1>
            <h2> Weapon power total: {totalPowerWeapons}</h2>
            <div className='weapon-inventory'>
                {weaponInventory.map(w => <WeaponComponent weapon={w}></WeaponComponent>)}
            </div>
        </main>
    )
}
