$(document).ready(function(){
    $(".slide-one").owlCarousel({
        margin: 30,
        responsive: {
            0 :{
                items: 1,
            },
            500 :{
                items: 2,
            },
            768 :{
                items: 3,
            },
            992 :{
                items: 4,
            }
        },
    });
    $(".slide-two").owlCarousel({
        margin: 100,
        items: 1,
        // responsive: {
        //     0 :{
        //         items: 1,
        //     },
        // },
    });
    $(".slide-three").owlCarousel({
        margin: 30,
        responsive: {
            0 :{
                items: 1,
            },
            550 :{
                items: 2,
            },
            992 :{
                items: 3,
            }
        },
    });
});