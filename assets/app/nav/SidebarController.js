app.controller("SidebarController", ["workflowApi", function(workflowApi) {
    this.tickets = workflowApi.ticket.query();
//    this.user = workflowApi.user.get();
}]);

app.directive("sidebarMenu", function($location) {
    return function ($scope) {
        $scope.$watch(function() { return $location.path(); }, function() {
            var match = /\/([A-Za-z]+)/.exec($location.path());
            $scope.section = match ? match[1] : null;
        });
    };
});