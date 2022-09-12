// Hi geniuses all over the world i am devteeo of teeo_algorithms the creator of this software, This software can be used for reproof or correction with your own code but any form of thie software getting duplicated and been traded is punishable by fine 
// so all copyrights reserved I hope you enjoy this software as muchas i enjoyed creating it love you all

const elements = [
  { el: 'Hydrogen', sign: 'H', No: 1 },
  { el: 'Helium', sign: 'He', No: 2 },
  { el: 'Lithium', sign: 'Li', No: 3 },
  { el: 'Berilium', sign: 'Be', No: 4 },
  { el: 'Boron', sign: 'B', No: 5 },
  { el: 'Carbon', sign: 'C', No: 6 },
  { el: 'Nitrogen', sign: 'N', No: 7 },
  { el: 'Oxygen', sign: 'O', No: 8 },
  { el: 'Fluorine', sign: 'F', No: 9 },
  { el: 'Neon', sign: 'Ne', No: 10 },
  { el: 'Sodium', sign: 'Na', No: 11 },
  { el: 'Magnesium', sign: 'Mg', No: 12 },
  { el: 'Aluminium', sign: 'Al', No: 13 },
  { el: 'Silicon', sign: 'Si', No: 14 },
  { el: 'Phosphorous', sign: 'P', No: 15 },
  { el: 'Sulphur', sign: 'S', No: 16 },
  { el: 'Chlorine', sign: 'Cl', No: 17 },
  { el: 'Argon', sign: 'Ar', No: 18 },
  { el: 'Potassium', sign: 'K', No: 19 },
  { el: 'Calcium', sign: 'Ca', No: 20 },
  { el: 'Scandium', sign: 'Sc', No: 21 },
  { el: 'Titanium', sign: 'Ti', No: 22 },
  { el: 'Vanadium', sign: 'V', No: 23 },
  { el: 'Chromium', sign: 'Cr', No: 24 },
  { el: 'Manganese', sign: 'Mn', No: 25 },
  { el: 'Iron', sign: 'Fe', No: 26 },
  { el: 'Cobalt', sign: 'Co', No: 27 },
  { el: 'Nickel', sign: 'Ni', No: 28 },
  { el: 'Copper', sign: 'Cu', No: 29 },
  { el: 'Zinc', sign: 'Zn', No: 30 },
  { el: 'Gallium', sign: 'Ga', No: 31 },
  { el: 'Germanium', sign: 'Ge', No: 32 },
  { el: 'Arsenic', sign: 'As', No: 33 },
  { el: 'Selenium', sign: 'Se', No: 34 },
  { el: 'Bromine', sign: 'Br', No: 35 },
  { el: 'Krypton', sign: 'Kr', No: 36 },
  { el: 'Rubidium', sign: 'Rb', No: 37 },
  { el: 'Strontium', sign: 'Sr', No: 38 },
  { el: 'Yttrium', sign: 'Y', No: 39 },
  { el: 'Zirconium', sign: 'Zr', No: 40 },
  { el: 'Niobium', sign: 'Nb', No: 41 },
  { el: 'Molybdenum', sign: 'Mo', No: 42 },
  { el: 'Silver', sign: 'Ag', No: 43 },
  { el: 'Ruthenium', sign: 'Ru', No: 44 },
  { el: 'Rhodium', sign: 'Rh', No: 45 },
  { el: 'Palladium', sign: 'Pd', No: 46 },
  { el: 'Technetium', sign: 'Tc', No: 47 },
  { el: 'Cadmium', sign: 'Cd', No: 48 },
  { el: 'Indium', sign: 'In', No: 49 },
  { el: 'Tin', sign: 'Sn', No: 50 },
  { el: 'Antimony', sign: 'Sb', No: 51 },
  { el: 'Tellurium', sign: 'Te', No: 52 },
  { el: 'Iodine', sign: 'I', No: 53 },
  { el: 'Xenon', sign: 'Xe', No: 54 },
  { el: 'Caesium', sign: 'Cs', No: 55 },
  { el: 'Barium', sign: 'Ba', No: 56 },
  { el: 'Lanthanum', sign: 'La', No: 57 },
  { el: 'Cerium', sign: 'Ce', No: 58 },
  { el: 'Praseodymium', sign: 'Pr', No: 59 },
  { el: 'Neodymium', sign: 'Nd', No: 60 },
  { el: 'Promethium', sign: 'Pm', No: 61 },
  { el: 'Samarium', sign: 'Sm', No: 62 },
  { el: 'Europium', sign: 'Eu', No: 63 },
  { el: 'Gadolinium', sign: 'Gd', No: 64 },
  { el: 'Terbium', sign: 'Tb', No: 65 },
  { el: 'Dysprosium', sign: 'Dy', No: 66 },
  { el: 'Holmium', sign: 'Ho', No: 67 },
  { el: 'Erbium', sign: 'Er', No: 68 },
  { el: 'Thulium', sign: 'Tm', No: 69 },
  { el: 'Ytterbium', sign: 'Yb', No: 70 },
  { el: 'Lutetium', sign: 'Lu', No: 71 },
  { el: 'Hafnium', sign: 'Hf', No: 72 },
  { el: 'Tantalum', sign: 'Ta', No: 73 },
  { el: 'Tungsten', sign: 'W', No: 74 },
  { el: 'Rhenium', sign: 'Re', No: 75 },
  { el: 'Neodymium', sign: 'Nd', No: 76 },
  { el: 'Iridium', sign: 'Ir', No: 77 },
  { el: 'Platinum', sign: 'Pt', No: 78 },
  { el: 'Gold', sign: 'Au', No: 79 },
  { el: 'Mercury', sign: 'Hg', No: 80 },
  { el: 'Thallium', sign: 'Ti', No: 81 },
  { el: 'Lead', sign: 'Pb', No: 82 },
  { el: 'Bismuth', sign: 'Bi', No: 83 },
  { el: 'Polonium', sign: 'Po', No: 84 },
  { el: 'Astatine', sign: 'At', No: 85 },
  { el: 'Radon', sign: 'Rn', No: 86 },
  { el: 'Francium', sign: 'Fr', No: 87 },
  { el: 'Radium', sign: 'Ra', No: 88 },
  { el: 'Actinium', sign: 'Ac', No: 89 },
  { el: 'Thorium', sign: 'Th', No: 90 },
  { el: 'Protactinium', sign: 'Pa', No: 91 },
  { el: 'Uranium', sign: 'U', No: 92 },
  { el: 'Neptunium', sign: 'Np', No: 93 },
  { el: 'Plutonium', sign: 'Pu', No: 94 },
  { el: 'Americium', sign: 'Am', No: 95 },
  { el: 'Curium', sign: 'Cm', No: 96 },
  { el: 'Berkelium', sign: 'Bk', No: 97 },
  { el: 'Thorium', sign: 'Th', No: 98 },
  { el: 'Eisteinium', sign: 'Es', No: 99 },
  { el: 'Fermium', sign: 'Fm', No: 100 },
  { el: 'Mendelevium', sign: 'Md', No: 101 },
  { el: 'Nobelium', sign: 'No', No: 102 },
  { el: 'Lawrencium', sign: 'Lr', No: 103 },
  { el: 'Rutherfordium', sign: 'Rf', No: 104 },
  { el: 'Dubnium', sign: 'Db', No: 105 },
  { el: 'Seaborgium', sign: 'Sg', No: 106 },
  { el: 'Bohrium', sign: 'Bh', No: 107 },
  { el: 'Hassium', sign: 'Hs', No: 108 },
  { el: 'Meitnerium', sign: 'Mt', No: 109 },
  { el: 'Darmstadtium', sign: 'Ds', No: 110 },
  { el: 'Roentgenium', sign: 'Rg', No: 111 },
  { el: 'Copernicium', sign: 'Cn', No: 112 },
  { el: 'Ununtrium', sign: 'Uut', No: 113 },
  { el: 'Flerovium', sign: 'Fl', No: 114 },
  { el: 'Ununpentium', sign: 'Uup', No: 115 },
  { el: 'Livermorium', sign: 'Lv', No: 116 },
  { el: 'Ununseptium', sign: 'Uus', No: 117 },
  { el: 'Ununoctium', sign: 'Uuo', No: 118 },
];

class Store {

  // Storage for getting list of unanswered element
  static get_elemtura_teeo_algorithms_elem() {
    let elem = localStorage.getItem('elemtura_by_teeo_algorithms_elem');

    if (elem) {
      elem = JSON.parse(elem);

      return elem;
    }

    console.log("Hi, If you are reading this and you are a dev then this is your first time using elemtura I hope you enjoy it as much as i enjoyed coding it, I am devteeo of teeo_algorithms peace out");

    elem = elements.sort(() => Math.random() - Math.random());

    localStorage.setItem('elemtura_by_teeo_algorithms_elem', JSON.stringify(elem));

    return elem;
  }

  // Storage for getting list of unanswered index element
  static get_elemtura_by_teeo_algorithms_index_elem() {
    let elem = localStorage.getItem('elemtura_by_teeo_algorithms_index_elem');

    if (elem) {
      elem = JSON.parse(elem);

      return elem;
    }

    elem = elements.sort(() => Math.random() - Math.random());

    localStorage.setItem('elemtura_by_teeo_algorithms_index_elem', JSON.stringify(elem));

    return elem;
  }
  // Storage for getting list of unanswered minute element
  static get_elemtura_by_teeo_algorithms_min_elem() {
    let elem = localStorage.getItem('elemtura_by_teeo_algorithms_min_elem');

    if (elem) {
      elem = JSON.parse(elem);

      return elem;
    }

    elem = elements.sort(() => Math.random() - Math.random());

    localStorage.setItem('elemtura_by_teeo_algorithms_min_elem', JSON.stringify(elem));

    return elem;
  }

  // static edit_elemtura_teeo_algorithms(elemno) {
  //   if (!elemno) return;

  //   let elem = Store.get_elemtura_teeo_algorithms_elem();

  //   for (let i = 0; i < elem.length; i++) {
  //     const el = elem[i].No;

  //     if (el == elemno) elem.splice(i, 1);

  //   }
  //   localStorage.setItem('elemtura_by_teeo_algorithms_elem', JSON.stringify(elem));

  //   return;
  // }

  // Storage for getting the users progress level
  
  static get_elemtura_teeo_algorithms_var_no() {
    let var_no = localStorage.getItem('elemtura_teeo_algorithms_var_no');
    let elem = Store.get_elemtura_teeo_algorithms_elem();
    
    if (var_no >= elem.length - 4) {
      var_no = 0
      elem = elements.sort(() => Math.random() - Math.random());

      localStorage.setItem('elemtura_teeo_algorithms_var_no', var_no);
      localStorage.setItem('elemtura_by_teeo_algorithms_elem', JSON.stringify(elem));
      return var_no;
    }

    if (var_no) return JSON.parse(var_no);

    var_no = 0;

    localStorage.setItem('elemtura_teeo_algorithms_var_no', var_no);

    return var_no;
  }

  static update_elemtura_teeo_algorithms_var_no() {
    let var_no = Store.get_elemtura_teeo_algorithms_var_no();

    var_no++;
    localStorage.setItem('elemtura_teeo_algorithms_var_no', var_no);

    return;
  }

  // Storage for getting the users progress level
  static get_elemtura_teeo_algorithms_var_min_no() {
    let var_no = localStorage.getItem('elemtura_teeo_algorithms_var_min_no');
    let elem = localStorage.getItem('elemtura_by_teeo_algorithms_elem');

    if (var_no <= elem.length - 7) return JSON.parse(var_no);
      var_no = 0
      elem = elements.sort(() => Math.random() - Math.random());

      localStorage.setItem('elemtura_teeo_algorithms_var_min_no', var_no);
      localStorage.setItem('elemtura_by_teeo_algorithms_elem', JSON.stringify(elem));
      return JSON.parse(var_no);
  }

  static update_elemtura_teeo_algorithms_var_min_no() {
    let var_no = Store.get_elemtura_teeo_algorithms_var_min_no();

    var_no++;
    localStorage.setItem('elemtura_teeo_algorithms_var_min_no', var_no);

    return;
  }
  
  // Storage for getting the users spelling progress level
  static get_elemtura_teeo_algorithms_var_index_no() {
    let var_no = localStorage.getItem('elemtura_teeo_algorithms_var_index_no');
    let elem = localStorage.getItem('elemtura_by_teeo_algorithms_elem');

    if (var_no >= elem.length - 1) {
      var_no = 0
      elem = elements.sort(() => Math.random() - Math.random());

      localStorage.setItem('elemtura_teeo_algorithms_var_index_no', var_no);
      localStorage.setItem('elemtura_by_teeo_algorithms_elem', JSON.stringify(elem));
      return var_no;
    }

    if (var_no) return JSON.parse(var_no);

    var_no = 0;

    localStorage.setItem('elemtura_teeo_algorithms_var_index_no', var_no);

    return var_no;
  }

  static update_elemtura_teeo_algorithms_var_index_no() {
    let var_no = Store.get_elemtura_teeo_algorithms_var_index_no();
    
    var_no++;
    localStorage.setItem('elemtura_teeo_algorithms_var_index_no', var_no);

    return;
  }
  

  // Storage for getting the users score
  static get_elemtura_teeo_algorithms_score() {
    let score = localStorage.getItem('elemtura_teeo_algorithms_score');

    if (score) return score;

    score = 0;

    localStorage.setItem('elemtura_teeo_algorithms_score', score);

    return score;
  }

  static update_elemtura_teeo_algorithms_score(score__bool) {
    let score = Store.get_elemtura_teeo_algorithms_score();

    if (score__bool == 'increase') score++;
    if (score__bool == 'decrease') {
      if (score == 0) return;
      score--;
    }

    localStorage.setItem('elemtura_teeo_algorithms_score', score);

    return;

  }

  static get_elemtura_teeo_algorithms_high_score() {
    let score = localStorage.getItem('elemtura_teeo_algorithms_high_score');

    if (score) return JSON.parse(score);

    score = 0;
    localStorage.setItem('elemtura_teeo_algorithms_high_score', score);

    return score;
  }


  // Storage for getting the boolean for the fifty fifty state
  static get_elemtura_teeo_algorithms_boost_bool() {
    let boost_bool = localStorage.getItem('elemtura_teeo_algorithms_boost_bool') || true;

    return JSON.parse(boost_bool);
  }
  
  static update_elemtura_teeo_algorithms_boost_bool(boost_bool) {
    localStorage.setItem('elemtura_teeo_algorithms_boost_bool', boost_bool);
    
    updateBoost();

    return;
  }


  // Storage for getting the users name
  static get_elemtura_teeo_algorithms_name() {
    let userName = localStorage.getItem('elemtura_teeo_algorithms_name') || 'Player';

    return userName;
  }

  static update_elemtura_teeo_algorithms_name(user__name) {
    localStorage.setItem('elemtura_teeo_algorithms_name', user__name);

    return;
  }
}

let qs = (e) => document.querySelector(e);
let qsa = (e) => document.querySelectorAll(e);

let time__var = 30;
let timeBool = true;
let min__score = 0;

let root = qs(':root');
let score__tag = qs('#score');
let chosenElemVar = 'hydrogen';
let score__tag2 = qs('#score1');
let min_score__tag = qs('#min--score');
let high_score__tag = qs('#high--score');
let optionHolder = qs('.option--holder');
let elementHolder = qs('.element--holder');
let optionsHolder = qs('.options--holder');
let elementsHolder = qs('.elements--holder');

let el = Store.get_elemtura_teeo_algorithms_elem();
function elems() { return Store.get_elemtura_by_teeo_algorithms_min_elem()}
function in_elems() { return Store.get_elemtura_by_teeo_algorithms_index_elem()}
let userName = () => Store.get_elemtura_teeo_algorithms_name();
let i__var = () =>  Store.get_elemtura_teeo_algorithms_var_no() 
let score__var = () => Store.get_elemtura_teeo_algorithms_score();
let boost__bool = () => Store.get_elemtura_teeo_algorithms_boost_bool();
let high_score__var = () => Store.get_elemtura_teeo_algorithms_high_score();
function min__var() { return Store.get_elemtura_teeo_algorithms_var_min_no() }

function runGame() {
  updateScore();

  optionHolder.innerHTML = '';

  elementHolder.innerText = el[i__var()].el;
  animateText(elementHolder);

  let answers = [
    {
      symbol: el[i__var()].sign,
      atom: el[i__var()].No,
      card: 'right'
    },
    {
      symbol: el[i__var()].sign,
      atom: Math.floor(Math.random() * elements.length),
      card: 'wrong'
    },
    {
      symbol: el[i__var() + 2].sign,
      atom: Math.floor(Math.random() * elements.length),
      card: 'wrong'
    },
    {
      symbol: el[i__var() + 2].sign,
      atom: Math.floor(Math.random() * elements.length),
      card: 'wrong'
    },
  ];

  ans = answers.sort(() => Math.random() - Math.random());

  ans.forEach(o => {
    let optionBtn = document.createElement('div');

    let optionSpan1 = document.createElement('span');

    optionBtn.classList = 'bdrs option flex';

    optionBtn.append(optionSpan1);

    optionBtn.firstChild.innerHTML = `
      ${o.symbol}<sub> ${o.atom} <sub>
    `;

    optionHolder.append(optionBtn);

    if (!optionBtn.classList[3]) {
      optionBtn.classList.add(o.card);
      return;
    }

    optionBtn.classList[3] = o.card;
  });
};

function runMinuteGame() {
  updateScore();
  let elem = elems();

  optionsHolder.innerHTML = '';

  elementsHolder.innerText = elem[min__var()].el;
  animateText(elementsHolder);

  let answers = [
    {
      symbol: elem[min__var()].sign,
      card: 'right'
    },
    {
      symbol: elem[min__var() + 1].sign,
      card: 'wrong'
    },
    {
      symbol: elem[min__var() + 2].sign,
      card: 'wrong'
    },
    {
      symbol: elem[min__var() + 3].sign,
      card: 'wrong'
    },
    {
      symbol: elem[min__var() + 4].sign,
      card: 'wrong'
    },
    {
      symbol: elem[min__var() + 5].sign,
      card: 'wrong'
    },
  ];
  ans = answers.sort(() => Math.random() - Math.random());
  
  ans.forEach(o => {
    let optionBtn = document.createElement('div');
    
    let optionSpan1 = document.createElement('span');
    
    optionBtn.classList = 'bdrs options flex';
    
    optionBtn.append(optionSpan1);
    
    optionBtn.firstChild.innerHTML = `
    ${o.symbol}
    `;
    
    optionsHolder.append(optionBtn);

    if (!optionBtn.classList[3]) {
      optionBtn.classList.add(o.card);
      return;
    }

    optionBtn.classList[3] = o.card;
  });
};

function runSpellGame() {
  let inputHolder = qs('.inputs--holder');
  inputHolder.innerHTML = '';

  let allElem = in_elems();
  let index = Store.get_elemtura_teeo_algorithms_var_index_no();
  
  let chosenElems = allElem[index];
  let chosenElem = chosenElems.el;
  let chosenSign = chosenElems.sign;
  let chosenNo = chosenElems.No;

  [...chosenElem].forEach(e => {
    let inp = document.createElement('div');
    inp.classList = 'inp--dash flex col--black empty';
    inputHolder.append(inp);
  });

  let p = qs('#spell--p');
  p.innerText = chosenSign;

  let sub = document.createElement('sub');
  sub.innerText = chosenNo;
  p.append(sub)

  chosenElemVar = chosenElem
}

function sortEvent(e) {
  let tag = e.target.classList;

  if (tag.contains('option') ) return playGame(e);
  if (tag.contains('letters')) return playSpellGame(e.target);
  if (tag.contains('options') ) return playMinuteGame(e);
  
  if (tag.contains('boost')) boost(); 
  if (tag.contains('change')) changeView();
  if (tag.contains('edit--holder')) collectView();
  if (tag.contains('start')) {
    runGame();
    animateText(elementHolder);
  }
  if (tag.contains('start--min')) {
    timeBool = true;

    timer();
    runMinuteGame();
    animateText( qs('.elements--holder') );
  }
  if (tag.contains('spell')) runSpellGame();
  if (tag.contains('save--holder')) collectView('save--holder');
  if (tag.contains('return--home')) {
    resetTime();
    animateText(qs('#username'));
  }
}

let animateText = (parent_text) => {
  if (!parent_text) return;

  let text_element = parent_text.innerText;
  let p = document.createElement('p');

  for (let i = 0; i < text_element.length; i++) {
    const current = text_element[i];

    let span = document.createElement('span');

    span.style.animationDelay = `${i / 3}s`;
    span.className = 'unseen';
    span.innerText = current;

    span.addEventListener('animationend', () => span.className = '');
    p.append(span);
  }
  parent_text.innerHTML = "";
  parent_text.append(p);

  return;
}

let updateScore = () => {
  let score_var = (score__var() * 100) / (elements.length * 3);

  high_score__tag.innerText = high_score__var();
  score__tag.innerText = `${ score_var.toFixed(0) }%`;
  score__tag2.innerText = `${ score_var.toFixed(0) }%`;
  root.style.setProperty('--width', `${score_var.toFixed(0)}%`)
};
let updateName = () => {
  let userName = qs('#username');
  let name = Store.get_elemtura_teeo_algorithms_name();
  userName.innerText = name;
  animateText( userName );
};

let playGame = (e) => {
  Store.update_elemtura_teeo_algorithms_var_no();  
  Store.update_elemtura_teeo_algorithms_boost_bool(true);

  let tag = e.target.classList;

  if (tag.contains('right')) {
    Store.update_elemtura_teeo_algorithms_score('increase')

    elementHolder.classList.add('correct');

    qsa('.option').forEach(o => {
      o.classList.add('correct');

      setTimeout(function () {
        o.classList.remove("correct");
        elementHolder.classList.remove('correct');
        runGame();
      }, 1500);

    });

    return;
  }
  if (tag.contains('wrong')) {
    Store.update_elemtura_teeo_algorithms_score('decrease')

    elementHolder.classList.add('incorrect');

    qsa('.option').forEach(o => {
      o.classList.add('incorrect');

      setTimeout(function () {
        o.classList.remove("incorrect");
        elementHolder.classList.remove('incorrect');

      }, 3000);

    });

    setTimeout(function () {
      runGame();
    }, 3000);
  }
}

let playMinuteGame = (e) => {
  Store.update_elemtura_teeo_algorithms_var_min_no();  
  console.log(min__var());
  let tag = e.target.classList;

  if (!timeBool) return lose();

  if (tag.contains('right')) {
    runMinuteGame();
    min__score++;
    min_score__tag.innerText = min__score;
    return;
  }
  if (tag.contains('wrong')) {
    lose();
  }
}

let playSpellGame = (e) => {

  if (e.classList.contains('back')) {
    let filled = qsa('.filled');
    if (filled.length == 0) return;
    
    filled[filled.length - 1].innerText = '';
    filled[filled.length - 1].classList.add('empty');
    filled[filled.length - 1].classList.remove('filled');

    return;
  }

  if (e.classList.contains('enter')) {
    Store.update_elemtura_teeo_algorithms_var_index_no();
    let filled = qsa('.filled');

    if (filled.length == chosenElemVar.length) {
      let texts = [];

      for (let index = 0; index < filled.length; index++) {
        const element = filled[index];
        texts.push(element.innerText);
      }
      let spelt = texts.join('').toString().toLowerCase();

      if (spelt == chosenElemVar.toLowerCase()) {
        qs('.inputs--holder').classList.replace('bg--white', 'bg--green');
        setTimeout(() => {
          qs('.inputs--holder').classList.replace('bg--green', 'bg--white');
          runSpellGame();
        }, 1500);
        return
      }
    }
    
    qs('.inputs--holder').classList.replace('bg--white', 'bg--red');
    setTimeout(() => {
      qs('.inputs--holder').classList.replace('bg--red', 'bg--white');
      runSpellGame();
    }, 3000);
    
    for (let index = 0; index < chosenElemVar.length; index++) {
      const element = chosenElemVar[index];
      qsa('.inp--dash')[index].innerText = element;
    }
      return;
  }

  let empty = qsa('.empty');
  if (empty.length == 0) return;

  empty[0].innerText = e.innerText;
  empty[0].classList.add('filled');
  empty[0].classList.remove('empty');
}

let boost = (e = false) => {
  if (boost__bool() || e) {
    let options = qsa('.option');
    let wrong__list = [];
    let half__list = Math.floor(options.length / 2);

    options.forEach(option => {
      if (option.classList.contains('wrong')) wrong__list.push(option); 
    });

    for (let i = 0; i < half__list; i++) {
      let option = wrong__list[i];

      option.classList.add('unseen');
    }

    Store.update_elemtura_teeo_algorithms_boost_bool(false);
  }
}

let updateBoost = () => {
  let boostHolder = qs('.boost--holder');

  if (boost__bool() == true ) boostHolder.classList.remove('used');
  if (boost__bool() == false ) boostHolder.classList.add('used');
} 

let changeView = () => {
  qs('#app').classList.toggle('style__2');
  qs('.change').style.pointerEvents = 'none'
  
  setTimeout(() => {
    qs('.change').style.pointerEvents = 'auto'
  }, 300);
}

let collectView = (el = 'edit--holder') => {
  qs('.name--holder').classList.toggle('collect');
  if (el == 'save--holder') {
    let name = qs('.userInput').value;
    Store.update_elemtura_teeo_algorithms_name(name);
    
    updateName();
  }
}

let updateTimer = () => {
  qs('#timer').innerText = time__var;
}

let resetTime = () => {
  time__var = 30;
  timeBool = false;
}

let lose = () => {
  if (high_score__var() < min__score) {
    localStorage.setItem('elemtura_teeo_algorithms_high_score', min__score);
  }
  elementsHolder.classList.add('incorrect');
  updateScore();

  qsa('.options').forEach(o => {
    o.classList.add('incorrect');

    setTimeout(function () {
      o.classList.remove("incorrect");
      elementsHolder.classList.remove('incorrect');
    }, 2500);

  });

  setTimeout(function () {
    document.location.hash = 'home';
    resetTime();
    let var_no = 0
    min__score = 0;
    
    let elem = elements.sort(() => Math.random() - Math.random());

    localStorage.setItem('elemtura_teeo_algorithms_var_min_no', var_no);
    localStorage.setItem('elemtura_by_teeo_algorithms_min_elem', JSON.stringify(elem));
  }, 3000);
}

let timer = () => {
  if (!timeBool) return;
  if (time__var <= 1) return lose();
  time__var-=1;
  setTimeout(() => {
    timer()
    updateTimer();
  }, 1000);
}

elements.forEach(e => {
  let el_div = document.createElement('div');

  el_div.classList = 'element flex';
  el_div.innerHTML = `
    <span class="el--name"> ${e.el} </span>
    <span class="atom--no"> ${e.No} </span>
    <span class="el--symbol"> ${e.sign} </span>
  `;

  qs('.element--container').append(el_div);
});

updateBoost();
updateScore();
updateName();
document.location.hash = 'home';
min_score__tag.innerText = min__score;

window.addEventListener('click', sortEvent);