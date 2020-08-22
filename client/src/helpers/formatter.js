const formatter = (num) =>
  `Rp.${new Intl.NumberFormat().format(num).replace(/,/g, ".")}`;

module.exports = formatter;
