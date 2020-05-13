(function() {
  "use strict";

  angular.module("common")
    .service("MyInfoService", MyInfoService);
  function MyInfoService() {
    var service = this;
    //Using a singular object, but this should be a list
    var formData;

    //Only handling one user, but this should be an add method
    service.setInfo = function(newData) {
      formData = {
        firstName: newData.firstName,
        lastName: newData.lastName,
        email: newData.email,
        phone: newData.phone,
        favoriteDish: newData.favoriteDish,
        favoriteMenuItem: newData.favoriteMenuItem
      };
      console.log("Set formdata");
    };

    service.getInfo = function() {
      return formData;
    }
  }
})();