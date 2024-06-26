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
exports.GetWeaponRarities = exports.GetWeaponTypes = exports.GetRandomWeaponWithLevel = exports.GetRandomWeaponFromAPI = void 0;
const basicUrl = "http://localhost:5000/";
function GetRandomWeaponFromAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = basicUrl + "RandomWeapon";
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch weapon: " + response.status + " " + response.statusText);
            }
            return yield response.json();
        }
        catch (error) {
            console.error("Error fetching weapon:", error);
            throw error;
        }
    });
}
exports.GetRandomWeaponFromAPI = GetRandomWeaponFromAPI;
function GetRandomWeaponWithLevel(level) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = level !== undefined
            ? basicUrl + "RandomWeaponWithLevel?level=" + level
            : basicUrl + "RandomWeapon";
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch weapon: " + response.status + " " + response.statusText);
            }
            return yield response.json();
        }
        catch (error) {
            console.error("Error fetching weapon:", error);
            throw error;
        }
    });
}
exports.GetRandomWeaponWithLevel = GetRandomWeaponWithLevel;
function GetWeaponTypes() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = basicUrl + "WeaponTypes";
        const response = yield fetch(URL);
        const Json = yield response.json();
        return Json;
    });
}
exports.GetWeaponTypes = GetWeaponTypes;
function GetWeaponRarities() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = basicUrl + "WeaponRarities";
        const response = yield fetch(URL);
        const Json = yield response.json();
        return Json;
    });
}
exports.GetWeaponRarities = GetWeaponRarities;
