// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  var statCloud = {
    x: 100,
    y: 10,
    w: 420,
    h: 270,
    step: 10
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black;
  ctx.fillRect(statCloud.x + statCloud.step, statCloud.y + statCloud.step, statCloud.w, statCloud.h);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(statCloud.x, statCloud.y, statCloud.w, statCloud.h);
  ctx.fillRect(statCloud.x, statCloud.y, statCloud.w, statCloud.h);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', statCloud.x + 20, statCloud.y + 40);
  ctx.fillText('Список результатов:', statCloud.x + 20, statCloud.y + 60);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var barHeight = 150;                            // px;
  var barWidth = 40; // px;
  var barIdent = 50;
  var barScale = barHeight / max;                 // px;

  var initialX = statCloud.x + 20;                // px;
  var initialY = statCloud.y + statCloud.h - 20;  // px;

  for (var j = 0; j < times.length; j++) {
    if (names[j] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'; // red;
    }
    else {
      ctx.fillStyle = `rgba(0, 0, 255, ${Math.random()})`; // red;
    }
    ctx.fillRect(initialX + (barIdent + barWidth) * j, initialY, barWidth, -times[j] * barScale);
    ctx.fillStyle = '#000'; // black;
    ctx.textBaseline = 'top';
    ctx.fillText(names[j], initialX + (barIdent + barWidth) * j, initialY);
    ctx.textBaseline = 'bottom';
    ctx.fillText(Math.ceil(times[j]), initialX + (barIdent + barWidth) * j, initialY -times[j] * barScale);
  }
};
