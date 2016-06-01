
(function($) {

    "use strict";

    $(function() {

        $.extend( $.ui.slider.prototype.options, { 

            animate: "fast",

            stop: function() {

                var ident = this.id || this.className;
                /*ga("send", "event", "slider", "interact", ident );*/

            }

        });



        var IPA = ["0",  "10", "172", "255"];
        var IPB = ["0", "255"];
        //var activeMonth = new Date().getMonth();

        //$("#custom-labels-output").text( "The current month is: " + months[activeMonth] );

        $("#myslider")
            .slider({ min: 0, max: IPA.length-1, value: "0" })
            .slider("pips", {
                rest: "label",
                labels: IPA
            })
            .on("slidechange", function(e,ui) {
                $("#custom-labels-output").text( "You selected " + IPA[ui.value] + " (" + ui.value + ")");
                 if(flag == 1){
                    ipa = parseInt(IPA[ui.value]);
                    ipb = 0;
                    search();
                    flag = 0;
                     /*$("#myslider1")
                        .slider({ min: 0, max: IPB.length-1, value: "0" })
                        .slider("pips", {
                            rest: "label",
                            labels: IPB
                         })
                        .on("slidechange", function(e,ui) {
                           $("#custom-labels-output").text( "You selected " + IPB[ui.value] + " (" + ui.value + ")");
                             if(flag == 1){
                               ipb = parseInt(IPB[ui.value]);
                               ipa = 0;
                               search();
                               flag = 0;
                    
                        }else{
                           ipb = parseInt(IPB[ui.value]);
                    
                           search2();
                        }
                        });*/
                   
                 }else{
                    ipa = parseInt(IPA[ui.value]);
                    if(ipa == 10){
                        IPB=["18", "20", "24", "33", "37", "39", "46", "52", "54", "67", "114", "116", "118", "145", "146"];

                    }
                    if(ipa == 172){
                        IPB = ["0", "20"];
                    }
                    $("#myslider1")
                      .slider({ min: 0, max: IPB.length-1, value: "0" })
                      .slider("pips", {
                         rest: "label",
                         labels: IPB
                       })
                      .on("slidechange", function(e,ui) {
                        $("#custom-labels-output").text( "You selected " + IPB[ui.value] + " (" + ui.value + ")");
                        if(flag == 1){
                           ipb = parseInt(IPB[ui.value]);
                           ipa = 0;
                           search();
                           flag = 0;
                    
                        }else{
                           ipb = parseInt(IPB[ui.value]);
                    
                           search2();
                        }
                       });
                     search2();

                   /*IPB = ["0", "145", "255"];
                     $("#myslider1")
                      .slider({ min: 0, max: IPB.length-1, value: "0" })
                      .slider("pips", {
                         rest: "label",
                         labels: IPB
                       })
                      .on("slidechange", function(e,ui) {
                        $("#custom-labels-output").text( "You selected " + IPB[ui.value] + " (" + ui.value + ")");
                        if(flag == 1){
                           ipb = parseInt(IPB[ui.value]);
                           ipa = 0;
                           search();
                           flag = 0;
                    
                        }else{
                           ipb = parseInt(IPB[ui.value]);
                    
                           search2();
                        }
                       });*/
                    //search2();
                 }
            });


          $("#myslider1")
              .slider({ min: 0, max: IPB.length-1, value: "0" })
              .slider("pips", {
                    rest: "label",
                    labels: IPB
                })
              .on("slidechange", function(e,ui) {
                    $("#custom-labels-output").text( "You selected " + IPB[ui.value] + " (" + ui.value + ")");
                    if(flag == 1){
                        ipb = parseInt(IPB[ui.value]);
                        ipa = 0;
                        search();
                        flag = 0;
                    
                    }else{
                        ipb = parseInt(IPB[ui.value]);
                    
                        search2();
                    }
               });

        

          $("#myslider2")
            .slider({ min: 0, max: 10, step: 1 })
            .slider("pips", {
                rest: "label",
                step: 1
            })
            .on("slidechange", function(e,ui) {
                currentTimes = parseInt(ui.value);
                search2();
            });
            //.slider("float");


         $("#myslider3")
            .slider({ min:1, max: 12, range: true, values: [7, 7] })
            .slider("pips",{
                rest:"label"
            })
            .on("slidechange", function(e,ui) {
                //alert(ui.values[1]);
                month1 = ui.values[0];
                month2 = ui.values[1];
                histogram2();
                histogram3();
                search2();

            });

         $("#myslider4")
            .slider({ min:1, max: 31, range: true, values: [1, 30] })
            .slider("pips",{
                rest:"label"
           })
            .on("slidechange", function(e,ui) {
                day1 = ui.values[0];
                day2 = ui.values[1];
                histogram3();
                search2();

            });

         $("#myslider5")
            .slider({ min:0, max: 24, range: true, values: [0, 24] })
            .slider("pips",{
                rest:"label"
            })
            .on("slidechange", function(e,ui) {
                hour1 = ui.values[0];
                hour2 = ui.values[1];
                search2();

            });

        $(".step-table-slider-11")
            .slider({ min: 0, max: 50 })
            .slider("pips");



       window.onload = function()
       {
         var $li = $('#tab li');
         var $ul = $('#content ul');

         $li.mouseover(function(){
             var $this = $(this);
             var $t = $this.index();
             $li.removeClass();
             $this.addClass('current');
             $ul.css('display', 'none');
             $ul.eq($t).css('display', 'block');
         });



       }
       

     

    });

}(jQuery));

