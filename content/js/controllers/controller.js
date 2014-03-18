
// constructor

function Controller(model, view){
                      this._model = model;
                      this._view = view;
                      var _self = this;
                      
                      this._view.listButtonClicked.listen(function(){
                      		console.log('list');
                             _self.listRecords();
                      });
                      this._view.addButtonClicked.listen(function(){
                             //fetch record data from uicomponent and pass to the method
                             var addData = $('input[id=addPost]').val()
                            _self.addRecord(addData);
                       });
                       this._view.editButtonClicked.listen(function(){
                              //fetch record data from uicomponent and pass to the method

                             _self.editRecord(record);
                       });
                       this._view.deleteButtonClicked.listen(function(event){
                              //fetch index from event
                            
                             
                             _self.deleteRecord(1);
                       }); 
}

// prototype methods

Controller.prototype = {
                       listRecords : function(){
                             this._model.listRecords();
                       },
                       addRecord : function(record){
                             this._model.addRecord(record);
                       },
                       editRecord : function(record){
                             this._model.editRecord(record);
                       },
                       deleteRecord : function(index){
                             this._model.deleteRecord(index);
                       }
};