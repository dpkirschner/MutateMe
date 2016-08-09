var TextMutator = require('textMutator');

var CantKnockTheHustle = require('../source/jayz/CantKnockTheHustle');
var DirtOffYourShoulder = require('../source/jayz/DirtOffYourShoulder');
var Encore = require('../source/jayz/Encore');
var GirlsGirlsGirls = require('../source/jayz/GirlsGirlsGirls');
var HeartOfTheCity = require('../source/jayz/HeartOfTheCity');
var InMyLifetime = require('../source/jayz/InMyLifetime');
var JiggaWhat = require('../source/jayz/JiggaWhat');
var ShowMeWhatYouGot = require('../source/jayz/ShowMeWhatYouGot');
var Problems = require('../source/jayz/99Problems');
var Takeover = require('../source/jayz/Takeover');


var jayz = new TextMutator(2);

jayz.ingest(CantKnockTheHustle);
jayz.ingest(DirtOffYourShoulder);
jayz.ingest(Encore);
jayz.ingest(GirlsGirlsGirls);
jayz.ingest(HeartOfTheCity);
jayz.ingest(InMyLifetime);
jayz.ingest(JiggaWhat);
jayz.ingest(ShowMeWhatYouGot);
jayz.ingest(Problems);
jayz.ingest(Takeover);


module.exports = jayz;