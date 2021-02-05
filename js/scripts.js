function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getTime() {
  let time = new Date().getTime();
  let date = new Date(time);
  const dateArray = date.toString();
  // const timeSlice = dateArray.slice(16, 24);
  let hourSlice = dateArray.slice(16, 18);
  const minsecSlice = dateArray.slice(18, 24);
  if (parseInt(hourSlice.toString()) > 12) {
    hourSlice -= 12;
  }

  return hourSlice.toString() + minsecSlice;                  // US Time
  // return "<span class=\"time\">" + timeSlice + "</span>";  // 24 hr time
}

$(document).ready(function() {
  $("button#popup-button").click(function() {
    $(".popup").slideUp();
    $(".popup-text").empty();
  });

  // Buttons and their functions
  $("button#g_melee").click(function() {
    // Fumble/Melee Table
    const titleArray = ["All Or Nothing",
    "Armor Smash",
    "Attack The Darkness",
    "Awkward Attack",
    "Backswing",
    "Bad Grip",
    "Bent",
    "Better To Give",
    "Bohemian Earspoon",
    "Bonk",
    "Broken Blade",
    "Broken Haft",
    "Butterfingers",
    "Catastrophic Failure",
    "Catch Your Breath",
    "Critical Mistake",
    "Cutter",
    "Eat Dirt",
    "Fling",
    "Fog Of War",
    "Funny Bone",
    "Go For The Eyes",
    "Hand It Over",
    "I Told You It Was Sharp",
    "Notched",
    "Off Balance",
    "Overextended",
    "Parry! Dodge! Spin! Thrust!",
    "Pin Prick",
    "Pointy End Goes There",
    "Pulled Muscle",
    "Punt",
    "Second Thoughts",
    "Slipped ",
    "Sorry!",
    "Spinning Swing",
    "Strain",
    "Stuck",
    "Surrounded By Foes",
    "This Is Bad",
    "This Sword Is Heavy",
    "Too Much Stuff",
    "Vibration",
    "Wait! What?",
    "Who Was That?",
    "Wide Open",
    "Winded",
    "Wrong End",
    "You Meant To Do That",
    "How In The World?"    
    ];

    const g_melee = ["Your attack fails and you suffer a -1 penalty on attack rolls until you score a critical hit.<br>Save: Resolve DC 20 negates.<br>Recover: You must succeed at a Resolve save or score a critical hit to end this affect. You may reroll the save each round.<br>Special: Each attack you miss your target increases the penalty by -1.",
    "Your attack hits and deals damage to your armor instead of your target.<br>Save: Dexterity DC 20 negates.<br>Recover: A Craft DC 20 check is needed to repair the damage.<br>Special: If you do not wear armor, damage is dealt to shield or to yourself instead.",
    "Your attack fails and all of your enemies are considered to have concealment from you (20% miss chance) for 1d4 rounds.<br>Save: Resolve DC 20 negates.<br>Recover: You may continue to make a Resolve save each round you are affected to end the duration.",
    "Your attack fails and you take a -2 penalty to Defense rolls for 1d4 rounds.<br>Save: Dexterity DC 20 negates.<br>Recover: You must expend a greater action to recover.<br>Special: If using a two-handed weapon, add +1 round to the duration of the penalty.",
    "Reroll the attack with yourself as the target; it is possible to critically hit yourself in this manner.<br>Save: Dexterity DC 20 negates.<br>Special: You may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "Your attack fails and you weapon deals nonlethal damage for the next 3 rounds.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a standard action to fix your grip and end the nonlethal damage.",
    "Your attack fails and you weapon deals nonlethal damage for the next 3 rounds.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a standard action to fix your grip and end the nonlethal damage.",
    "Your attack hits and damages you instead. Use your target’s Str modifier when calculating the damage.<br>Save: Dexterity DC 20 negates.<br>Special: Reroll attack to determine if you critically hit yourself. This reroll cannot miss or fumble.",
    "Your attack fails and you are deafened until healed.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check ends the deafened condition.",
    "Your attack fails and you are stunned until the end of your next turn.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the stun effect.<br>Special: If wielding a bludgeoning weapon, you are stunned for 1d4 rounds instead.",
    "Your attack hits and deals damage to your weapon instead of your target.<br>Save: Dexterity DC 20 negates.<br>Recover: A Craft DC 20 check is needed to repair the damage.<br>Special: If you do not wield a weapon, damage is dealt to yourself instead.",
    "Your attack fails and your weapon suffers bonus damage. The weapon suffers a -2 penalty on attack rolls and loses the reach property until repaired.<br>Save: Dexterity DC 20 negates.<br>Recover: A DC 20 Craft Weapons check repairs the weapon.<br>Special: If you are not wielding a reach weapon, your attack hits and deals damage to your weapon instead.",
    "Your attack fails and you drop your weapon.<br>Save: Dexterity DC 20 negates.<br>Recover: You must expend a standard action to pick up your weapon. This provokes an attack of opportunity from threatening foes.<br>Special: If using a light weapon, it is flung 1d6 squares away instead.",
    "Your attack fails and you fall unconscious for 1d6 rounds.<br>Save: Resolve DC 20 negates.<br>Recover: You may make a new saving throw each round.<br>Special: If wielding a bludgeoning weapon, add 2 rounds to the duration.",
    "Your attack fails and you become staggered until the end of your next turn.<br>Save: Constitution DC 20 negates.<br>Special: If wielding a two-handed weapon or wearing heavy armor, add one round to the duration.",
    "The attack hits and deals damage to you instead and is considered a critical threat. Determine the severity of the critical hit as normal.<br>Save: Dexterity DC 20 negates.<br>Special: You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).",
    "Your attack fails and you take 1 point of Str bleed.<br>Save: Dexterity DC 20 negates.<br>Heal: A DC 20 Heal check ends the Str bleed. Rest or restorative magic is needed to heal the ability damage.<br>Special: If you are wielding a slashing weapon, this increases the Str bleed to 2.",
    "Your attack fails and you fall prone and are blinded for 1d3 rounds.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a standard action to stand up from being prone, and a standard action to wipe the debris from your eyes.",
    "Your attack fails and you throw your weapon where it lands 1d6 squares away in a random direction.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a standard action to retrieve your weapon after you move to its location.<br>Special: If wielding a light weapon, add +1 square to the distance traveled.",
    "Your attack fails and you threaten no squares for 1d6 rounds.<br>Save: Resolve DC 20 negates.<br>Recover: Expend a greater action to regain your senses and composure.<br>Special: If you are below half hit points, you suffer disadvantage on this saving throw.",
    "Your attack fails and you drop whatever is in your off hand.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a standard action to retrieve your item.<br>Special: If that item is a light weapon, it is flung 1d6 squares away instead.",
    "Your attack fails and you are blinded until the end of your next turn.<br>Save: Dexterity DC 20<br>Heal: A Heal check DC 20 removes the blinded condition.<br>Special: If you are using a piercing weapon, add 1d3 rounds of blindness.",
    "Your attack fails and your target gains possession of your weapon.<br>Save: Dexterity DC 20 negates.<br>Special: If wielding a two-handed weapon, you gain advantage on your saving throw.",
    "Your attack fails and you suffer 1d6 points of bleed damage.<br>Save: Dexterity DC 20<br>Heal: Curative magic or a DC 20 Heal check heals.<br>Special: If you are using a slashing or piercing weapon, add +2 points of bleed.",
    "Your attack fails and your weapon suffers bonus damage.<br>Save: Dexterity DC 20 negates.<br>Repair: A Craft skill check of DC 20 is required to repair the damage inflicted.<br>Special: If wielding a two-handed weapon, it bonus damage again.",
    "Your attack fails and you suffer disadvantage on all attack rolls until the end of your next turn.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a greater action to gather your balance and composure.<br>Special: If wielding a two-handed weapon, add one round to the duration.",
    "Your attack fails and you provoke an attack of opportunity from all opponents who threaten you.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you are dazed until the end of your next turn.<br>Save: Resolve DC 20 negates.<br>Recover: Expend a greater action to gather your balance and composure.",
    "Your attack fails and you take 1d4 points of Bleed damage.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check ends the bleed effect.<br>Special: If wielding a piercing weapon, add +2 additional points of bleed.",
    "Your attack fails and you take 1 point of Con damage.<br>Save: Dexterity DC 20 negates.<br>Heal: Rest or restorative magic.<br>Special: If wielding a piercing weapon, add 1 point of additional Con damage.",
    "Your attack fails and you take 1d4 points of Str damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and your weapon flies 2d6 squares in a random direction.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a standard action to retrieve your weapon from its location.<br>Special: If wielding a light weapon, add +1 square to the distance traveled.",
    "Your attack fails and you are sickened for 1d6 rounds.<br>Save: Resolve DC 20 negates.<br>Recover: You may continue to make a save each round to end the effect.<br>Special: If you are shaken or frightened, you suffer disadvantage on your saving throw.",
    "Your attack fails and you are knocked prone.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend a standard action to stand up from prone (this provokes attacks of opportunity from all threatening foes).",
    "Reroll the attack targeting an ally adjacent to you or the original target; it is possible to critically hit yourself or your ally in this manner. If there are no adjacent allies, you target yourself.<br>Save: Dexterity DC 20 negates.<br>Special: If targeting yourself, you may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "Your attack fails and you are sickened for 1d4 rounds.<br>Save: Resolve DC 20 negates.<br>Recover: Expend a greater action to gather your balance and composure.<br>Special: If wielding a two-handed weapon, add +1 round to the duration.",
    "Your attack fails and you take 1d4 points of Dex damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.<br>Special: If using a light weapon, reduce the Dex damage to 1d3.",
    "Your attack fails and your weapon becomes stuck in a nearby surface in your square.<br>Save: Dexterity DC 20 negates.<br>Recover: As a standard action, you must make a successful DC 20 Str check to retrieve your weapon.",
    "The attack hits and deals damage to an ally within reach instead and is considered a critical threat. Determine the severity of the critical hit as normal.<br>Save: Dexterity DC 20 negates.<br>Special: If there are no allies within reach, the attack hits yourself instead. You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).",
    "Your attack fails and you take bonus damage as bleed damage.<br>Save: Constitution DC 20 negates.<br>Recover: A Heal check DC 20 removes the bleed condition.",
    "Your attack fails and you become fatigued.<br>Save: Constitution DC 20 negates.<br>Recover: A Heal DC 20 check removes the fatigued condition, as does rest.",
    "Your attack fails and you become entangled in your gear.<br>Save: Dexterity DC 20<br>Recover: You must spend a standard action to free yourself.<br>Special: If wielding a tensile weapon (chain, whip, etc.), you suffer disadvantage on your Dexterity save.",
    "Your attack fails and you strike something solid, suffering 1d3 points of Str damage, and drop your weapon.<br>Save: Constitution DC 20<br>Heal: Rest or restorative magic.<br>Special: If wielding a tensile weapon (chain, whip, etc.), the Str damage drops to 1.",
    "Your attack fails and you become confused for one round.<br>Save: Resolve DC 20 negates. <br>Special: If wielding a bludgeoning weapon, add +1 round to the duration.",
    "Your attack fails and you are grazed by your own weapon becoming dazed for 1d3 rounds.<br>Save: Resolve DC 20<br>Recover: You may make a Resolve save each round to end the effect. A DC 20 Heal check will also remove the effect.<br>Special: If wielding a bludgeoning weapon, add +1 round to the duration.",
    "Your attack fails and you become flat-footed until the end of your next turn.<br>Save: Dexterity DC 20 negates",
    "Your attack fails and you become exhausted.<br>Save: Constitution DC 20 negates.<br>Heal: Expend a greater action to regain your wind, removing the exhausted condition.<br>Special: If wearing heavy armor, you must expend a greater action and make a successful DC 20 Constitution save to remove the exhausted condition.",
    "Your attack fails and you take bonus damage.<br>Save: Constitution DC 20 negates.<br>Heal: A Heal check DC 20 removes the bleed effect.<br>Special: If using a slashing weapon, you take bonus damage again.",
    "Your attack fails and you move 10 feet in a random direction and provoke attacks of opportunity as normal.<br>Save: Dexterity DC 20 negates.<br>Special: If wearing heavy armor, you must suffer disadvantage on your Dexterity save and fall prone on a failed save.",
    "The attack hits and deals damage to the original target and the opponent may not negate the attack (such as a counter, block, or parry). This attack may not critically hit or cause any special effects (such as from a Strike maneuver)"    
    ];
    
    const randomNumber = getRandomInt(50);
    const text = g_melee[randomNumber];
    const title = titleArray[randomNumber];
    $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_melee.png" class="time"><br>${(randomNumber + 1)}: <em>${title}</em><br>${text}</p>`);
    
    // for (let i = 0; i < 50; i++) {
    //   let text = g_melee[i];
    //   let title = titleArray[i];
    //   $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_melee.png" class="time"><br>${(i + 1)}: <em>${title}</em><br>${text}</p>`);
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#g_ranged").click(function() {
    // FUMBLE/RANGED Table
    const titleArray = ["Aching Back",
    "Aim Carefully Next Time",
    "All Thumbs",
    "Amazing Miss",
    "Archer's Elbow",
    "Awkward Attack",
    "Backfire",
    "Bad Alignment",
    "Busted",
    "Bull's Eye",
    "Close To The Ear",
    "Cracked",
    "Don't Hit Me",
    "Double Miss",
    "Errant Aim",
    "Everything You Got",
    "Friendly Fire",
    "Head Rush",
    "Huh?",
    "In The Line Of Fire",
    "Insecure",
    "Klutz",
    "Lost Grip",
    "Lost The Target",
    "Lowered Guard",
    "Misjudged The Distance",
    "Mix It Up",
    "My Spleen!",
    "Nicked",
    "Notched Fingers",
    "Overcompensated",
    "Overshot",
    "Phantom Wind",
    "Pinched In Parts",
    "Recoil",
    "Seeing Double",
    "Shot Your Foot",
    "Snapped Component",
    "So Much Blood",
    "Spilled Ammo",
    "Sprain",
    "Tied Up",
    "Torn Tendon",
    "Umm, Oops",
    "Weapon Jam",
    "What Are The Odds?",
    "Whoops!",
    "Wide Open",
    "Wrong Weapon",
    "How In The World?"    
    ];

    const g_ranged = ["Your attack fails and you become fatigued.<br>Save: Constitution DC 20 negates.<br>Recover: Heal check DC 20 or rest for 8 hours.<br>Special: If wearing heavy armor or wielding a heavy crossbow, you suffer disadvantage to your save.",
    "Your attack fails and for the next 3 rounds, you suffer disadvantage on all ranged attack made without the Aim action.<br>Save: Resolve DC 20 negates.<br>Recover: You may take a greater action to clear your head and make a successful DC 20 Perception check to end the penalty.",
    "Your attack fails and you lose your Dex bonus on attack rolls for 3 rounds.<br>Save: Dexterity DC 20 negates.<br>Recover: You must expend a greater action and make a successful DC 20 Acrobatics skill check to regain your Dex bonus.",
    "Your attack fails and you are stunned until the end of your next turn.<br>Save: Resolve DC 20 negates.",
    "Your attack fails and you take a -2 penalty on all ranged attack rolls for 1d4 minutes.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the attack roll penalty.",
    "Your attack fails and you take a -2 penalty to Defense rolls for 1d4 rounds.<br>Save: Dexterity DC 20 negates.<br>Recover: As a standard action, a successful DC 20 Dexterity save removes the attack roll penalty.",
    "Reroll the attack with yourself as the target; it is possible to critically hit yourself in this manner.<br>Save: Dexterity DC 20 negates.<br>Special: You may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "Your attack fails and you suffer disadvantage on all attacks with this weapon until repaired.<br>Save: Dexterity DC 20 negates.<br>Repair: A DC 20 Craft Weapon check removes the attack penalty.",
    "Your attack fails and your attack deals damage to your weapon instead of your target.<br>Save: Dexterity DC 20 negates.<br>Recover: A Craft DC 20 check is needed to repair the damage.<br>Special: If you do not wield a weapon, damage is dealt to yourself instead.",
    "Your attack fails and your shot ricochets near the eye. You take bonus damage and are blinded until the end of your next turn.<br>Save: Dexterity DC 20 negates.<br>Heal: A DC 20 Heal check will remove the blinded condition.",
    "Your attack fails and you are deafened until healed.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the deafened condition.<br>Special: If using a firearm, the DC increases to 25.",
    "Your attack fails and your weapon takes bonus damage.<br>Save: Dexterity DC 20 negates.<br>Repair: A DC 20 Craft Weapon check will repair the damage.<br>Special: If you do not wield a weapon, bonus damage is dealt to yourself instead.",
    "Your attack fails and you take an additional -2 penalty on ranged attacks for each ally in melee combat with your target for 3 rounds.<br>Save: Resolve DC 20 negates.<br>Recover: Spend a standard action to make a Perception check DC 20 to removes the attack penalty.",
    "Your attack fails and you spend twice as much ammunition on this attack.<br>Save: Dexterity DC 20 negates.",
    "Reroll the attack targeting the next nearest creature to the original target; it is possible to critically hit yourself or an ally in this manner. If there are no other creatures, you target yourself.<br>Save: Dexterity DC 20 negates.<br>Special: If targeting yourself, you may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "Your attack fails and you become exhausted.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check or rest removes the exhaustion.",
    "Reroll the attack targeting the next nearest ally to the original target; it is possible to critically hit yourself or an ally in this manner. If there are no other creatures, you target yourself.<br>Save: Dexterity DC 20 negates.<br>Special: If targeting yourself, you may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "Your attack fails and you become sickened for 1d4 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check or rest removes the sickened condition.",
    "Your attack fails and you are confused until the end of your next turn.<br>Save: Resolve DC 20 negates.",
    "The attack hits and deals damage to an ally closest to the target instead and is considered a critical threat. Determine the severity of the critical hit as normal.<br>Save: Dexterity DC 20 negates.<br>Special: If there are no allies within reach, the attack hits yourself instead. You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).",
    "Your attack fails and you suffer a -1 penalty on attack rolls until you score a critical hit.<br>Save: Resolve DC 20 negates.<br>Recover: You must succeed at a Resolve save or score a critical hit to end this affect. You may reroll the save each round.<br>Special: Each attack you miss your target increases the penalty by -1.",
    "Your attack fails and you drop your weapon in your square.<br>Save: Reflex 20 negates.<br>Recover: You must expend a standard action to pick it up. This provokes attacks of opportunity from all threatening foes.",
    "Your attack fails and you become staggered until the end of your next turn.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you suffer disadvantage on all attack rolls until the end of your next turn.<br>Save: Resolve DC 20 negates.",
    "Your attack fails and you provoke attacks of opportunity from all threatening foes.<br>Save: Dexterity DC 20 negates.<br>Special: If no foes threaten you this round, you instead suffer a -2 penalty to your Defense rolls for 3 rounds.",
    "Your attack fails and all attack rolls beyond the first range increment have triple the normal distance penalty for 3 rounds.<br>Save: Intelligence DC 20 negates.<br>Recover: As a standard action, if you successfully make a Perception DC 20 check, you end the penalty.",
    "Your attack fails and you are unable to make ranged attacks for the next 1d6 rounds.<br>Save: Resolve DC 20 negates.<br>Recover: You must take a greater action to gather your wits and end this effect.",
    "Your attack fails and you take 1 point of Con damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and you take 1d6 points of bleed damage.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check ends the bleed effect.",
    "Your attack fails and you take 1d4 points of bleed and suffer a -2 penalty to ranged attacks while bleeding.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check ends the bleed effect.",
    "Your attack fails and all targets with cover gain advantage to Defense rolls against you for 3 rounds.<br>Save: Wisdom DC 20 negates.<br>Recover: As a standard action, make a successful DC 20 Perception check to overcome their additional cover bonus.",
    "Your attack fails and you weapon travels 1d4 times its range increment past the target.<br>Save: Dexterity DC 20 negates.<br>Special: If not using a thrown weapon, it instead slips out of your hand landing 1d6 squares in a random direction.<br>Recover: A standard action is required to pick up a weapon in combat, which provokes attacks of opportunity.",
    "Your attack fails and you compensate for a breeze which isn’t there. You take a -2 penalty on ranged attack rolls for 3 rounds.<br>Save: Wisdom DC 20 negates.<br>Recover: As a standard action, make a successful DC 20 Survival check to end the attack penalty.",
    "Your attack fails and you take 1d2 points of Dex damage <br>Save: Dexterity DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and you move backward 1 square and fall prone.<br>Save: Constitution DC 20 negates.<br>Recover: You must expend a standard action to stand up from a prone position. This provokes attacks of opportunity from all threatening foes.",
    "Your attack fails and all your attacks have a 50% miss chance until the end of your next turn.<br>Save: Resolve DC 20 negates.<br>Recover: As a standard action, make a successful DC 20 Perception check to end the miss chance.",
    "Your attack fails and you suffer bonus damage. Your speed is reduced by half until healed.<br>Save: Dexterity DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and a minor part of your weapon jams or breaks and requires 1d3 rounds to fix.<br>Save: Dexterity DC 20 negates.<br>Recover: A successful Craft Weapon DC 20 check is required to repair.",
    "Your attack fails and you are sickened for 1d6 rounds.<br>Save: Resolve DC 20 negates.<br>Heal: A successful Heal DC 20 check removes the sickened condition.",
    "Your attack fails and your ammunition falls from its weapon or container and takes 1d6 rounds to gather up.<br>Save: Dexterity DC 20 negates.<br>Recover: Expend 1d6 rounds gathering the ammo, or switch to another weapon or ammo container if possible.",
    "Your attack fails and you take 1d4 points of Dex damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and you become entangled in your gear.<br>Save: Dexterity DC 20 negates.<br>Recover: You must spend a standard action to free yourself.",
    "Your attack fails and you take 1 point of Dex bleed.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check ends the bleed effect. Rest or restorative magic is needed to heal ability damage.",
    "Reroll the attack with yourself as the target; it is possible to critically hit yourself in this manner.<br>Save: Dexterity DC 20 negates.<br>Special: You may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "Your attack fails and your weapon suffers bonus damage. If using a projectile weapon it ceases to function until repaired.<br>Save: Dexterity DC 20 negates.<br>Recover: A Craft DC 20 check is needed to repair the damage.<br>Special: If you do not wield a weapon, damage is dealt to yourself instead.",
    "Reroll the attack targeting the next nearest creature to the original target; it is possible to critically hit yourself or an ally in this manner. If there are no other creatures, you target yourself.<br>Save: Dexterity DC 20 negates.<br>Special: If you made a thrown attack, you hit the original target, but the weapon ends up in the target’s possession. If targeting yourself, you may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "Your attack fails and you are knocked prone.<br>Save: Dexterity DC 20 negates.<br>Recover: You must expend a standard action to stand from prone. This provokes attacks of opportunity from all threatening opponents.",
    "Your attack fails and you are flat-footed until the end of your next turn.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you grab a random object from your gear instead of your intended weapon or ammunition.<br>Save: Resolve DC 20 negates.<br>Recover: Expend a standard action to retrieve the correct item.",
    "The attack hits and deals damage to the original target and the opponent may not negate the attack (such as a counter, block, or parry). This attack may not critically hit or cause any special effects (such as from a Strike maneuver)"    
    ];

    const randomNumber = getRandomInt(50);
    const text = g_ranged[randomNumber];
    const title = titleArray[randomNumber];
    $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_ranged.png" class="time"><br>${(randomNumber + 1)}: <em>${title}</em><br>${text}</p>`);

    // for (let i = 0; i < 50; i++) {
    //   let text = g_ranged[i];
    //   let title = titleArray[i];
    //   $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_ranged.png" class="time"><br>${(i + 1)}: <em>${title}</em><br>${text}</p>`);
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#g_natural").click(function() {
    // FUMBLE/NATURAL Table
    const titleArray = ["Awkward Attack",
    "Bad Headbutt",
    "Battered",
    "Bleeding Fist",
    "Bone Bruise",
    "Broke A Nail",
    "Broken Tooth",
    "Bruised Ego",
    "Brutal Collision",
    "Caught Your Attack",
    "Don’t Pick At It",
    "Eye Strain",
    "Ferocious Fumble",
    "Fist Meets Face",
    "Frustration",
    "Got Too Close",
    "Great Roar",
    "Hangnail",
    "He Bit Me",
    "He’s Sharp",
    "Head, Meet Wall",
    "Ingrown Nail",
    "Jam A Finger",
    "Muscle Tear",
    "Not The Weak Point",
    "Off Balance",
    "Out Of Position",
    "Overexertion",
    "Overextend",
    "Overthink It",
    "Pinched Nerve",
    "Pins And Needles",
    "Punctured Foot",
    "Smash The Floor",
    "Sneeze!",
    "Sprain",
    "Stinging Failure",
    "Stop Hitting Yourself",
    "That’s Disgusting",
    "Tiring Attack",
    "Torn Muscle",
    "Tripped",
    "Twisted",
    "Unintentional Move",
    "Upset Tummy",
    "We Have A Wiener",
    "Whirlwind Of Shame",
    "Wide Open",
    "Winds Of Change",
    "How In The World?"    
    ];

    const g_natural = ["Your attack fails and you suffer a -2 penalty to Defense rolls for 1d4 rounds.<br>Save: Dexterity DC 20 negates.<br>Heal: A DC 20 Acrobatics check removes the attack penalties.",
    "Your attack fails and you are stunned for 1 round.<br>Save: Constitution DC 20 negates.",
    "Your attack fails and you suffer a -2 penalty on saves and skill checks for 1d4 hours.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the penalties.",
    "Your attack fails and you take 1d6 points of bleed damage.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check ends the bleed effect.",
    "Your attack fails and you take 1d2 points of Con damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and you take bonus damage and you cannot use this attack until healed.<br>Save: Constitution DC 20 negates.",
    "Your attack fails and you suffer a -2 penalty on attack rolls for 1d6 minutes.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the attack penalties.",
    "Your attack fails and you suffer Disadvantage to attack any other target for 1d4 rounds (or until the target is dead).<br>Save: Resolve DC 20 negates.",
    "Your attack fails but deals bonus damage to the original target and you are stunned for 2 rounds.<br>Save: Constitution DC 20 negates (2 saves).<br>Heal: A DC 20 Heal check removes the stunned condition.<br>Special: Each saving throw reduces the duration of this fumble by 1 round.",
    "Your attack fails and the target may attempt to trip, bull rush, or overrun you (target’s choice) as a free action without causing an attack of opportunity.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you take 1 point of Con damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and you are blinded for 1 round.<br>Save: Constitution DC 20 negates.",
    "Reroll the attack targeting the next nearest ally to the original target within reach; it is possible to critically hit yourself or an ally in this manner. If there are no other creatures, you target yourself.<br>Save: Dexterity DC 20 negates.<br>Special: If targeting yourself, you may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.",
    "The attack hits you instead and is considered a critical threat. Determine the severity of the critical hit as normal.<br>Save: Dexterity DC 20 negates.<br>Special: You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).",
    "Your attack fails and you suffer Disadvantage on all attack rolls until the end of our next turn.<br>Save: Resolve DC 20 negates.",
    "Your attack fails and the target may start a grapple against you as a free action which does not provoke an attack of opportunity.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you are deafened until healed.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the deafened condition.",
    "Your attack fails and you cannot use this attack type again for 1d6 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the attack penalty.",
    "Your attack fails and you provoke an attack of opportunity from the target.<br>Save: Dexterity DC 20 negates.<br>Special: Creatures gain Advantage on their attack of opportunity if it is a Bite natural attack.",
    "Your attack fails and you take bonus damage.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you are dazed for 1d3 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the dazed condition.",
    "Your attack fails and you suffer a -1 penalty on attack rolls until you score a critical hit.<br>Save: Constitution DC 20 negates.<br>Recover: You must succeed at a Constitution save or score a critical hit to end this affect. You may reroll the save each round.<br>Special: Each attack you miss your target increases the penalty by -1.",
    "Your attack hits and deals damage to yourself, but it is all nonlethal damage.<br>Save: Constitution DC 20 negates.<br>Special: You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).",
    "Your attack fails and you take 1d4 points of Str damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack hits and deals damage to your targets armor, and you suffer half the damage dealt and cannot use that attack for 1d3 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the penalty. If opponent does not wear armor, deal damage to shield or an item worn.",
    "Your attack fails and you become staggered until the end of your next turn.<br>Save: Dexterity DC 20 negates.<br>Special: If you attempt a move action while staggered this way, you must succeed a DC 20 Acrobatics check or fall prone instead.",
    "Your attack fails and you cannot use this attack until the end of your next turn.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you are exhausted.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check will reduce the exhausted condition to fatigued instead.",
    "Your attack fails and you provoke an attack of opportunity from all threatening opponents.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you suffer Disadvantage on all attacks against that opponent for 3 rounds.<br>Save: Wisdom DC 20 negates.<br>Recover: A DC 20 Intuition check (as a standard action) removes the attack penalty.",
    "Your attack fails and you reduce your reach by 5 feet for 3 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the reach penalty.<br>Special: If this reduces your reach to 0, you may not attack.",
    "Your attack fails and you are sickened for 1d6 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the sickened condition.",
    "Your attack fails and you suffer bonus damage. Your speed is reduced by half until healed.<br>Save: Dexterity DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and you kick up dust that blinds you for 1d4 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the blindness condition.",
    "Your attack fails and you are dazed until the end of your next turn.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the dazed condition.",
    "Your attack fails and you take 1d4 points of Dex damage.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or restorative magic.",
    "Your attack fails and you take 1d6 points of nonlethal damage and a -2 penalty on attack rolls with that attack for 1d4 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the attack penalties.",
    "The attack hits and deals damage to yourself instead of the target.<br>Save: Dexterity DC 20 negates.<br>Special: You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).",
    "Your attack fails and you are nauseated for 1d6 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the attack penalties.",
    "Your attack fails and you are fatigued.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the fatigued condition.",
    "Your attack fails and you take 1 point of Strength drain.<br>Save: Constitution DC 20 negates.<br>Heal: Restorative magic is required to heal ability drain.",
    "Your attack fails and you are knocked prone.<br>Save: Dexterity DC 20 negates.<br>Recover: You must expend a standard action to stand from being prone. This provokes attacks of opportunity from all threatening opponents.",
    "Your attack fails and you become entangled in your gear.<br>Save: Dexterity DC 20 negates.<br>Recover: You must spend a standard action to free yourself.",
    "Your attack fails and you move 10 feet in a random direction and provoke attacks of opportunity as normal.<br>Save: Dexterity DC 20 negates.<br>Special: If wearing heavy armor, you suffer disadvantage on your Dexterity save and fall prone on a failed save.",
    "Your attack fails and you are sickened for 1d4 rounds.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check removes the sickened condition.",
    "Your attack fails and you fall unconscious for 1d6 rounds.<br>Save: Resolve DC 20 negates.<br>Heal: A DC 20 Heal check awakens the unconscious character.",
    "Your attack fails and deals bonus damage to yourself and all creatures adjacent to you except the original target.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you are flat-footed until the end of your next turn.<br>Save: Dexterity DC 20 negates.",
    "Your attack fails and you threaten no squares for 1d6 rounds.<br>Save: Resolve DC 20 negates.<br>Heal: A DC 20 Intuition check (as a standard action) removes the attack penalties.",
    "The attack hits and deals damage to the original target and the opponent may not negate the attack (such as a counter, block, or parry). This attack may not critically hit or cause any special effects (such as from a Strike maneuver)"    
    ];

    const randomNumber = getRandomInt(50);
    const text = g_natural[randomNumber];
    const title = titleArray[randomNumber];
    $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_natural.png" class="time"><br>${(randomNumber + 1)}: <em>${title}</em><br>${text}</p>`);

    // for (let i = 0; i < 50; i++) {
    //   let text = g_natural[i];
    //   let title = titleArray[i];
    //   $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_natural.png" class="time"><br>${(i + 1)}: <em>${title}</em><br>${text}</p>`);
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#g_magic").click(function() {
    // FUMBLE/MAGIC Table
    const titleArray = ["Cursed",
    "Weak-Minded Fool",
    "Power Transfer",
    "Mental Slip",
    "Not Me, You Fool!",
    "Cold Snap",
    "Jumbled Components",
    "Left Reeling",
    "Fragmented Magic",
    "Blastoff",
    "Caster's Block",
    "Unexpected Blast",
    "Weakened",
    "Backblast",
    "Spell Shield",
    "Bleeding Eyes",
    "Power Down",
    "Energy Transfer",
    "Mind Drain",
    "Nose Bleed",
    "Magic Fatigue",
    "Tiring Spell",
    "Reflection",
    "Power Drain",
    "Electrical Feedback",
    "Acidic Backlash",
    "Poor Trade",
    "Glimpse Of Terror",
    "This Is Hard",
    "Side Effect",
    "Why Me",
    "How Did This Happen?",
    "Vertigo",
    "Monster Rift",
    "Arcane Fire",
    "Can You Hear Me Now?",
    "Now I See You...",
    "You Made Him Bigger",
    "The Magic Is Slipping",
    "Magical Vacuum",
    "Tangled",
    "You Made Him Tougher",
    "Magical Smackdown",
    "Hit By The Ugly Stick",
    "You Made Him Stronger",
    "You Made Him Faster",
    "Distance Rift",
    "Klaatu Barada Necktie",
    "It's Sparkly",
    "Wild Magic"    
    ];

    const g_magic = ["Your spell fails and you suffer a -4 penalty on attack rolls, saves, skill checks, and ability checks. <br>Save: Resolve DC 20 negates.<br>Heal: This effect can only be cured with remove curse.",
    "Your spell fails and you suffer 1 point of Wis bleed damage.<br>Save: Resolve DC 20 negates.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check ends the ability bleed, but rest or restorative magic is needed to heal ability damage.",
    "Your spell fails and the highest level spell effect on you is transferred to your target for the remainder of its duration.<br>Save: Charisma DC 20 negates.<br>Special: If you have no spell effect on you, you suffer bonus damage instead.",
    "Your spell fails and you suffer Disadvantage on all spell casting rolls until the end of your next turn.<br>Save: Intelligence DC 20 negates.",
    "Your spell succeeds but targets your ally closest to the target instead.<br>Save: Resolve DC 20 negates.<br>Special: If there is no ally within the spells range, you target yourself instead.",
    "Your spell fails and you suffer bonus damage as cold damage.<br>Save: Resolve DC 20 negates.<br>Special: If the spell would have dealt cold damage, DC 20 Constitution save or you suffer 1d4 Dex damage.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Your spell fails and you are staggered until the end of your next turn.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check negates the staggered condition.",
    "Your spell fails and you are stunned for 1 round<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check negates the stunned condition.",
    "Your spell fails and 1d4+2 mirror images of your target spring up around the target as the spell mirror image. These images last for 1 minute or until destroyed.<br>Save: Intelligence DC 20 negates.",
    "Your spell fails and you are thrown 1d6X10 feet in a random direction<br>Save: Resolve DC 20 negates.",
    "Your spell fails and you cannot cast this spell again for 24 hours.<br>Save: Wisdom DC 20 negates.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check restores your ability to cast this spell.",
    "Your spell succeeds but you suffer bonus damage and the spell affects all other creatures within 30 ft of you.<br>Save: Resolve DC 20 negates.",
    "Your spell fails and the DC to resist your spells and abilities are reduced by 2.<br>Save: Constitution DC 20 negates.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check negates the penalty.",
    "Your spell succeeds but targets you instead and is considered a critical threat. Determine the severity of the critical hit as normal.<br>Save: Resolve DC 20 negates.<br>Special: You do not defend against this attack (if you have SR) and may not negate the spell (such as a counter spell).",
    "Your spell fails and the target gains SR equal to your proficiency bonus + their Resolve modifier for 1d6 rounds.<br>Save: Resolve DC 20 negates.",
    "Your spell fails and you suffer 1d6 points of bleed damage. You are considered blinded while bleeding.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check negates the bleed.",
    "Your spell fails and you suffer 1 point of Int bleed.<br>Save: Resolve DC 20 negates.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check ends the ability bleed, but rest or restorative magic is needed to heal ability damage.",
    "Your spell fails and you transfer the knowledge of that spell to the nearest opponent until the end of their next turn. That opponent may invoke the spell on their turn as if it were a spell like ability.<br>Save: Resolve DC 20 negates.",
    "You suffer 1d4 points of ability damage to Int, Wis, Res, or Cha determined randomly.<br>Save: Resolve DC 20 negates.<br><br>D4 - Ability Type Damage<br>1 - Int<br>2 - Wis<br>3 - Res<br>4 - Cha<br><br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Your spell fails and you suffer a number of bleed damage equal to 1/2 bonus damage.<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check negates the bleed.",
    "Your spell fails and you become fatigued. Additionally you cannot cast any spells for 1 round.<br>Save: Constitution DC 20 negates.<br>Heal: Rest or a DC 20 Heal check negates the fatigued condition.",
    "Your spell succeeds but you become Exhausted<br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check Reduces the exhausted condition to fatigued.",
    "Reroll the spell cast with yourself as the target; it is possible to critically cast upon yourself in this manner.<br>Save: Resolve DC 20 negates.<br>Special: You may defend against this attack as normal but may not negate the attack (such as a counter spell) if it is successful.",
    "Your spell fails and you the cool down time of the spell is increased by 2 rounds.<br>Save: Resolve DC 20 negates.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check reduces the increased cool down time by 1 round.",
    "Your spell fails and you suffer bonus damage as electricity damage.<br>Save: Resolve DC 20 negates.<br>Special: If the spell would have dealt electricity damage, DC 20 Constitution save or become stunned for 1 round.",
    "Your spell fails and you suffer bonus damage as acid damage.<br>Save: Resolve DC 20 negates.<br>Special: If the spell would have dealt acid damage, DC 20 Dexterity save or bonus damage is also dealt to your armor. If you wear no armor it is dealt to shield or deal additional bonus damage again to yourself.",
    "Your spell succeeds but you must spend double the spells mana cost. <br>Save: Resolve DC 20 negates.<br>Special: If you do not have enough mana for the spell, your mana is reduced to 0 and you suffer bonus damage.",
    "Your spell fails and you are shaken for 2d4 rounds<br>Save: Resolve DC 20 negates.",
    "Your spell fails and you suffer 1 point of con damage<br>Save: Resolve DC 20 negates.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Your spell fails and one of your items gains a random drawback as per a cursed object.<br>Save: Resolve DC 20 negates.<br>Heal: This effect can only be cured with remove curse.",
    "Your spell fails and you provoke an attack of opportunity from all threatening foes.<br>Save: Resolve DC 20 negates.",
    "Your spell fails and a stinking cloud appears centered on you as per the stinking cloud spell.<br>Save: Resolve DC 20 negates.",
    "Your spell fails and you become nauseated for 1d4 rounds<br>Save: Resolve DC 20 negates.<br>Heal: A DC 20 Heal check Reduces the nauseated condition to sickened.",
    "Your spell fails and is converted into a summon monster spell of the same spell level. The monster(s) summoned are determined at random and are hostile to you.<br>Save: Resolve DC 20 negates.",
    "Your spell fails and you suffer bonus damage as fire damage.<br>Save: Resolve DC 20 negates.<br>Special: If the spell would have dealt fire damage, DC 20 Resolve save or catch fire dealing bonus damage again at the beginning of your turn each round for 1d4 rounds.",
    "Your spell fails and you are deafened. <br>Save: Constitution DC 20 negates.<br>Heal: A DC 20 Heal check negates the deafened",
    "Your spell fails and a target opponent within the spells range becomes invisible for 1d4 rounds<br>Save: Resolve DC 20 negates.<br>Special: If there are no opponents within the spells range, you become blind for 1d4 rounds instead.",
    "Your spell fails and a target opponent within the spells range is enlarged, increasing its size by one size category for 1d4 rounds.<br>Save: Resolve DC 20 negates.<br>Special: If there are no opponents within the spells range, your size is reduced by one size category for 1d4 rounds instead.",
    "Your spell fails and you suffer a -1 penalty on spell casting rolls until you score a critical hit<br>Save: Resolve DC 20 negates.<br>Recover: You must succeed at a Resolve save or score a critical hit to end this affect. You may reroll the save each round.<br>Special: Each spell cast you fail increases the penalty by -1.",
    "Your spell fails and 1d4 spell effects active on you are dispelled (Determined randomly)<br>Save: Resolve DC 20 negates.<br>Special: If you have no spell effects that can be dispelled, you suffer bonus damage instead.",
    "Your spell fails and you become entangled in your gear.<br>Save: Dexterity DC 20 negates.<br>Recover: You must spend a standard action to free yourself.",
    "Your spell fails and a target opponent within the spells range gains 5 Natural Armor for 1d4 rounds.<br>Save: Resolve DC 20 negates.<br>Special: If there are no opponents within the spells range, you suffer bonus damage instead.",
    "Your spell fails and you suffer Disadvantage on all saving throws for 1d4 rounds.<br>Save: Resolve DC 20 negates.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check negates this effect.",
    "Your spell fails and you suffer 1 point of Cha bleed damage<br>Save: Resolve DC 20 negates.<br>Heal: A DC 20 Heal check ends the ability bleed, but rest or restorative magic is needed to heal ability damage.",
    "Your spell fails and a target opponent within the spells range gains a +8 enhancement bonus to Str for 1d4 rounds.<br>Save: Resolve DC 20 negates.<br>Special: If there are no opponents within the spells range, you suffer a -8 enhancement penalty to Str for 1d4 rounds instead (to a minimum of 1 Strength).",
    "Your spell fails and a target opponent within the spells range gains the spell haste for 1d4 rounds.<br>Save: Resolve DC 20 negates.<br>Special: If there are no opponents within the spells range, you suffer the spell slow for 1d4 rounds instead",
    "Your spell fails and you are teleported to the nearest square adjacent to the target of the spell.<br>Save: Resolve DC 20 negates.",
    "Your spell succeeds but targets the nearest ally instead and is considered a critical threat. Determine the severity of the critical hit as normal.<br>Save: Resolve DC 20 negates.<br>Special: If there is no ally, you target yourself instead. If you target yourself, you do not defend against this attack (if you have SR) and may not negate the spell (such as a counter spell).",
    "Your spell fails and all creatures within 30 feet including yourself are blinded for 1 round.<br>Save: Resolve DC 20 negates.",
    "Reroll your spell cast roll but you gain a +9 critical range and critical fumble range for the spell cast. (Critical Threat 11-20, Critical Fumble 1-10)"    
    ];

    const randomNumber = getRandomInt(50);
    const text = g_magic[randomNumber];
    const title = titleArray[randomNumber];
    $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_magic.png" class="time"><br>${(randomNumber + 1)}: <em>${title}</em><br>${text}</p>`);

    // for (let i = 0; i < 50; i++) {
    //   let text = g_magic[i];
    //   let title = titleArray[i];
    //   $(".text").prepend(`<p class="fumble">${getTime()}<br><img src="img\\g_magic.png" class="time"><br>${(i + 1)}: <em>${title}</em><br>${text}</p>`);
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#b_slashing").click(function() {
    // MINOR/SLASHING Table
    const b_slashing = ["Across the Eyes<br>Target suffers maximum damage and is blinded for 1d4 minutes.<br>Save: A DC 20 Dexterity save negates; deals bonus damage instead.<br>Heal: A Heal check DC 10 repairs sight somewhat, but the recipient treats all targets as though they have concealment (20%).<br>A DC 20 heal check will fully repair eyesight to normal levels.",
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
    "Fingertipped<br>Target suffers maximum damage and 1d2 Dex damage. Target cannot use hand until healed.<br>Save: A DC 20 Dexterity save negates; deals bonus damage instead.<br>Heal: A DC 10 Heal check allows usage of hand, albeit with a -4 penalty to all rolls. A DC 20 Heal check repairs the hand’s use. Rest or restorative magic is needed to heal ability damage.<br><br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
    "Flat Blade Thwack<br>Target suffers maximum damage plus double bonus damage again and is staggered for 1 round, but all damage is non-lethal.<br>Save: A DC 20 Constitution save negates stunned condition and halves additional bonus damage.<br>Heal: Rest or curative magic.",
    "Flay<br>Target suffers maximum damage plus 1d3 Str damage.<br>Save: A DC 20 Constitution negates Str damage; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Gory Wound<br>Target suffers maximum damage and is sickened for 1d4 rounds.<br>Save: A DC 20 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check ends the sickened condition.",
    "Gut Slash<br>Target suffers maximum plus bonus damage again and 1d4 bleed. Target cannot swallow whole until healed.<br>Save: A DC 20 Constitution halves the bleed effect (minimum 1).<br>Heal: A DC 10 Heal check halves the bleed effect; a DC 20 Heal check ends it.",
    "Hack and Slash<br>Target suffers maximum damage and you gain a +4 bonus to Severity Checks against that opponent for the next three rounds.",
    "Hacked Digits<br>Target suffers maximum damage, and takes 1 Con and Str damage.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or Restoration spell.",
    "Hacked Hand<br>Target suffers maximum damage, and takes 1d2 Con and Str damage. Target cannot use hand until healed.<br>Save: A DC 20 Constitution negates hand loss and ability drain becomes ability damage.<br>Heal: A DC 10 Heal check allows usage of hand, albeit with a -4 penalty to all rolls. A DC 20 Heal check repairs the hand’s use. Rest or restorative magic is needed to heal ability damage.<br><br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
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
    const text = b_slashing[randomNumber];
    $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_slashing.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");
    
    // for (let i = 0; i < 50; i++) {
    //   let text = b_slashing[i];
    //   $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_slashing.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#b_piercing").click(function() {
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
    const text = b_piercing[randomNumber];
    $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_piercing.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = b_piercing[i];
    //   $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_piercing.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#b_bludgeoning").click(function() {
    // MINOR/BLUDGEONING TABLE
    const b_bludgeoning = ["2 For 1<br>Target suffers maximum damage and you deal normal damage to one adjacent target.<br>Save: Adjacent target may make a DC 20 Dexterity save to negate.<br>Special: If there are no adjacent targets, deal bonus damage to original target.",
    "And Stay Down!<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Recover: A move-equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Armor Dent<br>Target suffers maximum damage and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 20 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Back Breaker<br>Target suffers maximum plus bonus damage and 1d4 Dex damage.<br>Save: DC 20 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bell Ringer<br>Target suffers maximum damage, 1 Int damage and is sickened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the sickened condition. Rest or restoration magic is needed to heal ability damage.",
    "Bone Masher<br>Target suffers maximum damage and suffers either 1d2 Dex damage and half speed (leg) or 1d2 Str damage (arm) and limb is useless until healed.<br>Save: DC 20 Constitution negates limb damage; deals bonus damage instead.<br>Heal: A DC 20 Heal check allows limb use and removes movement penalties. Rest or restoration magic is needed to heal ability damage.<br><br>D10 - Injury<br>1-5 Left Leg<br>6-10 Left Arm<br>11-15 Right Leg<br>16-20 Right Arm",
    "Box the Ears<br>Target suffers maximum damage and is deafened for 1d3 rounds.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A cure blindness/deafness spell or a DC 20 Heal check removes the deafened condition.",
    "Brained<br>Target suffers maximum damage and is staggered for 1d2 rounds.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A full-round action used to recover can remove the staggered condition.",
    "Breathless<br>Target suffers maximum damage and becomes fatigued for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Rest.",
    "Broken Leg<br>Target suffers maximum damage plus 1d2 Dex and 1d2 Con damage and target’s speeds are reduced by half until healed.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Broken Ribs<br>Target suffers maximum plus bonus damage again and cannot heal naturally for 1 day.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic.",
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
    "Knockback<br>Target suffers maximum plus bonus damage and is pushed 1 square directly away.<br>Save: DC 20 Strength negates; deals additional bonus damage instead.",
    "Lights Out<br>Target suffers maximum damage and is blinded for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the blinded condition.",
    "Low Blow<br>Target suffers maximum damage and is sickened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check negates the sickened condition.",
    "Mace to Da Face<br>Target suffers maximum damage and is dazed for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the dazed condition.",
    "Momentum<br>You deal maximum damage and gain a +2 circumstance bonus on all your attack rolls until the end of your next turn.",
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
    "Solid Blow<br>You deal maximum damage plus bonus damage again.<br>Save: None",
    "Split Open<br>Target suffers maximum damage and 1d4 bleed.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the bleed effect, while a DC 20 Heal check ends it.",
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1 round.<br>Save: A DC 20 Dexterity negates; deals bonus damage instead.",
    "Staggering Blow<br>Target suffers maximum damage and bonus damage again as non-lethal damage.<br>Save: A DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at a -4 penalty.",
    "Terrible Bruise<br>Target suffers maximum damage and 1d6 nonlethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.<br>Save: None.",
    "Thunder Strike<br>Target suffers maximum damage and is deafened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the deafened condition.",
    "Tiring Blow<br>Target suffers maximum damage and becomes fatigued.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: Short or Long Rest.",
    "To Your Thinky Bits<br>Target suffers maximum damage and 1 Int damage.<br>Save: Constitution 20 negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to restore ability damage.",
    "What’s Going On?<br>Target suffers maximum plus bonus damage again and 1d2 hours of target’s memory is erased.<br>Save: DC 20 Constitution save negates; deals additional bonus damage instead.<br>Heal: A DC 20 Heal check restores target’s memory (no retry).",
    "Where Am I?<br>Target suffers maximum damage and is dazed for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead."
    ];

    const randomNumber = getRandomInt(50);
    const text = b_bludgeoning[randomNumber];
    $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_bludgeoning.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = b_bludgeoning[i];
    //   $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_bludgeoning.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#b_magic").click(function() {
    // MINOR/MAGIC Table
    const b_magic = ["Allergic Reaction<br>Maximize all spell variables and target opponent within the spells range suffers 1d2 damage to a random ability score.<br>Save: A DC 20 Constitution negates ability damage. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.<br><br>D6 - Ability Type Damage<br>1 - Str<br>2 - Dex<br>3 - Con<br>4 - Int<br>5 - Wis<br>6 - Cha",
    "Arcane Blast<br>Maximize all spell variables and target opponent within the spells range suffers bonus damage again. This is a force effect.<br>Save: A DC 20 Dexterity save negates the arcane blast. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Arcane Glow<br>Maximize all spell variables and target opponent within the spells range glows as the spell faerie fire for 1d4 rounds. <br>Save: A DC 20 Resolve save negates the faerie fire. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Arcane Goo<br>Maximize all spell variables and one target square within the spells range is covered in arcane goo. Any creature in that square or who enters that square becomes entangled as the web spell.<br>Save: A DC 20 Dexterity check negates the entangled. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Recovery: A DC 20 Strength or Dexterity check allows you to escape the arcane goo entanglement. An opponent may make an attempt to escape at the beginning of their turn each round.",
    "Aura of Protection<br>Maximize all spell variables and you gain a +4 Deflection bonus to Defense rolls as the spell Mage Armor for 1d2 rounds. All allies within 10 feet gain 1/2 this bonus to their defense rolls as well. This is a force effect.<br>Save: If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Call of the Wild<br>Maximize all spell variables and summon animals to your aid as the spell Summon Natures Ally for 1d4 Rounds.<br>Save: If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The animal summoned from the Summon Natures Ally table may not be of a greater spell level of than you can cast.",
    "Combustion<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage catches fire suffering bonus damage again at the start of their turn for 1d4 rounds.<br>Save: A DC 20 Resolve save negates catching fire. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes fire.",
    "Concussive Spell<br>Maximize all spell variables and target opponent within the spells range is Staggered for 1 Round. <br>Save: DC 20 Constitution negates Staggered. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Conduit<br>Maximize all spell variables and target opponent within the spells range suffers disadvantage  on all saves made against your spells for 1d2 rounds. <br>Save: A DC 20 Resolve save negates the disadvantage. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check removes the disadvantage.",
    "Corrosive<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage also suffers damage to their armor as though it were acid damage.<br>Save: DC 20 Dexterity negates armor damage. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes acid. If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Cut Off From Magic<br>Maximize all spell variables and a target opponent within the spells range cannot cast spells or use spell like abilities for 1d2 rounds.<br>Save: If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check removes the cut off from magic effect.",
    "Distraction<br>Maximize all spell variables and an illusion of the caster appears adjacent to the caster or spell target. The illusion lasts for 1d4 rounds and can move up to 30 feet on your turn. When the illusion is within melee reach of an opponent it acts as a flanking partner for all allies. <br>Save: If the spell targeted an opponent. DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If an opponent makes an attack against the illusion it is an automatic miss but the attacker may make an immediate Intelligence save DC 20 to realize it is an illusion; if successful this also negates the flanking effect of the illusion.",
    "Dispelling<br>Maximize all spell variables and you may dispel as per the spell dispel magic on a target opponent or ally within the spells range.<br>Save: DC 20 Resolve negates Dispel. If the spell targeted an opponent. DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Draining Spell<br>Maximize all spell variables and a target opponent within the spells range randomly loses one of their spells known or one spell like abilities for 1 round.<br>Save: A DC 20 Resolve save negates the spell loss. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check Restores the lost spell or spell like ability.",
    "Electrocuted<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage is also staggered for 1 round.<br>Save: DC 20 Constitution negates staggered. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes electricity.",
    "Elemental Call<br>Maximize all spell variables and a Medium elemental appears to server you for 1d4 rounds.<br>Save: If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal an elemental type damage, the elemental that appears is of the same type.",
    "Excruciating<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage is sickened for 1d4 rounds.<br>Save: DC 20 Constitution negates Sickened. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Eyeburn<br>Maximize all spell variables and a target opponent within the spells range is blinded for 1d4 rounds. <br>Save: DC 20 Constitution negates Blinded. If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Frost Bite<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage also suffers 1d4 Dex damage.<br>Save: A DC 20 Resolve save negates the ability damage. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes cold.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Funny Bone<br>Maximize all spell variables and a target opponent within the spells range must spend their next turn laughing as the hideous laughter spell.<br>Save: A DC 20 Resolve save negates the laughter. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Hypnotic Link<br>Maximize all spell variables and you may give a target opponent within the spells range 1 suggestion as the spell suggestion. <br>Save: A DC 20 Resolve save negates the suggestion. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "I Love You, Man<br>Maximize all spell variables and a target opponent within the spells range is charmed for 1d2 hours as the spell Charm Person. <br>Save: If the spell targeted an opponent, DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: A DC 20 Resolve save negates the Charm Person; opponent may make a new save each round they are affected.",
    "Intense Flare<br>Maximize all spell variables and if spell deals damage, ignore any energy and magic damage resistance (but not immunity) each opponent  has and suppress those resistances for 1d4 rounds.<br>Save: DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check removes the flare effect returning their resistances to normal.",
    "Knockback<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage is pushed 1d6 squares directly away from you.<br>Save: A DC 20 Strength save negates the knock back. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Life Leach<br>Maximize all spell variables and a target opponent within the spells range is marked for death. If the marked opponent dies within 1d4 rounds, you draw forth an amount of life force as the spell Death Knell. <br>Save: If the spell targeted an opponent. DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check removes the mark.",
    "Light Blast<br>Maximize all spell variables and a target opponent within the spells range is blinded for 1d4 minutes.<br>Save: A DC 20 Dexterity save negates the blind. If the spell targeted an opponent. DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: A Heal check DC 10 repairs sight somewhat, but the recipient treats all targets as though they have concealment (20%). A DC 20 heal check will fully repair eyesight to normal levels.",
    "Lingering Magic<br>Maximize all spell variables and if spell has duration greater than instantaneous, each opponent or ally effected by the spell has its duration increased by 1d4 rounds.<br>Save: A DC 20 Resolve save negates the increased duration. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Maximum Effect<br>Maximize all spell variables and if the spell scales with caster level, increases the effective and maximum caster level by 2. <br>Save: If the spell targeted an opponent. DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Mind Cloud<br>Maximize all spell variables and a target opponent within the spells range is dazed for 1 round.<br>Save: A DC 20 Resolve save negates the daze. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Nerve Damage<br>Maximize all spell variables and a target opponent within the spells range is slowed as the spell Slow for 1d4 rounds.<br>Save: A DC 20 Resolve save negates the slow. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Olfactory Overload<br>Maximize all spell variables and a target opponent within the spells range is nauseated for 1 Round and cannot use the scent or blindsense abilites for 1 day.<br>Save: DC 20 Constitution save negates nauseated. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: A DC 20 Heal check removes the restores scent and blindsense abilites .",
    "Petrified<br>Maximize all spell variables and a target opponent within the spells range is petrified for 1d2 hours. <br>Save: DC 20 Resolve save negates petrified. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check removes the petrification.",
    "Phased<br>Maximize all spell variables and a target opponent or ally within the spells range becomes incorporeal for 1d3 rounds. <br>Save: DC 20 Resolve save negates Incorporeal. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Planar Rift<br>Maximize all spell variables and a target opponent within the spells range is banished to a random plane of existence for 1d2 rounds. When the banishment ends the opponent reappears 1d6 squares away from their previous location in a random direction.<br>Save: DC 20 Resolve save negates Banishment. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br><br>D10 - Planes<br>1 - Light<br>2 - Positive Energy<br>3 - Astral Plane<br>4 - Water<br>5 - Earth<br>6 - Fire<br>7 - Air<br>8 - Ethereal<br>9 - Negative Energy<br>10 - Shadow",
    "Power Surge<br>Maximize all spell variables and you may cast another spell as a Free Action at a -4 penalty. <br>Save: If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Pretty Colors<br>Maximize all spell variables and a target opponent within the spells range is dazzled for 1d4 rounds.<br>Save: DC 20 Resolve save negates dazzled. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Returning Spell<br>Maximize all spell variables and the casting Cooldown of the spell is reduced by 1 round (to a minimum of 0).",
    "Roaring Spell<br>Maximize all spell variables and a target opponent within the spells range is deafened for 1d4 rounds.<br>Save: DC 20 Constitution save negates deafened. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Shrink Ray<br>Maximize all spell variables and a target opponent within the spells range is reduced for 1d4 rounds as reduce person.<br>Save: DC 20 Resolve save negates reduce person. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Siren Song<br>Maximize all spell variables and a target opponent within the spells range is mesmerized for 1d6 Rounds.<br>Save: DC 20 Resolve save negates mesmerized. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Splash Spell<br>Maximize all spell variables and if spell deals damage to an opponent, deal half the total damage to all adjacent opponents as well.<br>Save: A DC 20 Dexterity save for adjacent opponents negates the splash damage. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Stunned<br>Maximize all spell variables and a target opponent within the spells range is stunned for 1 round.<br>Save: DC 20 Resolve save negates Stunned. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Surge<br>Maximize all spell variables and a target ally within the spells range is accelerated as the spell Haste for 1d4 rounds.<br>Save:. If the spell targeted an opponent, a DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Terrifying Display<br>Maximize all spell variables and a target ally within the spells range is shaken for 1d4 rounds.<br>Save: DC 20 Resolve save negates shaken. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Transposition<br>Maximize all spell variables and you may target an opponent or ally within the spells range and switch places with them.<br>Save: DC 20 Resolve save negates transposition. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Turned Around<br>Maximize all spell variables and a target opponent within the spells range is staggered for 1d2 rounds.<br>Save: DC 20 Resolve save negates staggered. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vampiric Magic<br>Maximize all spell variables and if spell deals damage, you gain a number of temporary hit points equal to the total amount of damage dealt for 1d6 rounds.<br>Save: DC 20 Resolve save halves the temporary health granted to you. If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vanish<br>Maximize all spell variables and you become invisible for 1d4 rounds as the spell invisibility.<br>Save: If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vulnerability<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage becomes vulnerable (suffers 50% additional damage) to that damage type for 1d4 rounds.<br>Save: DC 20 Resolve save negates vulnerability; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 20 Skill check removes the vulnerability returning their resistances to normal.",
    "Wild Surge<br>Maximize all spell variables and you gain a +2 critical range and critical fumble range for all spells you cast until the end of your next turn.(Critical Threat 18-20, Critical Fumble 1-3<br>Save: If the spell targeted an opponent DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead."    
    ];

    const randomNumber = getRandomInt(50);
    const text = b_magic[randomNumber];
    $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_magic.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = b_magic[i];
    //   $(".text").prepend("<p class=\"minor\">" + getTime() + "<br>" + "<img src=\"img\\b_magic.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#m_slashing").click(function() {
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
    "Fingertipped<br>Target suffers maximum damage and 1d2 Dex damage. Target cannot use hand until healed.<br>Save: A DC 25 Dexterity save negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check allows usage of hand, albeit with a -4 penalty to all rolls. A DC 25 Heal check repairs the hand’s use. Rest or restorative magic is needed to heal ability damage.<br><br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
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
    const text = m_slashing[randomNumber];
    $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_slashing.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = m_slashing[i];
    //   $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_slashing.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#m_piercing").click(function() {
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
    const text = m_piercing[randomNumber];
    $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_piercing.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = m_piercing[i];
    //   $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_piercing.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#m_bludgeoning").click(function() {
    // MAJOR/BLUDGEONING Table
    const m_bludgeoning = ["2 For 1<br>Target suffers maximum damage and you deal normal damage to one adjacent target.<br>Save: Adjacent target may make a DC 25 Dexterity save to negate.<br>Special: If there are no adjacent targets, deal bonus damage to original target.",
    "And Stay Down!<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Recover: A move-equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Armor Dent<br>Target suffers maximum damage plus bonus damage again and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 25 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Back Breaker<br>Target suffers maximum plus bonus damage and 1d6 Dex damage.<br>Save: DC 25 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bell Ringer<br>Target suffers maximum damage, 1d2 Int damage and is sickened for 1d3 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the sickened condition. Rest or restoration magic is needed to heal ability damage.",
    "Bone Masher<br>Target suffers maximum damage plus bonus damage again and suffers either 1d3 Dex damage and half speed (leg) or 1d3 Str damage (arm) and limb is useless until healed.<br>Save: DC 25 Constitution negates limb damage; deals bonus damage instead.<br>Heal: A DC 25 Heal check allows limb use and removes movement penalties. Rest or restoration magic is needed to heal ability damage.<br><br>D10 - Injury<br>1-5 Left Leg<br>6-10 Left Arm<br>11-15 Right Leg<br>16-20 Right Arm",
    "Box the Ears<br>Target suffers maximum damage and is deafened for 1d4 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A cure blindness/deafness spell or a DC 25 Heal check removes the deafened condition.",
    "Brained<br>Target suffers maximum damage and is staggered for 1d3 rounds.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A full-round action used to recover can remove the staggered condition.",
    "Breathless<br>Target suffers maximum damage and is fatigued for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest.",
    "Broken Leg<br>Target suffers maximum damage plus bonus damage again  plus1d2 Dex and 1d2 Con damage and target’s speeds are reduced by half until healed.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Broken Ribs<br>Target suffers maximum plus bonus damage again and cannot heal naturally for 1d2 days.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic.",
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
    "Knockback<br>Target suffers maximum plus bonus damage again and is pushed 1d3 squares directly away.<br>Save: DC 25 Strength negates; deals additional bonus damage instead.",
    "Lights Out<br>Target suffers maximum damage and is blinded for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the blinded condition.",
    "Low Blow<br>Target suffers maximum damage plus bonus damage again and is sickened for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check negates the sickened condition.",
    "Mace to Da Face<br>Target suffers maximum damage and is dazed and blinded for 1 round.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the dazed condition.",
    "Momentum<br>You deal maximum damage and gain a +3 circumstance bonus on all your attack rolls until the end of your next turn.",
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
    "Shield Smack<br>Target suffers maximum damage plus bonus damage again and target’s shield is loosened, causing it to no longer grant its shield bonus for that round, or off-hand weapon is disarmed landing in the targets square.<br>Save: A DC 25 Dexterity save negates; deals bonus damage instead.<br>Special: If target is not using a shield, deals additional bonus damage instead.<br>Recover: Picking up an item is a move-equivalent action that provokes attacks of opportunity from threatening opponents.",
    "Skull Crack<br>Target suffers maximum damage and 1d4 Int damage.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Solid Blow<br>You deal maximum damage plus double bonus damage again.<br>Save: None",
    "Split Open<br>Target suffers maximum damage and 2d4 bleed.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the bleed effect, while a DC 25 Heal check ends it.",
    "Spun Around<br>Target suffers maximum damage and is flat-footed for 1d2 rounds.<br>Save: A DC 25 Dexterity negates; deals bonus damage instead.",
    "Staggering Blow<br>Target suffers maximum damage plus bonus damage again. And suffers an equal amount of nonlethal damage.<br>Save: A DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.",
    "Surprise Opening<br>Target suffers maximum damage and you may make one additional free attack against the target at a -2 penalty.",
    "Terrible Bruise<br>Target suffers maximum damage and 2d6 nonlethal damage.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.<br>Save: None.",
    "Thunder Strike<br>Target suffers maximum damage and is deafened for 1d2 rounds.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check removes the deafened condition.",
    "Tiring Blow<br>Target suffers maximum damage plus bonus damage again and becomes fatigued.<br>Save: DC 25 Constitution negates; deals bonus damage instead.<br>Heal: Short or Long Rest.",
    "To Your Thinky Bits<br>Target suffers maximum damage plus bonus damage again and 1 Int damage.<br>Save: Constitution 25 negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to restore ability damage.",
    "What’s Going On?<br>Target suffers maximum plus bonus damage again and 1d4 hours of target’s memory is erased.<br>Save: DC 25 Constitution save negates; deals additional bonus damage instead.<br>Heal: A DC 25 Heal check restores target’s memory (no retry).",
    "Where Am I?<br>Target suffers maximum damage plus bonus damage again and is stunned for 1 round.<br>Save: DC 25 Constitution negates; deals bonus damage instead."    
    ];

    const randomNumber = getRandomInt(50);
    const text = m_bludgeoning[randomNumber];
    $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_bludgeoning.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = m_bludgeoning[i];
    //   $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_bludgeoning.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#m_magic").click(function() {
    // MAJOR/MAGIC Table
    const m_magic = ["Allergic Reaction<br>Maximize all spell variables and target opponent within the spells range suffers 1d4 damage to a random ability score.<br>Save: A DC 25 Constitution negates ability damage. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.<br><br>D6 - Ability Type Damage<br>1 - Str<br>2 - Dex<br>3 - Con<br>4 - Int<br>5 - Wis<br>6 - Cha",
    "Arcane Blast<br>Maximize all spell variables and target opponent within the spells range suffers double bonus damage again. This is a force effect.<br>Save: A DC 25 Dexterity save negates the arcane blast. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Arcane Glow<br>Maximize all spell variables and target opponent within the spells range glows as the spell faerie fire for 1d6 rounds. <br>Save: A DC 25 Resolve save negates the faerie fire. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Arcane Goo<br>Maximize all spell variables and up to two target squares within the spells range is covered in arcane goo. Any creature in that square or who enters that square becomes entangled as the web spell.<br>Save: A DC 25 Dexterity check negates the entangled. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Recovery: A DC 25 Strength or Dexterity check allows you to escape the arcane goo entanglement. An opponent may make an attempt to escape at the beginning of their turn each round.",
    "Aura of Protection<br>Maximize all spell variables and you gain a +4 Deflection bonus to Defense rolls as the spell Mage Armor for 1d4 rounds. All allies within 20 feet gain 1/2 this bonus to their defense rolls as well. This is a force effect.<br>Save: If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Call of the Wild<br>Maximize all spell variables and summon animals to your aid as the spell Summon Natures Ally for 1d6 Rounds.<br>Save: If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The animal summoned from the Summon Natures Ally table may not be of a greater spell level of than you can cast.",
    "Combustion<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage catches fire suffering double bonus damage again at the start of their turn for 1d4 rounds.<br>Save: A DC 25 Resolve save negates catching fire. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes fire.",
    "Concussive Spell<br>Maximize all spell variables and target opponent within the spells range is Staggered for 2 Rounds. <br>Save: DC 25 Constitution negates Staggered. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Conduit<br>Maximize all spell variables and target opponent within the spells range suffers disadvantage  on all saves made against your spells for 1d4 rounds. <br>Save: A DC 25 Resolve save negates the disadvantage. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 25 Skill check removes the disadvantage.",
    "Corrosive<br>Maximize all spell variables and if spell deals damage, they suffer bonus damage again and each opponent who suffers damage also suffers damage to their armor as though it were acid damage.<br>Save: DC 25 Dexterity negates armor damage. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes acid. If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Cut Off From Magic<br>Maximize all spell variables and a target opponent within the spells range cannot cast spells or use spell like abilities for 1d4 rounds.<br>Save: If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 25 Skill check removes the cut off from magic effect.",
    "Distraction<br>Maximize all spell variables and an illusion of the caster appears adjacent to the caster or spell target. The illusion lasts for 1d6 rounds and can move up to 30 feet on your turn. When the illusion is within melee reach of an opponent it acts as a flanking partner for all allies. <br>Save: If the spell targeted an opponent. DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If an opponent makes an attack against the illusion it is an automatic miss but the attacker may make an immediate Intelligence save DC 25 to realize it is an illusion; if successful this also negates the flanking effect of the illusion.",
    "Dispelling<br>Maximize all spell variables and you may dispel as per the spell dispel magic on a target opponent or ally within the spells range.<br>Save: DC 25 Resolve negates Dispel. If the spell targeted an opponent. DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Draining Spell<br>Maximize all spell variables and a target opponent within the spells range randomly loses one of their spells known or one spell like abilities for 1d4 rounds.<br>Save: A DC 25 Resolve save negates the spell loss. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 25 Skill check Restores the lost spell or spell like ability.",
    "Electrocuted<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage is also dazed for 1 round.<br>Save: DC 25 Constitution negates dazed. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes electricity.",
    "Elemental Call<br>Maximize all spell variables and a Large elemental appears to server you for 1d4 rounds.<br>Save: If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal an elemental type damage, the elemental that appears is of the same type.",
    "Excruciating<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage is sickened for 2d4 rounds.<br>Save: DC 25 Constitution negates Sickened. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Eyeburn<br>Maximize all spell variables and a target opponent within the spells range is blinded for 1d6 rounds. <br>Save: DC 25 Constitution negates Blinded. If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Frost Bite<br>Maximize all spell variables and if spell deals damage deal bonus damage again and each opponent who suffers damage also suffers 1d4 Dex damage.<br>Save: A DC 25 Resolve save negates the ability damage. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes cold.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Funny Bone<br>Maximize all spell variables and a target opponent within the spells range must spend their next two turns laughing as the hideous laughter spell.<br>Save: A DC 25 Resolve save negates the laughter. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Hypnotic Link<br>Maximize all spell variables and you may give a target opponent within the spells range 2 suggestion as the spell suggestion. <br>Save: A DC 25 Resolve save negates the suggestion. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "I Love You, Man<br>Maximize all spell variables and a target opponent within the spells range is charmed for 1d4 hours as the spell Charm Person. <br>Save: If the spell targeted an opponent, DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: A DC 25 Resolve save negates the Charm Person; opponent may make a new save each round they are affected.",
    "Intense Flare<br>Maximize all spell variables and if spell deals damage, ignore any energy and magic damage resistance (but not immunity) each opponent  has and suppress those resistances for 1d6 rounds.<br>Save: DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 25 Skill check removes the flare effect returning their resistances to normal.",
    "Knockback<br>Maximize all spell variables and if spell deals damage deal bonus damage again and each opponent who suffers damage is pushed 1d6 squares directly away from you.<br>Save: A DC 25 Strength save negates the knock back. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Life Leach<br>Maximize all spell variables and a target opponent within the spells range is marked for death. If the marked opponent dies within 2d4 rounds, you draw forth an amount of life force as the spell Death Knell. <br>Save: If the spell targeted an opponent. DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 25 Skill check removes the mark.",
    "Light Blast<br>Maximize all spell variables and a target opponent within the spells range is blinded for 1d4 hours.<br>Save: A DC 25 Dexterity save negates the blind. If the spell targeted an opponent. DC 20 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: A Heal check DC 15 repairs sight somewhat, but the recipient treats all targets as though they have concealment (20%). A DC 25 heal check will fully repair eyesight to normal levels.",
    "Lingering Magic<br>Maximize all spell variables and if spell has duration greater than instantaneous, each opponent or ally effected by the spell has its duration increased by 1d6 rounds.<br>Save: A DC 25 Resolve save negates the increased duration. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Maximum Effect<br>Maximize all spell variables and if the spell scales with caster level, increases the effective and maximum caster level by 6. <br>Save: If the spell targeted an opponent. DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Mind Cloud<br>Maximize all spell variables and a target opponent within the spells range is dazed for 2 rounds.<br>Save: A DC 25 Resolve save negates the daze. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Nerve Damage<br>Maximize all spell variables and a target opponent within the spells range is slowed as the spell Slow for 1d6 rounds.<br>Save: A DC 25 Resolve save negates the slow. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Olfactory Overload<br>Maximize all spell variables and a target opponent within the spells range is nauseated for 2 Rounds and cannot use the scent or blindsense abilites for 1 day.<br>Save: DC 25 Constitution save negates nauseated. If the spell targeted an opponent DC 25 save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: A DC 25 Heal check removes the restores scent and blindsense abilities.",
    "Petrified<br>Maximize all spell variables and a target opponent within the spells range is petrified for 1d2 days. <br>Save: DC 25 Resolve save negates petrified. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 25 Skill check removes the petrification.",
    "Phased<br>Maximize all spell variables and a target opponent or ally within the spells range becomes incorporeal for 1d6 rounds. <br>Save: DC 25 Resolve save negates Incorporeal. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Planar Rift<br>Maximize all spell variables and a target opponent within the spells range is banished to a random plane of existence for 1d4 rounds. When the banishment ends the opponent reappears 1d6 squares away from their previous location in a random direction.<br>Save: DC 25 Resolve save negates Banishment. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br><br>D10 - Planes<br>1 - Light<br>2 - Positive Energy<br>3 - Astral Plane<br>4 - Water<br>5 - Earth<br>6 - Fire<br>7 - Air<br>8 - Ethereal<br>9 - Negative Energy<br>10 - Shadow",
    "Power Surge<br>Maximize all spell variables and you may cast another spell as a Free Action at a -2 penalty. <br>Save: If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Pretty Colors<br>Maximize all spell variables and a target opponent within the spells range is dazzled for 2d4 rounds.<br>Save: DC 25 Resolve save negates dazzled. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Returning Spell<br>Maximize all spell variables and the casting Cooldown of the spell is reduced by 2 rounds (to a minimum of 0).",
    "Roaring Spell<br>Maximize all spell variables and a target opponent within the spells range is deafened for 2d4 rounds.<br>Save: DC 25 Constitution save negates deafened. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Shrink Ray<br>Maximize all spell variables and a target opponent within the spells range is reduced for 1d6 rounds as reduce person.<br>Save: DC 25 Resolve save negates reduce person. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Siren Song<br>Maximize all spell variables and a target opponent within the spells range is mesmerized for 1d8 Rounds.<br>Save: DC 25 Resolve save negates mesmerized. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Splash Spell<br>Maximize all spell variables and if spell deals damage to an opponent deal bonus damage again, deal half the total damage to all adjacent opponents as well.<br>Save: A DC 25 Dexterity save for adjacent opponents negates the splash damage. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Stunned<br>Maximize all spell variables and a target opponent within the spells range is stunned for 2 rounds.<br>Save: DC 25 Resolve save negates Stunned. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Surge<br>Maximize all spell variables and a target ally within the spells range is accelerated as the spell Haste for 1d6 rounds.<br>Save:. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Terrifying Display<br>Maximize all spell variables and a target ally within the spells range is frightened for 1d4 rounds.<br>Save: DC 25 Resolve save reduces the frightened to shaken. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Transposition<br>Maximize all spell variables and you may target an opponent or ally within the spells range and switch places with them.<br>Save: DC 25 Resolve save negates transposition. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Turned Around<br>Maximize all spell variables and a target opponent within the spells range is staggered for 1d2 rounds.<br>Save: DC 25 Resolve save negates staggered. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vampiric Magic<br>Maximize all spell variables and if spell deals damage deal bonus damage again, you gain a number of temporary hit points equal to the total amount of damage dealt for 1d6 rounds.<br>Save: DC 25 Resolve save halves the temporary health granted to you. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vanish<br>Maximize all spell variables and you become invisible for 1d6 rounds as the spell invisibility.<br>Save: If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vulnerability<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage becomes vulnerable (suffers 50% additional damage) to that damage type for 1d6 rounds.<br>Save: DC 25 Resolve save negates vulnerability; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 25 Skill check removes the vulnerability returning their resistances to normal.",
    "Wild Surge<br>Maximize all spell variables and you gain a +5 critical range and critical fumble range for all spells you cast until the end of your next turn. (Critical Threat 15-20, Critical Fumble 1-6<br>Save: If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead."    
    ];

    const randomNumber = getRandomInt(50);
    const text = m_magic[randomNumber];
    $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_magic.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = m_magic[i];
    //   $(".text").prepend("<p class=\"major\">" + getTime() + "<br>" + "<img src=\"img\\m_magic.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#s_slashing").click(function() {
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
    "Severed Fingers<br>Target suffers maximum damage plus bonus damage again, loses 1d3 fingers, and 1d2 Dex drain. Target cannot use hand until healed.<br>Save: A DC 30 Dexterity save negates; deals bonus damage instead.<br>Heal: Regenerate spell<br><br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
    "Flat Blade Thwack<br>Target suffers maximum damage plus triple bonus damage again and is stunned for 1 round, but all damage is non-lethal.<br>Save: A DC 30 Constitution save negates stunned condition and halves additional bonus damage.<br>Heal: Rest or curative magic.",
    "Flay<br>Target suffers maximum damage plus bonus damage again and 1d6 Str damage.<br>Save: A DC 30 Constitution negates Str damage; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Gory Wound<br>Target suffers maximum damage plus bonus damage again and is sickened for 1d6 rounds.<br>Save: A DC 30 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the sickened condition.",
    "Gut Slash<br>Target suffers maximum damage plus bonus damage again and 1d8 bleed. Target cannot swallow whole until healed.<br>Save: A DC 30 Constitution halves the bleed effect (minimum 1).<br>Heal: A DC 20 Heal check halves the bleed effect; a DC 30 Heal check ends it.",
    "Hack and Slash<br>Target suffers maximum damage plus bonus damage again and you gain a +1 crit range and +4 bonus to Severity Checks against that opponent for the next three rounds.",
    "Hacked Digits<br>Target suffers maximum damage plus bonus damage again, and takes 1d3 Con and Str damage.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or Restoration spell.",
    "Severed Hand<br>Target suffers maximum damage plus bonus damage again, loses hand and takes 1d3 Con and Str drain.<br>Save: A DC 30 Constitution negates hand loss and ability drain becomes ability damage.<br>Heal: Regenerate spell.<br><br>D10 - Injury<br>1-5 Left Hand<br>6-10 Right Hand",
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
    const text = s_slashing[randomNumber];
    $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_slashing.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = s_slashing[i];
    //   $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_slashing.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#s_piercing").click(function() {
    // SEVERE/PIERCING Table
    const s_piercing = ["Achilles’ Heel<br>Target suffers maximum damage plus bonus damage again and 1d4 Dex damage. Target’s movement speeds are reduced by half until healed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the movement penalty.",
    "Bicep Wound<br>Target suffers maximum plus bonus damage again and 1d4 Str damage.<br>Save: A DC 25 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bleeder<br>Target suffers maximum damage plus bonus damage again and 2d6 bleed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the bleed condition.",
    "Blown Back<br>Target suffers maximum damage plus bonus damage again and is knocked prone.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Recover: Standing from prone is a move-equivalent action that provokes attacks of opportunity from threatening foes.",
    "Calf Hole<br>Target suffers maximum damage plus bonus damage again and 1d4+1 Dex damage.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Cheek Pierced<br>Target suffers maximum damage and 1d6 bleed. Target also suffers an additional 50% spell failure chance (-10 to casting rolls) for verbal spells until healed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the bleed effect and removes the spell failure chance.",
    "Chipped Bone<br>Target suffers maximum damage plus bonus damage again and 1d4 Dex+1 damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Clean Through<br>Target suffers maximum damage plus bonus damage again, 1d6 bleed, and 1 Con drain.<br>Save: A DC 30 Constitution negates Con drain and halves bleed effect; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the bleed effect. Rest or restoration magic is needed to heal ability damage.",
    "Deep Hurting<br>Target suffers maximum damage plus bonus damage again and is fatigued.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or a DC 30 Heal check ends the fatigued condition.",
    "Deep Wound<br>Target suffers maximum damage plus bonus damage again and is nauseated for 2 rounds.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the nauseated condition.",
    "Elbow Pierced<br>Target suffers maximum damage plus bonus damage again and drops whatever is being held in hand (1 item).<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Recover: Retrieving a dropped item is a move equivalent action that provokes attacks of opportunity from threatening foes.<br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Eye Patch For You<br>Target suffers maximum damage plus double bonus damage again and 1d2 Con drain. Target also suffers a -4 penalty on Perception checks and ranged attacks until healed.<br>Save: A DC 30 Dexterity negates; deals additional bonus damage instead.<br>Heal: A DC 30 Heal check removes the Perception and attack penalties.",
    "Forearm Piercing<br>Target suffers maximum damage plus bonus damage again and is disarmed (1 item).<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Recover: Retrieving a dropped item is a move equivalent action that provokes attacks of opportunity from threatening foes.<br>Special: If target is not holding any items, deal additional bonus damage instead.",
    "Guarded Strike<br>You deal maximum damage plus bonus damage again and gain a +3 bonus to your Defense rolls until the end of your next turn.",
    "Grazing Hit<br>Target suffers maximum damage plus bonus damage again and is stunned for 1 round.<br>Save: A DC 30 Constitution negates; deals bonus damage.<br>Heal: A DC 30 Heal check ends the stunned condition.",
    "Hand Wound<br>Target suffers maximum damage plus bonus damage again and 1d2 Dex damage. Target suffers a -4 penalty on all attack rolls and skill checks using that hand until healed.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check is needed to end the wound penalty. Rest or restorative magic is needed to heal ability damage.",
    "Heart Shot<br>Target’s heart ruptures and they immediately die.<br>Save: A DC 30 Constitution negates death; deals 2d4 Con drain and bonus damage instead.<br>Heal: Restorative magic is needed to heal ability drain.",
    "In A Row<br>You deal maximum damage plus bonus damage again and deal double bonus damage to an adjacent opponent you also threaten.<br>Save: A DC 30 Dexterity negates (secondary target only); deals additional damage instead.<br>Special: If no adjacent opponents are available, deal the additional bonus damage to the original target instead.",
    "Kidney Piercing<br>Target suffers maximum damage plus bonus damage again and is sickened for 2d6 rounds.<br>Save: A DC 30 Constitution negates; deals damage instead.<br>Heal: A DC 30 Heal check ends the sickened condition.",
    "Left Reeling<br>Target suffers maximum damage plus bonus damage again and a -2 penalty to Defense rolls for 1d4 rounds.<br>Save: A DC 30 Resolve negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the Defense penalty.",
    "Leg Wound<br>Target suffers maximum damage plus bonus damage again and target’s land speed is halved for 1d8 rounds.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the speed penalty.",
    "Lodged In The Bone<br>Target suffers maximum damage plus bonus damage again and 1d6 bleed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Requires a DC 20 Strength check (causing 1d6 damage) or DC 30 Heal check to remove.",
    "Momentum<br>You deal maximum damage plus bonus damage again and gain a +3 circumstance bonus on all your attack rolls until the end of your next turn.",
    "Muscle Severed<br>Target suffers maximum damage plus bonus damage again, 1d4 Dex damage, and 1d4 Str damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic.",
    "Nailed In Place<br>Target suffers maximum damage plus bonus damage again and cannot move.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Recover: Target must succeed at a DC 20 Strength check to free themselves.<br>Special: If not dealt by a ranged attack, the attacker’s melee weapon is stuck in the target’s square. The attacker may also attempt to remove the weapon as a standard action.",
    "Nerve Cluster<br>Target suffers maximum damage and is stunned for 1d6 rounds.<br>Save: A DC 30 Constitution save negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the stunned condition.<br>Special: The player may also make a DC 25 Constitution save each round to be staggered instead for that round.",
    "Nicked An Artery<br>Target suffers maximum damage and 2d6 bleed.<br>Save: A DC 30 Constitution halves the bleed effect.<br>Heal: A DC 30 Heal check ends the bleed effect.",
    "Organ Scramble<br>Target suffers maximum damage plus bonus damage again and 1d6 Con damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Overreaction<br>Target suffers maximum damage and provokes attacks of opportunity from all threatening opponents.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.",
    "Painful Poke<br>Target suffers maximum damage plus bonus damage again and is staggered for 1d2 rounds.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.",
    "Penetrating Wound<br>Target suffers maximum damage plus bonus damage again and this attack ignores all DR.<br>Save: A DC 30 Dexterity negates; deals additional bonus damage instead.<br>Special: If target does not have DR, deal additional bonus damage instead.",
    "Perfect Strike<br>Target suffers maximum damage plus triple bonus damage again!<br>Save: None.",
    "Pierced<br>Target suffers maximum damage plus bonus damage again and is dazed for 1d3+1 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the dazed condition.",
    "Pierced Appendix<br>Target suffers maximum damage plus bonus damage again and is both sickened and poisoned (treat as greenblood-oil).<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the sickened condition. Target must succeed at a Constitution save to overcome the poison.",
    "Pincushion<br>Target suffers maximum damage plus bonus damage again and 1d8 bleed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check end the bleed effect.",
    "Pinhole<br>Target suffers maximum damage plus bonus damage again and 1d6 bleed. Target takes 2 additional bleed (cumulative) each round until healed.<br>Save: DC 30 Constitution negates bleed effect (save each round).<br>Heal: Curative magic or a Heal check DC 30 ends the bleed effect.",
    "Pinned Arm<br>Target suffers maximum damage plus bonus damage again and one arm becomes immobile.<br>Save: A DC 30 Dexterity negates; deals additional bonus damage instead.<br>Heal: A DC 30 Heal check or DC 20 Strength check removes the weapon or projectile, allowing mobility.<br>Special: If not dealt by a ranged attack, the attacker’s melee weapon is stuck in the target’s arm. The attacker may also attempt to remove the weapon as a standard action.",
    "Punctured Lung<br>Target suffers maximum damage plus bonus damage again and begins to drown.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the drowning condition.",
    "Ragged Wound<br>Target suffers maximum damage plus bonus damage again and 1d8 bleed.<br>Save: DC 30 Constitution halves bleed effect (each round).<br>Heal: A DC 30 Heal check ends the bleed effect.",
    "Right In The Ear<br>Target suffers maximum damage plus bonus damage again, 1d2 Int damage, and 1d4 bleed.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the bleed effect. Rest or restorative magic is needed to heal ability damage.",
    "Shoulder Wound<br>Target suffers maximum damage plus bonus damage again, 1d4 Str damage, and 1d4 Dex damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Spinal Tap<br>Target suffers maximum damage plus bonus damage again and a -4 penalty on attack rolls, skill checks, and ability checks for 1d4 rounds.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the attack, skill, and ability penalties.",
    "Spun Around<br>Target suffers maximum damage plus bonus damage again and is flat-footed for 1d3 rounds.<br>Save: A DC 30 Dexterity negates; deals additional bonus damage instead.<br>Recover: A DC 30 Acrobatics check ends the flatfooted condition.",
    "Stinger<br>Target suffers maximum damage plus bonus damage again and is sickened for 1d6 rounds.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the sickened condition.",
    "Sucking Chest Wound<br>Target suffers maximum damage plus bonus damage again and is exhausted.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check reduces the exhausted condition to being fatigued.",
    "Surprise Opening<br>Target suffers maximum damage plus bonus damage again and you may make one additional free attack against the target at a no penalty.",
    "Tenacious Wound<br>Target suffers maximum damage plus bonus damage again and 1d4 Con damage. Target does not heal this ability damage naturally.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Target must receive restorative magic or pass a DC 30 Constitution save each day to recover a point of Con after resting.",
    "Tongue Piercing<br>Target suffers maximum damage plus bonus damage again and 1 Con damage. Target gains 50% spell failure chance (-10 to spell casting rolls) for verbal spells until healed.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the spell failure chance. Rest or restorative magic is needed to heal ability damage.",
    "Ventilated<br>Target suffers maximum damage plus bonus damage again and 2d4 points of bleed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 25 Heal check will halve the bleed damage; Curative magic or a DC 30 Heal check ends the bleed effect.",
    "Vulnerable Spot<br>Target suffers maximum damage plus bonus damage again and takes 1d4 random ability damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.<br><br>D6 - Ability Type Damage<br>1 - Str<br>2 - Dex<br>3 - Con<br>4 - Int<br>5 - Wis<br>6 - Cha"    
    ];

    const randomNumber = getRandomInt(50);
    const text = s_piercing[randomNumber];
    $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_piercing.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = s_piercing[i];
    //   $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_piercing.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#s_bludgeoning").click(function() {
    // SEVERE/BLUDGEONING Table
    const s_bludgeoning = ["2 For 1<br>Target suffers maximum damage plus bonus damage again and you deal normal damage to one adjacent target.<br>Save: Adjacent target may make a DC 30 Dexterity save to negate.<br>Special: If there are no adjacent targets, deal bonus damage again to original target.",
    "And Stay Down!<br>Target suffers maximum damage plus bonus damage again and is knocked prone and unconscious for 1 round.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Recover: A move-equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Armor Dent<br>Target suffers maximum damage plus double bonus damage again and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 30 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Back Breaker<br>Target suffers maximum plus bonus damage and 2d4 Dex damage.<br>Save: DC 30 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.",
    "Bell Ringer<br>Target suffers maximum damage, 1d2 Int damage and is nauseated for 1d3 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the nauseated condition. Rest or restoration magic is needed to heal ability damage.",
    "Bone Masher<br>Target suffers maximum damage plus bonus damage again and suffers either 1d4 Dex damage and half speed (leg) or 1d4 Str damage (arm) and limb is useless until healed.<br>Save: DC 30 Constitution negates limb damage; deals bonus damage instead.<br>Heal: A DC 30 Heal check allows limb use and removes movement penalties. Rest or restoration magic is needed to heal ability damage.<br><br>D10 - Injury<br>1-5 Left Leg<br>6-10 Left Arm<br>11-15 Right Leg<br>16-20 Right Arm",
    "Box the Ears<br>Target suffers maximum damage plus bonus damage again and is deafened for 1d6 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A cure blindness/deafness spell or a DC 30 Heal check removes the deafened condition.",
    "Brained<br>Target suffers maximum damage plus bonus damage again and is staggered for 1d3 rounds.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the staggered condition.",
    "Breathless<br>Target suffers maximum damage plus bonus damage again and is exhausted for 1d3 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check reduced exhaustion to fatigue. A second Heal check removes fatigue, as dose rest.",
    "Broken Leg<br>Target suffers maximum damage plus bonus damage again plus1d4 Dex and 1d4 Con damage and target’s speeds are reduced by half until healed.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Broken Ribs<br>Target suffers maximum plus bonus damage again and cannot heal naturally for 1d4 days.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Curative magic.",
    "Collapsed Lung<br>Target suffers maximum damage plus bonus damage again and is staggered for 1d4 minutes.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the staggered condition.",
    "Concussion<br>Target suffers maximum damage plus bonus damage again and is staggered for 1d4 minutes.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the staggered condition.",
    "Cracked Knee<br>Target suffers maximum damage and 1d3 Dex damage. Target’s base land speed reduced to 5 feet until healed.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the movement penalty, but rest or restorative magic is needed to heal ability damage.",
    "Cracked Rib<br>Target suffers maximum damage plus bonus damage again, 1d3 Con damage, and is fatigued.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Rest and restorative magic.",
    "Crumpling Blow<br>Target suffers maximum damage plus bonus damage again and is knocked prone.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Recover: Target must expend a move-equivalent action to stand from prone. This provokes an attack of opportunity from all threatening opponents.",
    "Crunch<br>Target suffers maximum damage plus bonus damage again and is sickened for 1d6 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the sickened condition.",
    "Crushed Intestines<br>Target suffers maximum damage plus bonus damage again and 1d2 Con bleed.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: a DC 30 Heal check stops the Con Bleed, while Rest or restorative magic is needed to heal ability damage.",
    "Crushed Trachea<br>Target suffers maximum damage plus bonus damage again and cannot breathe or speak.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the condition.",
    "Earth Rumble<br>Target suffers maximum damage plus bonus damage again and target plus all adjacent opponents are knocked prone.<br>Save: DC 30 Dexterity negates; deals bonus damage instead.<br>Recover: Standing from prone is a move-equivalent action that provokes attacks of opportunity from all threatening opponents.",
    "Feeble Parry<br>Target suffers maximum damage, 1d2 Dex Damage, and is disarmed of 1 held item (attacker’s choice). Object is thrown 1d6 squares in a random direction.<br>Save: DC 30 Dexterity negates; deals bonus damage instead.<br>Recover: Picking up a dropped object is a move equivalent action that provokes attacks of opportunity from threatening opponents.",
    "I See Stars<br>Target suffers maximum damage plus bonus damage again and a 30% miss chance for 1d4 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check negates the miss chance.",
    "Knockback<br>Target suffers maximum damage plus bonus damage again and is pushed 1d6 squares directly away.<br>Save: DC 30 Strength negates; deals additional bonus damage instead.",
    "Lights Out<br>Target suffers maximum damage plus bonus damage again and is blinded for 1d2 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the blinded condition.",
    "Low Blow<br>Target suffers maximum damage plus bonus damage again and is nauseated for 1d2 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check negates the sickened condition.",
    "Mace to Da Face<br>Target suffers maximum damage plus bonus damage again and is dazed and blinded for 1 round.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the dazed condition.",
    "Momentum<br>You deal maximum damage plus bonus damage again and gain a +3 circumstance bonus on all your attack rolls until the end of your next turn.",
    "My Teef!<br>Target suffers maximum damage plus bonus damage again and 1 Con damage. Target’s bite attacks are at a -3 penalty, and target suffers a 30% spell failure chance (-6 to casting rolls) for verbal spells.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check repairs teeth, removing bite penalty and removing the spell failure chance.",
    "Nighty Night<br>Target suffers maximum damage plus bonus damage again, falls prone, and is unconscious for 1d3 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check allows the target to regain consciousness.<br>Recover: A move equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.",
    "Numbing Blow<br>Target suffers maximum damage plus bonus damage again, 1d3 Dex damage, and target is disarmed of 1 item (attacker’s choice). Object is dropped in thrown 1d6 squares in a random direction.<br>Save: DC 30 Dexterity negates; deals bonus damage instead.<br>Heal: Rest and restorative magic can heal the ability damage.<br>Recover: Picking up an item is a move-equivalent action that provokes attacks of opportunity from threatening opponents.",
    "Off Balance<br>Target suffers maximum damage plus bonus damage again, becomes flat-footed until the beginning of their next turn, and provokes attacks of opportunity from all threatening opponents.<br>Save: DC 30 Dexterity negates; deals bonus damage instead.",
    "Pimp Slap<br>Target suffers maximum damage plus bonus damage again and target is dazed for 1d3 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check negates the dazed condition.",
    "Rattled<br>Target suffers maximum damage plus bonus damage again and is confused for 1d2 rounds.<br>Save: DC 30 Resolve negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check ends the confused condition.",
    "Roundhouse<br>Target suffers maximum damage plus bonus damage again and you gain a free attack against all threatened foe adjacent to the original target at a -2 penalty. If no additional target exists, deal bonus damage again to the original target.",
    "Ruptured Organ<br>Target suffers maximum damage plus bonus damage again and 2d6 bleed. This bleed can only be cured with magic.<br>Save: DC 30 Constitution negates bleed; deals bonus damage instead.<br>Heal: A DC 30 Heal check halves the bleed effect.",
    "Shattered Hand<br>Target suffers maximum damage plus bonus damage again and 1d2 Con and Str damage. All attacks and skill checks using that hand suffer a -2 penalty.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes penalties, but rest or restorative magic is needed to heal ability damage.",
    "Shattered Nose<br>Target suffers maximum damage plus bonus damage again, 1d4 Cha damage, and 2d4 bleed.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check heals the bleed effect, but rest or restorative magic is needed to heal ability damage.",
    "Shield Smack<br>Target suffers maximum damage plus bonus damage again and target’s shield or off-hand weapon is disarmed landing in the targets square.<br>Save: A DC 30 Dexterity save negates; deals bonus damage instead.<br>Special: If target is not using a shield, deals additional bonus damage instead.<br>Recover: Picking up an item is a move-equivalent action that provokes attacks of opportunity from threatening opponents.",
    "Skull Crush<br>Target’s skull is crushed and immediately dies.<br>Save: DC 30 Constitution negates death; deals maximum damage plus 2d4 Int drain instead.<br>Heal: Rest or restoration magic.",
    "Solid Blow<br>You deal maximum damage plus triple bonus damage again.<br>Save: None",
    "Split Open<br>Target suffers maximum damage plus bonus damage again and 2d6 bleed.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 15 Heal check halves the bleed effect, while a DC 30 Heal check ends it.",
    "Spun Around<br>Target suffers maximum damage plus bonus damage again and is flat-footed for 1d4 rounds.<br>Save: A DC 30 Dexterity negates; deals bonus damage instead.",
    "Staggering Blow<br>Target suffers maximum damage plus double bonus damage again. And suffers an equal amount of nonlethal damage.<br>Save: A DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour.",
    "Surprise Opening<br>Target suffers maximum damage plus bonus damage again and you may make one additional free attack against the target at no penalty.",
    "Terrible Bruise<br>Target suffers maximum damage plus bonus damage again, 1 Con damage, and 2d6 nonlethal damage.<br>Save: A DC 30 Constitution partially negates; deals maximum damage plus 2d6 nonlethal damage instead.<br>Heal: Nonlethal damage heals naturally at a rate of 1 point per hour. Rest or restorative magic is needed to restore ability damage.",
    "Thunder Strike<br>Target suffers maximum damage plus bonus damage again and is deafened for 1d4 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check removes the deafened condition.",
    "Tiring Blow<br>Target suffers maximum damage plus bonus damage again and becomes Exhausted.<br>Save: DC 30 Constitution negates; deals bonus damage instead.<br>Heal: Long Rest.",
    "To Your Thinky Bits<br>Target suffers maximum damage plus bonus damage again and 1 Int bleed.<br>Save: Constitution 30 negates; deals bonus damage instead.<br>Heal: A DC 30 Heal check will end the Int bleed. Rest or restorative magic is needed to restore ability damage.",
    "What’s Going On?<br>Target suffers maximum plus bonus damage again and 1d8 hours of target’s memory is erased.<br>Save: DC 30 Constitution save negates; deals additional bonus damage instead.<br>Heal: A DC 30 Heal check restores target’s memory (no retry).",
    "Where Am I?<br>Target suffers maximum damage plus bonus damage again and is stunned for 1d2 rounds.<br>Save: DC 30 Constitution negates; deals bonus damage instead."    
    ];

    const randomNumber = getRandomInt(50);
    const text = s_bludgeoning[randomNumber];
    $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_bludgeoning.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = s_bludgeoning[i];
    //   $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_bludgeoning.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("button#s_magic").click(function() {
    // SEVERE/MAGIC Table
    const s_magic = ["Allergic Reaction<br>Maximize all spell variables and target opponent within the spells range suffers 1d6 damage to a random ability score.<br>Save: A DC 30 Constitution negates ability damage. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: Rest or restorative magic is needed to heal ability damage.<br><br>D6 - Ability Type Damage<br>1 - Str<br>2 - Dex<br>3 - Con<br>4 - Int<br>5 - Wis<br>6 - Cha",
    "Arcane Blast<br>Maximize all spell variables and target opponent within the spells range suffers triple bonus damage again. This is a force effect.<br>Save: A DC 30 Dexterity save negates the arcane blast. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Arcane Glow<br>Maximize all spell variables and target opponent within the spells range glows as the spell faerie fire for 1d6+2 rounds. <br>Save: A DC 30 Resolve save negates the faerie fire. If the spell targeted an opponent, a DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Arcane Goo<br>Maximize all spell variables and up to four target squares within the spells range is covered in arcane goo. Any creature in that square or who enters that square becomes entangled as the web spell.<br>Save: A DC 30 Dexterity check negates the entangled. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Recovery: A DC 30 Strength or Dexterity check allows you to escape the arcane goo entanglement. An opponent may make an attempt to escape at the beginning of their turn each round.",
    "Aura of Protection<br>Maximize all spell variables and you gain a +4 Deflection bonus to Defense rolls as the spell Mage Armor for 1d4 rounds. All allies within 30 feet gain 1/2 this bonus to their defense rolls as well. This is a force effect.<br>Save: If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Call of the Wild<br>Maximize all spell variables and summon animals to your aid as the spell Summon Natures Ally for 1d6+2 Rounds.<br>Save: If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The animal summoned from the Summon Natures Ally table may not be of a greater spell level of than you can cast.",
    "Combustion<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage catches fire suffering triple bonus damage again at the start of their turn for 1d4 rounds.<br>Save: A DC 30 Resolve save negates catching fire. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes fire.",
    "Concussive Spell<br>Maximize all spell variables and target opponent within the spells range is Staggered for 3 Rounds. <br>Save: DC 30 Constitution negates Staggered. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Conduit<br>Maximize all spell variables and target opponent within the spells range suffers disadvantage  on all saves made against your spells for 1d6 rounds. <br>Save: A DC 30 Resolve save negates the disadvantage. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 30 Skill check removes the disadvantage.",
    "Corrosive<br>Maximize all spell variables and if spell deals damage, they suffer double bonus damage again and each opponent who suffers damage also suffers damage to their armor as though it were acid damage.<br>Save: DC 30 Dexterity negates armor damage. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes acid. If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.",
    "Cut Off From Magic<br>Maximize all spell variables and a target opponent within the spells range cannot cast spells or use spell like abilities for 1d6 rounds.<br>Save: If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 30 Skill check removes the cut off from magic effect.",
    "Distraction<br>Maximize all spell variables and an illusion of the caster appears adjacent to the caster or spell target. The illusion lasts for 1d6+2 rounds and can move up to 30 feet on your turn. When the illusion is within melee reach of an opponent it acts as a flanking partner for all allies. <br>Save: If the spell targeted an opponent. DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If an opponent makes an attack against the illusion it is an automatic miss but the attacker may make an immediate Intelligence save DC 30 to realize it is an illusion; if successful this also negates the flanking effect of the illusion.",
    "Dispelling<br>Maximize all spell variables and you may dispel as per the spell greater dispel magic on a target opponent or ally within the spells range.<br>Save: DC 30 Resolve negates Dispel. If the spell targeted an opponent. DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Draining Spell<br>Maximize all spell variables and a target opponent within the spells range randomly loses one of their spells known or one spell like abilities for 1d6 rounds.<br>Save: A DC 30 Resolve save negates the spell loss. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 30 Skill check Restores the lost spell or spell like ability.",
    "Electrocuted<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage is also Stunned for 1 round.<br>Save: DC 30 Constitution negates Stunned. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes electricity.",
    "Elemental Call<br>Maximize all spell variables and a Huge elemental appears to server you for 1d4 rounds.<br>Save: If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal an elemental type damage, the elemental that appears is of the same type.",
    "Excruciating<br>Maximize all spell variables and if spell deals damage, each opponent who suffers damage is sickened for 2d4+2 rounds.<br>Save: DC 30 Constitution negates Sickened. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Eyeburn<br>Maximize all spell variables and a target opponent within the spells range is blinded for 2d6 rounds. <br>Save: DC 30 Constitution negates Blinded. If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Frost Bite<br>Maximize all spell variables and if spell deals damage deal double bonus damage again, each opponent who suffers damage also suffers 1d4 Dex damage.<br>Save: A DC 30 Resolve save negates the ability damage. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: If the spell would deal damage, its damage type becomes cold.<br>Heal: Rest or restorative magic is needed to heal ability damage.",
    "Funny Bone<br>Maximize all spell variables and a target opponent within the spells range must spend their next 3 turns laughing as the hideous laughter spell.<br>Save: A DC 30 Resolve save negates the laughter. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Hypnotic Link<br>Maximize all spell variables and you may give a target opponent within the spells range 2 suggestion as the spell suggestion. <br>Save: A DC 30 Resolve save negates one suggestion of the casters choosing. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "I Love You, Man<br>Maximize all spell variables and a target opponent within the spells range is charmed for 1d4 days as the spell Charm Person. <br>Save: If the spell targeted an opponent, DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: A DC 30 Resolve save negates the Charm Person; opponent may make a new save each hour they are affected.",
    "Intense Flare<br>Maximize all spell variables and if spell deals damage deal bonus damage again, ignore any energy and magic damage resistance (but not immunity) each opponent  has and suppress those resistances for 1d6 rounds.<br>Save: DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 30 Skill check removes the flare effect returning their resistances to normal.",
    "Knockback<br>Maximize all spell variables and if spell deals damage deal double bonus damage again, each opponent who suffers damage is pushed 1d6 squares directly away from you.<br>Save: A DC 30 Strength save negates the knock back. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Life Leach<br>Maximize all spell variables and a target opponent within the spells range is marked for death. If the marked opponent dies within 2d4+2 rounds, you draw forth an amount of life force as the spell Death Knell. <br>Save: If the spell targeted an opponent. DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 30 Skill check removes the mark.",
    "Light Blast<br>Maximize all spell variables and a target opponent within the spells range is blinded for 1d4 days.<br>Save: A DC 30 Dexterity save negates the blind. If the spell targeted an opponent. DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: A Heal check DC 15 repairs sight somewhat, but the recipient treats all targets as though they have concealment (20%). A DC 30 heal check will fully repair eyesight to normal levels.",
    "Lingering Magic<br>Maximize all spell variables and if spell has duration greater than instantaneous, each opponent or ally effected by the spell has its duration increased by 1d6+2 rounds.<br>Save: A DC 30 Resolve save negates the increased duration. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Maximum Effect<br>Maximize all spell variables and if the spell scales with caster level, increases the effective and maximum caster level by 10. <br>Save: If the spell targeted an opponent. DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Mind Cloud<br>Maximize all spell variables and a target opponent within the spells range is dazed for 3 rounds.<br>Save: A DC 30 Resolve save negates the daze. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Nerve Damage<br>Maximize all spell variables and a target opponent within the spells range is slowed as the spell Slow for 1d6+2 rounds.<br>Save: A DC 30 Resolve save negates the slow. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Olfactory Overload<br>Maximize all spell variables and a target opponent within the spells range is nauseated for 3 Rounds and cannot use the scent or blindsense abilites for 1 day.<br>Save: DC 30 Constitution save negates nauseated. If the spell targeted an opponent DC 30 save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Heal: A DC 30 Heal check removes the restores scent and blindsense abilites.",
    "Petrified<br>Maximize all spell variables and a target opponent within the spells range is petrified permanently. <br>Save: DC 30 Resolve save negates petrified. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 30 Skill check removes the petrification.",
    "Phased<br>Maximize all spell variables and a target opponent or ally within the spells range becomes incorporeal for 1d6+2 rounds. <br>Save: DC 30 Resolve save negates Incorporeal. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Planar Rift<br>Maximize all spell variables and a target opponent within the spells range is banished to a random plane of existence for 1d6 rounds. When the banishment ends the opponent reappears 1d6 squares away from their previous location in a random direction.<br>Save: DC 30 Resolve save negates Banishment. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.<br><br>D10 - Planes<br>1 - Light<br>2 - Positive Energy<br>3 - Astral Plane<br>4 - Water<br>5 - Earth<br>6 - Fire<br>7 - Air<br>8 - Ethereal<br>9 - Negative Energy<br>10 - Shadow",
    "Power Surge<br>Maximize all spell variables and you may cast another spell as a Free Action at no penalty. <br>Save: If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Pretty Colors<br>Maximize all spell variables and a target opponent within the spells range is stunned for 1 round then dazzled for 2d4 rounds.<br>Save: DC 30 Resolve save negates stunned and 1/2s the dazzled duration. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Returning Spell<br>Maximize all spell variables and the casting Cooldown of the spell is reduced by 3 rounds (to a minimum of 0).",
    "Roaring Spell<br>Maximize all spell variables and a target opponent within the spells range is deafened for 3d4 rounds.<br>Save: DC 30 Constitution save negates deafened. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Shrink Ray<br>Maximize all spell variables and a target opponent within the spells range is reduced for 1d6+2 rounds as reduce person.<br>Save: DC 25 Resolve save negates reduce person. If the spell targeted an opponent DC 25 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Siren Song<br>Maximize all spell variables and a target opponent within the spells range is mesmerized for 1d8+2 Rounds.<br>Save: DC 30 Resolve save negates mesmerized. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Splash Spell<br>Maximize all spell variables and if spell deals damage to an opponent deal double bonus damage again, deal half the total damage to all adjacent opponents as well.<br>Save: A DC 30 Dexterity save for adjacent opponents negates the splash damage. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Stunned<br>Maximize all spell variables and a target opponent within the spells range is stunned for 3 rounds.<br>Save: DC 30 Resolve save negates Stunned. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Surge<br>Maximize all spell variables and a target ally within the spells range is accelerated as the spell Haste for 1d6+2 rounds.<br>Save:. If the spell targeted an opponent, a DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead",
    "Terrifying Display<br>Maximize all spell variables and a target ally within the spells range is panicked for 1d4 rounds.<br>Save: DC 30 Resolve save reduces the panicked to shaken. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Transposition<br>Maximize all spell variables and you may target an opponent or ally within the spells range and switch places with them.<br>Save: DC 30 Resolve save negates transposition. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Turned Around<br>Maximize all spell variables and a target opponent within the spells range is staggered for 1d4 rounds.<br>Save: DC 30 Resolve save negates staggered. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vampiric Magic<br>Maximize all spell variables and if spell deals damage deal double bonus damage again, you gain a number of temporary hit points equal to the total amount of damage dealt for 1d6 rounds.<br>Save: DC 30 Resolve save halves the temporary health granted to you. If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vanish<br>Maximize all spell variables and you become invisible for 1d6 rounds as the spell greater invisibility.<br>Save: If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead.",
    "Vulnerability<br>Maximize all spell variables and if spell deals damage deal bonus damage again and each opponent who suffers damage becomes vulnerable (suffers 50% additional damage) to that damage type for 1d6 rounds.<br>Save: DC 30 Resolve save negates vulnerability; but if the spell would deal damage, deal additional bonus damage instead.<br>Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.<br>Heal: A DC 30 Skill check removes the vulnerability returning their resistances to normal.",
    "Wild Surge<br>Maximize all spell variables and you gain a +9 critical range and critical fumble range for all spells you cast until the end of your next turn. (Critical Threat 11-20, Critical Fumble 1-10<br>Save: If the spell targeted an opponent DC 30 Resolve save negates maximized variables; but if the spell would deal damage, deal additional bonus damage instead."    
    ];

    const randomNumber = getRandomInt(50);
    const text = s_magic[randomNumber];
    $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_magic.png\" class=\"time\">" + "<br>" + (randomNumber + 1) + ": " + text + "</p>");

    // for (let i = 0; i < 50; i++) {
    //   let text = s_magic[i];
    //   $(".text").prepend("<p class=\"severe\">" + getTime() + "<br>" + "<img src=\"img\\s_magic.png\" class=\"time\">" + "<br>" + (i + 1) + ": " + text + "</p>");
    // }

    if ($("#popup-check").prop("checked") == true) {
      $(".popup-text").empty();
      $(".popup-text").append(`<span class="popup-title-text">${title}</span><p>${text}</p>`);
      $(".popup").slideDown();
      $(".text").show();
    }
  });

  $("form#form").submit(function(event) {
    event.preventDefault();
  });
});