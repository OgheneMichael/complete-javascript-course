import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

/**
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - liked recipes
 */

const state = {};

/**
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
	//1) Get query from the view

	const query = searchView.getInput();

	if (query) {
		// 2) New search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for result
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		// 4) Search for recipes
		await state.search.getResults();

		// 5) Render results on UI
		clearLoader();
		searchView.renderResult(state.search.result);
		// console.log(state.search.result);
	}
};

elements.searchForm.addEventListener("submit", e => {
	e.preventDefault();
	controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
	const btn = e.target.closest(".btn-inline");
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResult(state.search.result, goToPage);
	}
});

/**
 * RECIPE CONTROLLER
 */

const r = new Recipe(47746);
r.getRecipe();
console.log(r);
