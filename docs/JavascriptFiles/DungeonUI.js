"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dungeon_Domain_1 = require("././Dungeon.Domain");
function doTraining() {
    // Get the selected training types
    const strengthTraining = document.getElementById("strength");
    const enduranceTraining = document.getElementById("endurance");
    const flexibilityTraining = document.getElementById("flexibility");
    // Update training values based on selected types
    if (strengthTraining.checked) {
        Dungeon_Domain_1.playerCharacter.training.strength += 10;
    }
    if (enduranceTraining.checked) {
        Dungeon_Domain_1.playerCharacter.training.endurance += 10;
    }
    if (flexibilityTraining.checked) {
        Dungeon_Domain_1.playerCharacter.training.flexibility += 10;
    }
    console.log("Training results:");
    console.log(Dungeon_Domain_1.playerCharacter.training);
}
// Add event listener to the form
const formElement = document.getElementById("UserChoiceForm");
formElement.addEventListener("submit", (event) => {
    var _a, _b, _c, _d;
    event.preventDefault();
    const activityRadio = document.querySelector('input[name="activity"]:checked');
    if (activityRadio) {
        const activity = activityRadio.value;
        if (activity === "fight") {
            (_a = document.getElementById("fightOptions")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
            (_b = document.getElementById("trainOptions")) === null || _b === void 0 ? void 0 : _b.classList.add("hidden");
        }
        else if (activity === "train") {
            (_c = document.getElementById("trainOptions")) === null || _c === void 0 ? void 0 : _c.classList.remove("hidden");
            (_d = document.getElementById("fightOptions")) === null || _d === void 0 ? void 0 : _d.classList.add("hidden");
            doTraining(); // Call the doTraining function
        }
        else {
        }
    }
});
