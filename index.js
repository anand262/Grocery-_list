let name_text = document.getElementById("item-name-input");
let price_text = document.getElementById("item-price-input");
let table_element = document.getElementsByTagName("table");
let total_element = document.querySelector("[data-ns-test = grandTotal]");
let i = 1,
  total = 0;
function insertItem() {
  let name = name_text.value;
  let price = price_text.value;

  if (name != "" && price != "" && !isNaN(parseInt(price))) {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    let trow = document.createElement("tr");

    td2.setAttribute("data-ns-test", "item-name");
    td3.setAttribute("data-ns-test", "item-price");

    td1.innerHTML = `${i}`;
    td2.innerHTML = name;
    td3.innerHTML = price;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);

    table_element[0].appendChild(trow);

    name_text.value = "";
    price_text.value = "";
    total += parseInt(price);
    total_element.innerHTML = total;
    ++i;
  }
}
