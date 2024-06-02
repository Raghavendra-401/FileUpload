sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("fileuploadui.controller.FileUpload", {
            onInit: function () {

            },
            handleUploadPress: function () {
                const oFileUploader = this.getView().byId("fileUploader");
                let oModel = this.getView().getModel();
                oFileUploader.checkFileReadable().then(function () {
                    let sValue = oFileUploader.getProperty("value");
                    let getFileDetails = oFileUploader.FUEl.files[0];
                    let fileType = getFileDetails.type;
                    let fileData;
                    const oReader = new FileReader();
                    oReader.readAsBinaryString(getFileDetails);
                    oReader.onload = function (e) {
                        let content = e.target.result;
                        fileData = btoa(content);
                        let payloadData = {
                            "fileType": fileType,
                            "fileName": sValue,
                            "fileData": fileData
                        }
                        oModel.create("/Files", payloadData, {
                            success: function (OData, res) {
                                let response = OData;
                                //  oModel.update("/Files")
                            }.bind(this),
                            error: function (oError) {
                                let error = oError;
                            }
                        })
                    }.bind(this)

                }.bind(this), (error) => {
                    MessageToast.show("The file cannot be read. It may have changed.");
                }).then(() => {
                    // oFileUploader.clear();
                });
            }
        });
    });
