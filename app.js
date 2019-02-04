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
			soldOut: true
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Five sides of gem.',
			canPurchase: false,
			soldOut: false
		},
		{
			name: 'Hexagonal Gem',
			price: 6.95,
			description: 'Six sides of gem.',
			canPurchase: true,
		},
		{
            		name: 'Heptagonal Gem',
            		price: 7.95,
            		description: 'Seven sides of gem.',
            		canPurchase: false,
        	},
	];
})();
