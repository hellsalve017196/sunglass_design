var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var elements = document.getElementsByClassName('base');

var clear = function () {
    context.clearRect(0,0,canvas.width,canvas.height)
}

var draw = function ()
{
    clear();

    var images = [];

    for(i=0;i<elements.length;i++)
    {
        images.push('img/'+elements[i].value+'.png');
    }

    var imageobjects = [];

    for(i=0;i<images.length;i++)
    {
        imageobjects[i] = new Image();

        imageobjects[i].onload = function () {
            context.drawImage(this,0,0);
        };

        imageobjects[i].src = images[i];
    }
};


//on change event
for(i=0;i<elements.length;i++)
{
    elements[i].onchange = function () {
        draw();
    }
}


//starting the algorithm
draw();




