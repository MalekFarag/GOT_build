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
		
		setTimeout(playVideo, 1000);

		moveTitle();
	}

	//function timeoutLightbox(){
	//	setTimeout(openLightbox, 1000);
	//}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		video.currentTime = 0;
		video.pause();

		removeTitle();
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

		let info = ["House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.",
					"House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.",
					"House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.",
					"House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are 'Family, Duty, Honor.'",
					"House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are 'We Do Not Sow,' although the phrase 'What Is Dead May Never Die' is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.",
					"House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. "]



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

	function moveTitle(){
		title.classList.add('top');

		TweenMax.to(title, 0.6,{
			y: -440,
			scaleX: 1.5,
			scaleY: 1.5,
		});
	}

	function removeTitle(){
		title.classList.remove('top');

		TweenMax.to(title, 0.6,{
			y: 0,
			scaleX: 1,
			scaleY: 1,
		});
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