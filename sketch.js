var sound1
function preload(){
  sound1 = loadSound("28994767_MotionElements_before-christmas-musicbox-slowlyver_preview.mp3") //先把音樂檔載入到sound1程式碼中
}

var face_colors = "dad7cd-a3b18a-588157-3a5a40-344e41".split("-").map(a=>"#"+a)
var eye_colors = "0a0908-22333b-eae0d5-c6ac8f-5e503f".split("-").map(a=>"#"+a)

var pos_x=[]
var pos_y= []
var sizes=[]
var colors=[]
var v_y=[] //  移動速度x軸
var v_x=[] //移動速度y軸
var txts //宣告一個變數，txts變數存放著文字框內容



function setup() {
  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)

  //文字框的設定
  inputElement = createInput("412730144林品萱") //產生一個文字方塊
  inputElement.position(20,10) //把文字方塊移到(10,10)
  inputElement.size(140,40) //文字框的寬與高

  inputElement.style ("font-size","16px") //文字框內的文字大小
  inputElement.style("color","#16697a")//文字框內的文字顏色
  inputElement.style("background","#a9bcd0")//文字框的背景顏色
  inputElement.style("border","none")//設定文字框沒有框線

  //"音樂"按鈕的設定
  btnMoveElement = createButton("音樂")//產生一個按鈕，按鈕上有"移動字""
  btnMoveElement.position(180,10) //按鈕的位置
  btnMoveElement.size(80,40)//按鈕的寬與高
  btnMoveElement.style("font-size","18px")//按鈕框內的文字大小
  btnMoveElement.style("color","#d88c9a")//按鈕內的文字顏色
  btnMoveElement.style("background","#efd3d7")//按鈕的背景顏色
  btnMoveElement.mousePressed (face_move) //按鈕被按下後會執行face_move函數

 //"暫停"按鈕的設定
  btnStopElement = createButton("暫停")//產生一個按鈕，按鈕上有"暫停"字
  btnStopElement.position(270,10) //按鈕的位置
  btnStopElement.size(80,40)//按鈕的寬與高
  btnStopElement.style("font-size","18px")//按鈕框內的文字大小
  btnStopElement.style("color","#d88c9a")//按鈕內的文字顏色
  btnStopElement.style("background","#efd3d7")//按鈕的背景顏色
  btnStopElement.mousePressed (face_stop) //按鈕被按下後會執行face_stop函數

 //radio的設定，多個選項，只能選一個(單選題)
 radioElement=createRadio()
 radioElement.option("暫停")
 radioElement.option("旋轉")
 radioElement.option("移動")
 radioElement.position(370,10) //選鈕的位置
 radioElement.size(200,40)//選紐的寬與高
 radioElement.style("font-size","18px") //選紐內的文字大小
 radioElement.style("color","#e07a5f")//選紐內的文字顏色
 radioElement.style("background","#f9dcc4")

}


 function draw (){
  background("#efe6dd") //背景顏色
  for(var i=0;i<pos_x.length;i=i+1) //依照pos_x內有幾筆資料，就會產生幾個物件
  {
    push()
     //txts = imputElement.value();//把文字框的文字內容，放入到txts變數內
     translate(pos_x[i],pos_y[i])
     drawface(colors[i],0,sizes[i])
    pop()
    pos_y[i]=pos_y[i] +v_y[i]
    //?????????????????????????????
    if(pos_y[i]>height ||pos_y[i]<0) //判斷有沒有碰到上下邊，碰到上下邊時，就要刪除所有陣列的該筆資料
    {
      pos_x.splice(i,1) //把碰到邊的陣列元刪除，把第i筆資料刪除1筆資料
      pos_y.splice(i,1)
      sizes.splice(i,1)
      colors.splice(i,1)
      v_y.splice(i,1)
    }
  }
}

function drawface(face_clr=255,eye_clr=0,size=1){ //255與0為預設的值
   push() //自行設定格式
   
   //translate(random(width),random(height)) //原點(0,0)移動到(200,200)
   scale(size)// 先宣告放大縮小的比例尺

   //文字框的顯示格式
    fill("#9a8c98") //文字的顏色
    textSize(50)//文字大小
    text(txts,-100,250) //顯示文字，文字內容為txts，放在位置座標為(50,200)
    }

 function draw (){
  background("#efe6dd")
  for(var i=0;i<pos_x.length;i=i+1)
  {
    push()
     translate(pos_x[i],pos_y[i])
     drawface(colors[i],0,sizes[i])
    pop()
    pos_y[i]=pos_y[i] +v_y[i]
    //?????????????????????????????
    if(pos_y[i]>height ||pos_y[i]<0) //判斷有沒有碰到上下邊
    {
      pos_x.splice(i,1) //把碰到邊的陣列元刪除
      pos_y.splice(i,1)
      sizes.splice(i,1)
      colors.splice(i,1)
      v_y.splice(i,1)
    }
  }
}


function drawface(face_clr=255,eye_clr=0,size=1){ //255與0為預設的值

  push() //自行設定格式

   //translate(random(width),random(height)) //原點(0,0)移動到(200,200)
   scale(size)//
   fill(face_clr)

   //臉蛋
   ellipse(0,0,350)

   //眼睛
   fill("#ffffff")
   ellipse(0,-30,200,200)

   //眼球
   fill("#000000")
   ellipse(0,0,100,100)

   //眼珠
   fill("#ffffff")
   ellipse(-10,-10,20,20) 

   //嘴巴 
   fill("#ffb3c1")
   arc(0,90,-80,70,-0,PI) 
  
   //腮紅
   fill("#e5989b")
   ellipse(-100,60,50,30)
   ellipse(100,60,50,30)


pop() //原本設定的格式全部取消
}


function mousePressed(){
  pos_x.push(mouseX)
  pos_y.push(mouseY)
  sizes.push(random(0.3,1))
  colors.push(face_colors[int(random(face_colors.length))])
  v_y.push(random(-1,1))
  
}
function face_move(){
sound1.play();

}
function face_stop(){
  sound1.stop();
}

