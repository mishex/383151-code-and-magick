// stats.js

'use strict';

var getRandomAlphaColor = function (r, g, b) {
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + Math.random() + ')';
}

var getMaxTime = function (times) {
  return Math.max.apply(null, times);
};

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

  var max = getMaxTime(times)

  var barHeight = 150;                            // px;
  var barWidth = 40;                              // px;
  var barIdent = Math.ceil(statCloud.w / times.length);
  var barScale = barHeight / max;                 // px;

  var initialX = statCloud.x;                     // px;
  var initialY = statCloud.y + statCloud.h - 20;  // px;

  for (var j = 0; j < times.length; j++) {
    if (names[j] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';       // red;
    }
    else {
      ctx.fillStyle = getRandomAlphaColor(0, 0, 255)
    }

    ctx.fillRect(Math.ceil(initialX + barIdent * (j + 0.5) - barWidth / 2), initialY, barWidth, - times[j] * barScale);
    ctx.fillStyle = '#000'; // black;
    ctx.textBaseline = 'top';
    ctx.fillText(names[j], Math.ceil(initialX + barIdent * (j + 0.5) - barWidth / 2), initialY);
    ctx.textBaseline = 'bottom';
    ctx.fillText(Math.ceil(times[j]), Math.ceil(initialX + barIdent * (j + 0.5) - barWidth / 2), initialY - times[j] * barScale);
  }
};
