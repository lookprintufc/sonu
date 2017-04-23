<?



?>

<html lang="pt">
<head>
<meta charset="utf-8">

<link rel="shortcut icon" href="slider/images/favicon.png" />

<link rel="stylesheet" type="text/css" href="slider/css/fullwidth.css"  media="screen" />
<link rel="stylesheet" type="text/css" href="slider/rs-plugin/slider/css/settings.css"  media="screen" />

</head>
<body>

<div class="wrapper">
  <article>
    <div class="fullwidthbanner-container">
      <div class="fullwidthbanner">
        <ul>
          
          <?
		  $q = mysql_query("select * from destaque order by ordem");
		  while ($r = mysql_fetch_object($q)) {
		  ?>
		  
          <li data-transition="fade" data-slotamount="7" > 
			<a href="<?=$r->url?>" target="_blank"><img src="../upload/<?=$r->link?>" >
          </li>
          
		  <? } ?>
		  
        </ul>
        <div class="tp-bannertimer"></div>
      </div>
    </div>
  </article>
</div>

<script type="text/javascript" src="slider/js/jquery.min.js" ></script>


<!-- jQuery KenBurn Slider  -->
<script type="text/javascript" src="slider/rs-plugin/js/jquery.themepunch.plugins.min.js" ></script>
<script type="text/javascript" src="slider/rs-plugin/js/jquery.themepunch.revolution.min.js" ></script>
<script type="text/javascript">
								
				//var jQuery=jQuery;
				//jQuery.noConflict();
				
				jQuery(document).ready(function() {
				
				if (jQuery.fn.cssOriginal!=undefined)
					jQuery.fn.css = jQuery.fn.cssOriginal;

					jQuery('.fullwidthbanner').revolution(
						{	
							delay:10000,												
							startwidth:890,
							startheight:450,
							
							onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
							
							thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
							thumbHeight:50,
							thumbAmount:3,
							
							hideThumbs:200,
							navigationType:"none",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
							navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
							navigationStyle:"square",				//round,square,navbar
							
							touchenabled:"on",						// Enable Swipe Function : on/off
							
							navOffsetHorizontal:0,
							navOffsetVertical:20,
							
							fullWidth:"on",
							
							shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
							
							stopLoop:"off"							// on == Stop loop at the last Slie,  off== Loop all the time.
														
						});	
					
					
					
						
			});
	
	
	
	
			</script>

</body>
</html>
