// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let result = {};
  let balance = 0;

  if (currency > 10000) {
    result.error =
      "You are rich, my friend! We don't have so much coins for exchange";
  } else if (currency < 0) {
    result = {};
  } else {
    let H = (currency - (currency % 50)) / 50;
    balance = currency - H * 50;
    if (H != 0) result.H = H;

    let Q = (balance - (balance % 25)) / 25;
    balance = balance - Q * 25;
    if (Q != 0) result.Q = Q;

    let D = (balance - (balance % 10)) / 10;
    balance = balance - D * 10;
    if (D != 0) result.D = D;

    let N = (balance - (balance % 5)) / 5;
    balance = balance - N * 5;
    if (N != 0) result.N = N;

    let P = balance;
    if (P != 0) result.P = P;
  }
  return result;
};
