const basicUrl = "http://localhost:5000/";

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
