sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.zlrop.zlrop.controller.MainPage", {
        onInit() {
        },

        onRowClick: function (oEvent) {
            var employeeID = oEvent.getParameter("rowContext").getObject().EmployeeID;

            console.log("Navigating with ID:", employeeID);

            this.getOwnerComponent().getRouter().navTo("RouteDetailPage", {
                ID: employeeID
            });
        }

        
    });
});