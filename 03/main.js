var transactions = [
  {
    date: "20.10.2019 8:30",
    description: "Kwiaciarnia Gdańsk",
    amount: 30
  },
  {
    date: "21.10.2019 8:30",
    description: "Cukiernia Pellowski",
    amount: 10
  },
  {
    date: "21.10.2019 12:00",
    description: "Natka Bistro",
    amount: 21
  }
];

function getTransations() {
  return transactions;
}

function addTransation(item) {
  transactions.push(item);
}

function getTransactionHtml(item) {
  var html = `<tr>
      <td>${item.date}</td>
      <td>${item.description}</td>
      <td>${item.amount}</td>
    </tr>`;
  return html;
}

function refreshTransactionsList() {
  var transations = getTransations();
  var tableHtml = "";
  transations.forEach(x => {
    tableHtml += getTransactionHtml(x);
  });
  document.getElementById("transations-table-body").innerHTML = tableHtml;
}

function onAddButtonClick() {
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
    amount: amount
  };

  addTransation(itemToAdd);
  refreshTransactionsList();
}

window.addEventListener("load", function() {
  document
    .getElementById("add-button")
    .addEventListener("click", onAddButtonClick);

  refreshTransactionsList();
});
