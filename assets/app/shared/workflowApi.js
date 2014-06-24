app.factory("workflowApi", function($rootScope, $sails) {

    /*
     +      o     +              o
     +             o     +       +
     o          +
     o  +           +        +
     +        o     o       +        o
     -_-_-_-_-_-_-_,------,      o
     _-_-_-_-_-_-_-|   /\_/\
     -_-_-_-_-_-_-~|__( ^ .^)  +     +
     _-_-_-_-_-_-_-""  ""
     +      o         o   +       o
     +         +
     o        o         o      o     +
     o           +
     +      +     o        o      +
     This entire thing is completely temporary
     Replace entirely when a server side options becomes available
     */

    // load tickets test data
//    $.ajax({
//        url: "/test/tickets.json",
//        async: false,
//        success: function(response) {
//            data = response;
//            data.user.assignmentCount = _.filter(data.tickets, function(ticket) {
//                return ticket.associate.id == data.user.id;
//            }).length;
//        }
//    });
//
//    // load items test data
//    $.ajax({
//        url: "/test/items.json",
//        async: false,
//        success: function(response) {
//            materials = response;
//        }
//    });
//
//    // load inventory test data
//    $.ajax({
//        url: "/test/inventory.json",
//        async: false,
//        success: function(response) {
//            inventory = response;
//        }
//    });

//  var user = {};
//  var loadUser = _.once(function(){
//    $sails.get("/user")
//      .success(function (data) {
//        $scope.bars = data;
//      })
//  });
//
//  return {
//    user:{
//      get: function(){
//
//      }
//    }
//  };


	var data = $rootScope.$new();

	data.user = {};
	data.tickets = [];
	data.items = [];
	data.inventory = [];



    return {
        user: {
            get: function() {
                return data.user;
            }
        },
        ticket: {
            get: function(ticket) {
                return _.find(data.tickets, function(item) {
                    return item.id == ticket.ticketId
                });
            }
        },
        tickets: {
            get: function() {
                return data.tickets;
            }
        },
        assignments: {
            get: function(query) {
                return _.filter(data.tickets, function(item) {
                    return item.associate.id == query.associateId
                });
            }
        },
        items: {
            get: function() {
                return data.items;
            }
        },
        inventory: {
            get: function() {
                return data.inventory;
            }
        }
    }
});