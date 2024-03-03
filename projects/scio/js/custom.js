<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>




 	
  // language decision script ... 
  
  
  
  var videoId = "yi-3ftcTYZs";
  
  if(window.location.href.indexOf('/en') > 1){
  	videoId = "OR-fkQtxqPk";
    jQuery('.logo-link.w-nav-brand').attr('href', '/en');
    
    
  }else if(window.location.href.indexOf('/de') > 1) {
  	videoId = '_qG2HmpnBo0';
    jQuery('.logo-link.w-nav-brand').attr('href', '/en');
    
    
  }
  
  var videoEmbedDesktop = '<iframe width="600" height="400" src="https://www.youtube.com/embed/'+videoId+'?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><span class="scio-video-close"></span>';
  var videoEmbedMobile = '<iframe width="100%" height="300" src="https://www.youtube.com/embed/'+videoId+'?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><span class="scio-video-close"></span>';
  
  jQuery(window).on('load', function(){
    jQuery('#hp_accordion_1').trigger('click');
  });
  

  var clickTeamQuote = function(index){
    
    jQuery('.scio-team-box').hide();
    jQuery('.scio-team-head-col2').hide();
    jQuery('.scio-team-head').css({width:'auto'}).removeClass('active');
    jQuery('.scio-team-head:nth-child('+index+')').css({width:'210px'}).addClass('active');
    jQuery('.scio-team-box:nth-child('+index+')').show();
    jQuery('.scio-team-head:nth-child('+index+')').find('.scio-team-head-col2').show();
    

	var basePos = jQuery('.scio-team-head:nth-child(1)').offset().left;
    var imgPos = jQuery('.scio-team-head:nth-child('+index+')').offset().left;
    var leftPos = imgPos - basePos + 30;
    jQuery('.scio-team-box-arrow').css({left:leftPos});
    
 
  
  }
  jQuery(document).ready(function(){
    
    
    jQuery( document ).ajaxSuccess(function( event, xhr, settings ) {
      if ( settings.url.indexOf("api/v1/form") > -1) {
       	jQuery([document.documentElement, document.body]).animate({
        	scrollTop: $(".scio-contact-form-box").offset().top - 100
    	}, 400);
      }
    });
    
    	

    	
    // Blog post with external link - homepage / de
    if(jQuery('#home-blog-de').length && jQuery('#home-blog-de').find('.w-col-6').length == 1) {

    	jQuery('#home-blog-de').find('.w-row').append('<div role="listitem" class="w-dyn-item w-col w-col-6"><a target="_blank" href="https://www.ft.com/content/bba5c5a0-61de-48a4-add1-50ffca1761c0" class="scio-hp-blog-item w-inline-block"><p class="scio-sub-heading text-left">AUSZEICHNUNGEN</p><h4 class="scio-hp-blog-item-title">Die Financial Times ernannte ScioLink zum Tech-Champion des Jahres 2021</h4><p class="scio-hp-blog-item-text">Covid-19 hat das Bildungswesen weltweit ins Chaos gestürzt, mit Lockdowns und anderen Unterbrechungen, die mehr als 220 Millionen Hochschulstudenten betreffen... Durch den Einsatz von KI und maschinellem Lernen hoffen die tschechischen Gruppen, dass ihre Software zu gerechteren Online-Universitätsprüfungen führen wird...</p><p class="scio-hp-blog-item-link">Vollständigen Bericht lesen</p><div class="scio-hp-blog-item-author"><img src="https://uploads-ssl.webflow.com/6316049c3de44abdc39848ea/635912e6623cb8b5a1cb666b_Financial-Times.png" loading="lazy" width="48" alt="" class="image-6"><p class="scio-hp-blog-item-autorname"><strong class="scio-hp-blog-item-authorname">Tech Champions<br></strong>Tech Champions</p></div></a></div>');
    
    }
    
    // Blog post with external link - homepage / en
    if(jQuery('#home-blog').length && jQuery('#home-blog').find('.w-col-6').length == 1) {

    	jQuery('#home-blog').find('.w-row').append('<div role="listitem" class="w-dyn-item w-col w-col-6"><a target="_blank" href="https://www.ft.com/content/bba5c5a0-61de-48a4-add1-50ffca1761c0" class="scio-hp-blog-item w-inline-block"><p class="scio-sub-heading text-left">PRIZE</p><h4 class="scio-hp-blog-item-title">Financial Times recognized ScioLink as the Tech Champion of 2021</h4><p class="scio-hp-blog-item-text">Education worldwide has been thrown into chaos by Covid-19, with lockdowns and other disruption affecting more than 220m tertiary-level students... By using AI and machine learning, the Czech groups hope that their software will enable fairer online university exams...</p><p class="scio-hp-blog-item-link">Read the whole story</p><div class="scio-hp-blog-item-author"><img src="https://uploads-ssl.webflow.com/6316049c3de44abdc39848ea/635912e6623cb8b5a1cb666b_Financial-Times.png" loading="lazy" width="48" alt="" class="image-6"><p class="scio-hp-blog-item-autorname"><strong class="scio-hp-blog-item-authorname">Tech Champions<br></strong>Tech Champions</p></div></a></div>');
      
    }

    // Blog post with external link not necessary for /cs - there's enough newer posts already 
    
   	if(jQuery('.blog-extra-post').length) {
    	jQuery('.scio-blog-list').append('<div role="listitem" class="collection-item w-dyn-item w-col w-col-6">'+jQuery('.blog-extra-post').html()+'</div>');
    	jQuery('.blog-extra-post').remove();
    }
    
  	jQuery('.scio-pricing-open-form').on('click', function(){
    	
        jQuery(this).closest('.scio-pricing-box').find('.scio-pricing-box-form').slideToggle();
    				
    });
    
    jQuery('.calendly').on('click', function(e){
      e.preventDefault();
    	Calendly.initPopupWidget({url:'https://calendly.com/bvellendorf/30min'});return false;
    });
    		
   	 if(jQuery('#step-1').length && window.innerWidth <= 767) {
     	
       jQuery('#step-1').insertAfter(jQuery('#path-1'));
      jQuery('#step-2').insertAfter(jQuery('#path-2'));
      jQuery('#step-3').insertAfter(jQuery('#path-3'));
      jQuery('#step-4').insertAfter(jQuery('#path-4'));
      jQuery('#step-5').insertAfter(jQuery('#path-5'));

     }
    
     jQuery('.scio-team-head').on('click', function(){
     
       	var index = jQuery(this).prevAll('.scio-team-head').length + 1;
         clickTeamQuote(index);
       jQuery("html, body").animate({ scrollTop: jQuery('.scio-team-quotes-wrap').offset().top - 140 }, 300);
       
     });
    
     if(jQuery('.scio-team-heads').length) {
     	clickTeamQuote(1);
     }
    
     jQuery('.scio-video-close').on('click', function(){
     	jQuery('#video-preview').hide();
        jQuery('#video-preview').find('.scio-video-content').html('');
     });
    jQuery('#video-preview').on('click', function(e){
    	
      var $target = jQuery(e.target);
      
      if($target.hasClass('scio-video-close') || (!$target.hasClass('scio-video-content') && $target.closest('.scio-video-content').length == 0)){
      	jQuery('#video-preview').hide();
        jQuery('#video-preview').find('.scio-video-content').html('');
      }
      
      
    });
    
    jQuery('.scio-video-preview, .scio-button-welcome-video').on('click', function(){
    
      	jQuery('#video-preview').css({display:'flex'});
      	
      	if(window.innerWidth > 700) {
        	jQuery('#video-preview').find('.scio-video-content').html(videoEmbedDesktop);
        } else {
        	jQuery('#video-preview').find('.scio-video-content').html(videoEmbedMobile);
        }
       
    });
      


    jQuery('.faq-question').on('click', function(e){

      	 if(jQuery(this).hasClass('active')){

              if($(e.target).hasClass('faq-question-row') || $(e.target).closest('.faq-question-row').length){
                 jQuery(this).removeClass('active');
              }
          
        } else {
          jQuery(this).addClass('active');
      
        }
    
      	
      	
      
    });
    
    	jQuery('#pricing-1500').addClass('active');
    
    

    	jQuery('.input-count').val('1500+');
  		jQuery('.scio-pricing-button').on('click', function(){
          
          console.log('id', jQuery(this).attr('id'));
          
          jQuery('.scio-pricing-button').removeClass('active');
          jQuery(this).addClass('active');
        	
          switch(jQuery(this).attr('id')){
            case 'pricing-500':
              	jQuery('.scio-price-1').html('9,00€');
              	jQuery('.scio-price-2').html('14,00€');
                jQuery('.input-count').val('500+');
            break;
              
            case 'pricing-1500':
              	jQuery('.scio-price-1').html('8,00€');
              	jQuery('.scio-price-2').html('12,00€');
                jQuery('.input-count').val('1500+');
            break;
              case 'pricing-4000':
              	jQuery('.scio-price-1').html('7,00€');
              	jQuery('.scio-price-2').html('11,00€');
                
                jQuery('.input-count').val('4000+');
            break;
              case 'pricing-6000':
              	jQuery('.scio-price-1').html('6,00€');
              	jQuery('.scio-price-2').html('10,00€');
                jQuery('.input-count').val('6000+');
            break;
               case 'pricing-10000':
              	jQuery('.scio-price-1').html('5,00€');
              	jQuery('.scio-price-2').html('9,00€');
                
                jQuery('.input-count').val('10000+');
            break;
          }
          
        });
  	
     	jQuery(window).on('scroll', function(){
        
        var st = jQuery(window).scrollTop();
          
          
          
          	if(st > 300){
            	jQuery('.navigation').addClass('scrolled');
            } else {
              
            	jQuery('.navigation').removeClass('scrolled');
            }
          
        });
      
    
    
  });