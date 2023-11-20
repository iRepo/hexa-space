import { getCatalogue } from "./getCatalogue";
import { mapToWeaponInventory } from "./mapToWeaponInventory";

export const getWeaponInventory = async () => {

    const weapons = mapToWeaponInventory(await getCatalogue())

    return weapons.map(weapon => {

        switch (weapon.name) {
            case "Taim & Bak KX9 laser cannons":
                weapon.power = 3
                break;

            case "Krupx MG7 proton torpedo launchers":
                weapon.power = 5
                break

            case "Arakyd Tomral RM-76 heavy laser cannons":
                weapon.power = 6
                break

            case "CEC AG2G quad-bolt cannons (ventral and dorsal)":
                weapon.power = 20
                break

            case "Arakyd ST2 concussion missile racks":
                weapon.power = 4
                break

            case "BlasTech Ax-108 Ground Buzzer blaster cannon":
                weapon.power = 1
                break

            case "Tractor beam projectors":
                weapon.power = 8
                break

            case "Superlaser":
                weapon.power = 2
                break
        }

        return weapon

    })
};

