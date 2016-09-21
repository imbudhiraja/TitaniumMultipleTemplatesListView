# TitaniumMultipleTemplatesListView

# Installation Via Gittio 

gittio install com.imbudhiraja.multipleTemplatesListView

# Via Github
Download the latest release, and add in your config.json, under dependencies:

"dependencies": { "com.imbudhiraja.multipleTemplatesListView": "*" }

# Fully stylable via TSS 
Watch the widget.tss file for all options and override the rules with ID instead of class.

# Usage

In you XML file.
Use Like this

< Alloy>

< Widget id="multiTemplateList" src="com.imbudhiraja.multipleTemplatesListView"/ >

< /Alloy>

controller.js 

var data = [{ name : "Manish", image : "/images/pro.png", isDefaultTemplate : true, msg : "Manish,Luv & 1 other." }, 
            { name : "Manish", image : "/images/pro.png", isDefaultTemplate : false, msg : "Lorem "}, { name : "Manish", image : "/images/pro.png", isDefaultTemplate : true, msg : "Manish,Luv & 19 others." }, { name : "Manish", image : "/images/pro.png", isDefaultTemplate : false, msg : "Lorem ipsum"}, { name : "Manish", image : "/images/pro.png", isDefaultTemplate : true, msg : "Manish,Luv & 12 others." }]; 
            
$.multiTemplateList.init(data);

In your JS file:

var multiTemplateList=Alloy.createWidget("com.imbudhiraja.multipleTemplatesListView").getView(); listview.init(data);
multiTemplateList.init(data);
# API 
init() Set ListView items.
