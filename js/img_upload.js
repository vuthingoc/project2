const target = document.getElementById('target');
target.addEventListener('change', function (e) {
	const file = e.target.files[0]
	const reader = new FileReader();
	reader.onload = function (e) {
		const img = document.getElementById("myImage")
		img.src = e.target.result;
	}
	reader.readAsDataURL(file);
}, false);

$(function () {
	$('.on').click(function () {
		if ($('input[name="test1"]').prop('checked')) {
			$('input[name="test1"]').prop('checked', false);
		} else {
			$('input[name="test1"]').prop('checked', true);
		}

	});
});

$(function () {
	$('.off').click(function () {
		if ($('input[name="test1"]').prop('checked')) {
			$('input[name="test1"]').prop('checked', false);
		} else {
			$('input[name="test1"]').prop('checked', true);
		}

	});
});