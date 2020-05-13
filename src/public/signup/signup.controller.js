(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MyInfoService', 'MenuService'];
  function SignUpController(MyInfoService, MenuService) {
    console.log("in the controller");
    var $ctrl = this;


    $ctrl.signUpSuccess = false;
    $ctrl.favDishExists = false;

    $ctrl.signUp = function(event) {
      console.log("Sign up started... ");
      event.preventDefault();
      var formData = {
            firstName: $ctrl.firstName,
            lastName: $ctrl.lastName,
            email: $ctrl.email,
            phone: $ctrl.phone,
            favDish: $ctrl.favDish
      };

      MenuService.getMenuItem($ctrl.favDish)
        .then(function(data) {
          console.log("Dish found:", data);
          formData.favMenuItem = data;
          MyInfoService.setInfo(formData);
          console.log("after setting data", formData)
          $ctrl.favDishExists = true;
          $ctrl.signUpSuccess = true;
        }, function(err) {
          console.log("Dish not found...");
          MyInfoService.setInfo(formData);
          $ctrl.favDishExists = false;
          $ctrl.signUpSuccess = true;
        });
    };
  }
})();
