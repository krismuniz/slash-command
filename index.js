'use strict';
const slashCommand = (s) => {
  if (typeof s !== 'string') {
    throw new TypeError('Argument must be a string.');
  }
  let cmds = s.split(' ')[0].match(/\/([a-z\d-]+)/ig);
  let slashcmds = null;
  let subcmds = null;
  let body = s.trim() || null;

  if (cmds) {
    slashcmds = cmds.join('');
    cmds = cmds.map(x => x.replace('/',''));
    subcmds = cmds.length > 1 ? cmds.filter(v => v !== cmds[0]) : null;
    body = s.split(' ').filter((v, i) => i > 0).join(' ').trim() || null;
  }

  return {
    slashcommand: slashcmds,
    command: cmds ? cmds[0] : null,
    subcommands: subcmds,
    body: body,
    original: s
  };
};

module.exports = slashCommand;
