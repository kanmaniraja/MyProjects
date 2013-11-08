var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var screenWidth = Titanium.Platform.displayCaps.platformWidth;

var viewWidth = screenWidth / 7;

var image = Ti.UI.createImageView({
  image: '/planning-poker-logo.jpg',
  top: 0, left: 0, height: '10%', width: '30%'
});

win.add(image);

var pointLabel = new Ti.UI.createLabel({
    text: '?', textAlign: 'center',
    color: 'blue',
    font: { fontSize:300, fontWeight: 'bold', fontFamily: 'monospace' },
    top: 95,
    shadowColor: '#aaa',
    shadowOffset: {x:5, y:5}
});


win.add(pointLabel);

function setPoint(point) {
    pointLabel.text = point;
}

function createActionView(bgColor, bottomPos, leftPos) {
  return Ti.UI.createView({
            backgroundColor: bgColor,
            height: viewWidth,
            width: viewWidth,
            bottom: bottomPos, left: leftPos
        }); 
}

function createActionLabel(label, labelColor) {
    return Ti.UI.createLabel({
                text: label, textAlign: 'center',
                color: labelColor,
                font: { fontSize:20, fontWeight: 'bold', fontFamily: 'monospace' },
                shadowColor: '#aaa',
                shadowOffset: {x:1, y:1}
          });
}


var point1 = createActionView('red', 0, 0);

point1.add(createActionLabel('1', 'black'));

point1.addEventListener('click', function(){
    setPoint('1');
});

win.add(point1);

var point2 = createActionView('gray', 0, viewWidth);

point2.add(createActionLabel('2', 'white'));

point2.addEventListener('click', function(){
    setPoint('2');
});

win.add(point2);

var point3 = createActionView('#3399FF', 0, viewWidth * 2);

point3.add(createActionLabel('3', 'cyan'));

point3.addEventListener('click', function(){
    setPoint('3');
});

win.add(point3);

var point5 = createActionView('yellow', 0, viewWidth * 3);

point5.add(createActionLabel('5', 'red'));

point5.addEventListener('click', function(){
    setPoint('5');
});

win.add(point5);

var point8 = createActionView('cyan', 0, viewWidth * 4);

point8.add(createActionLabel('8', 'blue'));

point8.addEventListener('click', function(){
    setPoint('8');
});


win.add(point8);

var point13 = createActionView('#66FF33', 0, viewWidth * 5);

point13.add(createActionLabel('13', 'yellow'));

point13.addEventListener('click', function(){
    setPoint('13');
});

win.add(point13);

var question = createActionView('#FF6666', 0, viewWidth * 6);

question.add(createActionLabel('?', '#800000'));

question.addEventListener('click', function(){
    setPoint('?');
});


win.add(question);

win.open();