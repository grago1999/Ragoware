const appId = 20202020;

let ids = [];
const duration = 750;
const fileName = window.location.pathname.indexOf('/') > -1 ? window.location.pathname.split('/').pop() : "index";
const currentPage = fileName === "index.html" ? "home" : fileName.replace(".html", "");

window.onblur = function () { document.title = "Hey! Come back!"; }
window.onfocus = function () { document.title = "Who's Gianluca?"; }

console.log("you found me ( ͡° ͜ʖ ͡°)");

const report = (actionTypeId, elementId = null) => {
	new Fingerprint2().get((result) => {
		var sha = new jsSHA("SHA-512", "TEXT");
		sha.update(result);
		deviceId = sha.getHash("HEX");
		var reportUrl = "https://conjungo.io/analytics/api/v1/report.php?appId="+appId.toString()+"&deviceId="+deviceId+"&actionTypeId="+actionTypeId;
		if (elementId) {
			reportUrl += ("&elementId=" + elementId);
		}
		$.get(reportUrl, (data, status) => {
	        console.log("yay");
	    });
	});
};

report("view-page", currentPage);