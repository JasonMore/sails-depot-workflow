app.controller("TicketCreateController", function (workflowApi) {
	this.knownItems = workflowApi.item.query();

	this.create = function () {
		var ticket = new workflowApi.ticket(this.newTicket);
		ticket.save();
	}
});