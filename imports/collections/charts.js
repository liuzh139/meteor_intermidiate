Charts = new Mongo.Collection('Charts');

// Ingredient = new SimpleSchema({
// 	name: {
// 		type: String 
// 	},
// 	amount: {
// 		type: String
// 	}
// });

ChartSchema = new SimpleSchema({
	merchantCategory: {
		type: String,
		label: "Category"
	},
	desc: {
		type: String,
		label: "Description"
	},
    totalAmount:{
        type: "Double",
        label: "Total Amount"
    }
});

Meteor.methods({
	// toggleMenuItem: function(id, currentState){
	// 	Recipes.update(id, {
	// 		$set: {
	// 			inMenu: !currentState
	// 		}
	// 	});
	// },
	// deleteRecipe: function(id){
	// 	Recipes.remove(id);
	// }
});

Charts.attachSchema(ChartSchema);