const Message = require("./Message");
const { MESSAGE_TYPE } = require("../constant");

class SuccessMessage extends Message {

    constructor(){
        super();
        this.type = MESSAGE_TYPE.SUCCESS;
    }

}

module.exports = SuccessMessage;