//function sleep(milliseconds) { const date = Date.now(); let currentDate = null; do { currentDate = Date.now(); } while (currentDate - date < milliseconds); }
//(async () => {
//sleep(1000)
$(".part").hover (

	function desc() {
		$(".description").html($(this).attr("description-data"));
		$(".description").fadeIn(5);

	},
	function() {
		$(".description").fadeOut(50);

	}
)
//}