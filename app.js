let text = document.querySelector("#things");
let add = document.querySelector("#addList");
let list = document.querySelector("#listCon");

add.addEventListener("click", () => {
  if (text.value) {
    let fade = document.createElement("div");
    fade.id = "fadeInID";
    let li = document.createElement("div");
    li.id = "liID";
    let t = document.createTextNode("•" + "\u00A0" + "\u00A0" + text.value);
    li.appendChild(t);
    let chck = document.createElement("div");
    chck.id = "checkID";
    var checkTex = document.createTextNode("✔");
    chck.appendChild(checkTex);
    let del = document.createElement("div");
    del.id = "delID";

    let delTex = document.createTextNode("✖");
    del.appendChild(delTex);

    fade.appendChild(li);
    fade.appendChild(chck);
    fade.appendChild(del);

    list.insertBefore(fade, list.childNodes[0]);
  
      a();
  }
});



let a = () => {
    
const chckBtns = document.querySelectorAll("#checkID");
const li1 = document.querySelectorAll("#liID");
for (let i in chckBtns) {
  chckBtns[i].onclick = () => {
    if (li1[i].id == "liIDchck") {
      li1[i].id = "liID";
    } else {
      li1[i].id = "liIDchck";
    }
  };
}
 
}
 a();
const deleteBtns = document.querySelectorAll("#delID");
for (let i in deleteBtns) {
  deleteBtns[i].onclick = () => {
    deleteBtns[i].parentNode.remove();
  };
}

text.onkeydown = function (e) {
  //? when Enter key is pressed
  if (e.keyCode === 13) {
    //* Call the click function of add button.
    add.click();
  }
};
