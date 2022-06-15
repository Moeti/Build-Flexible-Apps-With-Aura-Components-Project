({
    //Navigates to the property selected
    navToRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.property.Id")
        });
        navEvt.fire();
    },

    //Opens the edit property modal
    editRecord : function(component, event, helper) {
    helper.showHide(component);
	},
    //Save changes and close edit property modal
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The property's info has been updated.",
            "type": "success"
        });
        toastEvent.fire();
        var recUpdate = $A.get("e.c:recordUpdated");
		recUpdate.fire();
        helper.showHide(component);
    },
    //Closes the edit property modal
    handleCancel : function(component, event, helper) {
        helper.showHide(component);
        event.preventDefault();
    }
})