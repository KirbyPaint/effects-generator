import { fumbleMagicText, fumbleMagicTitle } from './fumble-magic.mjs';
import { fumbleMeleeText, fumbleMeleeTitle } from './fumble-melee.mjs';
import { fumbleNaturalText, fumbleNaturalTitle } from './fumble-natural.mjs';
import { fumbleRangedText, fumbleRangedTitle } from './fumble-ranged.mjs';

import { minorBludgeoningText, minorBludgeoningTitle } from './minor-bludgeoning.mjs';
import { minorMagicText, minorMagicTitle } from './minor-magic.mjs';
import { minorPiercingText, minorPiercingTitle } from './minor-piercing.mjs';
import { minorSlashingText, minorSlashingTitle } from './minor-slashing.mjs';

import { majorBludgeoningText, majorBludgeoningTitle } from './major-bludgeoning.mjs';
import { majorMagicText, majorMagicTitle } from './major-magic.mjs';
import { majorPiercingText, majorPiercingTitle } from './major-piercing.mjs';
import { majorSlashingText, majorSlashingTitle } from './major-slashing.mjs';

import { severeBludgeoningText, severeBludgeoningTitle } from './severe-bludgeoning.mjs';
import { severeMagicText, severeMagicTitle } from './severe-magic.mjs';
import { severePiercingText, severePiercingTitle } from './severe-piercing.mjs';
import { severeSlashingText, severeSlashingTitle } from './severe-slashing.mjs';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getTime() {
  const time = new Date();
  return time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit', second: '2-digit' });
}

function effect(title, text, charClass, randomNumber, difficulty) {
  const image = `"img\\` + `${difficulty}_${charClass}.png"`;
  $(".text").prepend(`<p class="${difficulty}">${getTime()}<br><img src=${image} class="time"><br>${(randomNumber + 1)}: <em>${title[randomNumber]}</em><br>${text[randomNumber]}</p>`);
}

function popupText(title, text, randomNumber) {
  $(".popup-text").empty();
  $(".popup-text").append(`<span class="popup-title-text">${title[randomNumber]}</span><p>${text[randomNumber]}</p>`);
  $(".popup").slideDown();
  $(".text").show();
}

function clearPage() {
  $(".text").empty();
}

function debug(title, text, charClass, difficulty) {
  clearPage();
  const image = `"img\\` + `${difficulty}_${charClass}.png"`;
  for (let i = 0; i < 50; i++) {
    $(".text").append(`<p class="${difficulty}">${getTime()}<br><img src=${image} class="time"><br>${(i + 1)}: <em>${title[i]}</em><br>${text[i]}</p>`);
  }
}

$(document).ready(function () {
  $("button#popup-button").click(function () {
    $(".popup").slideUp();
    $(".popup-text").empty();
  });

  // Buttons and their functions
  $("button#g_melee").click(function () {
    // Fumble/Melee Table

    const randomNumber = getRandomInt(50);
    const charClass = "melee";
    const difficulty = "fumble";

    if ($("#debug").prop("checked")) {
      debug(fumbleMeleeTitle, fumbleMeleeText, charClass, difficulty);
    } else {
      effect(fumbleMeleeTitle, fumbleMeleeText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(fumbleMeleeTitle, fumbleMeleeText, randomNumber);
      }
    }
  });

  $("button#g_ranged").click(function () {
    // FUMBLE/RANGED Table

    const randomNumber = getRandomInt(50);
    const charClass = "ranged";
    const difficulty = "fumble";

    if ($("#debug").prop("checked")) {
      debug(fumbleRangedTitle, fumbleRangedText, charClass, difficulty);
    } else {
      effect(fumbleRangedTitle, fumbleRangedText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(fumbleRangedTitle, fumbleRangedText, randomNumber);
      }
    }
  });

  $("button#g_natural").click(function () {
    // FUMBLE/NATURAL Table

    const randomNumber = getRandomInt(50);
    const charClass = "natural";
    const difficulty = "fumble";

    if ($("#debug").prop("checked")) {
      debug(fumbleNaturalTitle, fumbleNaturalText, charClass, difficulty);
    } else {
      effect(fumbleNaturalTitle, fumbleNaturalText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(fumbleNaturalTitle, fumbleNaturalText, randomNumber);
      }
    }
  });

  $("button#g_magic").click(function () {
    // FUMBLE/MAGIC Table

    const randomNumber = getRandomInt(50);
    const charClass = "magic";
    const difficulty = "fumble";

    if ($("#debug").prop("checked")) {
      debug(fumbleMagicTitle, fumbleMagicText, charClass, difficulty);
    } else {
      effect(fumbleMagicTitle, fumbleMagicText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(fumbleMagicTitle, fumbleMagicText, randomNumber);
      }
    }
  });

  $("button#b_slashing").click(function () {
    // MINOR/SLASHING Table

    const randomNumber = getRandomInt(50);
    const charClass = "slashing";
    const difficulty = "minor";

    if ($("#debug").prop("checked")) {
      debug(minorSlashingTitle, minorSlashingText, charClass, difficulty);
    } else {
      effect(minorSlashingTitle, minorSlashingText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(minorSlashingTitle, minorSlashingText, randomNumber);
      }
    }
  });

  $("button#b_piercing").click(function () {
    // MINOR/PIERCING Table

    const randomNumber = getRandomInt(50);
    const charClass = "piercing";
    const difficulty = "minor";

    if ($("#debug").prop("checked")) {
      debug(minorPiercingTitle, minorPiercingText, charClass, difficulty);
    } else {
      effect(minorPiercingTitle, minorPiercingText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(minorPiercingTitle, minorPiercingText, randomNumber);
      }
    }
  });

  $("button#b_bludgeoning").click(function () {
    // MINOR/BLUDGEONING TABLE

    const randomNumber = getRandomInt(50);
    const charClass = "bludgeoning";
    const difficulty = "minor";

    if ($("#debug").prop("checked")) {
      debug(minorBludgeoningTitle, minorBludgeoningText, charClass, difficulty);
    } else {
      effect(minorBludgeoningTitle, minorBludgeoningText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(minorBludgeoningTitle, minorBludgeoningText, randomNumber);
      }
    }
  });

  $("button#b_magic").click(function () {
    // MINOR/MAGIC Table

    const randomNumber = getRandomInt(50);
    const charClass = "magic";
    const difficulty = "minor";

    if ($("#debug").prop("checked")) {
      debug(minorMagicTitle, minorMagicText, charClass, difficulty);
    } else {
      effect(minorMagicTitle, minorMagicText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(minorMagicTitle, minorMagicText, randomNumber);
      }
    }
  });

  $("button#m_slashing").click(function () {
    // MAJOR/SLASHING TABLE

    const randomNumber = getRandomInt(50);
    const charClass = "slashing";
    const difficulty = "major";

    if ($("#debug").prop("checked")) {
      debug(majorSlashingTitle, majorSlashingText, charClass, difficulty);
    } else {
      effect(majorSlashingTitle, majorSlashingText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(majorSlashingTitle, majorSlashingText, randomNumber);
      }
    }
  });

  $("button#m_piercing").click(function () {
    // MAJOR/PIERCING Table

    const randomNumber = getRandomInt(50);
    const charClass = "piercing";
    const difficulty = "major";

    if ($("#debug").prop("checked")) {
      debug(majorPiercingTitle, majorPiercingText, charClass, difficulty);
    } else {
      effect(majorPiercingTitle, majorPiercingText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(majorPiercingTitle, majorPiercingText, randomNumber);
      }
    }
  });

  $("button#m_bludgeoning").click(function () {
    // MAJOR/BLUDGEONING Table

    const randomNumber = getRandomInt(50);
    const charClass = "bludgeoning";
    const difficulty = "major";

    if ($("#debug").prop("checked")) {
      debug(majorBludgeoningTitle, majorBludgeoningText, charClass, difficulty);
    } else {
      effect(majorBludgeoningTitle, majorBludgeoningText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(majorBludgeoningTitle, majorBludgeoningText, randomNumber);
      }
    }
  });

  $("button#m_magic").click(function () {
    // MAJOR/MAGIC Table

    const randomNumber = getRandomInt(50);
    const charClass = "magic";
    const difficulty = "major";

    if ($("#debug").prop("checked")) {
      debug(majorMagicTitle, majorMagicText, charClass, difficulty);
    } else {
      effect(majorMagicTitle, majorMagicText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(majorMagicTitle, majorMagicText, randomNumber);
      }
    }
  });

  $("button#s_slashing").click(function () {
    // SEVERE/SLASHING Table

    const randomNumber = getRandomInt(50);
    const charClass = "slashing";
    const difficulty = "severe";

    if ($("#debug").prop("checked")) {
      debug(severeSlashingTitle, severeSlashingText, charClass, difficulty);
    } else {
      effect(severeSlashingTitle, severeSlashingText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(severeSlashingTitle, severeSlashingText, randomNumber);
      }
    }
  });

  $("button#s_piercing").click(function () {
    // SEVERE/PIERCING Table

    const randomNumber = getRandomInt(50);
    const charClass = "piercing";
    const difficulty = "severe";

    if ($("#debug").prop("checked")) {
      debug(severePiercingTitle, severePiercingText, charClass, difficulty);
    } else {
      effect(severePiercingTitle, severePiercingText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(severePiercingTitle, severePiercingText, randomNumber);
      }
    }
  });

  $("button#s_bludgeoning").click(function () {
    // SEVERE/BLUDGEONING Table

    const randomNumber = getRandomInt(50);
    const charClass = "bludgeoning";
    const difficulty = "severe";

    if ($("#debug").prop("checked")) {
      debug(severeBludgeoningTitle, severeBludgeoningText, charClass, difficulty);
    } else {
      effect(severeBludgeoningTitle, severeBludgeoningText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(severeBludgeoningTitle, severeBludgeoningText, randomNumber);
      }
    }
  });

  $("button#s_magic").click(function () {
    // SEVERE/MAGIC Table

    const randomNumber = getRandomInt(50);
    const charClass = "magic";
    const difficulty = "severe";

    if ($("#debug").prop("checked")) {
      debug(severeMagicTitle, severeMagicText, charClass, difficulty);
    } else {
      effect(severeMagicTitle, severeMagicText, charClass, randomNumber, difficulty);
      if ($("#popup-check").prop("checked")) {
        popupText(severeMagicTitle, severeMagicText, randomNumber);
      }
    }
  });

  $("form#form").submit(function (event) {
    event.preventDefault();
  });
});