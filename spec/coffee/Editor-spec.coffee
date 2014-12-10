sinon = require 'sinon'

require 'jasmine-expect'
require 'jasmine-utils'

Editor = require '../../src/coffee/Editor'

editor = new Editor.Editor('test',[])




console.log editor




describe 'Editor', ->

	it 'Editor is defined', ->
		expect(editor).toBeDefined()

	it 'editor Object should expose publish method', ->
		expect(editor.publish).toBeDefined() 	


	it 'method publish of Editor is a Function', ->
		expect(editor.publish).toBeFunction()

	it 'method ajaxCall should exist in the Editor Object', ->
		expect(editor.ajaxCall).toBeFunction() 

	it 'should have an Array ob topics', ->
		expect(editor.topics).toBeArray() 
	  





describe 'ajax call should ', ->
	
	  
	beforeEach ->
	  	spyOn(editor, 'ajaxCall').andCallThrough()
	  	spyOn(editor, 'publish').andCallThrough()

	afterEach ->
		jasmine.resetAll(editor)
	
	it 'have been called', ->

  		 editor.ajaxCall()
  		 expect(editor.ajaxCall).toHaveBeenCalled() 
  	  
  	 it 'should call publish', ->

  	 	editor.ajaxCall()
  	 	expect(editor.publish).toHaveBeenCalled() 



describe 'subscribe method shoud ', ->


	beforeEach ->
	  spyOn(editor,'subscribe').andCallThrough()

	afterEach ->
	  jasmine.resetAll(editor)



	it 'exist and be a function', ->
		expect(editor.subscribe).toBeFunction() 

	it 'should have been called', ->
		fkFn = ()->
		console.log "fkListener" 
		editor.subscribe('kern/result',fkFn)
		expect(editor.subscribe).toHaveBeenCalled() 

	it 'should toHaveBeenCalled with specific parameters', ->

		fkFn2 = ()->
		console.log "fkListener" 
		editor.subscribe('kern/result',fkFn2)
		console.log editor.topics
		expect(editor.subscribe).toHaveBeenCalledWith('kern/result',fkFn2) 

	it 'should add topics listners to the array', ->

		fkFn3 = ()->
		console.log "fkListener" 
		editor.subscribe('kern/result',fkFn3)
		console.log editor.topics
		expect(editor.subscribe).toHaveBeenCalledWith('kern/result',fkFn3)
		expect(editor.topics['kern/result'].length).toEqual(3) 

	  
	  
	  
	  

  	   


	
    
	      
		 
	  
