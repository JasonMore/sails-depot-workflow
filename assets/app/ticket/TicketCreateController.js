app.controller("TicketCreateController", function(workflowApi) {
    this.knownItems = workflowApi.items.get();
});