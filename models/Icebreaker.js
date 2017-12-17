'use strict';

class Icebreaker{
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker

const icebreaker = require('./Question.js')
