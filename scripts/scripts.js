class Run {
    constructor(date, distance) {
        this.date = date;
        this.distance = distance;
    }
}

const updateLocalStorage = () => {
    const dateInput = document.querySelector('#date-input').value;
    const distanceInput = parseFloat(document.querySelector('#distance-input').value);

    if (isCorrectInput(dateInput, distanceInput)) {
        const newRun = new Run(dateInput, distanceInput);
        localStorage.setItem(`run-${newRun.date}`, String(newRun.distance));
        updateStatsDisplay(dateInput, distanceInput);
    } else {
        alert("You need a valid date and distance value");
    }
    
    
}

const isCorrectInput = (date, distance) => {
    if (!date || isNaN(distance) || distance <= 0 || distance === "") {
        return false;
    }
    return true;
}

const updateStatsDisplay = () => {
    const totalWeeklyKmElement = document.querySelector("#total-weekly-km");
    const totalWeeklyRunsElement = document.querySelector("#total-weekly-runs");
    const totalKmElement = document.querySelector("#total-km");
    const totalRunsElement = document.querySelector("#total-runs");

    totalKmElement.innerText = `${getTotalKm()}km`;
    totalRunsElement.innerText = `${getTotalRuns()}`;
}

const getTotalKm = () => {
    let totalKm = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        totalKm += parseFloat(value);
    }
    return totalKm;
}

const getTotalRuns = () => {
    return localStorage.length;
}

updateStatsDisplay();
const addEntryButton = document.querySelector('#add-entry-button');
addEntryButton.addEventListener('click', updateLocalStorage);