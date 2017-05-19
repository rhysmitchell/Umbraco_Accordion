(function () {

    "use strict";

    function Controller($scope) {
        var viewModel = this;
        viewModel.openOverlay = openOverlay;

        if (!$scope.control.sections) {
                $scope.control.sections = [];
            }

        function openOverlay() {
            viewModel.overlay = {
                title: "Accordion",
                view: "/App_Plugins/Accordion/Editors/Views/Overlay.html",
                editModel: $scope.control.sections,
                show: true,
                submit: function (model) {
                    viewModel.overlay.show = false;
                    viewModel.overlay = null;
                },
                close: function (oldModel) {
                    viewModel.overlay.show = false;
                    viewModel.overlay = null;
                }
            }

        };
    }

    angular.module("umbraco").controller("Accordion.Controller", Controller);
})();