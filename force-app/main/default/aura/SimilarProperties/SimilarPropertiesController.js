({
    //Load Properties
    doInit : function(component, event, helper) {
        var spinner = component.find("spinner");
		$A.util.removeClass(spinner, "slds-hide");
        // Create action
        var action = component.get("c.getSimilarProperties");
        action.setParams({
            recordId: component.get("v.recordId"),
            beds: component.get("v.property.fields.Beds__c.value"),
            price: component.get("v.property.fields.Price__c.value"),
            searchCriteria: component.get("v.searchCriteria"),
            priceRange: parseInt(component.get("v.priceRange"), 10)
        });
        // Add callback behavior for when response is received
        action.setCallback(this, function(response){
            var similarProperties = response.getReturnValue();
            component.set("v.similarProperties", similarProperties);
            $A.util.addClass(spinner, "slds-hide");
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})