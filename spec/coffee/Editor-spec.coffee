sinon = require 'sinon'

require 'jasmine-expect'

Editor = require '../../src/coffee/Editor'

editor = new Editor.Editor('normal')




console.log editor




describe 'Editor', ->

	it 'Editor is defined', ->
		expect(editor).toBeDefined()

	it 'editor Object should expose publish method', ->
		expect(editor.publish).toBeDefined() 	


	it 'method publish of Editor is a Function', ->
		expect(editor.publish).toBeFunction()




describe 'method publish of Editor ', ->


	
    
	      
		 
	  
