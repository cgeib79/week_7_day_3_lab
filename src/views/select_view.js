const PubSub = require('../helpers/pub_sub.js');
const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:all-countries-ready', (evt) => {
    const allCountries =evt.detail;
    this.populate(allCountries);
  });

  this.element.addEventListener('change' (evt) => {
    const selectedCountries = evt.target.value;
    PubSub.publish('SelectView:change', selectedCountries);
  });
};

SelectView.prototype.populate = function(countriesData){
  animalsData.forEach((country) => {
    const option = document.create('option');
    option.textContent = countries;
    option.value = country;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
