/* global Meteor:true, _:true, Drinks:true, Ingredients:true */
'use strict';

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Fill Collections with data
    var drinks = [
      {title:'Cuba Libre', ingredients:[{name:'White Rum', capacity:50},{name:'Cola', capacity:120}, {name:'Lime Juice', capacity:10}], strength: 3, glass: 'Highball', createdAt: new Date()},
      {title:'Mai Tai', ingredients:[{name:'White Rum', capacity:40}, {name:'Dark Rum', capacity:20}, {name:'Orange Curacao', capacity:15}, {name:'Orgeat Syrup', capacity:15}, {name:'Lime Juice', capacity:10}], strength: 2, glass: 'Highball', createdAt: new Date()},
      {title:'Screwdriver', ingredients:[{name:'Vodka', capacity:50} ,{name:'Orange Juice', capacity:100}], strength: 3, glass: 'Highball', createdAt: new Date()},
      {title:'John Collins', ingredients:[{name:'Gin', capacity:45}, {name:'Lemon Juice', capacity:20}, {name:'Sugar Syrup', capacity:15}, {name:'Soda Water', capacity:60}], strength: 3, glass: 'Highball', createdAt: new Date()}
    ];

    var ingredients = [];

    var fillCollectionWithData = function (data, collection) {
      if (!collection.find().count()) {
        _.each(data, function (element) {
          collection.insert(element);
        });
      }
    };

    fillCollectionWithData(drinks, Drinks);
    fillCollectionWithData(ingredients, Ingredients);
  });
}