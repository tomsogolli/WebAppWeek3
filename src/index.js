import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  var cont = document.getElementById("container");

  var wiki = document.createElement("h1");
  wiki.id = "headline";
  wiki.innerHTML = "Dog wiki";
  cont.appendChild(wiki);

  var div1 = document.createElement("div");
  div1.classList.add("wiki-item");
  var hed1 = document.createElement("h1");
  hed1.classList.add("wiki-name");
  div1.appendChild(hed1);
  hed1.innerHTML = "Corgi";
  var txt1 = document.createElement("div");
  txt1.classList.add("wiki-content");
  div1.appendChild(txt1);
  var info1 = document.createElement("p");
  txt1.appendChild(info1);
  info1.innerHTML =
    "Corgis are little cute dogs with really short legs but long back. They are really playful breed. Internet is full with videos about cute little corgis.";
  var divImg1 = document.createElement("div");
  divImg1.classList.add("image-container");
  var img1 = document.createElement("img");
  img1.classList.add("wiki-image");
  img1.src = "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_3178.jpg";
  div1.appendChild(divImg1);
  divImg1.appendChild(img1);
  cont.appendChild(div1);

  var div2 = document.createElement("div");
  div2.classList.add("wiki-item");
  var hed2 = document.createElement("h1");
  hed2.classList.add("wiki-name");
  div2.appendChild(hed2);
  hed2.innerHTML = "Husky";
  var txt2 = document.createElement("div");
  txt2.classList.add("wiki-content");
  div2.appendChild(txt2);
  var info2 = document.createElement("p");
  txt2.appendChild(info2);
  info2.innerHTML = "Some info about husky.";
  var divImg2 = document.createElement("div");
  divImg2.classList.add("image-container");
  var img2 = document.createElement("img");
  img2.classList.add("wiki-image");
  img2.src = "https://images.dog.ceo/breeds/husky/n02110185_14289.jpg";
  div2.appendChild(divImg2);
  divImg2.appendChild(img2);
  cont.appendChild(div2);

  var div3 = document.createElement("div");
  div3.classList.add("wiki-item");
  var hed3 = document.createElement("h1");
  hed3.classList.add("wiki-name");
  div3.appendChild(hed3);
  hed3.innerHTML = "Malamute";
  var txt3 = document.createElement("div");
  txt3.classList.add("wiki-content");
  div3.appendChild(txt3);
  var info3 = document.createElement("p");
  txt3.appendChild(info3);
  info3.innerHTML = "Some info about malamute.";
  var divImg3 = document.createElement("div");
  divImg3.classList.add("image-container");
  var img3 = document.createElement("img");
  img3.classList.add("wiki-image");
  img3.src = "https://images.dog.ceo/breeds/malamute/n02110063_15949.jpg";
  div3.appendChild(divImg3);
  divImg3.appendChild(img3);
  cont.appendChild(div3);

  var div4 = document.createElement("div");
  div4.classList.add("wiki-item");
  var hed4 = document.createElement("h1");
  hed4.classList.add("wiki-name");
  div4.appendChild(hed4);
  hed4.innerHTML = "Chihuahua";
  var txt4 = document.createElement("div");
  txt4.classList.add("wiki-content");
  div4.appendChild(txt4);
  var info4 = document.createElement("p");
  txt4.appendChild(info4);
  info4.innerHTML = "Some info about chihuahua.";
  var divImg4 = document.createElement("div");
  divImg4.classList.add("image-container");
  var img4 = document.createElement("img");
  img4.classList.add("wiki-image");
  img4.src = "https://images.dog.ceo/breeds/chihuahua/n02085620_2590.jpg";
  div4.appendChild(divImg4);
  divImg4.appendChild(img4);
  cont.appendChild(div4);

  var div5 = document.createElement("div");
  div5.classList.add("wiki-item");
  var hed5 = document.createElement("h1");
  hed5.classList.add("wiki-name");
  div5.appendChild(hed5);
  hed5.innerHTML = "Shiba inu";
  var txt5 = document.createElement("div");
  txt5.classList.add("wiki-content");
  div5.appendChild(txt5);
  var info5 = document.createElement("p");
  txt5.appendChild(info5);
  info5.innerHTML = "Some info about shiba inu.";
  var divImg5 = document.createElement("div");
  divImg5.classList.add("image-container");
  var img5 = document.createElement("img");
  img5.classList.add("wiki-image");
  img5.src = "https://images.dog.ceo/breeds/shiba/shiba-15.jpg";
  div5.appendChild(divImg5);
  divImg5.appendChild(img5);
  cont.appendChild(div5);
}
