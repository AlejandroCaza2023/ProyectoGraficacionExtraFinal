
//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
import { Point3D } from './point3D.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

let cv: CvHLines;
let obj: Obj3D;
let ang: number=0;
let maxClickA = 0;
let countClickA = 0;
let maxClickC = 4;
let countClicC = 0;

function leerArchivo(e:any) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    obj = new Obj3D();
    if (obj.read(contenido)) {
      //sDir = sDir1;
      cv = new CvHLines(graphics, canvas);
      cv.setObj(obj);
      cv.paint();
    }
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido:any) {
  var elemento = document.getElementById('contenido-archivo');
  //
  //readObject(new Input(contenido));
  elemento.innerHTML = contenido;
}

function vp(dTheta:number, dPhi:number, fRho:number):void{  // Viewpoint
  if (obj != undefined) {
    let obj: Obj3D = cv.getObj();
    if (!obj.vp(cv, dTheta, dPhi, fRho))
      alert('datos no validos');
  }
  else
    alert('aun no has leido un archivo');
}

function eyeDownFunc() {
  vp(0, 0.1, 1);
}

function eyeUpFunc() {
  vp(0, -0.1, 1);
}

function eyeLeftFunc() {
  vp(-0.1, 0, 1);
}

function eyeRightFunc() {
  vp(0.1, 0, 1);
}

function incrDistFunc() {
  vp(0, 0, 2);
}

function decrDistFunc() {
  vp(0, 0, 0.5);
}


function pza1IzqFunc() {
  let af = -10;
 	
	Rota3D.initRotate( obj.w[139], obj.w[140], af*Math.PI/180);	
	
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}

    var trIz = -4,
        trDr = -2;

function DesplazarXN(){
  var tr=1;
  if(trIz<= -1){
    for(
    var i=241; i<363; i++){
    obj.w[i].x=obj.w[i].x+tr;
    }
    for(
      var i=377; i<=378; i++){
      obj.w[i].x=obj.w[i].x+tr;
      }
      for(
        var i=380; i<=381; i++){
        obj.w[i].x=obj.w[i].x+tr;
        }
        for(
          var i=383; i<=384; i++){
          obj.w[i].x=obj.w[i].x+tr;
          }
          for(
            var i=386; i<=387; i++){
            obj.w[i].x=obj.w[i].x+tr;
            }
            for(
              var i=389; i<=390; i++){
              obj.w[i].x=obj.w[i].x+tr;
              }
              for(
                var i=392; i<=393; i++){
                obj.w[i].x=obj.w[i].x+tr;
                }
                for(
                  var i=395; i<=396; i++){
                  obj.w[i].x=obj.w[i].x+tr;
                  }
                  for(
                    var i=398; i<=399; i++){
                    obj.w[i].x=obj.w[i].x+tr;
                    }
    cv.setObj(obj);
    cv.paint();
    trIz++;
    trDr--;
  }
}

function DesplazarXP(){
  var tr=-1;
  if(trDr<=1){
  for(
    var i=241; i<363; i++){
      obj.w[i].x=obj.w[i].x+tr;
    }
    for(
      var i=377; i<=378; i++){
      obj.w[i].x=obj.w[i].x+tr;
      }
      for(
        var i=380; i<=381; i++){
        obj.w[i].x=obj.w[i].x+tr;
        }
        for(
          var i=383; i<=384; i++){
          obj.w[i].x=obj.w[i].x+tr;
          }
          for(
            var i=386; i<=387; i++){
            obj.w[i].x=obj.w[i].x+tr;
            }
            for(
              var i=389; i<=390; i++){
              obj.w[i].x=obj.w[i].x+tr;
              }
              for(
                var i=392; i<=393; i++){
                obj.w[i].x=obj.w[i].x+tr;
                }
                for(
                  var i=395; i<=396; i++){
                  obj.w[i].x=obj.w[i].x+tr;
                  }
                  for(
                    var i=398; i<=399; i++){
                    obj.w[i].x=obj.w[i].x+tr;
                    }
    cv.setObj(obj);
    cv.paint();
    trIz--;
    trDr++;
  }
}

      var trARR = -7,
          trABJ = -5;

  function DesplazarAR(){
    var tr=1;
    if(trARR<= -1){
    for(
      var i=241; i<363; i++){
        obj.w[i].y=obj.w[i].y+tr;
      }
      for(
        var i=377; i<=378; i++){
        obj.w[i].y=obj.w[i].y+tr;
        }
        for(
          var i=380; i<=381; i++){
            obj.w[i].y=obj.w[i].y+tr;
          }
          for(
            var i=383; i<=384; i++){
              obj.w[i].y=obj.w[i].y+tr;
            }
            for(
              var i=386; i<=387; i++){
                obj.w[i].y=obj.w[i].y+tr;
              }
              for(
                var i=389; i<=390; i++){
                  obj.w[i].y=obj.w[i].y+tr;
                }
                for(
                  var i=392; i<=393; i++){
                    obj.w[i].y=obj.w[i].y+tr;
                  }
                  for(
                    var i=395; i<=396; i++){
                      obj.w[i].y=obj.w[i].y+tr;
                    }
                    for(
                      var i=398; i<=399; i++){
                        obj.w[i].y=obj.w[i].y+tr;
                      }
      cv.setObj(obj);
      cv.paint();
      trARR++;
      trABJ--;
    }
  }
    
    function DesplazarAB(){
      var tr=-1;
      if(trABJ<=1){
      for(
        var i=241; i<363; i++){
          obj.w[i].y=obj.w[i].y+tr;
        }
        for(
          var i=377; i<=378; i++){
            obj.w[i].y=obj.w[i].y+tr;
          }
          for(
            var i=380; i<=381; i++){
              obj.w[i].y=obj.w[i].y+tr;
            }
            for(
              var i=383; i<=384; i++){
                obj.w[i].y=obj.w[i].y+tr;
              }
              for(
                var i=386; i<=387; i++){
                  obj.w[i].y=obj.w[i].y+tr;
                }
                for(
                  var i=389; i<=390; i++){
                    obj.w[i].y=obj.w[i].y+tr;
                  }
                  for(
                    var i=392; i<=393; i++){
                      obj.w[i].y=obj.w[i].y+tr;
                    }
                    for(
                      var i=395; i<=396; i++){
                        obj.w[i].y=obj.w[i].y+tr;
                      }
                      for(
                        var i=398; i<=399; i++){
                          obj.w[i].y=obj.w[i].y+tr;
                        }
        cv.setObj(obj);
        cv.paint();
        trABJ++;
        trARR--;
      }
    }
    


    function AbrirP() {
      if (countClicC < maxClickC){
        let af = 5, af2 = 5, af3 = 5, af4 = 5, af5 = -5, af6 = -5, af7 = -5, af8 = -5;
      Rota3D.initRotate( obj.w[377], obj.w[378], af*Math.PI/180);	
      for (let i = 306; i <= 312; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
        
      Rota3D.initRotate( obj.w[380], obj.w[381], af2*Math.PI/180);
      for (let i = 313; i <= 319; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      
      Rota3D.initRotate( obj.w[383], obj.w[384], af3*Math.PI/180);
      for (let i = 320; i <= 326; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      Rota3D.initRotate( obj.w[386], obj.w[387], af4*Math.PI/180);
      for (let i = 327; i <= 333; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      Rota3D.initRotate( obj.w[389], obj.w[390], af5*Math.PI/180);	
      for (let i = 334; i <= 340; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
        
      Rota3D.initRotate( obj.w[392], obj.w[393], af6*Math.PI/180);
      for (let i = 341; i <= 347; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      
      Rota3D.initRotate( obj.w[395], obj.w[396], af7*Math.PI/180);
      for (let i = 348; i <= 354; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      Rota3D.initRotate( obj.w[398], obj.w[399], af8*Math.PI/180);
      for (let i = 355; i <= 361; i++){
        obj.w[i] = Rota3D.rotate(obj.w[i]);
      }
      cv.setObj(obj);
      cv.paint();	
      countClickA --;
      countClicC ++;
    }
    }


    function CerrarP() {
      if (countClickA < maxClickA){
        let af = -5, af2 = -5, af3 = -5, af4 = -5, af5 = 5, af6 = 5, af7 = 5, af8 = 5;
        Rota3D.initRotate( obj.w[377], obj.w[378], af*Math.PI/180);	
        for (let i = 306; i <= 312; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
          
        Rota3D.initRotate( obj.w[380], obj.w[381], af2*Math.PI/180);
        for (let i = 313; i <= 319; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        
        Rota3D.initRotate( obj.w[383], obj.w[384], af3*Math.PI/180);
        for (let i = 320; i <= 326; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate( obj.w[386], obj.w[387], af4*Math.PI/180);
        for (let i = 327; i <= 333; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate( obj.w[389], obj.w[390], af5*Math.PI/180);	
        for (let i = 334; i <= 340; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
          
        Rota3D.initRotate( obj.w[392], obj.w[393], af6*Math.PI/180);
        for (let i = 341; i <= 347; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        
        Rota3D.initRotate( obj.w[395], obj.w[396], af7*Math.PI/180);
        for (let i = 348; i <= 354; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        Rota3D.initRotate( obj.w[398], obj.w[399], af8*Math.PI/180);
        for (let i = 355; i <= 361; i++){
          obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
      cv.setObj(obj);
      cv.paint();	
      countClickA ++;
      countClicC --; 
    }
    }

function pza12DerFunc() {
  let af = 10;
  console.log(obj.w[29], obj.w[30], obj.w[6]);
  Rota3D.initRotate(obj.w[29], obj.w[30], af * Math.PI / 180);
	
  for (let i = 101; i <= 140; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}

function pza12IzqFunc() {
  let af = -10;
  console.log(obj.w[29], obj.w[30]);
	Rota3D.initRotate( obj.w[29], obj.w[30], af*Math.PI/180);	
	
  for (let i = 101; i <= 140; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  
	cv.setObj(obj);
  cv.paint();	
}

function Patitafunc(){
 let af = 20;
 Rota3D.initRotate( obj.w[101], obj.w[102], af*Math.PI/180);
  for(let i =1 ; i <= 8; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
  }

  cv.setObj(obj);
  cv.paint();
}

function MoveR(){
  var ramdom;

   ramdom = Math.ceil(Math.random()* 6);
   console.log(ramdom);
 switch(ramdom){
  case 1: DesplazarXP();
  break;
 case 2: DesplazarXN();
  break;
 case 3: DesplazarAB();
  break;
 case 4: DesplazarAR();
  break;
 case 5: AbrirP();
  break;
 case 6: CerrarP();
  break;
 }
 
}
let animmation;
function Iniciaranimacion(){
  animmation= setInterval(MoveR,200);
}
function detenerAnimacion(){
  clearInterval(animmation);
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);



//movimiento de piezas
document.getElementById('X-').addEventListener('click', DesplazarXN, false);
document.getElementById('X+').addEventListener('click', DesplazarXP, false);
document.getElementById('Z+').addEventListener('click', DesplazarAR, false);
document.getElementById('Z-').addEventListener('click', DesplazarAB, false);
document.getElementById('AP').addEventListener('click', AbrirP, false);
document.getElementById('CP').addEventListener('click', CerrarP, false);
document.getElementById('MovimR').addEventListener('click', Iniciaranimacion, false);
document.getElementById('Detener').addEventListener('click', detenerAnimacion, false);

let Pix: number, Piy: number;
let Pfx: number, Pfy: number;
let theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
let flag: boolean = false;

function handleMouse(evento: any) {
  Pix=evento.offsetX;
  Piy = evento.offsetY;
  flag = true;
}

function makeVizualization(evento: any) {
  if (flag) {
    Pfx = evento.offsetX;
    Pfy = evento.offsetY;
    //console.log(Pfx, Pfy)
    let difX = Pix - Pfx;
    let difY = Pfy - Piy;
    vp(0, 0.1 * difY / 50, 1);
    Piy = Pfy;
    vp(0.1 * difX, 0 / 50, 1);
    Pix = Pfx;
    /*if( Piy>Pfy+1 ){
      phi += SensibilidadY;
      vp(0, 0.1*, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }

    if(Pfy>Piy+1){
      phi -= SensibilidadY;
      vp(0,-0.1, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }*/

    /*if (Pix > Pfx + 1) {
      theta += SensibilidadX;
      vp(0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }
        
    if (Pfx > Pix + 1) {
      theta -= SensibilidadX;
      vp(-0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }*/
  }
}

function noDraw() {
  flag = false;
}

canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);