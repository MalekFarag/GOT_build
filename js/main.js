(() => {
	console.log('JS linked');

	const sigils	= document.querySelectorAll('.sigilContainer'),
	lightbox 		= document.querySelector('.lightbox'),
	video 			= document.querySelector('video'),
	closeButton		= document.querySelector('.lightbox-close'),
	banners			= document.getElementById('houseImages'),
	title 			= document.querySelector('.house-title'),
	para			= document.querySelector('.house-info');


	function playVideo(){
		lightbox.classList.add('lightbox-on');
		video.load();
		video.play();
	}

	function openLightbox() {
		let targetHouse = this.className.split(" ")[1];
		//this gives us a class for house name. this makes a 2nd class ont he shields.
		
		//flipping source to uppercase
		//let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetHouse}.mp4`; 
		// I changed the src files to lowercase. if i did not i need to include the code above and chage video.src to 'targetVid'
		
		setTimeout(playVideo, 800);
	}

	//function timeoutLightbox(){
	//	setTimeout(openLightbox, 1000);
	//}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		video.currentTime = 0;
		video.pause();
	}

	function animateBanners() {
		//moving banners to the left (kinda like scrolling)
		// let divOffset = this.data-offset;
		// let bannerOffset = (divOffset*600);

		const offset = 600;
		let currentOffset = this.dataset.offset * offset;

		banners.style.right = currentOffset + 'px';
	}

	function swapText() {
		let targetHouse = this.className.split(" ")[1];
		title.innerHTML = 'House' + ' ' + targetHouse;

		let info = ["rulers of the North from the castle of Winterfell. Recently retook their lands from House Bolton, and currently preparing for the war against the Night King. Its current head is Lady Sansa Stark, who jointly rules the North with Warden Jon Snow.",
					"rulers of the Crownlands and Stormlands from the Red Keep and Storm's End, respectively. Extinct in actuality due to all mainline members being deceased but the bloodline is still alive, technically speaking, through Robert the Usurper's many bastard children. The line legally ended with the death of King Tommen I Baratheon, the bastard son of twins Queen Cersei Lannister and Ser Jaime Lannister, who was legally the last remaining Baratheon.",
					"the current royal house of the Seven Kingdoms from the Red Keep of King's Landing in the Crownlands and rulers of the Westerlands from the castle of Casterly Rock. Its leadership is currently disputed by Queen Cersei I Lannister and Lord Tyrion Lannister.",
					"the former rulers of the Riverlands, ruling from Riverrun, until the Red Wedding. Riverrun is currently under House Lannister's control. Its current head is Edmure Tully, who remains a captive of House Lannister.",
					"rulers of the Iron Islands from the castle of Pyke. Divided, with members supporting either the Lannister or Stark/Targaryen cause. Its leadership is currently disputed by King Euron Greyjoy and claimant Queen Yara Greyjoy, the latter being imprisoned.",
					"rulers of the Vale of Arryn from the castle of the Eyrie. It was integrated with the Kingdom of the North until King Jon Snow abdicated, though it still holds allegiance to House Stark. Its current head is Lord Robin Arryn, who is also the only current member."]

		if(targetHouse == "stark"){
			para.innerHTML = info[0];
		}

		if(targetHouse == "baratheon"){
			para.innerHTML = info[1];
		}

		if(targetHouse == "lannister"){
			para.innerHTML = info[2];
		}

		if(targetHouse == "tully"){
			para.innerHTML = info[3];
		}

		if(targetHouse == "greyjoy"){
			para.innerHTML = info[4];
		}

		if(targetHouse == "arryn"){
			para.innerHTML = info[5];
		}
	}


	//Animation for banner at top
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

	//Start Video
	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	//Chnaged P Tag
	sigils.forEach(sigil => sigil.addEventListener('click', swapText));
	

	video.addEventListener('ended', closeLightbox);
	closeButton.addEventListener('click', closeLightbox);

})();