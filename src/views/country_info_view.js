const Pub = require('../helpers/publish.js');

const CountryInfoView = function(container){
  this.container = container;
};

CountryView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:selected-country-ready' , (evt) => {
    const country = evt.detail;
    this.render(country);
  });
};

CountryInfoView.prototype.render = function(country){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Country: ${country.name}`;
  this.container.innerHTML = '';
  this.containerr.appendChild(infoParagraph);
};

flag.image.src = country.flag;
this.container.appendChild(flagImage);

module.exports = CountryInfoView;
