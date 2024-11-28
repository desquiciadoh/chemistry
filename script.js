
let currentPage = 'Меню'
let currentMode = 'нет'
let buttons = document.querySelectorAll('.menu .ul div')
let menu = document.querySelector('.menu')
let mode = document.querySelector('.mode')

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
    	menu.style.display = 'none'
    	mode.style.display = 'block'
    	currentPage = button.textContent
    	mode.children[1].textContent = currentPage
    });
 });

let modeButtonOne = document.querySelector('.one')
let modeButtonFour = document.querySelector('.four')
let workInput = document.querySelector('.work-input')
let workButton = document.querySelector('.work-button')

modeButtonOne.onclick = function () {
	mode.style.display = 'none'
	workInput.style.display = 'block'
	startInput()
}

let modeOneInput = document.querySelector('.work-input input')
let modeOneQuestion = document.querySelector('.work-input .question')
let modeOneButton = document.querySelector('.work-input .button')

let oneArr = []

function startInput () {
	modeOneInput.value = ''
	modeOneButton.style.color = 'rgb(255,255,255)'
	// металлы
	if (currentPage == 'Металлы') {
		let random = Math.floor(Math.random() * metal.length)
		let flag = false
		for (let i = 0; i < oneArr.length; i++) {
			if (oneArr[i] == random) {
				flag = true
			}
		}
		if (flag) {
			if (oneArr.length == metal.length) {
				alert('The End')
			} else {
				startInput()
			}
		} else {
			oneArr.push(random)
			modeOneQuestion.textContent = metal[random][0]
			modeOneButton.onclick = function () {
				if (metal[random][5].toLowerCase().trim() == modeOneInput.value.toLowerCase().trim()) {
					modeOneButton.style.color = 'rgb(0,255,0)'
				} else {
					modeOneButton.style.color = 'rgb(255,0,0)'
					modeOneInput.value = metal[random][5]
				}
				setTimeout(() => {
					startInput()
				}, 750)
			}
		}
	}
	// неметаллы
	if (currentPage == 'Неметаллы') {
		let random = Math.floor(Math.random() * neMetal.length)
		let flag = false
		for (let i = 0; i < oneArr.length; i++) {
			if (oneArr[i] == random) {
				flag = true
			}
		}
		if (flag) {
			if (oneArr.length == neMetal.length) {
				alert('The End')
			} else {
				startInput()
			}
		} else {
			oneArr.push(random)
			modeOneQuestion.textContent = neMetal[random][0]
			modeOneButton.onclick = function () {
				if (neMetal[random][5].toLowerCase().trim() == modeOneInput.value.toLowerCase().trim()) {
					modeOneButton.style.color = 'rgb(0,255,0)'
				} else {
					modeOneButton.style.color = 'rgb(255,0,0)'
					modeOneInput.value = neMetal[random][5]
				}
				setTimeout(() => {
					startInput()
				}, 750)
			}
		}
	}

	if (currentPage == 'Вещества') {
		let random = Math.floor(Math.random() * subst.length)
		let flag = false
		for (let i = 0; i < oneArr.length; i++) {
			if (oneArr[i] == random) {
				flag = true
			}
		}
		if (flag) {
			if (oneArr.length == subst.length) {
				alert('The End')
			} else {
				startInput()
			}
		} else {
			oneArr.push(random)
			modeOneQuestion.textContent = subst[random][0]
			modeOneButton.onclick = function () {
				if (subst[random][5].toLowerCase().trim() == modeOneInput.value.toLowerCase().trim()) {
					modeOneButton.style.color = 'rgb(0,255,0)'
				} else {
					modeOneButton.style.color = 'rgb(255,0,0)'
					modeOneInput.value = subst[random][5]
				}
				setTimeout(() => {
					startInput()
				}, 750)
			}
		}
	}

	if (currentPage == 'Ученые') {
		let random = Math.floor(Math.random() * sient.length)
		let flag = false
		for (let i = 0; i < oneArr.length; i++) {
			if (oneArr[i] == random) {
				flag = true
			}
		}
		if (flag) {
			if (oneArr.length == sient.length) {
				alert('The End')
			} else {
				startInput()
			}
		} else {
			oneArr.push(random)
			modeOneQuestion.textContent = sient[random][0]
			modeOneButton.onclick = function () {
				if (sient[random][5].toLowerCase().trim() == modeOneInput.value.toLowerCase().trim()) {
					modeOneButton.style.color = 'rgb(0,255,0)'
				} else {
					modeOneButton.style.color = 'rgb(255,0,0)'
					modeOneInput.value = sient[random][5]
				}
				setTimeout(() => {
					startInput()
				}, 750)
			}
		}
	}

	if (currentPage == 'Все вопросы') {
		let random = Math.floor(Math.random() * all.length)
		let flag = false
		for (let i = 0; i < oneArr.length; i++) {
			if (oneArr[i] == random) {
				flag = true
			}
		}
		if (flag) {
			if (oneArr.length == all.length) {
				alert('The End')
			} else {
				startInput()
			}
		} else {
			oneArr.push(random)
			modeOneQuestion.textContent = all[random][0]
			modeOneButton.onclick = function () {
				if (all[random][5].toLowerCase().trim() == modeOneInput.value.toLowerCase().trim()) {
					modeOneButton.style.color = 'rgb(0,255,0)'
				} else {
					modeOneButton.style.color = 'rgb(255,0,0)'
					modeOneInput.value = all[random][5]
				}
				setTimeout(() => {
					startInput()
				}, 750)
			}
		}
	}
}

// 4в

let fourQuestion = document.querySelector('.work-button .question')
let fourButtons = document.querySelectorAll('.work-button .ul div')

modeButtonFour.onclick = function () {
	mode.style.display = 'none'
	workButton.style.display = 'block'
	startButton()
}

let fourArr = []

function startButton () {
	fourButtons[0].style.backgroundImage = 'linear-gradient(to right, #6253e1, #852D91, #F24645)'
	fourButtons[1].style.backgroundImage = 'linear-gradient(to right, #6253e1, #852D91, #F24645)'
	fourButtons[2].style.backgroundImage = 'linear-gradient(to right, #6253e1, #852D91, #F24645)'
	fourButtons[3].style.backgroundImage = 'linear-gradient(to right, #6253e1, #852D91, #F24645)'
	function cont (array) {
		let random = Math.floor(Math.random() * array.length)
		let flag = false
		for (let i = 0; i < 0; i++) {
			if (fourArr[i] == random) {
				flag = true
			}
		} 
		if (flag) {
			if (fourArr.length == array.length) {
				alert('The End')
			} else {
				startButton()
			}
		} else {
			fourArr.push(random)
			fourQuestion.textContent = array[random][0]
			fourButtons[0].textContent = array[random][1]
			fourButtons[1].textContent = array[random][2]
			fourButtons[2].textContent = array[random][3]
			fourButtons[3].textContent = array[random][4]
			fourButtons.forEach(function (button) {
			    button.addEventListener('click', function () {
			    	if (array[random][5].toLowerCase().trim() == button.textContent.toLowerCase().trim()) {
			    		button.style.background = 'rgb(0,255,0)'
			    	} else {
			    		button.style.background = 'rgb(255,0,0)'
			    	}
			    	setTimeout(() => {
			    		startButton()
			    	}, 750)
			    });
			 });
		}
	}
	if (currentPage == 'Металлы') {
		cont(metal)
	} else if (currentPage = 'Неметаллы') {
		cont(neMetal)
	} else if (currentPage == 'Ученые') {
		cont(sient)
	} else if (currentPage == 'Вещества') {
		cont(subst)
	} else {
		alert('Чет эта ашыбка чуть чуть')
	}
}
