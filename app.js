(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Ten sides of gem.',
			canPurchase: true,
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Five sides of gem.',
			canPurchase: false,
		},
	];
})();