({
    //Open selected record
    navToRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.property.Id")
        });
        navEvt.fire();
    },
    //Edit selected record
    editRecord : function(component, event, helper) {
    helper.showHide(component);
	},
    //Show message when edited
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
    //Cancel edit
    handleCancel : function(component, event, helper) {
        helper.showHide(component);
        event.preventDefault();
    }
})