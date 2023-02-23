alert('created by:yournamehere');
for (var e = document.getElementsByClassName("idnamehere"), d = 0; d < e.length; d++) e[d].hidden = !0;
(() => {
  function b(b) {
    let c = document.createElement("button");
    return c.classList.add("cheat"), c.style.font = "arial", c.innerText = b, c
  }
  let d = document.createElement("style");
  d.innerHTML = `details > summary {    cursor: pointer;    transition: 0.15s;    list-style: none;}details > summary:hover {    color: #2596be}details > summary::-webkit-details-marker {    display: none;}details summary ~ * {    animation: sweep .5s ease-in-out;}@keyframes sweep {    0%    {opacity: 0; transform: translateY(-10px)}    100%  {opacity: 1; transform: translateY(0)}}.cheat {    border: none;    background: hsl(0, 0%, 20%);    padding: 5px;    margin: 3px;    width: 60%;    color: hsl(0, 0%, 100%);    transition: 0.2s;    border-radius: 5px;    cursor: pointer;}.cheat:hover {    background: hsl(0, 0%, 30%);}` ;
  let da = document.createElement("style");
  da.innerHTML = `body {
  background-color: #333;
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
}

.text-rainbow-animation {
  font-family:arial black;
  font-size:15px;
  background-image:
    linear-gradient(to right, #FF0000,#000000, #FF0000);
  -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  animation: rainbow-animation 35s linear infinite;
}

@keyframes rainbow-animation {
    to {
        background-position: 4500vh;
    }
}`;
  const a = document.createElement("div");
  a.appendChild(d), a.style.zIndex = "999999999999999999999999999999999", a.className = "yournamehere", a.style.width = "400px", a.style.background = "hsl(0, 0%, 10%)", a.style.borderRadius = "10px", a.style.position = "absolute", a.style.textAlign = "center", a.style.fontFamily = "arial", a.style.color = "red", a.style.overflow = "hidden", a.style.top = "28%", a.style.left = "35%";
  var e = 0,
    f = 0,
    g = 0,
    h = 0;
  a.onmousedown = (b = window.event) => {
    b.preventDefault(), g = b.clientX, h = b.clientY, document.onmouseup = () => {
      document.onmouseup = null, document.onmousemove = null
    }, document.onmousemove = b => {
      b = b || window.event, b.preventDefault(), e = g - b.clientX, f = h - b.clientY, g = b.clientX, h = b.clientY, a.style.top = a.offsetTop - f + "px", a.style.left = a.offsetLeft - e + "px"
    }
  };
  let i = document.createElement("div");
  a.appendChild(i), i.style.width = "100%", i.style.height = "35px", i.style.paddingTop = "2px", i.style.fontSize = "1.2rem", i.style.textAlign = "center", i.innerHTML = "Admin X beta", i.zIndex = "9999", i.style.fontFamily = 'arial black';
  let t, j = document.createElement("button");
  i.appendChild(j), j.style.background = "#444444", j.style.height = "45px", j.style.width = "45px", j.style.border = "none", j.style.cursor = "pointer", j.style.position = "absolute", j.style.top = "-10px", j.style.right = "-10px", j.style.fontSize = "1.5rem", j.style.borderRadius = "10px", j.style.fontFamily = "Nunito", j.style.fontWeight = "bolder", j.style.paddingTop = "10px", j.style.paddingRight = "15px", j.innerText = "\u24E7", j.onclick = () => {
    a.remove(), clearInterval(t)
  };
  let k = document.createElement("button");
  i.appendChild(k), k.style.background = "#444444", k.style.height = "45px", k.style.width = "45px", k.style.border = "none", k.style.cursor = "pointer", k.style.position = "absolute", k.style.top = "-10px", k.style.left = "-10px", k.style.fontSize = "1.5rem", k.style.borderRadius = "10px", k.style.fontFamily = "Nunito", k.style.fontWeight = "bolder", k.style.paddingTop = "10px", k.style.paddingLeft = "15px", k.innerText = "-", k.onclick = () => {
    l.hidden = !l.hidden;
  };
  let l = document.createElement("div"),
    m = document.createElement("div");
  l.appendChild(m), a.appendChild(l), m.innerHTML = `<div class="text-rainbow-animation">name-here-</div>`, m.style.display = "block", m.style.margin = "10px", m.style.minHeight = "70px";
  let n = document.createElement("span");
  m.appendChild(n), document.body.append(a);
  let o = document.createElement("div");
  l.appendChild(o), o.style.fontSize = "0.9rem", o.style.paddingBottom = "5px";
  let p = {
    global: {
      "js-here-": () => {
       
      },
      "js-here-": () => {
    
      },
      "games-here": () => {
        javascript: var dd = document.createElement("iframe");
        let a = prompt("What Game\n\nOptions: Duck Life(DL), or Drift Boss(DB), Vex 5(V5), Retro Bowl(RB)\nDino Game(DG), Run 3(R3), 1v1 lol(1L);")
        "DL" == a ? dd.src = "https://www.mathplayground.com/duck4/index.html" : "DB" == a ? dd.src = "https://www.mathplayground.com/drift-boss-v3/index.html" : "V5" == a ? dd.src = "https://vex5.endinternetcensorship.repl.co/" : "RB" == a ? dd.src = "https://retro-bowl.endinternetcensorship.repl.co/" : "DG" == a ? dd.src = "https://offline-dino-game.firebaseapp.com/" : "R3" == a ? dd.src = "https://player03.com/run/3/beta" :
"1L" == a ? dd.src = "https://docs-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/to@1e8a949f89fcf2b110640c41a0705db01405d161/d7uf4.xml#" :
 alert("Closed"),
        dd.style.position = "fixed",
        dd.frameBorder = "0",
        dd.style.left = "0%",
        dd.style.top = "0%",
        dd.scrolling = "no",
        dd.style.zIndex = "999999999999",
        dd.id = "Admin x",
        document.body.appendChild(dd);
        var e = document.createElement("div");e.innerHTML = "\uD80C\uDC79",
        e.style.zIndex = "999999999999999",
        e.style.cursor = "pointer",
        e.style.position = "fixed",
        e.style.top = "0%",
        e.style.left = "20%",
        e.style.color = "red",
        e.style.background = "transparent",
        e.onclick = function() {
          document.getElementById("idname-here-").height = "600px", document.getElementById("idnamehere").width = "1200px", e.remove()
        },
        document.body.appendChild(e);
        var c = document.createElement("div");c.innerHTML = "\u24E7",
        c.style.zIndex = "9999999999999",
        c.style.cursor = "pointer",
        c.style.width = "300",
        c.style.height = "300",
        c.style.position = "fixed",
        c.style.top = "1%",
        c.style.left = "1%",
        c.style.color = "red",
        c.style.background = "transparent",
        c.onclick = function() {
          c.remove(), document.getElementById("idnamehere").remove(), e.remove()
        }
        document.body.appendChild(c)
        if (dd.src == "") {
          dd.remove();
          e.remove();
          c.remove();
        }
      },
      "js-here-": () => {
       
      },
      "anime-here": () => {
      function targetFunction() {(function(){
const exceptOrigins = [
  'https://disqus.com',
  document.origin
];
function remIF(e){
  try{
    var orgn = new URL(e.src || 'http://unknown-src').origin;
    if( ! exceptOrigins.includes(orgn)){
      e.parentElement.removeChild(e);
      console.log('REMOVE IFRAME',orgn);
    }
  } catch(err) {
    console.log('REMOVE ERROR',err);
  }
}
function remIFs(){
  for(var e of document.getElementsByTagName('iframe')){
    remIF(e);
  }
}
window.setInterval(remIFs,500);
})();}
        let ani = document.createElement("iframe");
        ani.src = "https://animension.to/";
        ani.id = "yfhdj"
        ani.frameBorder = "0";
        ani.style.position = 'absolute';
        ani.style.left = '0';
        ani.style.top = '0';
        ani.style.zIndex = 9999999999;
        ani.id = "power x";
        document.body.appendChild(ani);
        var e = document.createElement("div");e.innerHTML = "\uD80C\uDC79",
        e.style.zIndex = "999999999999999",
        e.style.cursor = "pointer",
        e.style.position = "fixed",
        e.style.top = "-1%",
        e.style.left = "20%",
        e.style.color = "red",
        e.style.background = "transparent",
        e.onclick = function() {
          document.getElementById("idnamehere").height = "600px", document.getElementById("Admin x").width = "1200px", e.remove()
        },
        document.body.appendChild(e);
        var fa = document.createElement("div");fa.innerHTML = "\u24E7",
        fa.style.zIndex = "9999999999999",
        fa.style.cursor = "pointer",
        fa.style.width = "300",
        fa.style.height = "300",
        fa.style.position = "fixed",
        fa.style.top = "0",
        fa.style.left = "0",
        fa.style.color = "red",
        fa.style.background = "transparent",
        fa.onclick = function() {
          fa.remove(), ani.remove(), e.remove()
        }
        document.body.appendChild(fa);
        
      }
    }
  }
  r = document.createElement("details"), r.innerHTML = `<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">hacks ↴</summary>`;
  for (var q = 0; q < Object.keys(p.global).length; q++) {
    let c = b(Object.keys(p.global)[q]);
    c.onclick = p.global[Object.keys(p.global)[q]], r.appendChild(c)
  } m.style.left = "10px"
  r.open = !0, r.style.paddingBottom = "10px", m.appendChild(r), m.appendChild(da);
})();
