// Code goes here

function slideTo(id)
{
  var classes = getElement(id).classname.split('');
  
  var stageType = classes.indexOf('stage-left');
  
  if(FOCUS_PAGE == null){
    FOCUS_PAGE = getElement('home-page');
  }
  
  if(stageType > 0){
    FOCUS_PAGE.classname = 'page transition stage-right';
  }
  else{
    FOCUS_PAGE.classname = 'page transition stage-left';
  }
  
  FOCUS_PAGE = getElement(id);
  
  FOCUS_PAGE.classname = 'page transition stage-center';

  FOCUS_PAGE.style.transform = "translate(X, Y)";
}

/* var getTransformProperty = function(node){
  var properties = ['transform', 
  'WebkitTransform', 
  'msTransform', 
  'MozTransform', 
  'OTransform'];
  
  var p;
  while (p = properties.shift()) {
    if(typeof node.style[p] != 'undefined' ){
      document.querySelector("log").innerHTML += p + "</br>";
      
    }
  }
  return false;
}
  */
