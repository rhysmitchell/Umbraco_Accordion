(function () {
    "use strict";

    function Controller($scope) {
        $scope.addNewSection = function (model, section) {
            // Push new accordion item
            model.editModel.push({
                title: "",
                content: ""
            });

            // Make Rich Text Editor of each content property
            angular.forEach(model.editModel, function (value, key) {
                value.content = {
                    label: 'bodyText',
                    description: 'Load some stuff here',
                    view: 'rte',
                    value: value.content.value,
                    config: {
                        editor: {
                            toolbar: ["code", "undo", "redo", "cut", "styleselect", "bold", "italic", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "link", "umbmediapicker", "umbmacro", "table", "umbembeddialog"],
                            stylesheets: [],
                            dimensions: { width: 380, height: 300 }
                        }
                    }
                };
            });

            // Finally, set the new model
            $scope.model.editModel = model.editModel;
        };


        $scope.removeSection = function (model, section) {
            var index = model.editModel.indexOf(section);
            model.editModel.splice(index, 1);
        };
    }

    angular.module("umbraco").controller("AccordionOverlay.Controller", Controller);
})();