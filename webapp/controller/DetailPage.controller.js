sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.zlrop.zlrop.controller.DetailPage", {

        onInit: function () {

            this.getOwnerComponent()
                .getRouter()
                .getRoute("RouteDetailPage")
                .attachPatternMatched(this._onRouteMatched, this);

        },

        _onRouteMatched: function (oEvent) {

            var eId = oEvent.getParameter("arguments").ID;

            this.getView().bindElement({
                path: "/Employees(" + eId + ")"
            });

        },

        onNavBack: function () {

            history.back();

        }

    });

});