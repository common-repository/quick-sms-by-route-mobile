<?php 

/*function for get data from Api */
function qsbrmGetCURLCall($url_value)
{
  $response = wp_remote_get($url_value);
  $response_body = wp_remote_retrieve_body( $response );
  return $response_body;
}

/*function to get Message Value for Bulk*/
function qsbrmGetMessageValueBulk($data,$count_value)
{
   // print_r($data);exit;
     $failed_count = 0;
     $total_count = 0;
     $success_count = 0;
     $total_count = $count_value;
     $error_description = "";

     $error_code_array = array('1701'=>'success','1702'=>'Invalid URL','1703'=>'Invalid value in username or password parameter','1704'=>'Invalid value in type parameter','1705'=>'Invalid message','1706'=>'Invalid destination','1707'=>'Invalid source (Sender)','1708'=>'Invalid value for dlr parameter','1709'=>'User validation failed','1710'=>'Internal error','1025'=>'Insufficient credit','1715'=>'Response timeout.','1032'=>'DND reject.','1028'=>'Spam message');

  foreach ($data as $key) {

    $data_new_value = explode("|",$key);
    //print_r($data_new_value[0]);exit;
    if($data_new_value[0] == '1701')
     {
        $success_count = $success_count + 1;
     }
     else
     {
          $failed_count = $failed_count + 1;
     }
   }

   $final_message = 'Total Send: '.$total_count.'<br><br>'.' Success Message: '.$success_count.'<br><br>'.'  Failed Message: '.$failed_count;


    /*for error description */
  for($i=0; $i< count($data) ; $i++)
   {
    $data_new_value = explode("|",$data[$i]);
    //print_r($data_new_value[0]);exit;
    if($data_new_value[0] != '1701')
     {
       
          if($i == (count($data) - 1))
          {
         
              $error_description .=  $error_code_array[$data_new_value[0]].'.';
          }
          else
          {
              $error_description .=  $error_code_array[$data_new_value[0]].' ,';
          }
     }
     
   }

  
   _e( $final_message, 'textdomain' );

}


/*function to get Message value */
function qsbrmGetMessageValueSingle($data)
{
     $failed_count = 0;
     $total_count = 0;
     $success_count = 0;
     $total_count = count($data);
     $error_description = "";

     $error_code_array = array('1701'=>'success','1702'=>'Invalid URL','1703'=>'Invalid value in username or password parameter','1704'=>'Invalid value in type parameter','1705'=>'Invalid message','1706'=>'Invalid destination','1707'=>'Invalid source (Sender)','1708'=>'Invalid value for dlr parameter','1709'=>'User validation failed','1710'=>'Internal error','1025'=>'Insufficient credit','1715'=>'Response timeout.','1032'=>'DND reject.','1028'=>'Spam message');

   foreach ($data as $key) {

    $data_new_value = explode("|",$key);
    if($data_new_value[0] == '1701')
     {
        $success_count = $success_count + 1;
     }
     else
     {
          $failed_count = $failed_count + 1;
     }
   }

   

   /*for error description */
   for($i=0; $i< count($data) ; $i++)
   {
    $data_new_value = explode("|",$data[$i]);
    if($data_new_value[0] != '1701')
     {
       
       /*php create error description  message */
       if($i == (count($data) - 1))
       {
         
          $error_description .=  $error_code_array[$data_new_value[0]].'.';
       }
       else
       {
          $error_description .=  $error_code_array[$data_new_value[0]].' ,';
        }
     }
     


   }

 $final_message = 'Total Send: '.$total_count.'<br><br>'.' Success Message: '.$success_count.'<br><br>'.'  Failed Message: '.$failed_count;



 _e( $final_message, 'textdomain' );
}



$getParam = sanitize_text_field( $_REQUEST['param'] );

if(!empty($getParam))
{
	if($getParam == "post_form_data")
	{
       
        
       /*function to create URL */
       function qsbrmCreateURL($destination_value)
       {

             /*Sanitized input data */
             $cmbMessageType = sanitize_text_field($_REQUEST['cmbMessageType']);
             $txtWapUrl = sanitize_text_field($_REQUEST['txtWapUrl']);
             $utfValue = sanitize_text_field($_REQUEST['UTF16']);
             $txtMessage = sanitize_text_field($_REQUEST['txtMessage']);

             $server_name = sanitize_text_field($_REQUEST['server_name']);
             $username = sanitize_text_field($_REQUEST['username']);
             $password = sanitize_text_field($_REQUEST['password']);
             $source =  sanitize_text_field($_REQUEST['source']);
             $dlr_radio = sanitize_text_field($_REQUEST['dlr_radio']);
             $destination = sanitize_text_field($destination_value);

             if(isset($cmbMessageType) && $cmbMessageType == 2)
            {
                $newMessage = trim($utfValue);
            }
            else
            {
              $newMessage = preg_replace('/\s+/', '+', $txtMessage);
            }
        
        /*if value for wapUlr Set */

         if(isset($txtWapUrl) && !empty($txtWapUrl))
         {

           $url = "http://".$server_name.":8080/bulksms/bulksms?username=".$username."&password=".$password."&source=".$source."&destination=".$destination."&type=".$cmbMessageType."&dlr=".$dlr_radio."&&message=".$newMessage."&url=".$txtWapUrl;
          }
          else
          {
              $url = "http://".$server_name.":8080/bulksms/bulksms?username=".$username."&password=".$password."&source=".$source."&&destination=".$destination."&type=".$cmbMessageType."&dlr=".$dlr_radio."&&message=".$newMessage."&url=";
          }

          

             return $url;
       }
      
      /*sentizing input data */
      $sendMessageType = sanitize_text_field($_REQUEST['sendMessage']);

      
     /*code for bulk upload*/
     if(isset($sendMessageType) && $sendMessageType == 'bulk')
     {
        
        
        /*declaration of array */
        $data_array_bulk = array(); 

        /*senitizing Inputdata */
        $conatct_count = sanitize_text_field($_REQUEST['conatct_count']);
        $chk_duplicate_bulk = sanitize_text_field($_REQUEST['chk_duplicate_bulk']);


         /*convert string to array*/
         $contact_array = explode(",", $conatct_count);

        

         if(!empty($chk_duplicate_bulk)) //check array duplication
         {
            $contact_array = array_unique($contact_array);
         }
         
         /*validation for 1500 contact array limit */
        
         if(count($contact_array) > 1500)
         {
              
          _e( 'Contact Numbers Limit Should Not greater than 1500.', 'textdomain' );exit;
         }


         $filetr_contact_array = array_filter($contact_array); 
         


         /*logic to divide into chunk of 1000*/
         if(count($filetr_contact_array) > 1000)
         {
            $chunk_array = array_chunk($filetr_contact_array, 1000, true);

            foreach ($chunk_array as $key) {
             $new_url = qsbrmCreateURL(implode(",",$key));
             

             $response_data = qsbrmGetCURLCall($new_url);
             

             $exmp_array = explode(",",$response_data);

              if(!empty($exmp_array))
              {
                foreach($exmp_array as $key)
                {
                  array_push($data_array_bulk, $key);
                }
              }
  
            }

            qsbrmGetMessageValueBulk($data_array_bulk,count($filetr_contact_array));

         }
         else
         {


               $contact_data_less_1000 = implode(",",$filetr_contact_array);

                
                $new_url = qsbrmCreateURL($contact_data_less_1000);  


                $response_data = qsbrmGetCURLCall($new_url);
                $data_array = explode(",",$response_data);
                qsbrmGetMessageValueSingle($data_array);exit;

         }


     }
     else /*code for normal single contact*/
     {

             /*senitization input data */
             $destination = sanitize_text_field($_REQUEST['destination']);
             $chk_duplicate = sanitize_text_field($_REQUEST['chk_duplicate']);

                /*convert string to array*/
             $contact_array_single = explode(",", $destination);

          
          

          if(!empty($chk_duplicate)) //check array duplication
          {
              $contact_array_single = array_unique($contact_array_single);
          }

           /*validation for contacts number */
          if(count($contact_array_single) > 1500)
         {
            
            _e( 'Contact Numbers Limit Should Not greater than 1500.', 'textdomain' );exit;
         }

             /*converting array to string */
             $new_single_contact = implode(",",$contact_array_single);

            

                $new_url = qsbrmCreateURL($new_single_contact); 

                

                $response_data = qsbrmGetCURLCall($new_url);
                //print_r($response_data);exit;
                $data_array = explode(",",$response_data);
                qsbrmGetMessageValueSingle($data_array);exit;
      }
	}
}
?>