YUI.add("ez-focused-overlay",function(e){"use strict";function w(e){w.superclass.constructor.apply(this,arguments)}e.namespace("eZ");var t=e.Lang,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b;w.NAME="focused-overlay",w.CSS_PREFIX="ez-ei-"+w.NAME,w.ATTRS={backgroundClassNamePrefix:{value:"-background"},frameClassNamePrefix:{value:"-frame"},dialogClassNamePrefix:{value:"-dialog"},shadowClassNamePrefix:{value:"-shadow"},frameDefaultWidth:{value:6},dialogDefaultWidth:{value:5},dialogToolBarHeight:{value:65},dialogHeaderHeight:{value:31},dialogToolBarMinWidth:{value:322},dialogToolBarId:{value:"-toolbar"},dialogHeaderId:{value:"-header"}},w.HTML_PARSER={},e.extend(w,e.Widget,{initializer:function(){n=this.get("srcNode"),this.sourceNodeYOffset=0},destructor:function(){},renderUI:function(){},bindUI:function(){},syncUI:function(){},showFocusedOverlay:function(e){e&&(this._getFocusedOverlayTarget()?(this._showFocusedOverlayNodes(),this._syncFocusedOverlayNodes(e)):(this._createFocusedOverlayNodes(e),this._syncFocusedOverlayNodes(e)),this.flagVisible=!0,this._scrollToHeader())},syncFocusedOverlay:function(){if(this.flagVisible){var e=this._getFocusedOverlayTarget();e&&this._syncFocusedOverlayNodes(e)}},hideFocusedOverlay:function(){n.setY(n.getY()-this.sourceNodeYOffset),this.sourceNodeYOffset=0,this._hideFocusedOverlayNodes(),this.flagVisible=!1},_scrollToHeader:function(){var t=c.getY(),n=e.one(".ez-ei-content-wrapper"),r=parseInt(n.getComputedStyle("height"),10);(t<0||t>r)&&c.scrollIntoView(!0)},_getFocusedOverlayTarget:function(){return h?e.one("#"+h.getAttribute("data-ez-focused-overlay-target-id")):!1},_createFocusedOverlayNodes:function(t){var E=w.CSS_PREFIX,S=E+this.get("backgroundClassNamePrefix"),x=E+this.get("frameClassNamePrefix"),T=E+this.get("dialogClassNamePrefix"),N=E+this.get("shadowClassNamePrefix");r=e.Node.create(['<div class="',S,"-3 ",S," ",E,'" ></div>'].join("")),i=e.Node.create(['<div class="',S,"-6 ",S," ",E,'" ></div>'].join("")),s=e.Node.create(['<div class="',S,"-9 ",S," ",E,'" ></div>'].join("")),o=e.Node.create(['<div class="',S,"-12 ",S," ",E,'" ></div>'].join("")),u=e.Node.create(['<div class="',x,"-3 ",x," ",E,'" ></div>'].join("")),a=e.Node.create(['<div class="',x,"-6 ",x," ",E,'" ></div>'].join("")),f=e.Node.create(['<div class="',x,"-9 ",x," ",E,'" ></div>'].join("")),l=e.Node.create(['<div class="',x,"-12 ",x," ",E,'" ></div>'].join("")),c=e.Node.create(['<div id="',E+this.get("dialogHeaderId"),'" class="',E,'">',"</div>"].join("")),this._createToolBarNode(t),h.setAttribute("data-ez-focused-overlay-target-id",t.getAttribute("id")),p=e.Node.create(['<div class="',T,"-3 ",T," ",E,'" ></div>'].join("")),d=e.Node.create(['<div class="',T,"-6 ",T," ",E,'" ></div>'].join("")),v=e.Node.create(['<div class="',T,"-9 ",T," ",E,'" ></div>'].join("")),m=e.Node.create(['<div class="',N,"-3 ",N," ",E,'" ></div>'].join("")),g=e.Node.create(['<div class="',N,"-6 ",N," ",E,'" ></div>'].join("")),y=e.Node.create(['<div class="',N,"-9 ",N," ",E,'" ></div>'].join("")),b=e.Node.create(['<div class="',N,"-12 ",N," ",E,'" ></div>'].join("")),n.appendChild(r),n.appendChild(i),n.appendChild(s),n.appendChild(o),n.appendChild(u),n.appendChild(a),n.appendChild(f),n.appendChild(l),n.appendChild(c),n.appendChild(h),n.appendChild(p),n.appendChild(d),n.appendChild(v),n.appendChild(m),n.appendChild(g),n.appendChild(y),n.appendChild(b),this._breadcrumbs=new e.eZ.Breadcrumbs({callerID:w.NAME,srcNode:"#"+c.generateID(),focusedNode:t,linkClickCallback:this._breadcrumbsLinkClickCallback,closeClickCallback:this._breadcrumbsCloseClickCallback}),h.delegate("click",this._editLinkClick,".ez-ei-focused-overlay-button-edit"),e.fire("focusedOverlay:onCreate")},_createToolBarNode:function(t){var n=w.CSS_PREFIX,r=e.one("#ezp-nein-dialog-toolbar").getHTML(),i=e.Handlebars.compile(r);h=e.Node.create(i({cssPrefix:n,dialogToolBarId:this.get("dialogToolBarId"),dialogClassName:n+this.get("dialogClassNamePrefix"),buttons:[{action:"discard",icon:"&#x0036;"},{action:"edit",icon:"&#x0039;"},{action:"publish",icon:"&#xe053;"}]}))},_syncFocusedOverlayNodes:function(t){h.setAttribute("data-ez-focused-overlay-target-id",t.getAttribute("id")),e.one(".ez-ei-focused-overlay-button-edit").setAttribute("rel",t.getAttribute("id"));var E=parseInt(t.getX(),10),S=parseInt(t.getY(),10),x=t.get("offsetWidth")+2,T=t.get("offsetHeight"),N=this.get("frameDefaultWidth"),C=N,k=!1,L=this.get("dialogDefaultWidth"),A=this.get("dialogToolBarHeight"),O=this.get("dialogHeaderHeight"),M=this.get("dialogToolBarMinWidth"),_=parseInt(n.getX(),10),D=parseInt(n.getY(),10),P=parseInt(n.getComputedStyle("width"),10),H=parseInt(n.getComputedStyle("height"),10),B=w.CSS_PREFIX,j=e.one("."+B+"-buttons"),F=e.one("."+B+"-language-selector"),I=e.one("."+B+"-version-selector");x+2*N+2*L<M&&(C=parseInt((M-2*L-x)/2,10));if(E-N-L+M>_+P){k=!0;var q=N,R=C*2-N+1}if(E-C-L<_){k=!0;var R=N,q=C*2-N+1}a.setXY([E,S+T]),a.setStyles({width:x,height:N}),l.setXY([E,S-N]),l.setStyles({width:x,height:N}),k?(u.setXY([E+x,S-N]),u.setStyles({width:q,height:T+N*2-1}),f.setXY([E-R,S-N]),f.setStyles({width:R,height:T+N*2-1})):(u.setXY([E+x,S-N]),u.setStyles({width:C,height:T+N*2-1}),f.setXY([E-C,S-N]),f.setStyles({width:C,height:T+N*2-1})),h.setStyles({width:u.getX()+parseInt(u.getComputedStyle("width"),10)+L*2-f.getX()-2}),j.getY()>F.getY()?j.setStyle("paddingTop","0px"):j.setStyle("paddingTop","10px"),h.setXY([f.getX()-L,f.getY()-parseInt(h.getComputedStyle("height"),10)]),j.getY()>F.getY()?j.setX(E+(x-parseInt(j.getComputedStyle("width"),10))/2):j.setX(E+x-parseInt(j.getComputedStyle("width"),10)+5),p.setXY([u.getX()+parseInt(u.getComputedStyle("width"),10),u.getY()]),p.setStyles({width:L-1,height:parseInt(u.getComputedStyle("height"),10)+1}),d.setXY([f.getX()-L,a.getY()+parseInt(a.getComputedStyle("height"),10)]),d.setStyles({width:parseInt(h.getComputedStyle("width"),10),height:L-1}),v.setXY([f.getX()-L,f.getY()]),v.setStyles({width:L-1,height:parseInt(f.getComputedStyle("height"),10)+1}),c.setXY([f.getX()-L,h.getY()-O-1]),c.setStyles({width:parseInt(h.getComputedStyle("width"),10)-5,height:O-1}),m.setXY([p.getX(),c.getY()+L]),m.setStyles({width:L,height:d.getY()-c.getY()-L}),g.setXY([d.getX(),d.getY()]),g.setStyles({width:parseInt(d.getComputedStyle("width"),10)+2,height:L}),y.setXY([v.getX(),c.getY()+L]),y.setStyles({width:L,height:d.getY()-c.getY()-L}),b.setXY([c.getX(),c.getY()]),b.setStyles({width:parseInt(h.getComputedStyle("width"),10)+2,height:L}),c.getY()<n.getY()-this.sourceNodeYOffset&&(this.sourceNodeYOffset=n.getY()-c.getY()+2,n.setY(D+this.sourceNodeYOffset),D+=this.sourceNodeYOffset,S+=this.sourceNodeYOffset),c.getX()-_+parseInt(c.getComputedStyle("width"),10)>P&&(P=c.getX()-_+parseInt(c.getComputedStyle("width"),10)+5+2+2);var U=x,z=0,W=U%4,X=0;W&&(X=4-W,U+=X,z+=X),o.setXY([E,D-this.sourceNodeYOffset]),o.setStyles({width:U,height:S-D-2}),r.setXY([E+x+z,D-this.sourceNodeYOffset]),r.setStyles({width:P-x-E+_,height:H+this.sourceNodeYOffset});var V=S+T;W=Math.round(V-r.getY())%4,W&&(X=4-W,V+=X+1),i.setXY([E,V]),i.setStyles({width:U,height:H-T-S+D+1});var $=E-_,J=_;W=$%4,W&&(X=4-W,$+=X,J-=X),s.setXY([J,D-this.sourceNodeYOffset]),s.setStyles({width:$,height:H+this.sourceNodeYOffset}),this._breadcrumbs.update(t)},_showFocusedOverlayNodes:function(){var t=this._getFocusedOverlayTarget();if(t){var n=e.all("."+w.CSS_PREFIX);n.show()}},_hideFocusedOverlayNodes:function(){var t=this._getFocusedOverlayTarget();if(t){var n=e.all("."+w.CSS_PREFIX);n.hide()}},_breadcrumbsCloseClickCallback:function(){e.fire("focusedOverlay:close")},_breadcrumbsLinkClickCallback:function(t){e.fire("overlay:overlayClicked",{},t)},_editLinkClick:function(t){t.preventDefault(),e.fire("focusedOverlay:editLinkClicked",{},e.one("#"+this.getAttribute("rel")))}}),e.eZ.FocusedOverlay=w},"0.2alpha",["widget"]);