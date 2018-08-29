const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function () {
  this.text = null; }

  Country.prototype.getData = function () {
    const request = new Request('https://restcountries.eu/rest/v2/all');
    request.get((data) => {
      this.text = data.country;
      PubSub.publish('Country:all-countries-loaded', this.text);
    });
  }

module.exports = Country;
