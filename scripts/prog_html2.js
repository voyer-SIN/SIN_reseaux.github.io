/* Nécessite JQuery et CodeMirror */

/* Script conçu par Jean-Manuel Meny et Nicolas Buyle-Bodin sous licence Creative Commons BY-NC-SA */
/* Respect de la Paternité - Pas d'utilisation commerciale - Partage des conditions initiales à l'identique */

/* Préambule :
	Ces documents sont sous licence libre, modifiables et ré-utilisables à loisir.
	Ils ont demandé plusieurs centaines d'heures de travail et de conception.
	Merci de rappeler leur paternité originale si vous les ré-utilisez. */

/* A conserver - popup pour les solutions */

 $(function() {
 
		// Permet la coloration syntaxique du JS et du CSS dans un formulaire en HTML.
		var mixedMode = {
			name: "htmlmixed",
			scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i, mode: null},
						{matches: /(text|application)\/(x-)?vb(a|script)/i, mode: "vbscript"}]
			};

		var delay;
		var enonceExo = [];
		var enonceExemple_html = [];
		var enonceExemple_css = [];
		var enonceExemple_js = [];
		var updatePreviewHTML = [];
		var updatePreview = [];
		var correctionExo = [];
		var declenche = [];
		var popup =[];
		
		var enonce_HTML = [];
		var enonce_CSS = [];
		
		
		var corrigeExo = []
		
		var correctionExo_HTML = [];
		var correctionExo_CSS = [];
		
		 
		
		
		
		
	    
	    
	    /* ********************************************************
	               Pour les exemples en HTML
	       ******************************************************** */
		tabexple_html = 	document.getElementsByClassName("exemple_html");
		for(i=0; i<tabexple_html.length; i++)
		{
			    enonceExemple_html[i] = CodeMirror.fromTextArea( tabexple_html[i], {
				    lineNumbers: true,
				    mode: mixedMode,
				    matchBrackets: true,
				    readOnly: true
				    }
			    );			
		};// fin de la boucle for "exemples"
		
		
		
	    /* ********************************************************
	               Pour les exemples en CSS
	       ******************************************************** */
		tabexple_css = document.getElementsByClassName("exemple_css");
		for(i=0; i<tabexple_css.length; i++)
		{
			    enonceExemple_css[i] = CodeMirror.fromTextArea( tabexple_css[i], {
				    lineNumbers: true,
				    mode: "css",
				    matchBrackets: true,
				    readOnly: true
				    }
			    );			
		};// fin de la boucle for "exemples"
		
		
		
		
			
		/* ********************************************************
	               Pour les exemples en JS
	       ******************************************************** */
		tabexple_js = 	document.getElementsByClassName("exemple_js");
		for(i=0; i<tabexple_js.length; i++)
		{
			    enonceExemple_js[i] = CodeMirror.fromTextArea( tabexple_js[i], {
				    lineNumbers: true,
				    mode: "javascript",
				    matchBrackets: true,
				    readOnly: true
				    }
			    );			
		};// fin de la boucle for "exemples"
		
		
		
		
			
		/* ********************************************************
	               Pour les énoncés d'exercices
	       ******************************************************** */
		tabenonce = document.getElementsByClassName("exohtml");
		
	    tabaffichage = document.getElementsByClassName("affichage_html");
	    
	      
	    
	    for(i=0; i<tabenonce.length; i++)
		{
			        enonceExo[i] = CodeMirror.fromTextArea( tabenonce[i], {
				        lineNumbers: true,
				        mode: mixedMode,
				        matchBrackets: true
				        }
			        );
			

			        enonceExo[i].on("change", (function(tmp) {
				        return function(){
				        clearTimeout(delay);
				        delay = setTimeout(updatePreviewHTML[tmp], 300);
				        };
			        })(i));
			
			
			

			        updatePreviewHTML[i] = (function(tmp) {
				        return function(){
					        var previewFrame = tabaffichage[tmp];
					        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
					        preview.open();
					        preview.write(enonceExo[tmp].getValue());					         
					        preview.close();
				        };
			        })(i);

			        setTimeout(updatePreviewHTML[i], 300);
			        
			         
			        
			         
        };// fin de la boucle for "énoncés  exercices"
            
            
           
			
		/* ********************************************************
	               Pour les énoncés d'exercices de la partie CSS
	       ******************************************************** */

		tabenoncehtml = document.getElementsByClassName("exo_html");
		
		tabenoncecss = document.getElementsByClassName("exo_css");
		
		tabaffichagecss = document.getElementsByClassName("affichage_css");

	    for(i=0; i<tabenoncehtml.length; i++)
		{
			        enonce_HTML[i] = CodeMirror.fromTextArea( tabenoncehtml[i], {
				        lineNumbers: true,
				        mode: mixedMode,
				        matchBrackets: true
				        }
			        );
			
					enonce_CSS[i] = CodeMirror.fromTextArea( tabenoncecss[i], {
				        lineNumbers: true,
				        mode: "css",
				        matchBrackets: true
				        }
			        );
			
					enonce_HTML[i].on("change", (function(tmp) {
				        return function(){
				        clearTimeout(delay);
				        delay = setTimeout(updatePreview[tmp], 300);
				        };
			        })(i));
			

			        enonce_CSS[i].on("change", (function(tmp) {
				        return function(){
				        clearTimeout(delay);
				        delay = setTimeout(updatePreview[tmp], 300);
				        };
			        })(i));
			

			        updatePreview[i] = (function(tmp) {
				        return function(){
					        var previewFrame = tabaffichagecss[tmp];
					        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
					        preview.open();
					        preview.write("<html lang=\"fr\">\n");
							preview.write("<head>\n");
							preview.write("<meta charset=\"utf-8\">\n");
							preview.write("<style>\n");
					        preview.write(enonce_CSS[tmp].getValue());
							preview.write("</style>\n");
							preview.write("</head>\n");
							preview.write("<body>\n");
					        preview.write(enonce_HTML[tmp].getValue());
							preview.write("</body>\n");
							preview.write("</html>\n");
					        preview.close();
				        };
			        })(i);

			        setTimeout(updatePreview[i], 300);
			        
			         
			        
			         
        };// fin de la boucle for "énoncés  exercices"
            
            
            
            	
		/* ********************************************************
	               Pour les corrigés d'exercices
	       ******************************************************** */
		tabenoncecorrige = document.getElementsByClassName("exocorrige");
		
	    tabaffichagecorrige = document.getElementsByClassName("affichagecorrige");
	    
	    
	    
	      
	    
	    for(i=0; i<tabenoncecorrige.length; i++)
		{
			        corrigeExo[i] = CodeMirror.fromTextArea( tabenoncecorrige[i], {
				        lineNumbers: true,
				        mode: mixedMode,
				        matchBrackets: true
				        }
			        );
			

			        corrigeExo[i].on("change", (function(tmp) {
				        return function(){
				        clearTimeout(delay);
				        delay = setTimeout(updatePreviewHTML[tmp], 300);
				        };
			        })(i));
			
			
			

			        updatePreviewHTML[i] = (function(tmp) {
				        return function(){
					        var previewFrame = tabaffichagecorrige[tmp];
					        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
					        preview.open();
					        preview.write(corrigeExo[tmp].getValue());					         
					        preview.close();
				        };
			        })(i);

			        setTimeout(updatePreviewHTML[i], 300);
			        
			         
			        
			         
        };// fin de la boucle for "corrigés exercices"
            
            
            
         /* ********************************************************
	               Pour les corrigés d'exercices
	       ******************************************************** */
            tabcorrige = document.getElementsByClassName("cor_exohtml");
            tabpopup = document.getElementsByClassName("popupcor_html");
            
            
	    
            for(i=0; i<tabcorrige.length; i++)
		    {
  
			        correctionExo[i] = CodeMirror.fromTextArea(tabcorrige[i], {
				        lineNumbers: true,
				        mode: mixedMode,
				        matchBrackets: true,
						readOnly: true,
				        viewportMargin: Infinity
						}
			        );
			
			        declenche[i] = tabpopup[i];

			        popup[i] = (function(tmp) { return function(){
				        var w=window.open("","", 'width=700, left=20,top=200, height=500, toolbar=no, scrollbars=yes, resizable=yes');
				        var texte = correctionExo[tmp].getValue();
				        w.document.write(texte);
				        w.document.location.reload();
				        };
			        })(i);

			        declenche[i].addEventListener('click', popup[i], false);
 
		    }; // fin de la boucle for "corrigés  exercices"




		/* ********************************************************
	               Pour les corrigés d'exercices de la partie CSS
	       ******************************************************** */
            tabcorrigehtml = document.getElementsByClassName("cor_exo_html");
            tabcorrigecss = document.getElementsByClassName("cor_exo_css");
            tabpopupcss = document.getElementsByClassName("popupcor_css");
            
	    
            for(i=0; i<tabcorrigehtml.length; i++)
		    {
			        correctionExo_HTML[i] = CodeMirror.fromTextArea(tabcorrigehtml[i], {
				        lineNumbers: true,
				        mode: mixedMode,
				        matchBrackets: true,
						readOnly: true
				        }
			        );
					
					correctionExo_CSS[i] = CodeMirror.fromTextArea(tabcorrigecss[i], {
				        lineNumbers: true,
				        mode: "css",
				        matchBrackets: true,
						readOnly: true
				        }
			        );
			
					
			        declenche[i] = tabpopupcss[i];

			        popup[i] = (function(tmp) { return function(){
				        var w=window.open("","", 'width=700, left=20,top=200, height=500, toolbar=no, scrollbars=no, resizable=yes');
				        w.document.write("<html lang=\"fr\">\n");
						w.document.write("<head>\n");
						w.document.write("<meta charset=\"utf-8\">\n");
						w.document.write("<style>\n");
					    w.document.write(correctionExo_CSS[tmp].getValue());
						w.document.write("</style>\n");
						w.document.write("</head>\n");
						w.document.write("<body>\n");
					    w.document.write(correctionExo_HTML[tmp].getValue());
						w.document.write("</body>\n");
						w.document.write("</html>\n");
				        };
			        })(i);

			        declenche[i].addEventListener('click', popup[i], false);
 
		    }; // fin de la boucle for "corrigés  exercices"
 
}); // fin fonction miseenforme

