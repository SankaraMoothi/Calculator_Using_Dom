var divtitle=document.createElement("div")
divtitle.className="titletag"
var h1=createtag("h1","title","Calculator")
var p=createtag("p","description","Make the Math Easy Use This");

var div=document.createElement("div");
div.setAttribute("class","parent");

var div1=document.createElement("div");
div1.setAttribute("class","child");

var inputScreen=document.createElement("input");
inputScreen.setAttribute("type","text");
inputScreen.setAttribute("id","result");
inputScreen.setAttribute("placeholder","0");

var bnt1=createbutton("button","button","c","clear","btn btn-secondary","C")
var bnt2=createbutton("button","button","delete","delete","btn btn-info","←")
var bnt3=createbutton("button","button",".","dot","btn btn-info",".")
var bnt4=createbutton("button","button","*","mult","btn btn-info","x")
var bnt5=createbutton("button","button","7","7","btn btn-light waves-effect","7")
var bnt6=createbutton('button','button','8',"8","btn btn-light waves-effect",'8')
var bnt7=createbutton('button','button','9','9',"btn btn-light waves-effect",'9')
var bnt8=createbutton('button','button','/' ,'divi','btn btn-info','/')
var bnt9=createbutton('button','button','4','4',"btn btn-light waves-effect",'4')
var bnt10=createbutton('button','button','5','5',"btn btn-light waves-effect",'5')
var bnt11=createbutton('button','button','6','6',"btn btn-light waves-effect",'6')
var bnt12=createbutton('button','button','-','subtract','btn btn-info','-')
var bnt13=createbutton('button','button','1','1',"btn btn-light waves-effect",'1')
var bnt14=createbutton('button','button','2','2',"btn btn-light waves-effect",'2')
var bnt15=createbutton('button','button','3','3',"btn btn-light waves-effect",'3')
var bnt16=createbutton('button','button','+','add','btn btn-info','+')
var bnt17=createbutton('button','button','0','0',"btn btn-light waves-effect",'0')
var bnt18=createbutton('button','button','00','00',"btn btn-light waves-effect",'00')
var bnt19=createbutton('button','button','=' ,'equal','equal-button  btn btn-primary','=')

divtitle.append(h1,p);
div1.append(inputScreen,bnt1,bnt2,bnt3,bnt4,bnt5,bnt6,bnt7,bnt8,bnt9,bnt10,bnt11,bnt12,bnt13,bnt14,bnt15,bnt16,bnt17,bnt18,bnt19)
div.append(div1);
document.body.append(divtitle,div);

function createtag(tagname,idname,data){
    var tag=document.createElement(tagname);
    tag.setAttribute("id",idname)
    tag.innerHTML=data
    return tag;
}

function createbutton(bttag,bttype,btvalue,btid,btclassname,name) {
    var button= document.createElement(bttag)
    button.setAttribute('type',bttype);
    button.setAttribute('value',btvalue);
    button.setAttribute('id',btid);
    button.className=btclassname;
    button.innerHTML=name
    button.addEventListener('click', (val)=>{
        var data=val.target.value
        if(data=="=")
        {
         equal( );
        }
        else if(data=='delete')
        {
            del();
        }
        else{
           display(data)
        }
        if(data=="c")
        {
           Clear();
        }
    
           })
  return button;
}
var outputView = document.getElementById("result");

function display(num)
{
    outputView.value+=num;
   
}

function equal(val){
    try{
        outputView.value = eval(outputView.value);
    }
    catch(eror){
        alert("Only numbers are allowed")
    }
 
   

}
function del(){
    outputView.value = outputView.value.slice(0,-1);

}

function Clear()
{
    outputView.value = ""
}