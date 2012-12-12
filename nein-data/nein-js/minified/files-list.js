YUI.add("ez-files-list",function(e){"use strict";function n(e){n.superclass.constructor.apply(this,arguments)}e.namespace("eZ");var t=e.Lang;n.NAME="files-list",n.CSS_PREFIX="ez-ei",n.ATTRS={phpDisabled:{value:!1}},n.HTML_PARSER={},e.extend(n,e.Widget,{initializer:function(){var t=e.one("#ezp-nein-single-file").getHTML(),n=e.one("#ezp-nein-single-image-file").getHTML();this.singleFileTemplate=e.Handlebars.compile(t),this.singleImageFileTemplate=e.Handlebars.compile(n),this.sourceNode=this.get("srcNode"),this.phpDisabled=this.get("phpDisabled"),this.update()},destructor:function(){},renderUI:function(){},bindUI:function(){},syncUI:function(){},update:function(e){this._syncNodes()},_syncNodes:function(){var t=n.CSS_PREFIX,r=this;this.sourceNode.empty();if(this.phpDisabled)return this.sourceNode.setStyle("background","grey"),!1;e.io("/nein-data/files.php",{method:"GET",on:{success:function(t,n){var i=e.JSON.parse(n.responseText);e.Array.each(i.files,function(e){var t;switch(e.type){case"image":t=r.singleImageFileTemplate({name:e.name,src:"/nein-data/uploads/"+e.name});break;default:t=r.singleFileTemplate({name:e.name})}r.sourceNode.append(t)})}}})},_fileClick:function(e){e.preventDefault(),alert("Not implemented yet!")}}),e.eZ.FilesList=n},"0.1alpha",["widget"]);