/*
 * File: app/controller/Business.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('WitWu.controller.Business', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'MainTabView'
        ],

        refs: {
            todoList: '#todoList',
            taskDetailsForm: 'form[itemId=taskDetailsForm]'
        },

        control: {
            "#todoList": {
                itemtap: 'onListItemTap'
            },
            "button#addButton": {
                tap: 'onAddButtonTap'
            },
            "button#finishAddButton": {
                tap: 'onFinishButtonTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {

        var myStore = Ext.StoreMgr.get('BusinessStore'); //works - get reference to
        var myRecord = dataview.getStore().getAt(index);
        myStore.remove(record);
    },

    onAddButtonTap: function(button, e, eOpts) {
        console.log("We tapped an add button");

        var addtask = this.getTaskDetailsForm();
        console.log(addtask);
        if (!addtask){
            console.log('taskDetailsForm is not yet initialized');
            addtask = Ext.create('WitWu.view.taskDetailsForm', {fullscreen: true});
            console.log("Instantiated taskDetailsForm");
        }
        addtask.showBy(button);

    },

    onFinishButtonTap: function(button, e, eOpts) {
        var myStore = Ext.StoreMgr.get('BusinessStore'); //works - get reference to
        var taskNameIn = Ext.getCmp('taskTextField').getValue();
        var ownerNameIn = Ext.getCmp('ownerTextField').getValue();
        console.log(taskNameIn + ownerNameIn);
        myStore.add({taskName: taskNameIn, ownerName: ownerNameIn} );
    }

});