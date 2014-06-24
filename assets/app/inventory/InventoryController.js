app.controller("InventoryController", ["workflowApi", function(workflowApi) {
    this.bins = workflowApi.inventory.get();
}]);