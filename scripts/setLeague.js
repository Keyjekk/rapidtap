var currentLeague = "SILVER";

const SILVER_COLOR_FIRST = "#BDBDBD";
const SILVER_COLOR_SECOND = "#FFFFFF";
const SILVER_BORDER_IMG = "#BDBDBD";
const SILVER_BORDER_CONTENT = "#FF964A";
const SILVER_SHADOW = "#FF964A50";
const SILVER_LIMIT = 1000;
const SILVER_NAME = "SILVER";

const BRONZE_COLOR_FIRST = "#C04D1C";
const BRONZE_COLOR_SECOND = "#FF964A";
const BRONZE_BORDER_IMG = "#FF964A";
const BRONZE_BORDER_CONTENT = "#BDBDBD";
const BRONZE_SHADOW = "#BDBDBD50";
const BRONZE_LIMIT = 5000;
const BRONZE_NAME = "BRONZE";

/*

const _COLOR_FIRST = "#C04D1C";
const _COLOR_SECOND = "#FF964A";
const _BORDER_IMG = "#FF964A";
const _BORDER_CONTENT = "#FF964A";
const _SHADOW = "#FF964A50";

const _COLOR_FIRST = "#C04D1C";
const _COLOR_SECOND = "#FF964A";
const _BORDER_IMG = "#FF964A";
const _BORDER_CONTENT = "#FF964A";
const _SHADOW = "#FF964A50";

const _COLOR_FIRST = "#C04D1C";
const _COLOR_SECOND = "#FF964A";
const _BORDER_IMG = "#FF964A";
const _BORDER_CONTENT = "#FF964A";
const _SHADOW = "#FF964A50";

const _COLOR_FIRST = "#C04D1C";
const _COLOR_SECOND = "#FF964A";
const _BORDER_IMG = "#FF964A";
const _BORDER_CONTENT = "#FF964A";
const _SHADOW = "#FF964A50";

*/

var container = document.getElementById('#container');
var leagueName = document.getElementById('#league-name');
var leagueLimit = document.getElementById('#limit');
var profileImage = document.getElementById('#profile-image');

function updateLeague(clickAmount){
    if(clickAmount == SILVER_LIMIT && currentLeague != SILVER_NAME){
        currentLeague = SILVER_NAME;

        container.style.boxShadow = "0px 0px 70px "+BRONZE_SHADOW+"";
    }
}