  
(function () {
  "use strict";
  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['formData', 'MenuService'];
  function MyInfoController(formData, MenuService) {

    var $ctrl = this;
    $ctrl.signedUp = false;
    $ctrl.favMenuItem={};

  

    if(formData) {
      $ctrl.signedUp = true;
      $ctrl.firstName = formData.firstName;
      $ctrl.lastName = formData.lastName;
      $ctrl.email = formData.email;
      $ctrl.phone = formData.phone;
      $ctrl.favDish = formData.favDish;
      console.log(formData.favMenuItem);
      $ctrl.favMenuItem = formData.favMenuItem;

    }
    else {
      $ctrl.signedUp = false;
    }
  };
//     if(formData) {
//       console.log('got the form data', );
//       $ctrl.formData=formData;

//       $ctrl.signedUp = true;
//      MenuService.getMenuItem(formData.favMenuItem)
//       .then(function(response) {
//         $ctrl.menuItem = response;
//       })
//       .catch(function(response) {
//         console.log(response);
//       });
//   }
// };

})();