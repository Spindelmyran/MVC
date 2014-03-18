
// constructor

function View(model, uicomponents){
          this._model = model;
          this._uicomponents = uicomponents;

          this.listButtonClicked = new Signal(this);
          this.addButtonClicked = new Signal(this);
          this.editButtonClicked = new Signal(this);
          this.deleteButtonClicked = new Signal(this);

          var _self = this;
          this._model.recordAddedSignal.listen(function(){
               _self.refreshUicomponent();
          });
          this._model.recordDeletedSignal.listen(function(){
               _self.refreshUicomponent();
          });
         this._model.recordEditedSignal.listen(function(){
               _self.refreshUicomponent();
         });

         this._uicomponents.buttons.list.click(function(){
                _self.listButtonClicked.signal(); 
         });
         this._uicomponents.buttons.add.click(function(){
               _self.addButtonClicked.signal(); 
         });
         this._uicomponents.buttons.edit.click(function(){
               _self.editButtonClicked.signal(); 
          });
         this._uicomponents.buttons.delete.click(function(){
              _self.deleteButtonClicked.signal(); 
        });
}

// prototype methods

View.prototype = {
                  refreshUicomponent : function(){
                  			var x = 0;
                            var records=this._model.listRecords();
                            for(var record in records){
                                 if(records.hasOwnProperty(record)){
                                     //Populate screen with records on desired uicomponent
                                     x++;
                                     $('div#r'+x).text(records[record]);
                                     
                                  }
                            }
                   },
                   load : function(){
                           this.refreshUicomponent();
                   }
};