const basicUrl = "http://localhost:5000/";
const DNDURL = "https://www.dnd5eapi.co/api/"

export async function GetRandomWeaponFromAPI(): Promise<any> {
  const url = basicUrl + "RandomWeapon";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Failed to fetch weapon: " + response.status + " " + response.statusText
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weapon:", error);
    throw error;
  }
}

export async function GetRandomWeaponWithLevel(
  level: number | undefined
): Promise<any> {
  const url =
    level !== undefined
      ? basicUrl + "RandomWeaponWithLevel?level=" + level
      : basicUrl + "RandomWeapon";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Failed to fetch weapon: " + response.status + " " + response.statusText
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weapon:", error);
    throw error;
  }
}

export async function GetWeaponTypes() {
  const URL = basicUrl + "WeaponTypes";
  const response = await fetch(URL);
  const Json = await response.json();
  return Json;
}

export async function GetWeaponRarities() {
  const URL = basicUrl + "WeaponRarities";
  const response = await fetch(URL);
  const Json = await response.json();
  return Json;
}


export async function GetRandomGearFromDNDAPI() {
 const gearurl = DNDURL + "equipment-categories/adventuring-gear";
  const response = await fetch(DNDURL);
  const responseIntoJSON = await response.json();
  return await responseIntoJSON;
}


export async function GetLocalStorage(name: string) {
  const response = await localStorage.getItem(name);
  if(response)
    {
      return response;
    }
    else  
    {
      return undefined;
    }
}

export async function MakeLocalStorage(name: string,data: object) {

  const stringedData = await JSON.stringify(data);
  localStorage.setItem(name,stringedData);
    
}