
$(document).ready(function () {

    //Scroll Up
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });
    //Sticky Nav
    $(".upperNav").sticky({ topSpacing: 0, zIndex:999 });
    //Sticky Breadcrumbs
    $(".breadcrumb").sticky({ topSpacing: 70, zIndex:1 });

//Home Page Effects

    // Laundry Machine
    $("#LaundryHeaderPic")
  .mouseenter(function () {
      $(".SakraniHome1").hide();
      $(".SakraniHome2").show();
      $("#pLaundryHeader").show();
      $("#HomeStartingMessage").hide();
      
  })
  .mouseleave(function () {
      $(".SakraniHome1").show();
      $(".SakraniHome2").hide();
      $("#pLaundryHeader").hide();
      $("#HomeStartingMessage").show();
      
  });
    //Accessibility
    $("#LaundryHeaderPic").focus(function () {
        $(".SakraniHome1").hide();
        $(".SakraniHome2").show();
        $("#pLaundryHeader").show();
        $("#HomeStartingMessage").hide();
    });

    $("#LaundryHeaderPic").focusout(function () {
        $(".SakraniHome1").show();
        $(".SakraniHome2").hide();
        $("#pLaundryHeader").hide();
        $("#HomeStartingMessage").show();
    });

    // TV

     $("#TvHeaderPic")
    .mouseenter(function () {
        $(".SakraniHome1").hide();
        $(".SakraniHome2").show();
        $("#pTvHeader").show();
        $("#HomeStartingMessage").hide();

    })
    .mouseleave(function () {
        $(".SakraniHome1").show();
        $(".SakraniHome2").hide();
        $("#pTvHeader").hide();
        $("#HomeStartingMessage").show();
    });

    //Accessibility
     $("#TvHeaderPic").focus(function () {
         $(".SakraniHome1").hide();
         $(".SakraniHome2").show();
         $("#pTvHeader").show();
         $("#HomeStartingMessage").hide();
     });

     $("#TvHeaderPic").focusout(function () {
         $(".SakraniHome1").show();
         $(".SakraniHome2").hide();
         $("#pTvHeader").hide();
         $("#HomeStartingMessage").show();
     });
    // AC

    $("#AcHeaderPic")
    .mouseenter(function () {
        $(".SakraniHome1").hide();
        $(".SakraniHome2").show();
        $("#pAcHeader").show();
        $("#HomeStartingMessage").hide();

    })
    .mouseleave(function () {
        $(".SakraniHome1").show();
        $(".SakraniHome2").hide();
        $("#pAcHeader").hide();
        $("#HomeStartingMessage").show();
    });

    //Accessibility
    $("#AcHeaderPic").focus(function () {
        $(".SakraniHome1").hide();
        $(".SakraniHome2").show();
        $("#pAcHeader").show();
        $("#HomeStartingMessage").hide();
    });
    $("#AcHeaderPic").focusout(function () {
        $(".SakraniHome1").show();
        $(".SakraniHome2").hide();
        $("#pAcHeader").hide();
        $("#HomeStartingMessage").show();
    });

    //Tooltips

    $("#edge")
.mouseenter(function () {
    $("#edgeShow").show();

})
.mouseleave(function () {
    $("#edgeShow").hide();

});

    $("#fullLed")
.mouseenter(function () {
    $("#fullLedShow").show();

})
.mouseleave(function () {
    $("#fullLedShow").hide();

});

    $("#BTU")
.mouseenter(function () {
    $("#BTUShow").show();
})
.mouseleave(function () {
    $("#BTUShow").hide();
   
});


    $("#AC-NRG")
.mouseenter(function () {
    $("#AC-NRGShow").show();

})
.mouseleave(function () {
    $("#AC-NRGShow").hide();

});

    //Helpful Sakrani
    //Yes
    $(".readerInput a:nth-child(7)")
.mouseenter(function () {
    $(".helpfulSakrani").hide();
    $(".helpfulSakraniYes").show();
})
.mouseleave(function () {
    $(".helpfulSakrani").show();
    $(".helpfulSakraniYes").hide();
});
    //No
    $(".readerInput a:nth-child(8)")
.mouseenter(function () {
    $(".helpfulSakrani").hide();
    $(".helpfulSakraniNo").show();
})
.mouseleave(function () {
    $(".helpfulSakrani").show();
    $(".helpfulSakraniNo").hide();
});

    //Reader Input Message

    $(".readerInput a:nth-child(7)").click(function () {
        $(this).hide();
        $(".readerInput a:nth-child(8)").hide();
        $(".readerInput p").hide();
        $(".goodFeed").show();
    });

    $(".readerInput a:nth-child(8)").click(function () {
        $(this).hide();
        $(".readerInput a:nth-child(7)").hide();
        $(".readerInput p").hide();
        $(".badFeed").show();
    });

    //Paramater buttons

    $(".main_parameter").click(function (event) {
        var target = event.target;
        $(target).toggleClass("plus-img");
        $(target).toggleClass("minus-img");
    });

});
