import { GetRandomWeaponFromAPI, GetRandomWeaponWithLevel } from "./Dungeon-Service";

export const playerCharacter = {
    "name": "Hero",
    "level": 1,
    "training": {
      "strength": 50,
      "endurance": 50,
      "flexibility": 50
    }
  };

  async function GetWeaponFromAPI(level: number | undefined) {
    var result;
    try
    {
      const weapon = await GetRandomWeaponWithLevel(level);
      console.log(weapon);
      result = weapon;
    }
    catch
    {
      console.log("Fetch failed.")
      result = await GetRandomWeaponFromAPI();
    }
    finally
    {
      return result;
    }
  }