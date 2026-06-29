sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("com.zlrop.zlrop.controller.DetailPage", {

        onInit: function () {
            console.log("Detail Page Loaded");
        },

        onNavBack: function () {
            history.back();
        }

    });
});