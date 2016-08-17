(function() {
  'use strict';

  angular.module('navControllers', [])
    .controller('navController', navController);

  function navController() {
    var navCtrl = this;

    console.log("Included Nav Controller");

    navCtrl.links = [
      {
        name: "Home",
        stateRef: "home",
        icon: "home"
      },
      {
        name: "Projects",
        stateRef: "projects",
        icon: "code"
      },
      {
        name: "Skills",
        stateRef: "skills",
        icon: "keyboard"
      },
      {
        name: "History",
        stateRef: "history",
        icon: "history"
      },
      {
        name: "Education",
        stateRef: "education",
        icon: "school"
      },
      {
        name: "Achievements",
        stateRef: "achievements",
        icon: "star"
      }
    ]

    navCtrl.socialMedisSites = [
      {
        iconClass: "fa fa-facebook-square fa-2x",
        link: "https://www.facebook.com/archit.mahto"
      },
      {
        iconClass: "fa fa-twitter-square fa-2x",
        link: "https://twitter.com/architMahto276"
      },
      {
        iconClass: "fa fa-linkedin-square fa-2x",
        link: "https://www.linkedin.com/in/architmahto"
      },
      {
        iconClass: "fa fa-github fa-2x",
        link: "https://github.com/architMahto"
      },
      {
        iconClass: "fa fa-stack-overflow fa-2x",
        link: "https://careers.stackoverflow.com/architmahto"
      }
      // {
      //   iconClass: "fa fa-envelope fa-2x",
      //   // link: "mailto:architmahto@gmail.com"
      //   link: "#demoModal"
      // }
    ]

    navCtrl.openNav = function () {
      navCtrl.sideNavWidth = "250px";
      navCtrl.navbarItems = "none";
      navCtrl.navbarItemsTransition = "0.5s";
      console.log("Opening navbar");
    }

    navCtrl.closeNav = function () {
      navCtrl.sideNavWidth = "0";
      navCtrl.navbarItems = "flex";
      navCtrl.navbarItemsTransition = "0.5s";
      console.log("Closing navbar");
    }
  }
}());
