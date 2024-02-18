'use strict';
$(document).ready(function() {
    // [ sweet-basic ]
    $('.sweet-basic').on('click', function() {
        swal('Hello world!');
    });
    // [ sweet-success ]
    $('.sweet-success').on('click', function() {
        swal("Good job!", "You clicked the button!", "success");
    });
    // [ sweet-warning ]
    $('.sweet-warning').on('click', function() {
        swal("Good job!", "You clicked the button!", "warning");
    });
    // [ sweet-error ]
    $('.sweet-error').on('click', function() {
        swal("Good job!", "You clicked the button!", "error");
    });
    // [ sweet-info ]
    $('.sweet-info').on('click', function() {
        swal("Good job!", "You clicked the button!", "info");
    });
    // [ sweet-multiple ]
    $('.sweet-multiple').on('click', function() {
        swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!", {
                        icon: "error",
                    });
                }
            });
    });
    // [ sweet-prompt ]
    $('.sweet-prompt').on('click', function() {
        swal("Write something here:", {
                content: "input",
            })
            .then((value) => {
                swal(`You typed: ${value}`);
            });
    });
    // [ sweet-ajax ]
    $('.sweet-ajax').on('click', function() {
        swal({
                text: 'Search for a movie. e.g. "La La Land".',
                content: "input",
                button: {
                    text: "Search!",
                    closeModal: false,
                },
            })
            .then(name => {
                if (!name) throw null;
                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
            })
            .then(results => {
                return results.json();
            })
            .then(json => {
                const movie = json.results[0];
                if (!movie) {
                    return swal("No movie was found!");
                }
                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;
                swal({
                    title: "Top result:",
                    text: name,
                    icon: imageURL,
                });
            })
            .catch(err => {
                if (err) {
                    swal("Oh noes!", "The AJAX request failed!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
    });
    $("#errorexport").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#errorreport").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#errorexportsalarymain").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#errorreportsalarymain").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#errorexportsalarysub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#errorreportsalarysub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#pickerendsub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#pickerreportendsub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });

    $("#pickerexportsub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#pickerreportsub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });

    $("#errorexportvisitmain").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#errorreportvisitmain").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });

    $("#errorexportvisitsub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    $("#errorreportvisitsub").show(function(){
        swal("ล้มเหลว!", "กรุณาใส่วันที่ให้ถูกต้อง", "error");
    });
    
});
