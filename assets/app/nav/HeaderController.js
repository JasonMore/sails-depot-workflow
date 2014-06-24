app.controller("HeaderController", function(workflowApi) {
    this.user = workflowApi.user.get();
});