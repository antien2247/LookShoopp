// $(document).ready(function(){
//     $('.carousel-category').slick({
//             infinite: true,
//             arrows: true,
//             slidesToShow: 4,
//             slidesToScroll: 4,        
//     });
// });

$('.carousel-category').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  });
          