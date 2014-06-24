app.controller("TicketDetailController", ["$stateParams", "workflowApi", "workflowConstants", function($stateParams, workflowApi, workflowConstants) {
    this.ticket = workflowApi.ticket.get({ ticketId: $stateParams.ticketId });
    this.user = workflowApi.user.get();

    this.newStatus = this.ticket.status;
    this.newPriority = this.ticket.priority;
    this.statusValues = workflowConstants.statuses;
    this.priorityValues = workflowConstants.priorities;

    this.addComment = function() {

        var previousStatus = this.ticket.status;
        var previousPriority = this.ticket.priority;

        if(this.newCommentText && this.newCommentText.length > 0) {

            if(this.setStatus) {
                this.ticket.status = this.newStatus;
            }
            if(this.setPriority) {
                this.ticket.priority = this.newPriority;
            }
            if(this.setAssociate) {
                // TODO
            }

            this.ticket.history.unshift({
                posted: new Date(),
                author: {
                    id: this.user.id,
                    friendlyName: this.user.friendlyName
                },
                comment: this.newCommentText.trim(),
                previousStatus: previousStatus,
                status: this.ticket.status,
                previousPriority: previousPriority,
                priority: this.ticket.priority
            });
            //this.ticket.save();

            this.setStatus = false;
            this.setPriority = false;
            this.newCommentText = "";
        }
    };

    this.progressPercentage = function() {
        switch(parseInt(this.ticket.status)) {
            case 0:
                return "5%"; // New
            case 1:
                return "25%"; // Assigned
            case 2:
                return "50%"; // In progress
            case 3:
                return "100%";
            default:
                return "0%";
        }
    };
}]);