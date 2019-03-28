//*------------rage_slider setting--------------*//
$(function () {
	$("#price-range1").slider({
		range: "max",
		min: 0,
		max: 200,
		value: 100,
		step: 10,
		slide: function (event, ui) {
			$("#priceRange1").val(ui.value);
		}
	});
	$("#price-range2").slider({
		range: "max",
		min: -100,
		max: 100,
		value: -20,
		step: 10,
		slide: function (event, ui) {
			$("#priceRange2").val(ui.value);
		}
	});
	$("#price-range3").slider({
		range: "max",
		min: 0,
		max: 200,
		value: 100,
		step: 10,
		slide: function (event, ui) {
			$("#priceRange3").val(ui.value);
		}
	});
	$("#price-range4").slider({
		range: "max",
		min: 0,
		max: 100,
		value: 40,
		step: 10,
		slide: function (event, ui) {
			$("#priceRange4").val(ui.value);
		}
	});
	$("#price-range5").slider({
		range: "max",
		min: 0,
		max: 100,
		value: 40,
		step: 10,
		slide: function (event, ui) {
			$("#priceRange5").val(ui.value);
		}
	});
	$("#price-range6").slider({
		range: "max",
		min: 0,
		max: 100,
		value: 40,
		step: 10,
		slide: function (event, ui) {
			$("#priceRange6").val(ui.value);
		}
	});
	$("#priceRange1").val($("#price-range1").slider("value"));
	$("#priceRange2").val($("#price-range2").slider("value"));
	$("#priceRange3").val($("#price-range3").slider("value"));
	$("#priceRange4").val($("#price-range4").slider("value"));
	$("#priceRange5").val($("#price-range5").slider("value"));
	$("#priceRange6").val($("#price-range6").slider("value"));
});

/*------upload_file-----*/

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
			f.size, ' bytes, last modified: ',
			f.lastModifiedDate.toLocaleDateString(), '</li>');
	}
	document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

