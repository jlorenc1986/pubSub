class Editor

	constructor : (@type, @topics = []) ->
	

	type : ''

	topics : []

	publish : (topic,args) =>
		
		subscribers = @topics[topic]
		many  = (if subscribers then subscribers.length else 0) 
		subscribers[len].func topic, args  while len--

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