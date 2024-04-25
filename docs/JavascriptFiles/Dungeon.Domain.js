"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerCharacter = void 0;
const Dungeon_Service_1 = require("./Dungeon-Service");
exports.playerCharacter = {
    "name": "Hero",
    "level": 1,
    "training": {
        "strength": 50,
        "endurance": 50,
        "flexibility": 50
    }
};
function GetWeaponFromAPI(level) {
    return __awaiter(this, void 0, void 0, function* () {
        var result;
        try {
            const weapon = yield (0, Dungeon_Service_1.GetRandomWeaponWithLevel)(level);
            console.log(weapon);
            result = weapon;
        }
        catch (_a) {
            console.log("Fetch failed.");
            result = yield (0, Dungeon_Service_1.GetRandomWeaponFromAPI)();
        }
        finally {
            return result;
        }
    });
}
