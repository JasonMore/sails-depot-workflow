app.filter("datetime", function() {
	return function(input) {
		return moment(input).format("MMMM DD, YYYY | h:mm:ss a");
	}
});
app.filter("friendlyName", function() {
	return function(input) {
		return input.nameFirst + " " + input.nameLast;
	}
});
app.filter("ticketStatus", function(workflowConstants) {
	return function(input) {
		var status = _.find(workflowConstants.statuses, function(p) {
			return p.value == input;
		});
		return status ? status.label : "Unknown";
	}
});
app.filter("ticketPriority", function(workflowConstants) {
	return function(input) {
		var priority = _.find(workflowConstants.priorities, function(p) {
			return p.value == input;
		});
		return priority ? priority.label : "Unknown";
	}
});