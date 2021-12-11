function stylesCountAdd(stylesCount, styles) {
  stylesCount.autre += styles.autre;
  stylesCount.classique += styles.classique;
  stylesCount.dance += styles.dance;
  stylesCount.electro += styles.electro;
  stylesCount.jazz += styles.jazz;
  stylesCount.monde += styles.monde;
  stylesCount.pop_rock += styles.pop_rock;
  stylesCount.rap += styles.rap;
  stylesCount.reggae += styles.reggae;
  stylesCount.rnb += styles.rnb;
  stylesCount.soul += styles.soul;
  stylesCount.variete_fr += styles.variete_fr;
}

function StylesCount() {
  this.autre = 0;
  this.classique = 0;
  this.dance = 0;
  this.electro = 0;
  this.jazz = 0;
  this.monde = 0;
  this.pop_rock = 0;
  this.rap = 0;
  this.reggae = 0;
  this.rnb = 0;
  this.soul = 0;
  this.variete_fr = 0;
}

function ecoutes() {
  let stylesCount = new StylesCount();
  let json = require("./data/data.json");
  json.values.forEach(function(element) {
    stylesCountAdd(stylesCount, element.styles);
  });
  return stylesCount;
}

function ecoutesLegale(niveauLegal) {
  let stylesCount = new StylesCount();
  let json = require("./data/data.json");
  json.values.forEach(function(element) {
    if (element.legalite == niveauLegal) {
      stylesCountAdd(stylesCount, element.styles);
    }
  });
  return stylesCount;
}

function attirances() {
  let json = require("./data/data.json");
  let attrait = {
    autre: new StylesCount(),
    classique: new StylesCount(),
    dance: new StylesCount(),
    electro: new StylesCount(),
    jazz: new StylesCount(),
    monde: new StylesCount(),
    pop_rock: new StylesCount(),
    rap: new StylesCount(),
    reggae: new StylesCount(),
    rnb: new StylesCount(),
    soul: new StylesCount(),
    variete_fr: new StylesCount(),
  };
  json.values.forEach(function(element) {
    if (element.styles.autre) {
      stylesCountAdd(attrait.autre, element.styles);
    }
    if (element.styles.classique) {
      stylesCountAdd(attrait.classique, element.styles);
    }
    if (element.styles.dance) {
      stylesCountAdd(attrait.dance, element.styles);
    }
    if (element.styles.electro) {
      stylesCountAdd(attrait.electro, element.styles);
    }
    if (element.styles.jazz) {
      stylesCountAdd(attrait.jazz, element.styles);
    }
    if (element.styles.monde) {
      stylesCountAdd(attrait.monde, element.styles);
    }
    if (element.styles.pop_rock) {
      stylesCountAdd(attrait.pop_rock, element.styles);
    }
    if (element.styles.rap) {
      stylesCountAdd(attrait.rap, element.styles);
    }
    if (element.styles.reggae) {
      stylesCountAdd(attrait.reggae, element.styles);
    }
    if (element.styles.rnb) {
      stylesCountAdd(attrait.rnb, element.styles);
    }
    if (element.styles.soul) {
      stylesCountAdd(attrait.soul, element.styles);
    }
    if (element.styles.variete_fr) {
      stylesCountAdd(attrait.variete_fr, element.styles);
    }
  });
  return attrait;
}

function attiranceTaux() {
  let attrait = attirances();
  let keys = Object.keys(attrait);
  keys.forEach(function(key1) {
    let total = attrait[key1][key1];
    keys.forEach(function(key2) {
      attrait[key1][key2] = (attrait[key1][key2] * 100) / total;
    });
    delete attrait[key1][key1];
  });
  return attrait;
}

export { ecoutes, ecoutesLegale, attiranceTaux };
