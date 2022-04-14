$(document).ready(function(){
    $("#flow-tab .tab-name").click(function(e){
        $("#flow-tab .tab-name").removeClass("active");

        var $this = $(this);
        if (!$this.hasClass("active")) {
            $this.addClass("active");
        }

        e.preventDefault();

    });
    
    $("#palette-tab .tab-name").click(function(e){
        $("#palette-tab .tab-name").removeClass("active");

        var $this = $(this);
        if (!$this.hasClass("active")) {
            $this.addClass("active");
        }

        e.preventDefault();
        
    });
    
    $(".category-button") .click(function(e){
        $(".category-button").removeClass("active");
        
        var $this = $(this);
        if (!$this.hasClass("active")) {
            $this.addClass("active");
        }
    
        e.preventDefault();
        
    });

    $("#properties-tab .tab-name").click(function(e){
        $("#properties-tab .tab-name").removeClass("active");

        var $this = $(this);
        if (!$this.hasClass("active")) {
            $this.addClass("active");
        }

        e.preventDefault();

    });

    $("#flow-map-tab .tab-name").click(function(e){
        $("#flow-map-tab .tab-name").removeClass("active");

        var $this = $(this);
        if (!$this.hasClass("active")) {
            $this.addClass("active");
        }

        e.preventDefault();

    });

    $("#main-menu .menu-name").click(function(e){
        $("#main-menu .menu-name").removeClass("active");

        var $this = $(this);
        if (!$this.hasClass("active")) {
            $this.addClass("active");
        }

        e.preventDefault();

    });

    $("#sub-main-menu .menu-name").click(function(e){
        $("#sub-main-menu .menu-name").removeClass("active");

        var $this = $(this);
        if (!$this.hasClass("active")) {
            $this.addClass("active");
        }

        e.preventDefault();

    });
    
    $("#properties-group .list-item").click(function(e){
        $(this).toggleClass("active");
    });

    $("#flow-map-group .list-item").click(function(e){
        $(this).toggleClass("active");
    });

    $(".list-sub-item").parent().addClass("has-child");


    $('.element-item').sortable({
        connectWith: '.flow-diagram',
        receive: function (event, ui) {
        }
      });
      
    //   $('.flow-diagram').sortable({
    //     appendTo: document.body,
    //     items: '.element-item',
    //     connectWith: '.element-item',
    //     receive: function (event, ui) {
    //     //   console.log(event, ui.item);
    //       //ui.item.remove(); // remove original item
    //     }
    //   });

    // $( function() {
    //     $( ".elements-list, .flow-diagram" ).sortable({
    //       connectWith: ".flow-diagram"
    //     }).disableSelection();
    //   } );


    $(".elements-list .element-item").draggable({
        helper : 'clone',
        cursor: "move", 
        cursorAt: { top: 25, left: 90 },
        snap : ".canvas",
        drag : function(e, ui){
            $(".flow-diagram").css({
                "min-width" : "100%",
                "height" : "490px"
            });
        },
        stop : function (e, ui) {
            $(".flow-diagram").css({
                "width" : "auto"
            });
            // $(".canvas").append("<ul class='flow-diagram'></ul><br>")
        }
    });

    
    // if (!$(".flow-diagram").find(".element-item").length) {
    //     console.log("kosong");
    // }else{
    //     console.log("tidak kosong   ")
    // }

    // $(".flow-diagram").click(function(e){
    //     e.preventDefault();
    //     console.log("Ok");
    // });
    
    // $(".flow-diagram").after("<br>")

    // $(".canvas").droppable({
    //     accept : ".element-item",
    //     drop : function(ev, ui){
    //             var droppedItem = $(ui.draggable).clone();
    //         $(this).append("<ul class='flow-diagram'></ul>");
    //         console.log(droppedItem);
    //         // if($(this).children().length > 0){
    //         // }
    //     }
    // });
    
    // $(".flow-diagram").sortable();

    $(".flow-diagram").droppable({
        accept : ".element-item",
        drop : function (ev, ui) {
            var droppedItem = $(ui.draggable).clone();
            $(this).append(droppedItem);   

        }
    })

});