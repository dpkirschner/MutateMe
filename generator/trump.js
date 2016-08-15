var TextMutator = require('textmutator');

var economics = require('../source/trump/economics');
var foreignPolicy = require('../source/trump/foreignPolicy');
var jobplan = require('../source/trump/jobplan');
var nationalSecurity = require('../source/trump/nationalSecurity');
var stakesOfElection = require('../source/trump/stakesOfElection');

var trump = new TextMutator(2);

trump.ingest(economics);
trump.ingest(foreignPolicy);
trump.ingest(jobplan);
trump.ingest(nationalSecurity);
trump.ingest(stakesOfElection);

module.exports = trump;