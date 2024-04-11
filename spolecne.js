/*V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.

Přidejte mu posluchač události kliknutí.

Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.

Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.

Bonus
Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.

HTML ikonky křížku: <i class="fas fa-xmark"></i>
HTML ikonky hamburgeru: <i class="fas fa-bars"></i>*/



const menuChange = () => {
  const menuPolozky = document.querySelector("#menu-polozky");
  const menuTlacitko = document.querySelector("#menu-tlacitko");

  menuPolozky.classList.toggle("show");

  if (menuPolozky.classList.contains("show")) {
    menuTlacitko.classList.remove("fa-bars");
    menuTlacitko.classList.add("fa-xmark");
  } else {
    menuTlacitko.classList.remove("fa-xmark");
    menuTlacitko.classList.add("fa-bars");
  }
}

const menuTlacitko = document.querySelector("#menu-tlacitko");
menuTlacitko.addEventListener ("click", menuChange)


