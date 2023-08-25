import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  type: "Select type",
  cardListSpecificType: [],
  listOptionSelect: [],
});

/**
 * Ottiene una lista di tutte le carte dalla API e aggiorna la variabile 'cardsList'
 */
export function findAllCards() {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0";

  axios.get(url).then((response) => {
    store.cardsList = response.data.data;
  });
}

/**
 * Ottiene una lista delle carte selezionate dalla API e aggiorna la variabile 'cardsList'
 */
export function findSelectedCards(newUrl) {
  if (store.type === "Select type") {
    newUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0";
  }

  axios.get(newUrl).then((response) => {
    store.cardListSpecificType = response.data.data;
  });
}

/**
 * Ottiene una lista di archetypes dalla API e aggiorna la variabile 'listOptionSelect'
 */
export function selectOption() {
  const url = "https://db.ygoprodeck.com/api/v7/archetypes.php";

  axios.get(url).then((response) => {
    store.listOptionSelect = response.data;
  });
}

/**
 * Filtra le carte in base all'archetipo selezionato.
 */
export function typeSelected() {
    store.cardListSpecificType = [];

    findSelectedCards(`https://db.ygoprodeck.com/api/v7/cardinfo.php??&archetype=${store.type}`);

    console.log(`https://db.ygoprodeck.com/api/v7/cardinfo.php??&archetype=${store.type}`);
}
