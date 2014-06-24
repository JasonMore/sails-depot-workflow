app.factory("workflowConstants", function() {
    return {
        statuses: [
            {
                label: "New",
                value: 0
            },
            {
                label: "Assigned",
                value: 1
            },
            {
                label: "In Progress",
                value: 2
            },
            {
                label: "Completed",
                value: 3
            }
        ],
        priorities: [
            {
                label: "Low",
                value: 0
            },
            {
                label: "Medium",
                value: 1
            },
            {
                label: "High",
                value: 2
            },
            {
                label: "Immediate",
                value: 3
            }
        ]
    };
});