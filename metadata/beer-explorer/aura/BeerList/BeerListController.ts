///<reference path="./BeerListHelper.ts" />

({
    locationChange : function(component: Component, event, helper: BeerListHelper) {
        helper.getBeers(component);
    },
    pageChange: function(component:Component, event: Event, helper: BeerListHelper) {
		var page = component.get<number>("v.page") || 1;
        var direction = event.getParam("direction");
        page = direction === "previous" ? (page - 1) : (page + 1);
        helper.getBeers(component, page);
	},
    alcoholSelectionChange: function(component:Component, event: Event, helper: BeerListHelper) {
        helper.minAlcohol = event.getParam("minAlcohol");
        helper.getBeers(component);
	}
})