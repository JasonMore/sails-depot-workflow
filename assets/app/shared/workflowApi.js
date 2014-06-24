app.factory("workflowApi", function(spinnaker) {

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

    return {
//        user: {
//            get: function() {
//                return data.user;
//            }
//        },
		user: spinnaker('user'),
		ticket: spinnaker('ticket'),

//        ticket: {
//            get: function(ticket) {
//                return _.find(data.tickets, function(item) {
//                    return item.id == ticket.ticketId
//                });
//            }
//        },
//        tickets: {
//            get: function() {
//                return data.tickets;
//            }
//        },
		assignment: spinnaker('assignment'),
//        assignments: {
//            get: function(query) {
//                return _.filter(data.tickets, function(item) {
//                    return item.associate.id == query.associateId
//                });
//            }
//        },
		item: spinnaker('item'),
//        items: {
//            get: function() {
//                return data.items;
//            }
//        },
		inventory: spinnaker('inventory')
//        inventory: {
//            get: function() {
//                return data.inventory;
//            }
//        }
    }
});