import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  type: "Select type",
  cardListSpecificType: [],
  listOptionSelect: [],
  pageInfo: {
    start: 0,
    end: 50,
  },
  isLoadPage: false,
});

/**
 * Ottiene una lista delle carte selezionate dalla API e aggiorna la variabile 'cardListSpecificType'
 */
export function findSelectedCards(newUrl) {
  store.isLoadPage = true;

  if (store.type === "Select type") {
    newUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

    axios.get(newUrl).then((response) => {
      store.cardListSpecificType = response.data.data.splice(
        store.pageInfo.start,
        store.pageInfo.end
      );
    });
  } else {
    axios.get(newUrl).then((response) => {
      store.cardListSpecificType = response.data.data;
    });
  }

  setTimeout(() => {
    store.isLoadPage = false;
  }, 1000);
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

  findSelectedCards(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php??&archetype=${store.type}`
  );
}

/**
 * Aggiorna "pageInfo" e richiama la funzione "findSelectedCards" per caricare ulteriori carte
 */
export function updatePage() {
  store.pageInfo.start = store.pageInfo.end;
  store.pageInfo.end += 50;

  findSelectedCards();
}
