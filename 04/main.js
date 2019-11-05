let apiUrl = "http://webdev101.azurewebsites.net/api/transactions";
// let apiUrl = "http://localhost:5000/api/transactions";

async function getTransations() {
  const response = await fetch(apiUrl);
  const transactionsJson = await response.json();
  return transactionsJson;
}

async function addTransation(item) {
  const response = await fetch(apiUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  });
  return await response.json(); // parses JSON
}

function getTransactionHtml(item) {
  var html = `<tr>
      <td>${item.id}</td>
      <td>${item.date}</td>
      <td>${item.description}</td>
      <td>${item.amount}</td>
      <td>${item.userName}</td>
    </tr>`;
  return html;
}

async function refreshTransactionsList() {
  var transations = await getTransations();
  var tableHtml = "";
  transations.forEach(x => {
    tableHtml += getTransactionHtml(x);
  });
  document.getElementById("transations-table-body").innerHTML = tableHtml;
}

async function onAddButtonClick(e) {
  e.preventDefault();
  var date = document.getElementById("date").value;
  var description = document.getElementById("description").value;
  var amount = document.getElementById("amount").value;

  if (!date || !description || !amount) {
    alert("Wypełnij wszystkie pola formularza");
    return;
  }

  var itemToAdd = {
    date: date,
    description: description,
    amount: +amount,
    userName: "Marek"
  };
  await addTransation(itemToAdd);
  await refreshTransactionsList();
}

window.addEventListener("load", function() {
  document
    .getElementById("add-button")
    .addEventListener("click", onAddButtonClick);

  refreshTransactionsList();
});
