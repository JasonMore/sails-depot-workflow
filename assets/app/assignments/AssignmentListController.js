app.controller("AssignmentListController", ["$stateParams", "workflowApi", function($stateParams, workflowApi) {
    this.tickets = workflowApi.assignments.get({ associateId: $stateParams.associateId });
    this.selectedItems = function() {
        return _.filter(this.tickets, function(ticket) {
            return ticket.selected;
        });
    };
}]);