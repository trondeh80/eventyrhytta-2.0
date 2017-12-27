import $ from './util/DomQuery';

bootstrap();

function bootstrap(){
  $('header .menu-btn').click(() => $('.menu-operators').toggleClass('open'));
}

