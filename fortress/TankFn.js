
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////탱크 동작 관련 함수///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tankFn = function(map, x, y, wid, hei, velX, velY, gravity, distance, fireAngle, defense, hp, damage, tankImg, deathImg, bulletImg, bulletWid, bulletHei){

	this.img;
	this.tankImg=tankImg;
	this.deathImg=deathImg;
	this.bulletImg=bulletImg;
	this.bulletWid=bulletWid;
	this.bulletHei=bulletHei;
	this.width=wid;
	this.height=hei;
	this.x=x;
	this.y=y;
	this.velX=velX;
	this.velY=velY;
	this.gravity=gravity;

	this.map=map;
	
	this.distance=distance;
	this.fireAngle=fireAngle;
	this.defense=defense;
	this.hp=hp;
	this.damage=damage;
	this.fireImg;
	this.hitImg;

	this.tankFlag=true;

	this.st;

	this.init = function(){

		this.img = document.createElement("img");

		this.img.src=this.tankImg;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		
		this.map.appendChild(this.img);

		this.move();

	}

	this.move = function(){

		var me=this;

		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		this.velY+=this.gravity;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";


		if(tankFn.velY>0){
			
			this.falling=true;

		}

		//console.log(this.img.style.top);

		for(var i=0;i<blockArr.length;i++){					//	히트테스트

			for(var j=0;j<blockArr[i].length;j++){

				if(blockArr[i][j]!=undefined){

					var result=hitTest(this.img, blockArr[i][j].img );

					if(result){

						//console.log("나 밟았어");

						this.velY=0; //밟으면 떨어지지 않게 velY값을 0으로 준다!!

						this.falling=false;

						break;

					}

				}

			}

		}

		this.st=setTimeout(function(){

			me.move();
		
		}, 10);


			
		// 부딪히지 않고 화면 밖으로 나가면
		if( ( parseInt( this.img.style.left ) > parseInt( this.map.style.width )+10 ) || ( parseInt( this.img.style.left ) < -parseInt( this.map.style.width - this.map.style.width -this.img.style.left )-10 ) || ( parseInt( this.img.style.top ) > parseInt( this.map.style.height ) ) ){

			//alert("저 자살할게요");

			clearTimeout(this.st);
			this.map.removeChild(this.img);
			return;

		}

	}

}



var tankMove = function( tank, speed ){						//	탱크 이동

	//console.log("스피드카운트"+speedCount);
	this.speed=speed;
		//움직임 효과
	tank.velX=this.speed;
		
}

