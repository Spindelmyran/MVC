// constructor
function Model(records){
        this._records = records;
        this.recordAddedSignal = new Signal(this); 
        this.recordDeletedSignal = new Signal(this);
        this.recordEditedSignal = new Signal(this);
}

// prototype methods

Model.prototype = {
         listRecords : function(){
              return this._records;
         },
         addRecord : function(record){
              this._records.push(record);
              this.recordAddedSignal.signal({data : record});
         },
         editRecord : function(record){
              //find record from collection and update it
              this.recordEditedSignal.signal({data : record});
         },
         deleteRecord : function(index){
              //remove the record from collection, for example
                this._records.splice(index,1);
                this.recordDeletedSignal.signal({data : index});
         }
};