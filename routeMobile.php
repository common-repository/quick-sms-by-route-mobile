<?php
/*
Plugin Name: Quick SMS by Route mobile
Plugin URI: https://wordpress.org/plugins/quick-sms-by-route-mobile/
Description: Send messages to multiple mobile numbers using the Plugin Name of Route Mobile.
Version: 4.6
Author: Route Mobile
Author URI: https://www.routemobile.com/company-profile/
License: GPLv2 or later
Text Domain: rmlproduct
*/


//quick-sms-by-route-mobile


//define constants
define("QSBRM_PLUGIN_DIR_PATH",plugin_dir_path(__FILE__));
define("QSBRM_PLUGIN_URL",plugins_url());
define("QSBRM_PLUGIN_VERSION","1.0");


function qsbrm_add_menu()
{
	add_menu_page("Quick SMS By Route Mobile View","Quick SMS By Route Mobile","manage_options","qsbrm-view","qsbrm_add_view","dashicons-email",2);
}

add_action("admin_menu","qsbrm_add_menu");

function qsbrm_add_view()
{
	include_once QSBRM_PLUGIN_DIR_PATH."/views/form.php";
}

function qsbrm_add_assest()
{
	//add js file
	wp_enqueue_script("rml_script",QSBRM_PLUGIN_URL."/quick-sms-by-route-mobile/asset/js/rml_functions.js",'',QSBRM_PLUGIN_VERSION);

	wp_localize_script("rml_script","ajaxurl",admin_url("admin-ajax.php"));

	//add cs file

//	wp_enqueue_style("rml_bootstrap_css",QSBRM_PLUGIN_URL."/quick-sms-by-route-mobile/asset/css/bootstrap.min.css",'',QSBRM_PLUGIN_VERSION);
	
//	wp_enqueue_style("rml_style_css",QSBRM_PLUGIN_URL."/quick-sms-by-route-mobile/asset/css/style.css",'',QSBRM_PLUGIN_VERSION);

}
add_action("init","qsbrm_add_assest");
$action = sanitize_text_field($_REQUEST['action']);
if(!empty($action))
{
	switch($action){
		case qsbrm_flag:

		add_action("admin_init","qsbrm_add_data");
		function qsbrm_add_data(){
          include_once QSBRM_PLUGIN_DIR_PATH."/views/action.php";
		}
		break;
	}
}
?>
