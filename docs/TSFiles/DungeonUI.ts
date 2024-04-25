import { playerCharacter } from "./Dungeon.Domain";



function doTraining() {
  // Get the selected training types
  const strengthTraining = document.getElementById("strength") as HTMLInputElement;
  const enduranceTraining = document.getElementById("endurance") as HTMLInputElement;
  const  flexibilityTraining = document.getElementById("flexibility") as HTMLInputElement;

  // Update training values based on selected types
  if (strengthTraining.checked) {
    playerCharacter.training.strength += 10;
  }

  if (enduranceTraining.checked) {
    playerCharacter.training.endurance += 10;
  }

  if (flexibilityTraining.checked) {
    playerCharacter.training.flexibility += 10;
  }
  console.log("Training results:");
  console.log(playerCharacter.training);
}

// Add event listener to the form
const formElement = document.getElementById("UserChoiceForm") as HTMLInputElement;
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const activityRadio = document.querySelector('input[name="activity"]:checked') as HTMLInputElement | null;

if(activityRadio)
    {
        const activity = activityRadio.value;
        if (activity === "fight") {
            document.getElementById("fightOptions")?.classList.remove("hidden");
            document.getElementById("trainOptions")?.classList.add("hidden");
        } else if (activity === "train") {
            document.getElementById("trainOptions")?.classList.remove("hidden");
            document.getElementById("fightOptions")?.classList.add("hidden");
            doTraining(); // Call the doTraining function
        }
        else 
        {
                
        }
    }
});