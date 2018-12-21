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

		try {
			// 4) Search for recipes
			await state.search.getResults();

			// 5) Render results on UI
			clearLoader();
			searchView.renderResult(state.search.result);
		} catch (error) {
			alert("Something went wrong with the search...");
			clearLoader();
		}
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

const controlRecipe = async () => {
	// Get ID from url
	const id = window.location.hash.replace("#", "");
	console.log(id);

	if (id) {
		// Prepare the UI for changes

		// Create new recipe object
		state.recipe = new Recipe(id);

		try {
			// Get the recipe data
			await state.recipe.getRecipe();

			// Calculate servings and time
			state.recipe.calcTime();
			state.recipe.calcServings();

			// Render recipe
			console.log(state.recipe);
		} catch (error) {
			alert("Error processing recipe!");
		}
	}
};

["hashchange", "load"].forEach(event =>
	window.addEventListener(event, controlRecipe)
);
