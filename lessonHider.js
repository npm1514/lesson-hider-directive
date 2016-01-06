angular.module("directivePractice").directive("lessonHider",function() {
  return {
    templateUrl: "lessonHider.html",
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&',
      day: '=',
      removeThing: '&'
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope,element,attributes){
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        console.log(scope.schedule);
        scope.schedule.forEach(function(scheduleDay){
          if (scheduleDay.lesson === scope.lesson) {
            element.css('text-decoration','line-through');
            scope.check = true;
            console.log(scope.check);
            scope.lessonDay = scheduleDay.weekday;
            return;
          }
        });
      });
    }
  };
});
