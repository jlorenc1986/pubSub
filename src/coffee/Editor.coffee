class Editor

	constructor : (@type, @topics = []) ->
	

	type : ''

	topics : []

	publish : (topics,args) =>
		
		console.log "da mostrare ", topics , args

	ajaxCall : () =>
		data =
			a:1
			b:2

		@publish(@topics[0],data)


	subscribe :(topic,func) =>


		#register topic	
		@topics[topic] =[]  unless @topics[topic]

		@topics[topic].push(
			tk:'tk',
			func:func
			)




	




module.exports = 
	Editor:Editor