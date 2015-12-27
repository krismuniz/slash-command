'use strict';
const slashCommand = require('../index.js');
const expect = require('chai').expect;

describe('slashCommand() [function]', () => {

  describe('Error handling:', () => {
    it('Throws a TypeError when the argument is not a [string]', () => {
      expect(slashCommand.bind(1)).to.throw(TypeError);
      expect(slashCommand.bind({ name: 'bob' })).to.throw(TypeError);
      expect(slashCommand.bind([1, 2, 4])).to.throw(TypeError);
      expect(slashCommand.bind(x => x)).to.throw(TypeError);
    });
  });

  it('returns an [object] that contains all necessary keys (\'command\', \'subcommands\', \'body\', and \'original\')', () => {
    let result = slashCommand('/tweet hi');
    expect(result).to.be.an('object');
    expect(result).to.have.keys({
      'command': 'tweet',
      'subcommands': null,
      'body': 'hi',
      'original': '/tweet hi'
    });
  });

  it('given an empty string, returns correct object (all of the keys\' values are null, except \'original\')', () => {
    let result = slashCommand('');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({
      'command': null,
      'subcommands': null,
      'body': null,
      'original': ''
    });
  });

  it('given the string \'/tweet This is a tweet\', returns correct object', () => {
    let result = slashCommand('/tweet This is a tweet');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({
      'command': 'tweet',
      'subcommands': null,
      'body': 'This is a tweet',
      'original': '/tweet This is a tweet'
    });
  });

  it('given the string \'/google/calendar Meeting with Hannah at 5pm\', returns correct object', () => {
    let result = slashCommand('/google/calendar Meeting with Hannah at 5pm');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({
      'command': 'google',
      'subcommands': ['calendar'],
      'body': 'Meeting with Hannah at 5pm',
      'original': '/google/calendar Meeting with Hannah at 5pm'
    });
  });

  it('given the string \'/google/calendar/new Meeting with Hannah at 5pm\', returns correct object', () => {
    let result = slashCommand('/google/calendar/new Meeting with Hannah at 5pm');
    expect(result).to.be.a('object');
    expect(result).to.deep.equal({
      'command': 'google',
      'subcommands': ['calendar', 'new'],
      'body': 'Meeting with Hannah at 5pm',
      'original': '/google/calendar/new Meeting with Hannah at 5pm'
    });
  });

  it('given a string with no slash command(s), returns correct object (\'command\' and \'subcommands\' are null)', () => {
    let result = slashCommand('/google/calendar/new Meeting with Hannah at 5pm');
    expect(result).to.be.a('object');
    expect(result).to.deep.equal({
      'command': 'google',
      'subcommands': ['calendar', 'new'],
      'body': 'Meeting with Hannah at 5pm',
      'original': '/google/calendar/new Meeting with Hannah at 5pm'
    });
  });

  it('given a string with no command body, returns correct object (\'body\' is null)', () => {
    let result = slashCommand('/logout');
    expect(result).to.be.a('object');
    expect(result).to.deep.equal({
      'command': 'logout',
      'subcommands': null,
      'body': null,
      'original': '/logout'
    });
  });

  after(function() {
    console.log('\n Boom! Test completed.', '\n * Drops mic and walks away *');
  });

});
