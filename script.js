let AmountOfClicks = localStorage.getItem('AmountOfClicks') ? parseInt(localStorage.getItem('AmountOfClicks')) : 0;
let ClickBonus = localStorage.getItem('ClickBonus') ? parseInt(localStorage.getItem('ClickBonus')) : 1;
let ClickBonusCost = localStorage.getItem('ClickBonusCost') ? parseInt(localStorage.getItem('ClickBonusCost')) : 10;
let AutoClickBonus = localStorage.getItem('AutoClickBonus') ? parseInt(localStorage.getItem('AutoClickBonus')) : 0;
let AutoClickBonusCost = localStorage.getItem('AutoClickBonusCost') ? parseInt(localStorage.getItem('AutoClickBonusCost')) : 100;
let AutoClickBonusCostTen = localStorage.getItem('AutoClickBonusCostTen') ? parseInt(localStorage.getItem('AutoClickBonusCostTen')) : 1000;

function ClickBtn() {
    AmountOfClicks += ClickBonus;
    console.log("Button Clicked: " + AmountOfClicks);
    updateDisplay();
    saveToLocalStorage();
}

function IncreaseClickBonus() {
    if (AmountOfClicks >= ClickBonusCost) {
        AmountOfClicks -= ClickBonusCost;
        ClickBonusCost += 15;
        ClickBonus += 1;
        updateDisplay();
        saveToLocalStorage();
    } else {
        console.log("Not enough clicks");
    }
}

function IncreaseAutoClick() {
    if (AmountOfClicks >= AutoClickBonusCost) {
        AmountOfClicks -= AutoClickBonusCost;
        AutoClickBonusCost += 100;
        AutoClickBonus += 1;
        updateDisplay();
        saveToLocalStorage();
    } else {
        console.log("Not enough clicks");
    }
}

function IncreaseAutoClickTen() {
    if (AmountOfClicks >= AutoClickBonusCostTen) {
        AmountOfClicks -= AutoClickBonusCostTen;
        AutoClickBonusCostTen += 500;
        AutoClickBonus += 10;
        updateDisplay();
        saveToLocalStorage();
    } else {
        console.log("Not enough clicks");
    }
}

function updateDisplay() {
    document.getElementById("displayClickcount").innerText = "Clicks: " + AmountOfClicks;
    document.getElementById("showClickBonus").innerText = "Click bonus: " + ClickBonus;
    document.getElementById("ClickBonusBtn").innerText = "Increase Bonus by one: " + ClickBonusCost + " Clicks";
    document.getElementById("showAutoClick").innerText = "Auto click: " + AutoClickBonus + "s";
    document.getElementById("AutoClickBtn").innerText = "Increase auto clicker by one: " + AutoClickBonusCost + " clicks";
    document.getElementById("AutoClicktenBtn").innerText = "Increase auto clicker by ten: " + AutoClickBonusCostTen + " clicks";
}

function saveToLocalStorage() {
    localStorage.setItem('AmountOfClicks', AmountOfClicks);
    localStorage.setItem('ClickBonus', ClickBonus);
    localStorage.setItem('ClickBonusCost', ClickBonusCost);
    localStorage.setItem('AutoClickBonus', AutoClickBonus);
    localStorage.setItem('AutoClickBonusCost', AutoClickBonusCost);
    localStorage.setItem('AutoClickBonusCostTen', AutoClickBonusCostTen);
}

// Auto clicker function
function startAutoClicker() {
    setInterval(() => {
        if (AutoClickBonus > 0) {
            AmountOfClicks += AutoClickBonus;
            console.log("Auto Clicked: " + AmountOfClicks);
            updateDisplay();
            saveToLocalStorage();
        }
    }, 1000);
}

// Function to show confirmation dialog
function showConfirmationDialog() {
    document.getElementById("confirmationDialog").style.display = "flex";
}

// Function to hide confirmation dialog
function hideConfirmationDialog() {
    document.getElementById("confirmationDialog").style.display = "none";
}

// Function to clear data
function clearData() {
    localStorage.clear();
    AmountOfClicks = 0;
    ClickBonus = 1;
    ClickBonusCost = 10;
    AutoClickBonus = 0;
    AutoClickBonusCost = 100;
    AutoClickBonusCostTen = 1000;
    updateDisplay();
    hideConfirmationDialog();
}

// Initial display update
updateDisplay();
startAutoClicker();
