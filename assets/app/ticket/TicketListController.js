app.controller("TicketListController", function (workflowApi, $sails) {
    this.items = workflowApi.tickets.get({});

	this.selectedItems = function () {
		return _.filter(this.items, function (item) {
			return item.selected;
		});
	};
});