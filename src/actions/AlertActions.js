'use strict'

import alt from '../../alt';

class AlertActions {
    addAlert(alert) {
        return alert
    }
    completeAlert(id){
        return id
    }

    deleteAlert(id){
        return id 
    }
    updateAlert(id,content){
        return id,content
    }

}



module.exports = alt.createActions(AlertActions);