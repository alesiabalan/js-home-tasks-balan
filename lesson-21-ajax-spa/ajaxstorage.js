function AjaxStorage() {
    var library = "http://fe.it-academy.by/AjaxStringStorage2.php";
    var self = this,
        pHash = {};

    $.ajax(library,
        {
            type: "POST",
            cache: false,
            dataType: "json",
            data: {
                f: "READ",
                n: "Trias_drinks"
            },
            success: ReadData,
            error: ErrorHandler
            
        }
    );

    function ReadData(data) {
        if (data !== "") {
            pHash = JSON.parse(data.result);
        } else {
            $.ajax(library,
                {
                    type: "POST",
                    cache: false,
                    dataType: "json",
                    data: {
                        f: "INSERT",
                        n: "Trias_drinks",
                        v: JSON.stringify(pHash)
                    },
                    success: DataLoadedInsert,
                    error: ErrorHandler
                }
            );
        }
    }

    function addValueOnServer(pHash) {
        var password = Math.random();

        $.ajax(library,
            {
              type: "POST",
              cache: false,
              dataType: "json",
              data: {
                f: "LOCKGET",
                n: "Trias_drinks",
                p: password
              },
              success: LockgetData,
              error: ErrorHandler
            }
        );
      
        function LockgetData(data) {
            console.log("LockgetData - " + data.result);
      
            $.ajax(library,
              {
                type: "POST",
                cache: false,
                dataType: "json",
                data: {
                  f: "UPDATE",
                  n: "Trias_drinks",
                  p: password,
                  v: JSON.stringify(pHash)
                },
                success: DataLoadedUpdate,
                error: ErrorHandler
              }
            );
      
            function DataLoadedUpdate(data) {
              console.log("DataLoadedUpdate - " + data.result);
            }
        }
    }

    function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
        alert(StatusStr + " " + ErrorStr);
    } 

    self.addValue = function (key, value) {
        pHash[key] = value;
        addValueOnServer(pHash);
    };
    self.getValue = function (key) {
        return pHash[key];
    };
    self.deleteValue = function (key) {
        delete pHash[key];
        addValueOnServer(pHash);
    };
    self.getKeys = function () {
        return (Object.keys(pHash));
    };
  }