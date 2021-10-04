let chitieu = [];
let tienchi = [];
let soluong = [];
function them() {
  let a = document.getElementById("themviec").value;
  let b = document.getElementById("themtien").value;
  let c = document.getElementById("themsoluong").value;
  if (a == "" || b == 0 || c == 0){
    alert("Bạn chưa nhập đủ thông tin")
  } else {
  let d = c*b;
  chitieu.push(a);
  tienchi.push(d);
  soluong.push(c);
  hienthichitieu();
  hienthitienchi();
  hienthisoluong();
  document.getElementById("themviec").value = '';
  document.getElementById("themtien").value = '';
  document.getElementById("themsoluong").value = '';
}
}
function tinhtong() {
  let total = 0;
  for (let i = 0; i < tienchi.length; i++) {
    total += Number(tienchi[i]);
  }
  document.getElementById("displaytong").innerHTML = ` Tổng số bằng : ${formatCurrency(Number(total))}`;
}
function hienthichitieu() {
  let tbview = document.getElementById("tableview");
  tbview.innerHTML = "";
  chitieu.forEach(function (value, index) {
    tbview.innerHTML += `<tr class="trview"> <td>${value}</td></tr>`
  })
}
function hienthitienchi() {
  let tbview = document.getElementById("tableview2");
  tbview.innerHTML = "";
  tienchi.forEach(function (value, index) {
    tbview.innerHTML += `<tr class="trview"> <td class ="money">${formatCurrency(Number(value))}</td></tr>`
  })
}
hienthichitieu();
hienthitienchi();
function hienthisoluong() {
  let tbview = document.getElementById("tableview1");
  tbview.innerHTML = "";
  soluong.forEach(function (value, index) {
    tbview.innerHTML += `<tr class="trview"> <td class ="quantyti">${value}</td></tr>`
  })
}
hienthisoluong();
hienthichitieu();
hienthitienchi();
function resetValue() {
  chitieu = [];
  tienchi = [];
  soluong = [];
  document.getElementById("displaytong").innerHTML = '';
  hienthichitieu();
  hienthitienchi();
  hienthisoluong();
}
resetValue();
function formatCurrency(number) {
  return number.toLocaleString('vi', {
    style: 'currency',
    currency: 'vnd',
  });
}