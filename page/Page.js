export default{
	template(){
		var $app = '<p><route-link to="/" @each="' + history.state + '">TESTED<route-link></p>';
		return $app;
	},
	props(){

	},
	data(){
		var $data = [];
		$data['category'] = {da: 'name'}
		return $data;
	},
	mounted(){
		console.log('mounted');
	},
	created(){
		this.methods.dat();
	},
	methods : {
		dat(){
			L.api('https://api.apis.guru/v2/metrics.json').get({
				cache : true,
				success: function(data){
					console.log(data)
				},
				error: function(message, status){
					console.error(message);
				}
			});
		}
	}
}