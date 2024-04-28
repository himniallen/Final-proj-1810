"use strict";
// Get all draggable elements with class "Gear"
const draggableElements = document.querySelectorAll(".Gear");
// Get the drop zones
const armorForUser = document.getElementById("ArmorforUser");
const armorForEquiping = document.getElementById("ArmorforEquiping");
// Add event listeners for drag events to all draggable elements
draggableElements.forEach((element) => {
    const draggableElement = element; // Explicitly cast to HTMLElement
    draggableElement.addEventListener("dragstart", dragStart);
});
// Add event listeners for drop events to both drop zones
armorForUser.addEventListener("dragover", dragOver);
armorForUser.addEventListener("drop", drop);
armorForEquiping.addEventListener("dragover", dragOver);
armorForEquiping.addEventListener("drop", drop);
// Function to handle drag start event
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}
// Function to handle drag over event
function dragOver(event) {
    event.preventDefault();
}
// Function to handle drop event
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    const dropZone = event.currentTarget;
    dropZone.appendChild(draggedElement);
}


