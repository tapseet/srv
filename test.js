    $(function() {
        $( "#tabs" ).tabs({
            panelTemplate: "<iframe style='width:100%'></iframe>",
            idPrefix: "ui-tabs-",
            select: function(event, ui) {
                if (!$("#ui-tabs-" + ui.index).prop("src")) {
                  $("#ui-tabs-" + ui.index).attr("src", $.data(ui.tab, 'load.tabs'));  
                } 
            }
        });
    });
