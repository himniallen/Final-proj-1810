import { playerCharacter } from "./Dungen.Domain.js";



function doTraining() {
  // Get the selected training types
  const strengthTraining = document.getElementById("strength").checked;
  const enduranceTraining = document.getElementById("endurance").checked;
  const flexibilityTraining = document.getElementById("flexibility").checked;

  // Update training values based on selected types
  if (strengthTraining) {
    playerCharacter.training.strength += 10;
  }

  if (enduranceTraining) {
    playerCharacter.training.endurance += 10;
  }

  if (flexibilityTraining) {
    playerCharacter.training.flexibility += 10;
  }
  console.log("Training results:");
  console.log(playerCharacter.training);
}

// Add event listener to the form
const formElement = document.getElementById("UserChoiceForm");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const activity = document.querySelector(
    'input[name="activity"]:checked'
  ).value;

  if (activity === "fight") {
    document.getElementById("fightOptions").classList.remove("hidden");
    document.getElementById("trainOptions").classList.add("hidden");
  } else if (activity === "train") {
    document.getElementById("trainOptions").classList.remove("hidden");
    document.getElementById("fightOptions").classList.add("hidden");
    doTraining(); // Call the doTraining function
  }
});
