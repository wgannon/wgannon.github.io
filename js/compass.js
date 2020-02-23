$(function(){

    var tbW = $('#mainNav').width();
    var pwW = $('#compass-wrap').width();

    //  Looking for a formula that will set the initial arrow rotation to point  to the left border of the target-box at any browser width. This will be  the target-box cursor x=0 position.         

    // This is just a wild guess at a formula that obviously doesn't work properly
    
    var startingRotatePosition = 0 ;
    
    //alert(startingRotatePosition);
    
    $('#compass-wrap').css({ 
        
        "-moz-transform" : "rotate(" + startingRotatePosition + "deg)" ,
        "-webkit-transform" : "rotate(" + startingRotatePosition + "deg)" ,
        "transform" : "rotate(" + startingRotatePosition + "deg)" 
        
    });
    


    var img = $('.img-fluid');
    //Rotating the arrow based on cursor x position while in the target-box
    $('#mainNav').mousemove(function(e){
        //console.log(e);
        var offset = img.offset();
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = e.pageX; var mouse_y = e.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1)+180; 

        var x = e.pageX;         
        var xCoords = "(  x = " + x + " )"; 

        // Looking for a formula that will keep the arrow rotation proportions on window resize
        // This is just a wild guess at a formula that obviously doesn't work properly
        
        var xRtt = degree;                

        $('#mainNav span#xCoordinates').text(xCoords);


        $('#compass-wrap').css({ 
            
            "-moz-transform" : "rotate("+xRtt+"deg)" ,
            "-webkit-transform" : "rotate("+xRtt+"deg)" ,
            "transform" : "rotate("+xRtt+"deg)" 
        
        });
    
        
    });
    
    
});