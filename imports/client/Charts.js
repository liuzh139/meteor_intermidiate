Template.Charts.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('recipes');
	});
});

Template.Charts.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	}
});