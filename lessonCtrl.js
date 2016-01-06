angular.module("directivePractice").controller("lessonCtrl",function($scope) {
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.announceDay = function(lesson, weekday){
    if (weekday){
      alert(lesson + " is active on " + weekday + ".");
    }
    else {
      alert(lesson + " hasn't been scheduled yet.");
    }
  };
  $scope.removeLesson = function(removal) {
    for (var i = 0; i < $scope.lessons.length; i++) {
      if (removal === $scope.lessons[i]) {
        $scope.lessons.splice(i,1);
      }
    }
  };
});
