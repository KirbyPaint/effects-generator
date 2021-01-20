function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function() {
  $("button#btnG_Melee").click(function() {
    // Fumble/Melee Table
    const g_melee = ["FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    "FUMBLE/MELEE TEXT",
    ];

    const randomNumber = getRandomInt(50);
    const title = g_melee[randomNumber];
    $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnG_Ranged").click(function() {
    // FUMBLE/RANGED Table
    const g_ranged = ["FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    "FUMBLE/RANGED TEXT",
    ];

    const randomNumber = getRandomInt(50);
    const title = g_ranged[randomNumber];
    $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnG_Natural").click(function() {
    // FUMBLE/NATURAL Table
    const g_natural = ["FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    "FUMBLE/NATURAL TEXT",
    ];

    const randomNumber = getRandomInt(50);
    const title = g_natural[randomNumber];
    $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnG_Magic").click(function() {
    // FUMBLE/MAGIC Table
    const g_magic = ["FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    "FUMBLE/MAGIC TEXT",
    ];

    const randomNumber = getRandomInt(50);
    const title = g_magic[randomNumber];
    $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"gray\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnB_Slashing").click(function() {
    // MINOR/SLASHING Table
    const b_slashing = ["Across the Eyes<br>Target suffers maximum damage and is blinded for 1d4 minutes.<br>Save: A DC 20 Dexterity save negates; deals bonus damage instead.<br>Heal: A Heal check DC 10 repairs sight somewhat, but the recipient treats all targets as though they have concealment (20%). A DC 20 heal check will fully repair eyesight to normal levels.",
    "Armor Damage<br>Target suffers maximum damage and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 20 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Bad Parry<br>Target suffers maximum damage and is disarmed (1 item).<br>Save: A DC 20 Dexterity negates the disarm; deals bonus damage instead.<br>Recover: Target must expend a move-equivalent action to retrieve its item. This provokes attacks of opportunity from all threatening opponents. <br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Badly Hacked Ear<br>Target suffers maximum damage and 1 Cha damage. Target also suffers a -2 penalty on Perception checks until healed.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 10 Heal check halves the Perception check penalties, while a DC 20 removes them. Rest or restorative magic is required to heal ability damage.",
    "Bewildering Display<br>Target suffers maximum damage and a -2 penalty to Defense rolls for 1d2 rounds.<br>Save: A DC 20 Resolve negates; deals additional bonus damage instead.<br>Recover: You may make a Resolve save each round to attempt to negate the penalty",
    "Broad Swipe<br>Target suffers maximum damage and 1d6 bleed.<br>Save: A DC 20 Constitution halves the bleed effect.<br>Heal: A DC 10 Heal check halves the bleed effect; a DC 20 Heal check ends it",
    "Broken Jaw<br>Target suffers maximum damage and 1 Con damage. Target has a 25% chance of spell failure (-5 to spell casting rolls) with verbal components until healed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or curative magic.",
    "Brow Cut<br>Target suffers maximum damage and 1d4 bleed. Target blinded while bleeding.<br>Save: A DC 20 Dexterity negates blindness and halves bleed effect; deals bonus damage instead.<br>Heal: A DC 10 Heal check removes either blindness or bleed; a DC 20 Heal check removes both.",
    "Brow to Chin<br>Target suffers maximum damage and 1 Con and Cha damage. Target also suffers a -2 Penalty to Perception checks and ranged attacks until healed.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the penalties to Perception and ranged attacks.",
    "Cracked Spine<br>Target suffers maximum damage and 1d6 Dex damage.<br>Save: A DC 20 Constitution halves Dex damage.<br>Heal: Rest or restorative magic.",
    "Cut Straps<br>Target suffers maximum damage, its movement is reduced by 10’, and the target’s armor check penalty is doubled until repaired.<br>Save: A DC 20 Dexterity avoids movement effect and armor check penalties; deals bonus damage instead.<br>Repair: A Craft (Armor) DC 20 repairs armor and removes penalties.",
    "Delayed Wound<br>Target suffers maximum damage as bleed damage.<br>Save: A DC 20 Constitution halves the bleed effect.<br>Heal: A DC 10 Heal check halves bleed effect; a DC 20 Heal check removes bleed effect.",
    "Disembowel<br>Target suffers maximum damage plus bonus damage again, 1d2 Con damage, and 1d4 bleed.<br>Save: A DC 20 Constitution halves the Con damage and bleed (minimum 1).<br>Heal: A DC 10 Heal check halves the bleed effect; a DC 20 Heal check negates the bleed effect. Rest or restorative magic is needed to heal ability damage.",
    "Fingertipped<br>Target suffers maximum damage and 1d2 Dex damage. Target cannot use hand until healed.<br>Save: A DC 20 Dexterity save negates; deals bonus damage instead.<br>Heal: A DC 10 Heal check allows usage of hand, albeit with a -4 penalty to all rolls. A DC 20 Heal check repairs the hand’s use. Rest or restorative magic is needed to heal ability damage.<br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
    "Flat Blade Thwack<br>Target suffers maximum damage plus double bonus damage again and is staggered for 1 round, but all damage is non-lethal.<br>Save: A DC 20 Constitution save negates stunned condition and halves additional bonus damage.<br>Heal: Rest or curative magic.",
    "Flay<br>Target suffers maximum damage plus 1d3 Str damage.<br>Save: A DC 20 Constitution negates Str damage; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Gory Wound<br>Target suffers maximum damage and is sickened for 1d4 rounds.<br>Save: A DC 20 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the sickened condition.",
    "Gut Slash<br>Target suffers maximum plus bonus damage again and 1d4 bleed. Target cannot swallow whole until healed.<br>Save: A DC 20 Constitution halves the bleed effect (minimum 1).<br>Heal: A DC 10 Heal check halves the bleed effect; a DC 20 Heal check ends it.",
    "Hack and Slash<br>Target suffers maximum damage and you gain a +4 bonus to Severity Checks against that opponent for the next three rounds.",
    "Hacked Digits<br>Target suffers maximum damage, and takes 1 Con and Str damage.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or Restoration spell.",
    "Hacked Hand<br>Target suffers maximum damage, and takes 1d2 Con and Str damage. Target cannot use hand until healed.<br>Save: A DC 20 Constitution negates hand loss and ability drain becomes ability damage.<br>Heal: A DC 10 Heal check allows usage of hand, albeit with a -4 penalty to all rolls. A DC 20 Heal check repairs the hand’s use. Rest or restorative magic is needed to heal ability damage.<br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
    "Hamstring<br>Target suffers maximum damage, 1d2 Dex damage and is knocked prone.<br>Save: A DC 20 Dexterity save negates; deals bonus damage instead.<br>Recover: Target must spend a move-equivalent action to stand up. This provokes an attack of opportunity.",
    "Humiliating Cut<br>Target suffers maximum damage and suffers disadvantage to attack anyone else but you from humiliation until the end of the encounter.<br>Save: A DC 20 Resolve negates; deals bonus damage instead.<br>Recover: Target may continue to make Resolve saves each round until successful, ending the humiliating effect.",
    "Knockback<br>Target suffers maximum damage and is pushed 1d6 squares directly away.<br>Save: A DC 20 Dexterity negates being pushed; deals additional bonus damage instead.",
    "Lean Into the Blow<br>Target suffers maximum damage plus double bonus damage again but you drop your weapon.<br>Save: A DC 20 Dexterity (by attacker) negates dropping your weapon.<br>Recover: To pick up a dropped weapon, you must move to its location and expend a move-equivalent action. This provokes attacks of opportunity from all threatening opponents.",
    "Leg Swipe<br>Target suffers maximum damage plus bonus damage again and target is knocked prone.<br>Save: A DC 20 Dexterity negates being knocked prone; deals additional bonus damage instead.<br>Recover: A prone target must expend a move equivalent action to stand up. This provokes attacks of opportunity from all threatening opponents.",
    "Lip Cut<br>Target suffers maximum damage and 1d2 bleed. Target also suffers a 10% spell failure chance (-2 to spell casting checks) for verbal spells until healed.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check removes the bleed effect; a DC 20 Heal check repairs the cut lip and removes the spell failure chance.",
    "Long Bloody Gash<br>Target suffers maximum damage and 1d4+1 bleed.<br>Save: DC 20 Constitution halves bleed effect.<br>Heal: A successful Heal check DC 10 reduces the bleeding by half; a DC 20 Heal check removes the bleed effect.",
    "Momentum<br>You deal maximum damage and gain a +2 circumstance bonus on all your attack rolls until the end of your next turn.",
    "Muscle Wound<br>Target suffers maximum damage and 1d2 Str damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Neck Cut<br>Target suffers maximum damage and 1d4 bleed.<br>Save: A DC 20 Constitution negates bleed. <br>Heal: A DC 10 Heal check halves bleed effect; a DC 20 Heal check removes bleed effect.",
    "Nerve Slice<br>Target suffers maximum damage, 1d2 Dex damage, and becomes staggered for 1 round.<br>Save: A DC 20 Constitution negates Dex damage; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes staggered condition.",
    "Overhand Chop<br>Target suffers maximum damage plus bonus damage again and 1d2 bleed.<br>Save: A DC 20 Constitution negates bleed; deals additional bonus damage instead.<br>Heal: A DC 20 Heal check ends the bleed effect.",
    "Pain and Simple<br>Target suffers maximum damage plus bonus damage again and 1d6 nonlethal damage.<br>Save: A DC 20 Constitution halves the additional nonlethal damage.<br>Heal: Nonlethal damage can be cured by rest or curative magic.",
    "Paper Cut<br>Target suffers maximum damage and suffers a -2 penalty on attack rolls, skill checks and ability checks for 1d4 rounds.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the penalties.",
    "Parrying Strike<br>You deal maximum damage and gain a +2 dodge bonus to Defense rolls and a +2 Circumstance bonus to Parry attempts against that opponent until the end of your next turn.",
    "Rupture Abdominal Cavity<br>Target suffers maximum damage and 1 Con bleed.<br>Save: A DC 20 Constitution negates the bleed effect; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the Con bleed.",
    "Sapping Slash<br>Target suffers maximum damage and is fatigued.<br>Save: A DC 20 Constitution save negates; deals additional bonus damage instead.<br>Heal: Rest",
    "Severed Tendon<br>Target suffers maximum damage and 1d2 Dex damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1 round.<br>Save: A DC 20 Dexterity negates; deals additional bonus damage instead.<br>Recover: A DC 20 Acrobatics check ends the flatfooted condition.",
    "Stand Aside<br>Target suffers maximum damage plus bonus damage again and is pushed 1 square in any direction.<br>Save: A DC 20 Strength negates push; deals bonus damage instead.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at a -4 penalty.",
    "Swing Through<br>Target suffers maximum damage and you may make one additional free attack against another adjacent opponent you threaten at a -4 penalty.<br>Special: If no adjacent opponents, deal additional bonus damage instead.",
    "Tangled<br>Target suffers maximum damage and you may attempt a free grapple attack against the target with a +2 circumstance bonus. The free grapple does not cause attacks of opportunity.",
    "Terrible Gash<br>Target suffers maximum damage and 1 Con and Cha damage.<br>Save: A DC 20 Dexterity negates ability damage; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Throat Slash<br>Target suffers maximum damage plus 1d4 bleed. Target cannot talk or breathe and is considered drowning while bleeding.<br>Save: A DC 20 Constitution halves bleed.<br>Heal: A DC 10 Heal check halves bleed, while a DC 20 Heal check ends bleed effect.",
    "Ugly Wound<br>Target suffers maximum damage and 1d3 Cha damage.<br>Save: A DC 20 Constitution negates ability damage; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "We’ve Got A Bleeder!<br>Target suffers maximum damage and 1d6 bleed.<br>Save: A DC 20 Constitution halves bleed effect each round.<br>Heal: A DC 10 Heal check halves the bleed effect, while a DC 20 Heal check ends it.",
    "Weapon Strike<br>Target suffers maximum damage and attack also deals damage to target’s weapon (hardness applies). If the target is wielding multiple weapons, the attacker may choose which weapon suffers damage.<br>Save: DC 20 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wield a weapon, deal additional bonus damage again to target instead.",
    "Wide Open<br>Target suffers maximum damage and provokes attacks of opportunity from all threatening opponents.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.<br>Special: If no opponents threaten, deal additional bonus damage instead."    
    ];
    
    const randomNumber = getRandomInt(50);
    const title = b_slashing[randomNumber];
    $("#text").prepend("<p class=\"green\">" + (randomNumber + 1) + ": " + title + "</p>");
    
    // for (let i = 0; i < 50; i++) {
    //   let title = b_slashing[i];
    //   $("#text").prepend("<p class=\"green\">" + (i + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    // event.preventDefault();
  });

  $("button#btnB_Piercing").click(function() {
    // MINOR/PIERCING Table
    const b_piercing = ["Achilles’ Heel<br>Target suffers maximum damage and 1d2 Dex damage. Target’s movement speeds are reduced by half until healed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the movement penalty.",
    "Bicep Wound<br>Target suffers maximum plus bonus damage again and 1d2 Str damage.<br>Save: A DC 20 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bleeder<br>Target suffers maximum damage and 1d6 bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the bleed condition.",
    "Blown Back<br>Target suffers maximum damage and is knocked prone.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Standing from prone is a move-equivalent action that provokes attacks of opportunity from threatening foes.",
    "Calf Hole<br>Target suffers maximum damage and 1d4 Dex damage.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Cheek Pierced<br>Target suffers maximum damage and 1d4 bleed. Target also suffers an additional 30% spell failure chance (-6 to casting rolls) for verbal spells until healed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the bleed effect and removes the spell failure chance.",
    "Chipped Bone<br>Target suffers maximum damage and 1d4 Dex damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Clean Through<br>Target suffers maximum damage, 1d4 bleed, and 1 Con damage.<br>Save: A DC 20 Constitution negates Con damage and halves bleed effect; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the bleed effect. Rest or restoration magic is needed to heal ability damage.",
    "Deep Hurting<br>Target suffers maximum damage and is fatigued.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or a DC 20 Heal check ends the fatigued condition.",
    "Deep Wound<br>Target suffers maximum damage and is nauseated for 1 round.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the nauseated condition.",
    "Elbow Pierced<br>Target suffers maximum damage and drops whatever is being held in hand (1 item).<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Retrieving a dropped item is a move equivalent action that provokes attacks of opportunity from threatening foes.<br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Eye Patch For You<br>Target suffers maximum plus bonus damage again and 1 Con drain. Target also suffers a -2 penalty on Perception checks and ranged attacks until healed.<br>Save: A DC 20 Dexterity negates; deals additional bonus damage instead.<br>Heal: A DC 20 Heal check removes the Perception and attack penalties.",
    "Forearm Piercing<br>Target suffers maximum damage and is disarmed (1 item).<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Recover: Retrieving a dropped item is a move equivalent action that provokes attacks of opportunity from threatening foes.<br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Guarded Strike<br>You deal maximum damage and gain a +2 bonus to your Defense rolls until the end of your next turn.",
    "Grazing Hit<br>Target suffers maximum damage and is stunned for 1 round.<br>Save: A DC 20 Constitution negates; deals bonus damage.<br>Heal: A DC 20 Heal check ends the stunned condition.",
    "Hand Wound<br>Target suffers maximum damage and 1d2 Dex damage. Target suffers a -2 penalty on all attack rolls and skill checks using that hand until healed.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check is needed to end the wound penalty. Rest or restorative magic is needed to heal ability damage.",
    "Heart Shot<br>Target suffers maximum damage and 1 Con bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the Con bleed. Rest or restorative magic is needed to heal ability damage.",
    "In A Row<br>You deal maximum damage and deal bonus damage to an adjacent opponent you also threaten.<br>Save: A DC 20 Dexterity negates (secondary target only); deals additional damage instead.<br>Special: If no adjacent opponents are available, deal the additional bonus damage to the original target instead.",
    "Kidney Piercing<br>Target suffers maximum damage and is sickened for 1d6 rounds.<br>Save: A DC 20 Constitution negates; deals damage instead.<br>Heal: A DC 20 Heal check ends the sickened condition.",
    "Left Reeling<br>Target suffers maximum damage and a -2 penalty to Defense rolls for 1d2 rounds.<br>Save: A DC 20 Resolve negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the Defense penalty.",
    "Leg Wound<br>Target suffers maximum damage and target’s land speed is halved for 1d4 rounds.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the speed penalty.",
    "Lodged In The Bone<br>Target suffers maximum damage and 1d4 bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Requires a DC 15 Strength check (causing 1d6 damage) or DC 20 Heal check to remove.",
    "Momentum<br>You deal maximum damage and gain a +2 circumstance bonus on all your attack rolls until the end of your next turn.",
    "Muscle Severed<br>Target suffers maximum damage, 1d2 Dex damage, and 1d2 Str damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Nailed In Place<br>Target suffers maximum damage and cannot move.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Target must succeed at a DC 15 Strength check to free themselves.<br>Special: If not dealt by a ranged attack, the attacker’s melee weapon is stuck in the target’s square. The attacker may also attempt to remove the weapon as a standard action.",
    "Nerve Cluster<br>Target suffers maximum damage and is stunned for 1d3 rounds.<br>Save: A DC 20 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the stunned condition.<br>Special: The player may also make a DC 15 Constitution save each round to be staggered instead for that round.",
    "Nicked An Artery<br>Target suffers maximum damage and 1d6 bleed.<br>Save: A DC 20 Constitution halves the bleed effect.<br>Heal: A DC 20 Heal check ends the bleed effect.",
    "Organ Scramble<br>Target suffers maximum damage and 1d3 Con damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Overreaction<br>Target suffers maximum damage and provokes attacks of opportunity from all threatening opponents.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.",
    "Painful Poke<br>Target suffers maximum damage and is staggered for 1 round.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.",
    "Penetrating Wound<br>Target suffers maximum damage plus bonus damage again and this attack ignores all DR.<br>Save: A DC 20 Dexterity negates; deals additional bonus damage instead.<br>Special: If target does not have DR, deal additional bonus damage instead.",
    "Perfect Strike<br>Target suffers maximum damage plus bonus damage again!<br>Save: None.",
    "Pierced<br>Target suffers maximum damage and is dazed for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the dazed condition.",
    "Pierced Appendix<br>Target suffers maximum damage and is both sickened and poisoned (treat as greenblood-oil).<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the sickened condition. Target must succeed at a Constitution save to overcome the poison.",
    "Pincushion<br>Target suffers maximum damage plus bonus damage again and 1d4 bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check end the bleed effect.",
    "Pinhole<br>Target suffers maximum damage and 1d4 bleed. Target takes 1 additional bleed (cumulative) each round until healed.<br>Save: DC 20 Constitution negates bleed effect (save each round).<br>Heal: Curative magic or a Heal check DC 20 ends the bleed effect.",
    "Pinned Arm<br>Target suffers maximum damage and one arm becomes immobile.<br>Save: A DC 20 Dexterity negates; deals additional bonus damage instead.<br>Heal: A DC 20 Heal check or DC 15 Strength check removes the weapon or projectile, allowing mobility.<br>Special: If not dealt by a ranged attack, the attacker’s melee weapon is stuck in the target’s arm. The attacker may also attempt to remove the weapon as a standard action.",
    "Punctured Lung<br>Target suffers maximum damage and begins to drown.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the drowning condition.",
    "Ragged Wound<br>Target suffers maximum damage and 1d4 bleed.<br>Save: DC 20 Constitution halves bleed effect (each round).<br>Heal: A DC 20 Heal check ends the bleed effect.",
    "Right In The Ear<br>Target suffers maximum damage, 1 Int damage, and 1d2 bleed.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the bleed effect. Rest or restorative magic is needed to heal ability damage.",
    "Shoulder Wound<br>Target suffers maximum damage, 1d2 Str damage, and 1d2 Dex damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Spinal Tap<br>Target suffers maximum damage and a -2 penalty on attack rolls, skill checks, and ability checks for 1d4 rounds.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the attack, skill, and ability penalties.",
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1 round.<br>Save: A DC 20 Dexterity negates; deals additional bonus damage instead.<br>Recover: A DC 20 Acrobatics check ends the flatfooted condition.",
    "Stinger<br>Target suffers maximum damage and is sickened for 1d3 rounds.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the sickened condition.",
    "Sucking Chest Wound<br>Target suffers maximum damage and is exhausted.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check reduces the exhausted condition to being fatigued.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at a -4 penalty.",
    "Tenacious Wound<br>Target suffers maximum damage and 1 Con damage. Target does not heal this ability damage naturally.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Target must receive restorative magic or pass a DC 20 Constitution save each day to recover a point of Con after resting.",
    "Tongue Piercing<br>Target suffers maximum damage and 1 Con damage. Target gains 20% spell failure chance (-4 to spell casting rolls) for verbal spells until healed.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the spell failure chance. Rest or restorative magic is needed to heal ability damage.",
    "Ventilated<br>Target suffers maximum damage and 1d6 points of bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic or a DC 20 Heal check ends the bleed effect.",
    "Vulnerable Spot<br>Target suffers maximum damage and takes 1d2 random ability damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.<br><br>D6 - Ability Type Damage<br>1 - Str<br>2 - Dex<br>3 - Con<br>4 - Int<br>5 - Wis<br>6 - Cha"    
    ];

    const randomNumber = getRandomInt(50);
    const title = b_piercing[randomNumber];
    $("#text").prepend("<p class=\"green\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_piercing[i];
    //   $("#text").prepend("<p class=\"green\">" + (i + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnB_Bludgeoning").click(function() {
    // MINOR/BLUDGEONING TABLE
    const b_bludgeoning = ["2 For 1<br>Target suffers maximum damage and you deal normal damage to one adjacent target.<br>Save: Adjacent target may make a DC 20 Dexterity save to negate.<br>Special: If there are no adjacent targets, deal bonus damage to original target.", 
    "And Stay Down!<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Recover: A move-equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.", 
    "Armor Dent<br>Target suffers maximum damage and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 20 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.", 
    "Back Breaker<br>Target suffers maximum plus bonus damage and 1d4 Dex damage.<br>Save: DC 20 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.", 
    "Bell Ringer<br>Target suffers maximum damage, 1 Int damage and is sickened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the sickened condition. Rest or restoration magic is needed to heal ability damage.", 
    "Bone Masher<br>Target suffers maximum damage and suffers either 1d2 Dex damage and half speed (leg) or 1d2 Str damage (arm) and limb is useless until healed.<br>Save: DC 20 Constitution negates limb damage; deals bonus damage instead.<br>Heal: A DC 20 Heal check allows limb use and removes movement penalties. Rest or restoration magic is needed to heal ability damage.<br><br>D20 Bone Masher Injury:<br>1-5 Left Leg<br>6-10 Left Arm<br>11-15 Right Leg<br>16-20 Right Arm",
    "Box the Ears<br>Target suffers maximum damage and is deafened for 1d3 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A cure blindness/deafness spell or a DC 20 Heal check removes the deafened condition.", 
    "Brained<br>Target suffers maximum damage and is staggered for 1d2 rounds.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A full-round action used to recover can remove the staggered condition.", 
    "Breathless<br>Target suffers maximum damage and becomes fatigued for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest.", 
    "Broken Leg<br>Target suffers maximum damage plus 1d2 Dex and 1d2 Con damage and target’s speeds are reduced by half until healed.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.", 
    "Broken Ribs<br>Target suffers maximum and bonus damage plus cannot heal naturally for 1 day.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic.", 
    "Collapsed Lung<br>Target suffers maximum damage and is staggered for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the staggered condition.", 
    "Concussion<br>Target suffers maximum damage and 1 Int and Wis damage.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.", 
    "Cracked Knee<br>Target suffers maximum damage and 1 Dex damage. Target’s base land speed reduced to 10 feet until healed.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.", 
    "Cracked Rib<br>Target suffers maximum damage, 1 Con damage, and is fatigued.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest and restorative magic.", 
    "Crumpling Blow<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Recover: Target must expend a move-equivalent action to stand from prone. This provokes an attack of opportunity from all threatening opponents.", 
    "Crunch<br>Target suffers maximum damage and is sickened for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the sickened condition.", 
    "Crushed Intestines<br>Target suffers maximum damage and 1 Con damage.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.", 
    "Crushed Trachea<br>Target suffers maximum damage and cannot breathe or speak for 1 minute.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the condition.", 
    "Earth Rumble<br>Target suffers maximum damage and target is knocked prone.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Standing from prone is a move-equivalent action that provokes attacks of opportunity from all threatening opponents.", 
    "Feeble Parry<br>Target suffers maximum damage and is disarmed of 1 held item (attacker’s choice). Object is thrown 1d6 squares in a random direction.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Picking up a dropped object is a move equivalent action that provokes attacks of opportunity from threatening opponents.", 
    "I See Stars<br>Target suffers maximum damage and a 20% miss chance for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check negates the miss chance.", 
    "Knockback<br>Target suffers maximum plus bonus damage and is pushed 1 square directly away.<br>Save: DC 20 Constitution negates; deals additional bonus damage instead.", 
    "Lights Out<br>Target suffers maximum damage and is blinded for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the blinded condition.", 
    "Low Blow<br>Target suffers maximum damage and is sickened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check negates the sickened condition.", 
    "Mace to Da Face<br>Target suffers maximum damage and is dazed for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the dazed condition.", 
    "Momentum<br>You deal maximum damage and gain a +1 circumstance bonus on all your attack rolls until the end of your next turn.", 
    "My Teef!<br>Target suffers maximum damage. Target’s bite attacks are at a -2 penalty, and target suffers a 20% spell failure chance (-4 to casting rolls) for verbal spells.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check repairs teeth, removing bite penalty and removing the spell failure chance.", 
    "Nighty Night<br>Target suffers maximum damage, falls prone, and is unconscious for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check allows the target to regain consciousness.<br>Recover: A move equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.", 
    "Numbing Blow<br>Target suffers maximum damage, 1 Dex damage, and target is disarmed of 1 item (attacker’s choice). Object is dropped in target’s square.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Picking up an item is a move-equivalent action that provokes attacks of opportunity from threatening opponents.", 
    "Off-Balance<br>Target suffers maximum damage and provokes attacks of opportunity from all threatening opponents.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.", 
    "Pimp Slap<br>Target suffers maximum damage and target is dazed for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: By expending a move action to clear your head you may end the dazed condition.", 
    "Rattled<br>Target suffers maximum damage and is confused for 1 round.<br>Save: DC 20 Resolve negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the confused condition.", 
    "Roundhouse<br>Target suffers maximum damage and you gain a free attack against a threatened foe adjacent to the original target at a -4 penalty. If no additional target exists, deal bonus damage again to the original target.", 
    "Ruptured Organ<br>Target suffers maximum damage and 1d4 bleed. This bleed can only be cured with magic.<br>Save: DC 20 Constitution negates bleed; deals bonus damage instead.<br>Heal: A DC 20 Heal check halves the bleed effect.", 
    "Shattered Hand<br>Target suffers maximum damage and 1 Str damage. All attacks and skill checks using that hand suffer a -2 penalty.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes penalties, but rest or restorative magic is needed to heal ability damage.", 
    "Shattered Nose<br>Target suffers maximum damage, 1d2 Cha damage, and 1d2 bleed.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check heals the bleed effect, but rest or restorative magic is needed to heal ability damage.", 
    "Shield Smack<br>Target suffers maximum damage and target’s shield is loosened, causing it to no longer grant its shield bonus for that round.<br>Save: A DC 20 Dexterity save negates; deals bonus damage instead.<br>Special: If target is not using a shield, deals additional bonus damage instead.", 
    "Skull Crack<br>Target suffers maximum damage and 1d2 Int damage.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration magic.", 
    "Solid Blow<br>You deal maximum and bonus damage again.<br>Save: None", 
    "Split Open<br>Target suffers maximum damage and 1d4 bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the bleed effect, while a DC 20 Heal check ends it.", 
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1 round.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.", 
    "Staggering Blow<br>Target suffers maximum damage and bonus damage again as non-lethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.", 
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at your current attack bonus -4.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.", 
    "Terrible Bruise<br>Target suffers maximum damage and 1d6 nonlethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.<br>Save: None.", 
    "Thunder Strike<br>Target suffers maximum damage and is deafened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the deafened condition.", 
    "Tiring Blow<br>Target suffers maximum damage and becomes fatigued.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Short or Long Rest.", 
    "To Your Thinky Bits<br>Target suffers maximum damage and 1 Int damage.<br>Save: Constitution 20 negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to restore ability damage.", 
    "What's Going On?<br>Target suffers maximum plus bonus damage again and 1d2 hours of target’s memory is erased.<br>Save: DC 20 Constitution save negates; deals additional bonus damage instead.<br>Heal: A DC 20 Heal check restores target’s memory (no retry).", 
    "Where Am I?<br>Target suffers maximum damage and is dazed for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead."
    ];

    const randomNumber = getRandomInt(50);
    const title = b_bludgeoning[randomNumber];
    $("#text").prepend("<p class=\"green\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"green\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    alert(title);

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnB_Magic").click(function() {
    // MINOR/MAGIC Table
    const b_magic = ["MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    "MINOR/MAGIC TEXT",
    ];

    const randomNumber = getRandomInt(50);
    const title = b_magic[randomNumber];
    $("#text").prepend("<p class=\"green\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"green\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnM_Slashing").click(function() {
    // MAJOR/SLASHING TABLE
    const m_slashing = ["Across the Eyes<br>Target suffers maximum damage and is blinded for 1d4 minutes.<br>Save: A DC 25 Dexterity save negates; deals bonus damage instead.<br>Heal: A Heal check DC 15 repairs sight somewhat, but the recipient treats all targets as though they have concealment (20%). A DC 25 heal check will fully repair eyesight to normal levels.",
    "Armor Damage<br>Target suffers maximum damage plus bonus damage again and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 25 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Bad Parry<br>Target suffers maximum damage and is disarmed (1 item).<br>Save: A DC 25 Dexterity negates the disarm; deals bonus damage instead.<br>Recover: Target must expend a move-equivalent action to retrieve its item. This provokes attacks of opportunity from all threatening opponents. <br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Badly Hacked Ear<br>Target suffers maximum damage and 1 Cha drain. Target also suffers a -4 penalty on Perception checks until healed.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the Perception check penalties, while a DC 25 removes them. Restorative magic is required to heal ability drain.",
    "Bewildering Display<br>Target suffers maximum damage and a -2 penalty to Defense rolls for 1d4 rounds.<br>Save: A DC 25 Resolve negates; deals additional bonus damage instead.<br>Recover: You may make a Resolve save each round to attempt to negate the penalty.",
    "Broad Swipe<br>Target suffers maximum damage and 1d8 bleed.<br>Save: A DC 25 Constitution halves the bleed effect.<br>Heal: A DC 15 Heal check halves the bleed effect; a DC 25 Heal check ends it",
    "Shattered Jaw<br>Target suffers maximum damage and 1d2 Con damage. Target has a 30% chance of spell failure (-6 to spell casting rolls) with verbal components until healed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or curative magic.",
    "Brow Cut<br>Target suffers maximum damage and 2d4 bleed. Target blinded while bleeding.<br>Save: A DC 25 Dexterity negates blindness and halves bleed effect; deals bonus damage instead.<br>Heal: A DC 15 Heal check removes either blindness or bleed; a DC 25 Heal check removes both.",
    "Brow to Chin<br>Target suffers maximum damage and 1d2 Con and Cha damage. Target also suffers a -2 Penalty to Perception checks and ranged attacks until healed.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the penalties to Perception and ranged attacks.",
    "Cracked Spine<br>Target suffers maximum damage plus bonus damage again and 1d6 Dex damage.<br>Save: A DC 25 Constitution halves Dex damage.<br>Heal: Rest or restorative magic.",
    "Cut Straps<br>Target suffers maximum damage, its movement is reduced by 10’, and the target’s armor check penalty is doubled until repaired.<br>Save: A DC 25 Dexterity avoids movement effect and armor check penalties; deals bonus damage instead.<br>Repair: A Craft (Armor) DC 25 repairs armor and removes penalties.",
    "Delayed Wound<br>Target suffers maximum damage as bleed damage.<br>Save: A DC 25 Constitution halves the bleed effect.<br>Heal: A DC 15 Heal check halves bleed effect; a DC 25 Heal check removes bleed effect.",
    "Disembowel<br>Target suffers maximum damage plus bonus damage again, 1d3 Con damage, and 1d6 bleed.<br>Save: A DC 25 Constitution halves the Con damage and bleed (minimum 1).<br>Heal: A DC 15 Heal check halves the bleed effect; a DC 25 Heal check negates the bleed effect. Rest or restorative magic is needed to heal ability damage.",
    "Fingertipped<br>Target suffers maximum damage and 1d2 Dex damage. Target cannot use hand until healed.<br>Save: A DC 25 Dexterity save negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check allows usage of hand, albeit with a -4 penalty to all rolls. A DC 25 Heal check repairs the hand’s use. Rest or restorative magic is needed to heal ability damage.<br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
    "Flat Blade Thwack<br>Target suffers maximum damage plus triple bonus damage again and is staggered for 1 round, but all damage is non-lethal.<br>Save: A DC 25 Constitution save negates stunned condition and halves additional bonus damage.<br>Heal: Rest or curative magic.",
    "Flay<br>Target suffers maximum damage plus 1d6 Str damage.<br>Save: A DC 25 Constitution negates Str damage; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Gory Wound<br>Target suffers maximum damage and is sickened for 1d6 rounds.<br>Save: A DC 25 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the sickened condition.",
    "Gut Slash<br>Target suffers maximum damage plus bonus damage again and 1d6 bleed. Target cannot swallow whole until healed.<br>Save: A DC 25 Constitution halves the bleed effect (minimum 1).<br>Heal: A DC 15 Heal check halves the bleed effect; a DC 25 Heal check ends it",
    "Hack and Slash<br>Target suffers maximum damage and you gain a +1 crit range and +4 bonus to Severity Checks against that opponent for the next three rounds.",
    "Hacked Digits<br>Target suffers maximum damage, and takes 1d2 Con and Str damage.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or Restoration spell.",
    "Severed Hand<br>Target suffers maximum damage, loses hand and takes 1d3 Con and Str drain.<br>Save: A DC 25 Constitution negates hand loss and ability drain becomes ability damage.<br>Heal: Regenerate spell.<br>1-5 Left Hand<br>6-10 Right Hand",
    "Hamstring<br>Target suffers maximum damage, 1d3 Dex damage and is knocked prone.<br>Save: A DC 25 Dexterity save negates; deals bonus damage instead.<br>Recover: Target must spend a move-equivalent action to stand up. This provokes an attack of opportunity.",
    "Humiliating Cut<br>Target suffers maximum damage plus bonus damage again and suffers disadvantage to attack anyone else but you from humiliation until the end of the encounter.<br>Save: A DC 25 Resolve negates; deals bonus damage instead.<br>Recover: Target may continue to make Resolve saves each round until successful, ending the humiliating effect.",
    "Knockback<br>Target suffers maximum damage plus bonus damage again and is pushed 1d6 squares directly away.<br>Save: A DC 25 Dexterity negates being pushed; deals additional bonus damage instead.",
    "Lean Into the Blow<br>Target suffers maximum damage plus triple bonus damage again but you drop your weapon.<br>Save: A DC 20 Dexterity (by attacker) negates dropping your weapon.<br>Recover: To pick up a dropped weapon, you must move to its location and expend a move-equivalent action. This provokes attacks of opportunity from all threatening opponents.",
    "Leg Swipe<br>Target suffers maximum damage plus bonus damage again and target is knocked prone.<br>Save: A DC 25 Dexterity negates being knocked prone; deals additional bonus damage instead.<br>Recover: A prone target must expend a move equivalent action to stand up. This provokes attacks of opportunity from all threatening opponents.",
    "Lip Cut<br>Target suffers maximum damage and 1d4 bleed. Target also suffers a 20% spell failure chance (-4 to spell casting checks) for verbal spells until healed.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the bleed effect; a DC 25 Heal check repairs the cut lip and removes the spell failure chance.",
    "Long Bloody Gash<br>Target suffers maximum damage and 2d4+1 bleed.<br>Save: DC 25 Constitution halves bleed effect.<br>Heal: A successful Heal check DC 15 reduces the bleeding by half; a DC 25 Heal check removes the bleed effect.",
    "Momentum<br>You deal maximum damage and gain a +3 circumstance bonus on all your attack rolls until the end of your next turn.",
    "Muscle Wound<br>Target suffers maximum damage plus bonus damage again and 1d2 Str damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Neck slash<br>Target suffers maximum damage plus bonus damage and 2d4 bleed.<br>Save: A DC 25 Constitution negates bleed. <br>Heal: A DC 15 Heal check halves bleed effect; a DC 25 Heal check removes bleed effect.",
    "Nerve Slice<br>Target suffers maximum damage, 1d6 Dex damage, and becomes staggered for 1 round.<br>Save: A DC 25 Constitution negates Dex damage; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the staggered condition.",
    "Overhand Chop<br>Target suffers maximum damage plus bonus damage again and 1d4 bleed.<br>Save: A DC 25 Constitution negates bleed; deals additional bonus damage instead.<br>Heal: A DC 25 Heal check ends the bleed effect.",
    "Pain and Simple<br>Target suffers maximum damage plus bonus damage again and 2d6 nonlethal damage.<br>Save: A DC 25 Constitution halves the additional nonlethal damage.<br>Heal: Nonlethal damage can be cured by rest or curative magic.",
    "Paper Cut<br>Target suffers maximum damage and suffers a -4 penalty on attack rolls, skill checks and ability checks for 1d4 rounds.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the penalties, while a DC 25 Heal check removes them.",
    "Parrying Strike<br>You deal maximum damage and gain a +3 dodge bonus to Defense rolls and a +3 Circumstance bonus to Parry attempts against that opponent until the end of your next turn.",
    "Rupture Abdominal Cavity<br>Target suffers maximum damage and 1d4 Con bleed.<br>Save: A DC 25 Constitution negates the bleed effect; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the Con bleed, while a DC 25 Heal check ends it.",
    "Sapping Slash<br>Target suffers maximum damage plus bonus damage again and is fatigued.<br>Save: A DC 25 Constitution save negates; deals additional bonus damage instead.<br>Heal: Rest",
    "Severed Tendon<br>Target suffers maximum damage and 1d4 Dex damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Spun Around<br>Target suffers maximum damage and 1d4 Dex damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Stand Aside<br>Target suffers maximum damage plus double bonus damage again and is pushed 1 square in any direction.<br>Save: A DC 25 Strength negates push; deals bonus damage instead.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at a -2 penalty.",
    "Swing Through<br>Target suffers maximum damage and you may make one additional free attack against another adjacent opponent you threaten at a -2 penalty.<br>Special: If no adjacent opponents, deal additional bonus damage instead.",
    "Tangled<br>Target suffers maximum damage plus bonus damage again and you may attempt a free grapple attack against the target with a +2 circumstance bonus. The free grapple does not cause attacks of opportunity.",
    "Terrible Gash<br>Target suffers maximum damage plus bonus damage again and 1 Con and Cha drain.<br>Save: A DC 25 Dexterity negates ability drain; deals bonus damage instead.<br>Heal: Restoration spell.",
    "Throat Slash<br>Target suffers maximum damage plus 2d4 bleed. Target cannot talk or breathe and is considered drowning while bleeding.<br>Save: A DC 25 Constitution halves bleed.<br>Heal: A DC 15 Heal check halves bleed, while a DC 25 Heal check ends bleed effect.",
    "Ugly Wound<br>Target suffers maximum damage and 1d3+1 Cha damage.<br>Save: A DC 25 Constitution negates ability damage; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "We’ve Got A Bleeder!<br>Target suffers maximum damage and 2d6 bleed.<br>Save: A DC 25 Constitution halves bleed effect each round.<br>Heal: A DC 15 Heal check halves the bleed effect, while a DC 25 Heal check ends it.",
    "Weapon Strike<br>Target suffers maximum damage plus bonus damage again and attack also deals damage to target’s weapon (hardness applies). If the target is wielding multiple weapons, the attacker may choose which weapon suffers damage.<br>Save: DC 25 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wield a weapon, deal additional bonus damage again to target instead.",
    "Wide Open<br>Target suffers maximum damage and provokes attacks of opportunity from all threatening opponents.<br>Save: DC 25 Dexterity negates; deals bonus damage instead.<br>Special: If no opponents threaten, deal additional bonus damage instead."    
    ];

    const randomNumber = getRandomInt(50);
    const title = m_slashing[randomNumber];
    $("#text").prepend("<p class=\"yellow\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = m_slashing[i];
    //   $("#text").prepend("<p class=\"yellow\">" + (i + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnM_Piercing").click(function() {
    // MAJOR/PIERCING Table
    const m_piercing = ["Achilles’ Heel<br>Target suffers maximum damage and 1d3 Dex damage. Target’s movement speeds are reduced by half until healed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the movement penalty.",
    "Bicep Wound<br>Target suffers maximum plus bonus damage again and 1d3 Str damage.<br>Save: A DC 25 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bleeder<br>Target suffers maximum damage and 2d6 bleed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the bleed condition.",
    "Blown Back<br>Target suffers maximum damage and is knocked prone.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Recover: Standing from prone is a move-equivalent action that provokes attacks of opportunity from threatening foes.",
    "Calf Hole<br>Target suffers maximum damage and 1d4+1 Dex damage.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Cheek Pierced<br>Target suffers maximum damage and 1d6 bleed. Target also suffers an additional 40% spell failure chance (-8 to casting rolls) for verbal spells until healed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the bleed effect and removes the spell failure chance.",
    "Chipped Bone<br>Target suffers maximum damage and 1d4 Dex+1 damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Clean Through<br>Target suffers maximum damage, 1d6 bleed, and 1 Con damage.<br>Save: A DC 25 Constitution negates Con damage and halves bleed effect; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the bleed effect. Rest or restoration magic is needed to heal ability damage.",
    "Deep Hurting<br>Target suffers maximum damage and is fatigued.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or a DC 25 Heal check ends the fatigued condition.",
    "Deep Wound<br>Target suffers maximum damage plus bonus damage again and is nauseated for 1 round.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the nauseated condition.",
    "Elbow Pierced<br>Target suffers maximum damage and drops whatever is being held in hand (1 item).<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Recover: Retrieving a dropped item is a move equivalent action that provokes attacks of opportunity from threatening foes.<br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Eye Patch For You<br>Target suffers maximum plus bonus damage again and 1d2 Con drain. Target also suffers a -4 penalty on Perception checks and ranged attacks until healed.<br>Save: A DC 25 Dexterity negates; deals additional bonus damage instead.<br>Heal: A DC 25 Heal check removes the Perception and attack penalties.",
    "Forearm Piercing<br>Target suffers maximum damage and is disarmed (1 item).<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Recover: Retrieving a dropped item is a move equivalent action that provokes attacks of opportunity from threatening foes.<br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Guarded Strike<br>You deal maximum damage and gain a +3 bonus to your Defense rolls until the end of your next turn.",
    "Grazing Hit<br>Target suffers maximum damage and is stunned for 1 round.<br>Save: A DC 25 Constitution negates; deals bonus damage.<br>Heal: A DC 25 Heal check ends the stunned condition.",
    "Hand Wound<br>Target suffers maximum damage and 1d2 Dex damage. Target suffers a -4 penalty on all attack rolls and skill checks using that hand until healed.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check is needed to end the wound penalty. Rest or restorative magic is needed to heal ability damage.",
    "Heart Shot<br>Target suffers maximum damage plus bonus damage again and 1 Con bleed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the Con bleed. Rest or restorative magic is needed to heal ability damage.",
    "In A Row<br>You deal maximum damage plus bonus damage again and deal bonus damage to an adjacent opponent you also threaten.<br>Save: A DC 25 Dexterity negates (secondary target only); deals additional damage instead.<br>Special: If no adjacent opponents are available, deal the additional bonus damage to the original target instead.",
    "Kidney Piercing<br>Target suffers maximum damage plus bonus damage again and is sickened for 2d4 rounds.<br>Save: A DC 25 Constitution negates; deals damage instead.<br>Heal: A DC 25 Heal check ends the sickened condition.",
    "Left Reeling<br>Target suffers maximum damage and a -2 penalty to Defense rolls for 1d4 rounds.<br>Save: A DC 25 Resolve negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the Defense penalty.",
    "Leg Wound<br>Target suffers maximum damage plus bonus damage again and target’s land speed is halved for 1d6 rounds.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the speed penalty.",
    "Lodged In The Bone<br>Target suffers maximum damage and 1d6 bleed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Requires a DC 20 Strength check (causing 1d6 damage) or DC 25 Heal check to remove.",
    "Momentum<br>You deal maximum damage and gain a +3 circumstance bonus on all your attack rolls until the end of your next turn.",
    "Muscle Severed<br>Target suffers maximum damage, 1d3 Dex damage, and 1d3 Str damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Nailed In Place<br>Target suffers maximum damage plus bonus damage again and cannot move.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Recover: Target must succeed at a DC 15 Strength check to free themselves.<br>Special: If not dealt by a ranged attack, the attacker’s melee weapon is stuck in the target’s square. The attacker may also attempt to remove the weapon as a standard action.",
    "Nerve Cluster<br>Target suffers maximum damage and is stunned for 1d4 rounds.<br>Save: A DC 25 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the stunned condition.<br>Special: The player may also make a DC 20 Constitution save each round to be staggered instead for that round.",
    "Nicked An Artery<br>Target suffers maximum damage and 2d4 bleed.<br>Save: A DC 25 Constitution halves the bleed effect.<br>Heal: A DC 25 Heal check ends the bleed effect.",
    "Organ Scramble<br>Target suffers maximum damage and 1d4 Con damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Overreaction<br>Target suffers maximum damage and provokes attacks of opportunity from all threatening opponents.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.",
    "Painful Poke<br>Target suffers maximum damage plus bonus damage again and is staggered for 1 round.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.",
    "Penetrating Wound<br>Target suffers maximum damage plus bonus damage again and this attack ignores all DR.<br>Save: A DC 25 Dexterity negates; deals additional bonus damage instead.<br>Special: If target does not have DR, deal additional bonus damage instead.",
    "Perfect Strike<br>Target suffers maximum damage plus double bonus damage again!<br>Save: None.",
    "Pierced<br>Target suffers maximum damage plus bonus damage again and is dazed for 2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the dazed condition.",
    "Pierced Appendix<br>Target suffers maximum damage plus bonus damage again and is both sickened and poisoned (treat as greenblood-oil).<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the sickened condition. Target must succeed at a Constitution save to overcome the poison.",
    "Pincushion<br>Target suffers maximum damage plus bonus damage again and 1d6 bleed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check end the bleed effect.",
    "Pinhole<br>Target suffers maximum damage and 1d4 bleed. Target takes 2 additional bleed (cumulative) each round until healed.<br>Save: DC 25 Constitution negates bleed effect (save each round).<br>Heal: Curative magic or a Heal check DC 25 ends the bleed effect.",
    "Pinned Arm<br>Target suffers maximum damage plus bonus damage again and one arm becomes immobile.<br>Save: A DC 25 Dexterity negates; deals additional bonus damage instead.<br>Heal: A DC 25 Heal check or DC 20 Strength check removes the weapon or projectile, allowing mobility.<br>Special: If not dealt by a ranged attack, the attacker’s melee weapon is stuck in the target’s arm. The attacker may also attempt to remove the weapon as a standard action.",
    "Punctured Lung<br>Target suffers maximum damage plus bonus damage again and begins to drown.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the drowning condition.",
    "Ragged Wound<br>Target suffers maximum damage and 1d6 bleed.<br>Save: DC 25 Constitution halves bleed effect (each round).<br>Heal: A DC 25 Heal check ends the bleed effect.",
    "Right In The Ear<br>Target suffers maximum damage plus bonus damage again, 1 Int damage, and 1d2 bleed.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the bleed effect. Rest or restorative magic is needed to heal ability damage.",
    "Shoulder Wound<br>Target suffers maximum damage plus bonus damage again, 1d4 Str damage, and 1d4 Dex damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Spinal Tap<br>Target suffers maximum damage and a -4 penalty on attack rolls, skill checks, and ability checks for 1d4 rounds.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the attack, skill, and ability penalties.",
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1d2 rounds.<br>Save: A DC 25 Dexterity negates; deals additional bonus damage instead.<br>Recover: A DC 25 Acrobatics check ends the flatfooted condition.",
    "Stinger<br>Target suffers maximum damage plus bonus damage again and is sickened for 1d4 rounds.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the sickened condition.",
    "Sucking Chest Wound<br>Target suffers maximum damage and is exhausted.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check reduces the exhausted condition to being fatigued.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at a -2 penalty.",
    "Tenacious Wound<br>Target suffers maximum damage and 1d2 Con damage. Target does not heal this ability damage naturally.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Target must receive restorative magic or pass a DC 25 Constitution save each day to recover a point of Con after resting.",
    "Tongue Piercing<br>Target suffers maximum damage and 1 Con damage. Target gains 30% spell failure chance (-6 to spell casting rolls) for verbal spells until healed.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the spell failure chance. Rest or restorative magic is needed to heal ability damage.",
    "Ventilated<br>Target suffers maximum damage and 2d4 points of bleed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic or a DC 25 Heal check ends the bleed effect.",
    "Vulnerable Spot<br>Target suffers maximum damage plus bonus damage again and takes 1d3 random ability damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.<br><br>D6 - Ability Type Damage<br>1 - Str<br>2 - Dex<br>3 - Con<br>4 - Int<br>5 - Wis<br>6 - Cha"    
    ];

    const randomNumber = getRandomInt(50);
    const title = m_piercing[randomNumber];
    $("#text").prepend("<p class=\"yellow\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = m_piercing[i];
    //   $("#text").prepend("<p class=\"yellow\">" + (i + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnM_Bludgeoning").click(function() {
    // MAJOR/BLUDGEONING Table
    const m_bludgeoning = ["2 For 1<br>Target suffers maximum damage and you deal normal damage to one adjacent target.<br>Save: Adjacent target may make a DC 25 Dexterity save to negate.<br>Special: If there are no adjacent targets, deal bonus damage to original target.",
    "And Stay Down!<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Recover: A move-equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Armor Dent<br>Target suffers maximum damage plus bonus damage again and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 25 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Back Breaker<br>Target suffers maximum plus bonus damage and 1d6 Dex damage.<br>Save: DC 25 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bell Ringer<br>Target suffers maximum damage, 1d2 Int damage and is sickened for 1d3 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the sickened condition. Rest or restoration magic is needed to heal ability damage.",
    "Bone Masher<br>Target suffers maximum damage and suffers either 1d3 Dex damage and half speed (leg) or 1d3 Str damage (arm) and limb is useless until healed.<br>Save: DC 25 Constitution negates limb damage; deals bonus damage instead.<br>Heal: A DC 25 Heal check allows limb use and removes movement penalties. Rest or restoration magic is needed to heal ability damage.<br><br>D20 Bone Masher Injury:<br>1-5 Left Leg<br>6-10 Left Arm<br>11-15 Right Leg<br>16-20 Right Arm",
    "Box the Ears<br>Target suffers maximum damage and is deafened for 1d4 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A cure blindness/deafness spell or a DC 25 Heal check removes the deafened condition.",
    "Brained<br>Target suffers maximum damage and is staggered for 1d3 rounds.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A full-round action used to recover can remove the staggered condition.",
    "Breathless<br>Target suffers maximum damage and is fatigued for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest.",
    "Broken Leg<br>Target suffers maximum damage plus bonus damage again  plus1d2 Dex and 1d2 Con damage and target’s speeds are reduced by half until healed.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Broken Ribs<br>Target suffers maximum and bonus damage plus cannot heal naturally for 1d2 days.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic.",
    "Collapsed Lung<br>Target suffers maximum damage and is staggered for 1d2 minutes.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the staggered condition.",
    "Concussion<br>Target suffers maximum damage plus bonus damage again and 1 Int and Wis damage.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Cracked Knee<br>Target suffers maximum damage and 1d2 Dex damage. Target’s base land speed reduced to 10 feet until healed.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Cracked Rib<br>Target suffers maximum damage, 1d2 Con damage, and is fatigued.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest and restorative magic.",
    "Crumpling Blow<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Recover: Target must expend a move-equivalent action to stand from prone. This provokes an attack of opportunity from all threatening opponents.",
    "Crunch<br>Target suffers maximum damage and is sickened for 1d4 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the sickened condition.",
    "Crushed Intestines<br>Target suffers maximum damage and 1 Con bleed.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: a DC 25 Heal check stops the Con Bleed, while Rest or restorative magic is needed to heal ability damage.",
    "Crushed Trachea<br>Target suffers maximum damage and cannot breathe or speak for 1d3 minutes.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the condition.",
    "Earth Rumble<br>Target suffers maximum damage and target plus all adjacent opponents are knocked prone.<br>Save: DC 25 Dexterity negates; deals bonus damage instead.<br>Recover: Standing from prone is a move-equivalent action that provokes attacks of opportunity from all threatening opponents.",
    "Feeble Parry<br>Target suffers maximum damage and is disarmed of 1 held item (attacker’s choice). Object is thrown 1d6 squares in a random direction.<br>Save: DC 25 Dexterity negates; deals bonus damage instead.<br>Recover: Picking up a dropped object is a move equivalent action that provokes attacks of opportunity from threatening opponents.",
    "I See Stars<br>Target suffers maximum damage and a 25% miss chance for 1d3 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check negates the miss chance.",
    "Knockback<br>Target suffers maximum plus bonus damage again and is pushed 1d3 squares directly away.<br>Save: DC 25 Constitution negates; deals additional bonus damage instead.",
    "Lights Out<br>Target suffers maximum damage and is blinded for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the blinded condition.",
    "Low Blow<br>Target suffers maximum damage plus bonus damage and is sickened for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check negates the sickened condition.",
    "Mace to Da Face<br>Target suffers maximum damage and is dazed and blinded for 1 round.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the dazed condition.",
    "Momentum<br>You deal maximum damage and gain a +2 circumstance bonus on all your attack rolls until the end of your next turn.",
    "My Teef!<br>Target suffers maximum damage and 1 Con damage. Target’s bite attacks are at a -2 penalty, and target suffers a 25% spell failure chance (-5 to casting rolls) for verbal spells.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check repairs teeth, removing bite penalty and removing the spell failure chance.",
    "Nighty Night<br>Target suffers maximum damage, falls prone, and is unconscious for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check allows the target to regain consciousness.<br>Recover: A move equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Numbing Blow<br>Target suffers maximum damage, 1d2 Dex damage, and target is disarmed of 1 item (attacker’s choice). Object is dropped in target’s square.<br>Save: DC 25 Dexterity negates; deals bonus damage instead.<br>Heal: Rest and restorative magic can heal the ability damage.<br>Recover: Picking up an item is a move-equivalent action that provokes attacks of opportunity from threatening opponents.",
    "Off Balance<br>Target suffers maximum damage, becomes flat-footed until the beginning of their next turn, and provokes attacks of opportunity from all threatening opponents.<br>Save: DC 25 Dexterity negates; deals bonus damage instead.",
    "Pimp Slap<br>Target suffers maximum damage and target is dazed for 1d3 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check negates the dazed condition.",
    "Rattled<br>Target suffers maximum damage and is confused for 1d2 rounds.<br>Save: DC 25 Resolve negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check ends the confused condition.",
    "Roundhouse<br>Target suffers maximum damage and you gain a free attack against a threatened foe adjacent to the original target at a -2 penalty. If no additional target exists, deal bonus damage again to the original target.",
    "Ruptured Organ<br>Target suffers maximum damage and 1d6 bleed. This bleed can only be cured with magic.<br>Save: DC 25 Constitution negates bleed; deals bonus damage instead.<br>Heal: A DC 25 Heal check halves the bleed effect.",
    "Shattered Hand<br>Target suffers maximum damage and 1 Con and Str damage. All attacks and skill checks using that hand suffer a -2 penalty.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes penalties, but rest or restorative magic is needed to heal ability damage.",
    "Shattered Nose<br>Target suffers maximum damage, 1d4 Cha damage, and 1d4 bleed.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check heals the bleed effect, but rest or restorative magic is needed to heal ability damage.",
    "Shield Smack<br>Target suffers maximum damage plus bonus damage again and target’s shield is loosened, causing it to no longer grant its shield bonus for that round, or off-hand weapon is disarmed landing in the targets square.<br>Save: A DC 25 Dexterity save negates; deals bonus damage instead.<br>Special: If target is not using a shield, deals additional bonus damage instead.",
    "Skull Crack<br>Target suffers maximum damage and 1d4 Int damage.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Solid Blow<br>You deal maximum and double bonus damage again.<br>Save: None",
    "Split Open<br>Target suffers maximum damage and 2d4 bleed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the bleed effect, while a DC 25 Heal check ends it.",
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1d2 rounds.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.",
    "Staggering Blow<br>Target suffers maximum damage plus bonus damage again. And suffers an equal amount of nonlethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at your current attack bonus -2.<br>Save: DC 25 Dexterity negates; deals bonus damage instead.",
    "Terrible Bruise<br>Target suffers maximum damage and 2d6 nonlethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.<br>Save: None.",
    "Thunder Strike<br>Target suffers maximum damage and is deafened for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the deafened condition.",
    "Tiring Blow<br>Target suffers maximum damage plus bonus damage again and becomes fatigued.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Short or Long Rest.",
    "To Your Thinky Bits<br>Target suffers maximum damage plus bonus damage again and 1 Int damage.<br>Save: Constitution 25 negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to restore ability damage.",
    "What’s Going On?<br>Target suffers maximum plus bonus damage again and 1d4 hours of target’s memory is erased.<br>Save: DC 25 Constitution save negates; deals additional bonus damage instead.<br>Heal: A DC 25 Heal check restores target’s memory (no retry).",
    "Where Am I?<br>Target suffers maximum damage plus bonus damage again and is stunned for 1 round.<br>Save: DC 25 Constitution negates; deals bonus damage instead.",
    ];

    const randomNumber = getRandomInt(50);
    const title = m_bludgeoning[randomNumber];
    $("#text").prepend("<p class=\"yellow\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = m_bludgeoning[i];
    //   $("#text").prepend("<p class=\"yellow\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnM_Magic").click(function() {
    // MAJOR/MAGIC Table
    const m_magic = ["MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    "MAJOR/MAGIC TEXT",
    ];

    const randomNumber = getRandomInt(50);
    const title = m_magic[randomNumber];
    $("#text").prepend("<p class=\"yellow\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"yellow\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnS_Slashing").click(function() {
    // SEVERE/SLASHING Table
    const s_slashing = ["Across the Eyes<br>Target suffers maximum damage and is blinded permanently.<br>Save: A DC 30 Dexterity save negates; deals bonus damage instead.<br>Heal: A Heal check DC 20 repairs sight somewhat, but the recipient treats all targets as though they have concealment (20%). A DC 30 heal check will fully repair eyesight to normal levels.",
    "Armor Damage<br>Target suffers maximum damage plus double bonus damage again and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 30 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Bad Parry<br>Target suffers maximum damage plus bonus damage again and is disarmed (1 item).<br>Save: A DC 25 Dexterity negates the disarm; deals bonus damage instead.<br>Recover: Target must expend a move-equivalent action to retrieve its item. This provokes attacks of opportunity from all threatening opponents. <br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Severed Ear<br>Target suffers maximum damage, loses ear, and 1d2 Cha drain. Target also suffers a -4 penalty on Perception checks until healed.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check halves the Perception check penalties, while a Regeneration spell is required to remove them and heal the ability drain. ",
    "Bewildering Display<br>Target suffers maximum damage plus bonus damage again and a -2 penalty to Defense rolls for 1d6 rounds.<br>Save: A DC 30 Resolve negates; deals additional bonus damage instead.<br>Recover: You may make a Resolve save each round to attempt to negate the penalty.",
    "Broad Swipe<br>Target suffers maximum damage plus bonus damage again and 1d8 bleed.<br>Save: A DC 30 Constitution halves the bleed effect.<br>Heal: A DC 20 Heal check halves the bleed effect; while DC 30 Heal check ends it.",
    "Severed Jaw<br>Target suffers maximum damage and 1d2 Con drain. Target cannot speak or bite until healed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Regeneration spell.",
    "Brow Cut<br>Target suffers maximum damage plus bonus damage again and 2d4 bleed. Target blinded while bleeding.<br>Save: A DC 30 Dexterity negates blindness and halves bleed effect; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes either blindness or bleed; a DC 30 Heal check removes both.",
    "Brow to Chin<br>Target suffers maximum damage plus bonus damage again and 1d2 Con and Cha damage. Target also suffers a -4 Penalty to Perception checks and ranged attacks until healed.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check halves the penalties to Perception and ranged attacks while a DC30 Heal check removes them.",
    "Severed Spine<br>Target suffers maximum damage plus bonus damage again and 2d6 Dex drain.<br>Save: A DC 30 Constitution halves the ability drain and it becomes damage instead of drain. Ability damage may be healed by rest or restorative magic.<br>Heal: Regeneration spell.",
    "Cut Straps<br>Target suffers maximum damage plus bonus damage again, its movement is reduced by 10’, and the target’s armor check penalty is doubled until repaired.<br>Save: A DC 30 Dexterity avoids movement effect and armor check penalties; deals bonus damage instead.<br>Repair: A Craft (Armor) DC 30 repairs armor and removes penalties.",
    "Delayed Wound<br>Target suffers maximum damage plus bonus damage again as bleed damage.<br>Save: A DC 30 Constitution halves the bleed effect.<br>Heal: A DC 20 Heal check halves bleed effect; a DC 30 Heal check removes bleed effect.",
    "Disembowel<br>Target suffers maximum damage plus bonus damage again, 1d4 Con damage, and 1d8 bleed.<br>Save: A DC 30 Constitution halves the Con damage and bleed (minimum 1).<br>Heal: A DC 20 Heal check halves the bleed effect; a DC 30 Heal check negates the bleed effect. Rest or restorative magic is needed to heal ability damage.",
    "Severed Fingers<br>Target suffers maximum damage plus bonus damage again, loses 1d3 fingers, and 1d2 Dex drain. Target cannot use hand until healed.<br>Save: A DC 30 Dexterity save negates; deals bonus damage instead.<br>Heal: Regenerate spell<br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
    "Flat Blade Thwack<br>Target suffers maximum damage plus triple bonus damage again and is stunned for 1 round, but all damage is non-lethal.<br>Save: A DC 30 Constitution save negates stunned condition and halves additional bonus damage.<br>Heal: Rest or curative magic.",
    "Flay<br>Target suffers maximum damage plus bonus damage again and 1d6 Str damage.<br>Save: A DC 30 Constitution negates Str damage; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Gory Wound<br>Target suffers maximum damage plus bonus damage again and is sickened for 1d6 rounds.<br>Save: A DC 30 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the sickened condition.",
    "Gut Slash<br>Target suffers maximum damage plus bonus damage again and 1d8 bleed. Target cannot swallow whole until healed.<br>Save: A DC 30 Constitution halves the bleed effect (minimum 1).<br>Heal: A DC 20 Heal check halves the bleed effect; a DC 30 Heal check ends it.",
    "Hack and Slash<br>Target suffers maximum damage plus bonus damage again and you gain a +1 crit range and +4 bonus to Severity Checks against that opponent for the next three rounds.",
    "Hacked Digits<br>Target suffers maximum damage plus bonus damage again, and takes 1d3 Con and Str damage.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or Restoration spell.",
    "Severed Hand<br>Target suffers maximum damage plus bonus damage again, loses hand and takes 1d3 Con and Str drain.<br>Save: A DC 30 Constitution negates hand loss and ability drain becomes ability damage.<br>Heal: Regenerate spell.<br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
    "Hamstring<br>Target suffers maximum damage plus bonus damage again, 1d4 Dex damage and is knocked prone.<br>Save: A DC 30 Dexterity save negates; deals bonus damage instead.<br>Recover: Target must spend a move-equivalent action to stand up. This provokes an attack of opportunity.",
    "Humiliating Cut<br>Target suffers maximum damage plus bonus damage again, 1d2 Cha damage, and suffers disadvantage to attack anyone else but you from humiliation until the end of the encounter.<br>Save: A DC 30 Resolve negates; deals bonus damage instead.<br>Recover: Target may continue to make Resolve saves each round until successful, ending the humiliating effect.",
    "Knockback<br>Target suffers maximum damage plus bonus damage again and is pushed 1d6 squares directly away, and is knocked prone.<br>Save: A DC 30 Dexterity negates being knocked prone and halves the distance pushed; deals additional bonus damage instead.<br>Recover: A prone target must expend a move equivalent action to stand up. This provokes attacks of opportunity from all threatening opponents.",
    "Lean Into the Blow<br>Target suffers maximum damage plus triple bonus damage again but you drop your weapon.<br>Save: A DC 15 Dexterity (by attacker) negates dropping your weapon.<br>Recover: To pick up a dropped weapon, you must move to its location and expend a move-equivalent action. This provokes attacks of opportunity from all threatening opponents.",
    "Leg Swipe<br>Target suffers maximum damage plus bonus damage again and target is knocked prone.<br>Save: A DC 30 Dexterity negates being knocked prone; deals additional bonus damage instead.<br>Recover: A prone target must expend a move equivalent action to stand up. This provokes attacks of opportunity from all threatening opponents.",
    "Lip Cut<br>Target suffers maximum damage and 1d6 bleed. Target also suffers a 30% spell failure chance (-6 to spell casting checks) for verbal spells until healed.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the bleed effect; a DC 30 Heal check repairs the cut lip and removes the spell failure chance.",
    "Long Bloody Gash<br>Target suffers maximum damage and 3d4+2 bleed.<br>Save: DC 30 Constitution halves bleed effect.<br>Heal: A successful Heal check DC 20 reduces the bleeding by half; a DC 30 Heal check removes the bleed effect.",
    "Momentum<br>You deal maximum damage plus bonus damage again and gain a +3 circumstance bonus on all your attack rolls until the end of your next turn.",
    "Muscle Wound<br>Target suffers maximum damage plus bonus damage again and 1d4 Str damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Decapitation<br>Targets head is severed and immediately dies.<br>Save: A DC 30 Constitution negates death; deals bonus damage and 2d6 bleed instead.<br>Heal: A DC 20 Heal check halves bleed effect; a DC 30 Heal check removes bleed effect.",
    "Nerve Slice<br>Target suffers maximum damage plus bonus damage again, 1d6 Dex damage, and becomes staggered for 1 round.<br>Save: A DC 30 Constitution negates Dex damage; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the staggered condition.",
    "Overhand Chop<br>Target suffers maximum damage plus double bonus damage again and 1d6 bleed.<br>Save: A DC 30 Constitution negates bleed; deals additional bonus damage instead.<br>Heal: A DC 30 Heal check ends the bleed effect.",
    "Pain and Simple<br>Target suffers maximum damage plus bonus damage again and 3d6 nonlethal damage.<br>Save: A DC 30 Constitution halves the additional nonlethal damage.<br>Heal: Nonlethal damage can be cured by rest or curative magic.",
    "Paper Cut<br>Target suffers maximum damage plus bonus damage again and suffers a -4 penalty on attack rolls, skill checks and ability checks for 1d6 rounds.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check halves the penalties, while a DC 30 Heal check removes them.",
    "Parrying Strike<br>You deal maximum damage plus bonus damage again and gain a +3 dodge bonus to Defense rolls and a +3 Circumstance bonus to Parry attempts against that opponent until the end of your next turn.",
    "Rupture Abdominal Cavity<br>Target suffers maximum damage plus bonus damage again and 1d6 Con bleed.<br>Save: A DC 30 Constitution negates the bleed effect; deals bonus damage instead.<br>Heal: A DC 20 Heal check halves the Con bleed, while a DC 30 Heal check ends it.",
    "Sapping Slash<br>Target suffers maximum damage plus bonus damage again and is exhausted.<br>Save: A DC 30 Constitution save negates exhausted and becomes fatigued instead; deals additional bonus damage instead.<br>Heal: Rest",
    "Severed Tendon<br>Target suffers maximum damage plus bonus damage again and 1d6 Dex damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "Spun Around<br>Target suffers maximum damage plus bonus damage again and is flat-footed for 2 rounds.<br>Save: A DC 30 Dexterity negates; deals additional bonus damage instead.<br>Recover: A DC 30 Acrobatics check ends the flatfooted condition.",
    "Stand Aside<br>Target suffers maximum damage plus double bonus damage again and is pushed 1 square in any direction and is knocked prone.<br>Save: A DC 30 Strength negates knocked prone; deals bonus damage instead.",
    "Surprise Opening<br>Target suffers maximum damage plus bonus damage again and you may make one additional free attack against the target at no penalty.",
    "Swing Through<br>Target suffers maximum damage plus bonus damage again and you may make one additional free attack against another adjacent opponent you threaten at no penalty.<br>Special: If no adjacent opponents, deal additional bonus damage instead.",
    "Tangled<br>Target suffers maximum damage plus bonus damage again and you may attempt a free grapple attack against the target with a +4 circumstance bonus. The free grapple does not cause attacks of opportunity.",
    "Terrible Gash<br>Target suffers maximum damage plus bonus damage again and 1d4 Con and Cha drain.<br>Save: A DC 30 Dexterity negates ability drain; deals bonus damage instead.<br>Heal: Restoration spell.",
    "Throat Slash<br>Target suffers maximum damage plus 2d6 bleed. Target cannot talk or breathe and is considered drowning while bleeding.<br>Save: A DC 30 Constitution halves bleed.<br>Heal: A DC 20 Heal check halves bleed, while a DC 30 Heal check ends bleed effect.",
    "Ugly Wound<br>Target suffers maximum damage plus bonus damage again and 1d3+1 Cha damage.<br>Save: A DC 30 Constitution negates ability damage; deals bonus damage instead.<br>Heal: Rest or restoration spell.",
    "We’ve Got A Bleeder!<br>Target suffers maximum damage plus bonus damage again and 2d8 bleed.<br>Save: A DC 30 Constitution halves bleed effect each round.<br>Heal: A DC 20 Heal check halves the bleed effect, while a DC 30 Heal check ends it.",
    "Weapon Strike<br>Target suffers maximum damage plus double bonus damage again and attack also deals damage to target’s weapon (hardness applies). If the target is wielding multiple weapons, the attacker may choose which weapon suffers damage.<br>Save: DC 25 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wield a weapon, deal additional bonus damage again to target instead.",
    "Wide Open<br>Target suffers maximum damage plus bonus damage again and provokes attacks of opportunity from all threatening opponents.<br>Save: DC 30 Dexterity negates; deals bonus damage instead.<br>Special: If no opponents threaten, deal additional bonus damage instead."    
    ];

    const randomNumber = getRandomInt(50);
    const title = s_slashing[randomNumber];
    $("#text").prepend("<p class=\"red\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = s_slashing[i];
    //   $("#text").prepend("<p class=\"red\">" + (i + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnS_Piercing").click(function() {
    // SEVERE/PIERCING Table
    const s_piercing = ["Achilles’ Heel<br>",
    "Bicep Wound<br>",
    "Bleeder<br>",
    "Blown Back<br>",
    "Calf Hole<br>",
    "Cheek Pierced<br>",
    "Chipped Bone<br>",
    "Clean Through<br>",
    "Deep Hurting<br>",
    "Deep Wound<br>",
    "Elbow Pierced<br>",
    "Eye Patch For You<br>",
    "Forearm Piercing<br>",
    "Guarded Strike<br>",
    "Grazing Hit<br>",
    "Hand Wound<br>",
    "Heart Shot<br>",
    "In A Row<br>",
    "Kidney Piercing<br>",
    "Left Reeling<br>",
    "Leg Wound<br>",
    "Lodged In The Bone<br>",
    "Momentum<br>",
    "Muscle Severed<br>",
    "Nailed In Place<br>",
    "Nerve Cluster<br>",
    "Nicked An Artery<br>",
    "Organ Scramble<br>",
    "Overreaction<br>",
    "Painful Poke<br>",
    "Penetrating Wound<br>",
    "Perfect Strike<br>",
    "Pierced<br>",
    "Pierced Appendix<br>",
    "Pincushion<br>",
    "Pinhole<br>",
    "Pinned Arm<br>",
    "Punctured Lung<br>",
    "Ragged Wound<br>",
    "Right In The Ear<br>",
    "Shoulder Wound<br>",
    "Spinal Tap<br>",
    "Spun Around<br>",
    "Stinger<br>",
    "Sucking Chest Wound<br>",
    "Surprise Opening<br>",
    "Tenacious Wound<br>",
    "Tongue Piercing<br>",
    "Ventilated<br>",
    "Vulnerable Spot<br>"    
    ];

    const randomNumber = getRandomInt(50);
    const title = s_piercing[randomNumber];
    $("#text").prepend("<p class=\"red\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"red\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnS_Bludgeoning").click(function() {
    // SEVERE/BLUDGEONING Table
    const s_bludgeoning = ["2 For 1<br>Target suffers maximum damage and you deal normal damage to one adjacent target.<br>Save: Adjacent target may make a DC 20 Dexterity save to negate.<br>Special: If there are no adjacent targets, deal bonus damage to original target.",
    "And Stay Down!<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Recover: A move-equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Armor Dent<br>Target suffers maximum damage and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 20 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage to target instead.",
    "Back Breaker<br>Target suffers maximum plus bonus damage and 1d4 Dex damage.<br>Save: DC 20 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bell Ringer<br>Target suffers maximum damage, 1 Int damage and is sickened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the sickened condition. Rest or restoration magic is needed to heal ability damage.",
    "Bone Masher<br>Target suffers maximum damage and suffers either 1d2 Dex damage and half speed (leg) or 1d2 Str damage (arm) and limb is useless until healed.<br>Save: DC 20 Constitution negates limb damage; deals bonus damage instead.<br>Heal: A DC 20 Heal check allows limb use and removes movement penalties. Rest or restoration magic is needed to heal ability damage.<br><br>D20 Bone Masher Injury:<br>1-5 Left Leg<br>6-10 Left Arm<br>11-15 Right Leg<br>16-20 Right Arm",
    "Box the Ears<br>Target suffers maximum damage and is deafened for 1d3 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A cure blindness/deafness spell or a DC 20 Heal check removes the deafened condition.",
    "Brained<br>Target suffers maximum damage and is staggered for 1d2 rounds.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A full-round action used to recover can remove the staggered condition.",
    "Breathless<br>Target suffers maximum damage and becomes fatigued.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest.",
    "Broken Leg<br>Target suffers maximum damage plus 1 Dex and 1 Con damage and target’s speeds are reduced by half until healed.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Broken Ribs<br>Target suffers maximum and bonus damage plus cannot heal naturally for 1 day.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic.",
    "Collapsed Lung<br>Target suffers maximum damage and is staggered for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the staggered condition.",
    "Concussion<br>Target suffers maximum damage and 1 Int and Wis damage.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Cracked Knee<br>Target suffers maximum damage and 1 Dex damage. Target’s base land speed reduced to 10 feet until healed.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Cracked Rib<br>Target suffers maximum damage, 1 Con damage, and is fatigued.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest and restorative magic.",
    "Crumpling Blow<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Recover: Target must expend a move-equivalent action to stand from prone. This provokes an attack of opportunity from all threatening opponents.",
    "Crunch<br>Target suffers maximum damage and is sickened for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the sickened condition.",
    "Crushed Intestines<br>Target suffers maximum damage and 1 Con damage.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Crushed Trachea<br>Target suffers maximum damage and cannot breathe or speak for 1 minute.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the condition.",
    "Earth Rumble<br>Target suffers maximum damage and target is knocked prone.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Standing from prone is a move-equivalent action that provokes attacks of opportunity from all threatening opponents.",
    "Feeble Parry<br>Target suffers maximum damage and is disarmed of 1 held item (attacker’s choice). Object is thrown 1d6 squares in a random direction.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Picking up a dropped object is a move equivalent action that provokes attacks of opportunity from threatening opponents.",
    "I See Stars<br>Target suffers maximum damage and a 20% miss chance for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check negates the miss chance.",
    "Knockback<br>Target suffers maximum plus bonus damage and is pushed 1 square directly away.<br>Save: DC 20 Constitution negates; deals additional bonus damage instead.",
    "Lights Out<br>Target suffers maximum damage and is blinded for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the blinded condition.",
    "Low Blow<br>Target suffers maximum damage and is sickened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check negates the sickened condition.",
    "Mace to Da Face<br>Target suffers maximum damage and is dazed for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the dazed condition.",
    "Momentum<br>You deal maximum damage and gain a +1 circumstance bonus on all your attack rolls until the end of your next turn.",
    "My Teef!<br>Target suffers maximum damage. Target’s bite attacks are at a -2 penalty, and target suffers a 20% spell failure chance (-4 to casting rolls) for verbal spells.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check repairs teeth, removing bite penalty and removing the spell failure chance.",
    "Nighty Night<br>Target suffers maximum damage, falls prone, and is unconscious for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check allows the target to regain consciousness.<br>Recover: A move equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Numbing Blow<br>Target suffers maximum damage, 1 Dex damage, and target is disarmed of 1 item (attacker’s choice). Object is dropped in target’s square.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.<br>Recover: Picking up an item is a move-equivalent action that provokes attacks of opportunity from threatening opponents.",
    "Off Balance<br>Target suffers maximum damage and provokes attacks of opportunity from all threatening opponents.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.",
    "Pimp Slap<br>Target suffers maximum damage and target is dazed for 1d2 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: By expending a move action to clear your head you may end the dazed condition.",
    "Rattled<br>Target suffers maximum damage and is confused for 1 round.<br>Save: DC 20 Resolve negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the confused condition.",
    "Roundhouse<br>Target suffers maximum damage and you gain a free attack against a threatened foe adjacent to the original target at a -4 penalty. If no additional target exists, deal bonus damage again to the original target.",
    "Ruptured Organ<br>Target suffers maximum damage and 1d4 bleed. This bleed can only be cured with magic.<br>Save: DC 20 Constitution negates bleed; deals bonus damage instead.<br>Heal: A DC 20 Heal check halves the bleed effect.",
    "Shattered Hand<br>Target suffers maximum damage and 1 Str damage. All attacks and skill checks using that hand suffer a -2 penalty.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes penalties, but rest or restorative magic is needed to heal ability damage.",
    "Shattered Nose<br>Target suffers maximum damage, 1d2 Cha damage, and 1d2 bleed.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check heals the bleed effect, but rest or restorative magic is needed to heal ability damage.",
    "Shield Smack<br>Target suffers maximum damage and target’s shield is loosened, causing it to no longer grant its shield bonus for that round.<br>Save: A DC 20 Dexterity save negates; deals bonus damage instead.<br>Special: If target is not using a shield, deals additional bonus damage instead.",
    "Skull Crack<br>Target suffers maximum damage and 1d2 Int damage.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Solid Blow<br>You deal maximum and bonus damage again.<br>Save: None",
    "Split Open<br>Target suffers maximum damage and 1d4 bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the bleed effect, while a DC 20 Heal check ends it.",
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1 round.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.",
    "Staggering Blow<br>Target suffers maximum damage and bonus damage again as non-lethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at your current attack bonus -5.<br>Save: DC 20 Dexterity negates; deals bonus damage instead.",
    "Terrible Bruise<br>Target suffers maximum damage and 1d6 nonlethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.<br>Save: None.",
    "Thunder Strike<br>Target suffers maximum damage and is deafened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the deafened condition.",
    "Tiring Blow<br>Target suffers maximum damage and becomes fatigued.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Short or Long Rest.",
    "To Your Thinky Bits<br>Target suffers maximum damage and 1 Int damage.<br>Save: Constitution 20 negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to restore ability damage.",
    "What’s Going On?<br>Target suffers maximum plus bonus damage and 1d2 hours of target’s memory is erased.<br>Save: DC 20 Constitution save negates; deals additional bonus damage instead.<br>Heal: A DC 20 Heal check restores target’s memory (no retry).",
    "Where Am I?<br>Target suffers maximum damage and is dazed for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.",
    ];

    const randomNumber = getRandomInt(50);
    const title = s_bludgeoning[randomNumber];
    $("#text").prepend("<p class=\"red\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = s_bludgeoning[i];
    //   $("#text").prepend("<p class=\"red\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });

  $("button#btnS_Magic").click(function() {
    // SEVERE/MAGIC Table
    const s_magic = ["SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    "SEVERE/MAGIC TEXT",
    ];

    const randomNumber = getRandomInt(50);
    const title = s_magic[randomNumber];
    $("#text").prepend("<p class=\"red\">" + (randomNumber + 1) + ": " + title + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let title = b_bludgeoning[i];
    //   $("#text").prepend("<p class=\"red\">" + (randomNumber + 1) + ": " + title + "</p>");
    // }

    $("#text").show();
    event.preventDefault();
  });


  $("form#form").submit(function(event) {
    event.preventDefault();
  });
});

// Each button will link to a different array
// Might straight up make 16 arrays

// One each for each table

// Use break tags to have one array element with 4 lines. This will get long lol