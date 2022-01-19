function showValue() {
	clearBoxes();

	let x = document.getElementById('count').value;
	createBoxes(x);

	let col = document.getElementById('color').value;
	paintBoxes(col);
}

function clearBoxes() {
	let arr = document.getElementsByClassName('container');
	let k = arr.length;
	for (var i=0; i<k; i++){
		arr[0].remove();
	}
}

function createBoxes(x) {
	let containerCount, maxPoint, maxBoxPerContainer;

	switch (x) {
		case "1":
		case "2":
		case "3":
			containerCount = 1, maxPoint = 0, maxBoxPerContainer = 3;
			break;
		case "4":
			containerCount = 2, maxPoint = 2, maxBoxPerContainer = 2;
			break;
		case "5":
		case "6":
			containerCount = 2, maxPoint = 3, maxBoxPerContainer = 3;
			break;
		case "7":
		case "8":
		case "9":
			containerCount = 3, maxPoint = 6, maxBoxPerContainer = 3;
			break;
		case "10":
		case "11":
		case "12":
			containerCount=3, maxPoint = 8, maxBoxPerContainer = 4;
			break;
		case "13":
		case "14":
		case "15":
		case "16":
			containerCount=4, maxPoint = 12, maxBoxPerContainer = 4;
			break;
		default:
			console.log('default must be here');
	}

	let point = 0;
	for (let j = 1; j<=containerCount; j++) {
		let cont = document.createElement('div');
		cont.className = 'container';
		let buf = '';

		if (point>=maxPoint) {
			for (let i=1; i<=x-maxPoint; i++){
				point++;
				buf += '<div class="box">'+point+'</div>';
			}
			cont.innerHTML = buf;
			document.body.appendChild(cont);
		} else {
			for (let i=1; i<=maxBoxPerContainer; i++){
				point++;
				buf += '<div class="box">'+point+'</div>';
			}
			cont.innerHTML = buf;
			document.body.appendChild(cont);
		}	
	}
}

function paintBoxes(color) {
	let introList = document.querySelectorAll('.box');

	for (let i = 0, length = introList.length; i < length; i++) {
		introList[i].style.cssText = 'background-color: ' + color;
	}
}

function randomValue() {
	let bufCount = getRandomIntInclusive(1,16);
	let colorArr = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGrey','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','DarkOrange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkSlateGrey','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DimGrey','DodgerBlue','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Grey','Green','GreenYellow','HoneyDew','HotPink','IndianRed','Indigo','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGray','LightGrey','LightGreen','LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateGray','LightSlateGrey','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','RebeccaPurple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','SlateGrey','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','Wheat','White','WhiteSmoke','Yellow','YellowGreen'];
	let bufColorInt = getRandomIntInclusive(0,147);
	let output = document.querySelectorAll('p');
	document.getElementById('count').value = bufCount;
	clearBoxes();
	createBoxes(bufCount+'');
	paintBoxes(colorArr[bufColorInt]);
	output[0].textContent = bufCount===1 ? bufCount + ' ' + colorArr[bufColorInt] + ' box' : bufCount + ' ' + colorArr[bufColorInt] + ' boxes';
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются (взято с MSDN)
	}