// Calcolatore del costo al km, comune alle proposte: legge i cursori e scrive i risultati per id.
(() => {
  const $ = id => document.getElementById(id);
  const box = $('calc');
  if (!box) return;
  const num = (n, d) => { const [i, f] = n.toFixed(d).split('.'); return i.replace(/\B(?=(\d{3})+$)/g, '.') + (f ? ',' + f : ''); };
  console.assert(num(1234.5, 1) === '1.234,5' && num(15000, 0) === '15.000' && num(0.2, 2) === '0,20', 'formato dei numeri');
  const eur = n => num(Math.round(n), 0) + ' €';
  const set = (id, text) => { const el = $(id); if (el) el.textContent = text; };
  const eff = $('c-eff'), price = $('c-price');
  const ev = () => box.querySelector('input[name=mode]:checked').value === 'ev';

  function update() {
    const e = ev(), km = +$('c-km').value, use = +eff.value, p = +price.value, fixed = +$('c-fixed').value;
    const fuel = e ? km / 100 * use * p : km / use * p, year = fuel + fixed, perKm = year / km;
    set('o-km', num(km, 0) + ' km');
    set('o-eff', num(use, 1) + (e ? ' kWh/100 km' : ' km/l'));
    set('o-price', num(p, 2) + (e ? ' €/kWh' : ' €/l'));
    set('o-fixed', num(fixed, 0) + " € l'anno");
    set('r-km', num(perKm, 2) + ' €');
    set('r-month', eur(year / 12));
    set('r-year', eur(year));
    set('r-fuel', eur(fuel));
    set('r-fixed', eur(fixed));
    box.style.setProperty('--share', (fuel / year).toFixed(3));
    box.style.setProperty('--cpk', perKm.toFixed(3));
  }

  function setMode() {
    const e = ev();
    Object.assign(eff, e ? { min: 11, max: 26, value: 15.5 } : { min: 8, max: 30, value: 16 });
    Object.assign(price, e ? { min: 0.2, max: 0.9, value: 0.45 } : { min: 0.7, max: 3, value: 1.8 });
    set('l-price', e ? 'Prezzo della corrente' : 'Prezzo del carburante');
    set('k-fuel', e ? 'Ricariche' : 'Carburante');
    update();
  }

  box.addEventListener('input', ev2 => (ev2.target.name === 'mode' ? setMode() : update()));
  update();
})();
