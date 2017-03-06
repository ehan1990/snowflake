app.controller('FaqController', function($scope, ScheduleService) {    

	$scope.section_title = "FAQ Page"
	$scope.table_headers = ["ID", "Date", "Cost ($)", "Attendees", "Cost/Person ($)", "Paid By", "Description"];
	$scope.current_page = 1;
	$scope.search_text = "";

	$scope.faqs_all = [
		{
			"title": "What is Istuary Badminton?",
			"content": "A group of friendly co-workers who loves to get together, play some badminton, and have some fun!"
		},
		{
			"title": "How can I join?",
			"content": "Simply send an email to Edward (edward.han@istuary.com) or drop by his desk and say hi! He's the friendlist person in our office :)" 
		},
		{
			"title": "When do we usually play badminton?",
			"content": "Every friday after work from 8-10PM at Stage 18 badminton?"
		},
		{
			"title": "How much is the cost per person?",
			"content": "Usually around $8~10 depending on how many people show up."
		},
		{
			"title": "What do I need to bring?",
			"content": "Badminton raquet and non-marking running shoes. The admins at Stage 18 is really keen on the shoes."
		}
	];

	$scope.faqs = $scope.faqs_all.slice();

	$scope.update_search = function() {
		$scope.faqs = [];
		for (i=0; i < $scope.faqs_all.length; i++) {
			if ($scope.faqs_all[i].title.includes($scope.search_text) || $scope.faqs_all[i].content.includes($scope.search_text)) {
				$scope.faqs.push($scope.faqs_all[i]);
			}
		}

		for (i=0; i < $scope.faqs.length; i++) {
			console.log($scope.faqs[i]);	
		}
		
	}

});

