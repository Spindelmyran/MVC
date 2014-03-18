
// constructor

function Signal(transmitter) {
		//console.log('transmitter '+transmitter);
        this._transmitter = transmitter;
        this._listener;
}

// prototype methods

   Signal.prototype = {
        listen : function (listener) {
            this._listener = listener;
        },
        signal : function (args) {
                this._listener(this._transmitter, args); 

                //You can have many listeners and invoke each of them
        }
    };
    
    
