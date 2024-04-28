import {
  GetRandomWeaponFromAPI,
  GetRandomWeaponWithLevel,
  GetLocalStorage,
  MakeLocalStorage,
  GetRandomGearFromDNDAPI,
  GetWeaponRarities,
  GetWeaponTypes,

} from "./Dungeon-Service";

export const playerCharacter = {
  name: "Hero",
  level: 1,
  training: {
    strength: 50,
    endurance: 50,
    flexibility: 50,
  },
};

export async function GetWeaponFromAPI(level: number | undefined) {
  var result;
  try {
    const weapon = await GetRandomWeaponWithLevel(level);
    console.log(weapon);
    result = weapon;
  } catch {
    console.log("Fetch failed.");
    result = await GetRandomWeaponFromAPI();
  } finally {
    return result;
  }
}


export async function GetLocalStorageOfPlayer(name: string)
{
  return await GetLocalStorage(name);
}

export async function CallSetLocalStorage(name:string, data: object) {
  await MakeLocalStorage(name, data);
}



export async function returnRandomGear()
{
  const Options = await GetRandomGearFromDNDAPI();
  const Choice = await getRandomInt(0, 50)//Note their is more than fifty results but due to lazzy ness This will work.

 return await Options.equipment[Choice];
}

function getRandomInt(min: number,max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

