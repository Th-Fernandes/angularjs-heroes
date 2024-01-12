angular
  .module('myApp.opportunities.millisecondsToDate', [])
  .filter('millisecondsToDate', 
    function() {
      return (dateInMilliseconds) => {
        return new Date(dateInMilliseconds).toLocaleDateString('en-Us')
      }
    }
)