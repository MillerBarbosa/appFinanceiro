let incomes = [];
let expenses = [];

function addIncome() {
  const value = parseFloat(document.getElementById("income").value);
  if (!isNaN(value)) {
    incomes.push(value);
    saveData();
    updateSummaries();
  }
}

function addExpense() {
  const value = parseFloat(document.getElementById("expense").value);
  if (!isNaN(value)) {
    expenses.push(value);
    saveData();
    updateSummaries();
  }
}

function saveData() {
  const user = localStorage.getItem("loggedUser");
  localStorage.setItem(`${user}_incomes`, JSON.stringify(incomes));
  localStorage.setItem(`${user}_expenses`, JSON.stringify(expenses));
}

function loadData() {
  const user = localStorage.getItem("loggedUser");
  incomes = JSON.parse(localStorage.getItem(`${user}_incomes`)) || [];
  expenses = JSON.parse(localStorage.getItem(`${user}_expenses`)) || [];
  updateSummaries();
}