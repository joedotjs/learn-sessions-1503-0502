var fileInput = document.getElementById('file-upload');

var imgElement = document.getElementById('image');

fileInput.addEventListener('change', function (e) {

    var file = fileInput.files[0];
    var fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = function () {

        console.log(fileReader.result.length);

        imgElement.setAttribute('src', fileReader.result);

        $.ajax({
            url: '/upload',
            method: 'POST',
            dataType: 'json',
            data: {
                image: fileReader.result
            }
        });

    };

});