/*
 * File: app/view/taskDetailsForm.js
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

Ext.define('WitWu.view.taskDetailsForm', {
    extend: 'Ext.Panel',
    alias: 'widget.taskdetails',

    config: {
        centered: true,
        id: 'taskDetailsForm',
        itemId: 'taskDetailsForm',
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'checkboxfield',
                label: 'Field'
            },
            {
                xtype: 'emailfield',
                label: 'Field',
                placeHolder: 'email@example.com'
            },
            {
                xtype: 'button',
                text: 'MyButton1'
            }
        ]
    },

    initialize: function() {
        console.log("initializing taskDetailsForm");
        this.callParent();
    }

});