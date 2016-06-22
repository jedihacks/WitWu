/*
 * File: app/store/TodoStore.js
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

Ext.define('WitWu.store.TodoStore', {
    extend: 'Ext.data.Store',

    requires: [
        'WitWu.model.TodoModel'
    ],

    config: {
        data: [
            {
                id: 200,
                userName: 'Len',
                taskName: 'Run 5 miles'
            },
            {
                id: 201,
                userName: 'Len',
                taskName: 'Present marketing plan'
            },
            {
                id: 202,
                userName: 'Force',
                taskName: 'Research potential advertisement platforms'
            },
            {
                id: 203,
                userName: 'Force',
                taskName: 'Get Groceries'
            },
            {
                id: 204,
                userName: 'Jedi',
                taskName: 'Demo App'
            },
            {
                id: 205,
                userName: 'Jedi',
                taskName: 'Growth Plan'
            },
            {
                id: 206,
                userName: 'Jedi',
                taskName: 'Meetign with Chris + Len'
            }
        ],
        groupField: 'userName',
        model: 'WitWu.model.TodoModel',
        storeId: 'TodoStore',
        grouper: {
            groupFn: function(item) {
                if (item && item.data.userName) {
                    return item.data.userName;
                }
                else {
                    return '';
                }
            },
            sortProperty: 'userName'
        }
    }
});