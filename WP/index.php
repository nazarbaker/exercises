<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel='stylesheet' id='main-style'  href='<?php echo get_stylesheet_uri(); ?>' type='text/css' media='all' />
	<?php wp_head(); ?>
</head>
<body>
	<a href="<?php bloginfo('url'); ?>"> <!-- посилання-->
		<?php bloginfo('name'); ?> <!-- заголовок сторінки -->
	</a> 
	<?php bloginfo('description'); ?><br/> <!-- опис сторінки -->

	<?php if(have_posts()) : ?>	<!---->
	<?php while(have_posts()) : the_post(); ?>  <!--початок циклу -->

	<a href="<?php the_permalink(); ?>">
		<?php the_title(); ?>  <!-- назва статті -->
	</a>
	<?php the_content(); ?>  <!-- стаття -->

	<?php endwhile; ?>  <!-- кінець циклу -->
	<?php endif; ?>     <!---->
</body>
</html>