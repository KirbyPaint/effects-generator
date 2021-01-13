function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    const g_melee = ["2 For 1<br>Target suffers maximum damage and you deal normal damage to one adjacent target.<br>Save: Adjacent target may make a DC 20 Dexterity save to negate.<br>Special: If there are no adjacent targets, deal bonus damage to original target.", 
    "And Stay Down!<br>Target suffers maximum damage and is knocked prone.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Recover: A move-equivalent action is required to stand from prone. This provokes attacks of opportunity from threatening opponents.", 
    "Armor Dent<br>Target suffers maximum damage and attack also deals damage to target’s armor (hardness applies).<br>Save: DC 20 Dexterity negates; deals bonus damage to the target instead.<br>Special: If target does not wear armor, damage is dealt to shield or deal additional bonus damage again to target instead.", 
    "Back Breaker<br>Target suffers maximum plus bonus damage and 1d4 Dex damage.<br>Save: DC 20 Constitution negates; deals additional bonus damage instead.<br>Heal: Rest or restoration magic.", 
    "Bell Ringer<br>Target suffers maximum damage, 1 Int damage and is sickened for 1 round.<br>Save: DC 20 Constitution negates; deals bonus damage instead.<br>Heal: A DC 20 Heal check removes the sickened condition. Rest or restoration magic is needed to heal ability damage.", 
    "Bone Masher<br>Target suffers maximum damage and suffers either 1d2 Dex damage and half speed (leg) or 1d2 Str damage (arm) and limb is useless until healed.<br>Save: DC 20 Constitution negates limb damage; deals bonus damage instead.<br>Heal: A DC 20 Heal check allows limb use and removes movement penalties. Rest or restoration magic is needed to heal ability damage.<br><br>D20 Bone Masher Injury:<br>1-5 Left Leg<br>6-10 Left Arm<br>11-15 Right Leg<br>16-20 Right Arm",
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "",
    "", 
    "", 
    "", 
    "", 
    ""];

    const randomNumber = getRandomInt(6);

    const title = g_melee[randomNumber];

    $("#text").prepend(title + "<br><br><br>");
    $("#text").show();
    event.preventDefault();
  });
});

// Each button will link to a different array
// Might straight up make 16 arrays

// One each for each table

// Use break tags to have one array element with 4 lines. This will get long lol