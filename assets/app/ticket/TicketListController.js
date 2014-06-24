app.controller("TicketListController", function (workflowApi) {
    this.items = workflowApi.ticket.query({});

	this.selectedItems = function () {
		return _.filter(this.items, function (item) {
			return item.selected;
		});
	};
});