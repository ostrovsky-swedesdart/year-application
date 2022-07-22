// find
const test = "03.05.2003";
class YearError{constructor(x){this.x=x;console.error(this.x)}};
var arr = ['января','февраля','марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября','ноября','декабря'];
class YearGetter { constructor (year) {
this.year = year;
if (this.year.length !== 10) { return new YearError('date is not valid!'); } else {
const split = this.year.split("");
this.year = `${split[2-1]} ${arr[split[5-1]]}, ${split[7-1]}${split[8-1]}${split[9-1]}${split[10-1]}`;
return this.year;
}
}
}

module.exports = { YearGetter, YearError };