function initCFF(){cffT=$(".terminal-term.cff #cff").terminal({travel:{connections:function(e,t,n,i){void 0==n&&(n=cffDate()),void 0==i&&(i=cffTime()),$.get("http://transport.opendata.ch/v1/connections?from="+e+"&to="+t+"&date="+n+"&time="+i,function(e){createCFFdata(e)})},help:function(){this.echo("\n"),this.error("connections <from> <to>"),this.echo("display the train informations"),this.echo("\n"),this.echo("\n")}},reset:function(){new TimelineMax({onComplete:function(){$(".informations.cff").remove()}}).to($(".informations.cff"),.2,{height:0,autoAlpha:0}).timeScale(.5)},help:function(){this.echo("\n"),this.error("travel"),this.echo("access the travel"),this.echo("\n"),this.error("reset"),this.echo("clean the cff informations"),this.echo("\n"),this.error("main"),this.echo("goto main terminal"),this.echo("\n"),this.error("sc"),this.echo("goto soundcloud terminal"),this.echo("\n"),this.error("cff"),this.echo("goto cff terminal"),this.echo("\n"),this.echo("\n")},main:function(){showTab("main"),mainT.focus(!0)},sc:function(){0==$(".terminal#sc").length&&(addTab("sc","SC"),initSoundcloud()),showTab("sc"),scT.focus(!0)},cff:function(){0==$(".terminal#cff").length&&(addTab("cff","CFF"),initCFF()),showTab("cff"),cffT.focus(!0)}},{greetings:"Welcome to CFF "+username,name:"cff",height:0,prompt:"CFF > "})}function createCFFdata(e){var t="";t+='<div class="informations cff"><div class="travels"><p class="title">CFF informations</p>',t+='<div class="travel"><div class="sections">',$(e.connections[0].sections).each(function(e,n){""==n.journey.category&&(n.journey.category="&nbsp;"),""==n.departure.platform&&(n.departure.platform="&nbsp;"),""==n.arrival.platform&&(n.arrival.platform="&nbsp;"),t+='<div class="section"><p class="title">Section '+e+'</p><div class="time"><div class="departure-time"><p>'+convertDate(n.departure.departure)+'</p></div><div class="arrival-time"><p>'+convertDate(n.arrival.arrival)+'</p></div></div><div class="journey"><div class="train-journey"><p>'+n.journey.category+'</p></div></div><div class="platform"><p>'+n.departure.platform+"</p><p>"+n.arrival.platform+'</p></div><div class="location"><p>'+n.departure.location.name+"</p><p>"+n.arrival.location.name+"</p></div></div>"}),t+="</div></div>",t+="</div></div></div>",$("#informations-board").prepend(t),t=$(".informations.cff").first(),console.log(t);(new TimelineMax).from($(t),.2,{autoAlpha:0,marginLeft:"-20"}).timeScale(.5)}function convertDate(e){var t=new Date(e),n=t.getHours(),i=t.getMinutes();return 10>n&&(n="0"+n),10>i&&(i="0"+i),n+":"+i}function cffDate(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,i=e.getFullYear();return 10>t&&(t="0"+t),10>n&&(n="0"+n),i+"-"+n+"-"+t}function cffTime(){var e=new Date,t=e.getHours(),n=e.getMinutes();return 10>n&&(n="0"+n),t+":"+n}