
var charSet = {
		enup: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		enlo: 'abcdefghijklmnopqrstuvwxyz',
		ruup: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
		rulo: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
		sym: '!"№;%:?*()_+=-~/\\<>,.[]{}',
		digit: '1234567890'
	};
	function formPass(chars, length) {
		var res = "",
			r, i;
		for (i = 1; i <= length; i++) {
			r = Math.floor(Math.random() * chars.length);
			res = res + chars.substring(r, r + 1);
		}
		return res;
	}
	function formHtmlPass(chars, length) {
		var res = formPass(chars, length);
		return res;
	}
	function getAllowedChars() {
		var enlo = document.getElementById('pass-block-enlo').checked,
			enup = document.getElementById('pass-block-enup').checked,
			rulo = document.getElementById('pass-block-rulo').checked,
			ruup = document.getElementById('pass-block-ruup').checked,
			sym = document.getElementById('pass-block-sym').checked,
			digit = document.getElementById('pass-block-digit').checked;
		return (enup ? charSet.enup : '') + (enlo ? charSet.enlo : '') + (ruup ? charSet.ruup : '') + (rulo ? charSet.rulo : '') + (digit ? charSet.digit : '') + (sym ? charSet.sym : '');
	}
	function generatePasswords(_length, _count) {
		var resultBlock = document.getElementById('pass-block-result'),
			resultHtml = '<ol>',
			count = isNaN(_count) ? 10 : _count,
			length = isNaN(_length) ? 10 : _length,
			chars = getAllowedChars();
		for (var i = 0; i < count; i++) {
			resultHtml += '<li>' + formHtmlPass(chars, length) + '</li>';
		}
		resultBlock.innerHTML = resultHtml + '</ol>';
	}
	function onChangeDigitInput(element) {
		if (element && (element || {}).value) {
			if (isNaN(parseInt(element.value))) {
				element.value = 10;
			} else if (parseInt(element.value) > 150) {
				element.value = 150;
			}
		} else if (element) {
			element.value = 10;
		}
		onFly();
	}
	function onBlurDigitInput(element) {
		if (element && (element || {}).value) {
			if (isNaN(parseInt(element.value))) {
				element.value = 10;
			} else {
				element.value = parseInt(element.value);
			}
		} else if (element) {
			element.value = 10;
		}
		onFly();
	}
	function onFly() {
		if (document.getElementById('pass-block-onfly').checked) onBtnClick();
	}
	function onBtnClick() {
		var inputCount = document.getElementById('pass-block-count'),
			inputLength = document.getElementById('pass-block-length');
		generatePasswords(parseInt(inputLength.value), parseInt(inputCount.value));
	}
	function setHandlerOnChangeForCB(id, func) {
		var checkbox = document.getElementById(id);

			checkbox.onchange = function() {
			
			};
		}
