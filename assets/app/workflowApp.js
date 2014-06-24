window.app = angular.module("workflowApp", ["ngResource", "ui.router", "ui.bootstrap", "spinnaker"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/tickets");

        $stateProvider
            .state("ticketsList", {
                url: "/tickets",
                templateUrl: "app/ticket/list.html",
                controller: "TicketListController as scope"
            })
            .state("ticketCreate", {
                url: "/tickets/create",
                templateUrl: "app/ticket/create.html",
                controller: "TicketCreateController as scope"
            })
            .state("ticketDetail", {
                url: "/tickets/{ticketId}",
                templateUrl: "app/ticket/detail.html",
                controller: "TicketDetailController as detail"
            })
            .state("assignmentsList", {
                url: "/assignments/{associateId}",
                templateUrl: "app/assignments/list.html",
                controller: "AssignmentListController as list"
            })
            .state("inventory", {
                url: "/inventory",
                templateUrl: "app/inventory/inventory.html",
                controller: "InventoryController as inventory"
            });
    });