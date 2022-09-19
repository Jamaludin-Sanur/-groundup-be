const Message = require("./Message");
const { MESSAGE_TYPE } = require("../constant");

class ErrorMessage extends Message {

    constructor(){
        super();
        this.type = MESSAGE_TYPE.ERROR;
    }

}

module.exports = ErrorMessage;