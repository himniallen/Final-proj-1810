import {
    playerCharacter,
    GetWeaponFromAPI,
    
} from "./Dungeon.Domain";


// Get all draggable elements with class "Gear"

const draggableElements = document.querySelectorAll(".Gear");

// Get the drop zones
const armorForUser = document.getElementById("ArmorforUser") as HTMLElement;
const armorForEquiping = document.getElementById("ArmorforEquiping") as HTMLElement;

// Add event listeners for drag events to all draggable elements
draggableElements.forEach((element: Element) => {
    const draggableElement = element as HTMLElement; // Explicitly cast to HTMLElement
    draggableElement.addEventListener("dragstart", dragStart);
});

// Add event listeners for drop events to both drop zones
armorForUser.addEventListener("dragover", dragOver);
armorForUser.addEventListener("drop", drop);
armorForEquiping.addEventListener("dragover", dragOver);
armorForEquiping.addEventListener("drop", drop);

// Function to handle drag start event
function dragStart(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", (event.target as HTMLElement).id);
}

// Function to handle drag over event
function dragOver(event: DragEvent): void {
    event.preventDefault();
}

// Function to handle drop event
function drop(event: DragEvent): void {
    event.preventDefault();
    const data = event.dataTransfer!.getData("text/plain");
    const draggedElement = document.getElementById(data);
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.appendChild(draggedElement!);
}
