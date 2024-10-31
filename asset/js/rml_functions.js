jQuery(document).ready(function( $ ) {

$("#submit").click(function(){


    var flag = true;
    var error_message = "";
    
    var server_name = document.getElementById("server_name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var sendMessage = document.getElementById("sendMessage").value;
    var destination = document.getElementById("destination").value;
    var source = document.getElementById("source").value;
    var cmbMessageType = document.getElementById("cmbMessageType").value;
    var txtMessage = document.getElementById("txtMessage").value;
    var file = document.getElementById("file").value;
    var dlr_radio = document.getElementById("dlr_radio").value;
    var txtWapUrl = document.getElementById("txtWapUrl").value;   

    if(server_name == "")
    {
        flag = false;
    }
    if(username == "")
    {
        flag = false;
    }
    if(password == "")
    {
        flag = false;
    }
    if(sendMessage == "")
    {
        flag = false;
    }
    if(sendMessage == "single" && destination == "")
    {
        flag = false;
    }
    if(sendMessage == "bulk" && file == "")
    {
        flag = false;
    }
    if(source == "")
    {
        flag = false;
    }
    if(cmbMessageType == "")
    {
        flag = false;
    }
    if(txtMessage == "")
    {
        flag = false;
    }
    if(dlr_radio == "")
    {
        flag = false;
    }
    if(cmbMessageType == "4" && txtWapUrl == "")
    {
        flag = false;
    }
    if(!flag)
    {
        
        document.getElementById('msg_div').innerHTML = '';
       error_message = "All Fields are required";
       document.getElementById('msg_div').innerHTML += '<h3>'+error_message+'</h3>';
    }
    else
    {
                 $("#msg_div").empty();
                   document.getElementById("file").value = "";
                   var post_data = $("#frmSendSingleSms").serialize()+"&action=qsbrm_flag&param=post_form_data";
                   //ajax call make
                   $.post(ajaxurl,post_data,function(response){
                    //console.log(response);
                    document.getElementById('msg_div').innerHTML += '<h3>'+response+'</h3>';
                   });

    }
  
});

    $("#bulk-div").hide();
    
    $("#unicode_div").hide();

     /*jquery function for change input type bulk/simple */

    $("#sendMessage").change(function(){
    $("#msg_div").empty();
    var selectBox = document.getElementById("sendMessage");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue == "bulk")
    {
           /*to show bulk */
            
            $("#bulk-div").show();
            $("#single-div").hide();
    }
    else
    {
        /*to show single*/
       
       $("#bulk-div").hide();
       $("#single-div").show();

    }
  });

  /*jquery function for set arabic attribute left to right*/

  $("#chk_arabic").change(function(){

  	if($(this).is(":checked")){
      var textbox = document.getElementById("txtMessage");
        textbox.style.direction =  "rtl";
    
  }else{
      var textbox = document.getElementById("txtMessage");
       textbox.style.direction =  "ltr";
  }
    
  });

  /*jquery function to file upload for get value */
  $("#file").change(function(){

    
      var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    
    var conatct_data = 0;

    // By lines convert into array
    var lines = this.result.split('\n');
    //convert into string comma separated
    var value_final = lines.toString()
    

   //assing to input box value
    $("#conatct_count").val(value_final);

    

    
  };
  reader.readAsText(file);

    });
});

/*function to download csv file */
function download_csv()
{
    var data = [
   ['98989898989'],
   ['771087878'],
   ['909898909']
];

 var csv = '';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
 
    
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'destination.csv';
    hiddenElement.click();
}
/*function to download txt file*/
function download_txt()
{

     var data = [
   ['98989898989'],
   ['771087878'],
   ['909898909']
];

 var txt = '';
    data.forEach(function(row) {
            txt += row.join(',');
            txt += "\n";
    });
 
    
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURI(txt);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'destination.txt';
    hiddenElement.click();

}
/*function for calculate counter value*/
function textCounter(field, maxlimit) {
        var extraChars = 0;
        var msgCount = 0;
        var wapVal;
        var wapVal1;

        for (var i = 0; (i < field.value.length); i++) {
            if ((field.value.charAt(i) >= '0') && (field.value.charAt(i) <= '9')) {
            } else if ((field.value.charAt(i) >= 'A') && (field.value.charAt(i) <= 'Z')) {
            } else if ((field.value.charAt(i) >= 'a') && (field.value.charAt(i) <= 'z')) {
            } else if (field.value.charAt(i) == '@') {
            } else if (field.value.charAt(i) == '?') {
            } else if (field.value.charAt(i) == '$') {
            } else if (field.value.charAt(i) == '?') {
            } else if (field.value.charCodeAt(i) == 0xE8) {
            } else if (field.value.charCodeAt(i) == 0xE9) {
            } else if (field.value.charCodeAt(i) == 0xF9) {
            } else if (field.value.charCodeAt(i) == 0xEC) {
            } else if (field.value.charCodeAt(i) == 0xF2) {
            } else if (field.value.charCodeAt(i) == 0xC7) {
            } else if (field.value.charAt(i) == '\r') {
            } else if (field.value.charAt(i) == '\n') {
                if (navigator.appName == "Netscape") {
                    extraChars++;
                }
            } else if (field.value.charCodeAt(i) == 0xD8) {
            } else if (field.value.charCodeAt(i) == 0xF8) {
            } else if (field.value.charCodeAt(i) == 0xC5) {
            } else if (field.value.charCodeAt(i) == 0xE5) {
            } else if (field.value.charCodeAt(i) == 0x394) {
            } else if (field.value.charAt(i) == '_') {
            } else if (field.value.charCodeAt(i) == 0x3A6) {
            } else if (field.value.charCodeAt(i) == 0x393) {
            } else if (field.value.charCodeAt(i) == 0x39B) {
            } else if (field.value.charCodeAt(i) == 0x3A9) {
            } else if (field.value.charCodeAt(i) == 0x3A0) {
            } else if (field.value.charCodeAt(i) == 0x3A8) {
            } else if (field.value.charCodeAt(i) == 0x3A3) {
            } else if (field.value.charCodeAt(i) == 0x398) {
            } else if (field.value.charCodeAt(i) == 0x39E) {
            } else if (field.value.charCodeAt(i) == 0xC6) {
            } else if (field.value.charCodeAt(i) == 0xE6) {
            } else if (field.value.charCodeAt(i) == 0xDF) {
            } else if (field.value.charCodeAt(i) == 0xC9) {
            } else if (field.value.charAt(i) == ' ') {
            } else if (field.value.charAt(i) == '!') {
            } else if (field.value.charAt(i) == '\"') {
            } else if (field.value.charAt(i) == '#') {
            } else if (field.value.charCodeAt(i) == 0xA4) {
            } else if (field.value.charAt(i) == '%') {
            } else if (field.value.charAt(i) == '&') {
            } else if (field.value.charAt(i) == '\'') {
            } else if (field.value.charAt(i) == '(') {
            } else if (field.value.charAt(i) == ')') {
            } else if (field.value.charAt(i) == '*') {
            } else if (field.value.charAt(i) == '+') {
            } else if (field.value.charAt(i) == ',') {
            } else if (field.value.charAt(i) == '-') {
            } else if (field.value.charAt(i) == '.') {
            } else if (field.value.charAt(i) == '/') {
            } else if (field.value.charAt(i) == ':') {
            } else if (field.value.charAt(i) == ';') {
            } else if (field.value.charAt(i) == '<') {
            } else if (field.value.charAt(i) == '=') {
            } else if (field.value.charAt(i) == '>') {
            } else if (field.value.charAt(i) == '?') {
            } else if (field.value.charCodeAt(i) == 0xA1) {
            } else if (field.value.charCodeAt(i) == 0xC4) {
            } else if (field.value.charCodeAt(i) == 0xD6) {
            } else if (field.value.charCodeAt(i) == 0xD1) {
            } else if (field.value.charCodeAt(i) == 0xDC) {
            } else if (field.value.charCodeAt(i) == 0xA7) {
            } else if (field.value.charCodeAt(i) == 0xBF) {
            } else if (field.value.charCodeAt(i) == 0xE4) {
            } else if (field.value.charCodeAt(i) == 0xF6) {
            } else if (field.value.charCodeAt(i) == 0xF1) {
            } else if (field.value.charCodeAt(i) == 0xFC) {
            } else if (field.value.charCodeAt(i) == 0xE0) {
            } else if (field.value.charCodeAt(i) == 0x391) {
            } else if (field.value.charCodeAt(i) == 0x392) {
            } else if (field.value.charCodeAt(i) == 0x395) {
            } else if (field.value.charCodeAt(i) == 0x396) {
            } else if (field.value.charCodeAt(i) == 0x397) {
            } else if (field.value.charCodeAt(i) == 0x399) {
            } else if (field.value.charCodeAt(i) == 0x39A) {
            } else if (field.value.charCodeAt(i) == 0x39C) {
            } else if (field.value.charCodeAt(i) == 0x39D) {
            } else if (field.value.charCodeAt(i) == 0x39F) {
            } else if (field.value.charCodeAt(i) == 0x3A1) {
            } else if (field.value.charCodeAt(i) == 0x3A4) {
            } else if (field.value.charCodeAt(i) == 0x3A5) {
            } else if (field.value.charCodeAt(i) == 0x3A7) {
            } else if (field.value.charAt(i) == '^') {
                extraChars++;
            } else if (field.value.charAt(i) == '{') {
                extraChars++;
            } else if (field.value.charAt(i) == '}') {
                extraChars++;
            } else if (field.value.charAt(i) == '\\') {
                extraChars++;
            } else if (field.value.charAt(i) == '[') {
                extraChars++;
            } else if (field.value.charAt(i) == '~') {
                extraChars++;
            } else if (field.value.charAt(i) == ']') {
                extraChars++;
            } else if (field.value.charAt(i) == '|') {
                extraChars++;
            } else if (field.value.charCodeAt(i) == 0x20AC) {
                extraChars++;
            } else {
                //unicodeFlag = 1;
            }
        }
        var fieldLength = field.value.length;

        if (field.name == 'txtWapUrl') {
            wapVal = field.value;
            wapVal1 = wapVal.split(":/");
            wapVal1 = wapVal1[0].length;
            fieldLength = fieldLength - wapVal1 - 3;
            if (fieldLength < 0) {
                fieldLength = 0;
            }
        }

        var count = fieldLength + extraChars;

        // The above code from here is for count of special characters.
        var messagelen = 1;
        var mesagelenudh;
        var messagelenudh1;
        var arrForm = document.forms[0];  //added to acces the forms array
        
        if (count > maxlimit) { // if too long...trim it!
            if (maxlimit == 160) {
               
                messagelen = Math.ceil(count / maxlimit) * 7;
            } else if (maxlimit == 280) {
                messagelen = Math.ceil(count / maxlimit) * 12;
            } else {
               
                messagelen = Math.ceil(count / maxlimit) * 3;
            }
            
            messagelenudh1 = messagelen + count;
            messagelenudh = Math.ceil(messagelenudh1 / maxlimit);

            
            arrForm.txtMessageCount.value = messagelenudh;
            
            return(count + ":" + arrForm.txtMessageCount.value);
        } else {    // otherwise, update 'characters left' counter
            arrForm.txtMessageCount.value = 1;
            
            return(count + ":" + arrForm.txtMessageCount.value);
        }
    }


/*set counter function */
     function setCounter() {
        var arrForm = document.forms[0];
        if (arrForm.cmbMessageType.value == 'Wap Push' || arrForm.cmbMessageType.value == '4') {
            var ilen = textCounter(arrForm.txtWapUrl, arrForm.hiddcount.value);
            var val1 = ilen.split(":");
            var ilen1 = textCounter(arrForm.txtMessage, arrForm.hiddcount.value);
            var val2 = ilen1.split(":");
            var cnt = parseInt(val1[0]) + parseInt(val2[0]);

            var len = Math.ceil(cnt / arrForm.hiddcount.value);
            len = (len == 0) ? 1 : len;
            arrForm.txtMessageCount.value = len;
            var mcnt = arrForm.txtMessageCount.value;
            if (mcnt > 2) {
                var mcnt = Math.ceil((cnt - 113) / 128);
                var mcnt = parseInt(mcnt) + 1;
            }
            arrForm.txtcount.value = cnt + " : " + mcnt + " SMS Message(s)";
        } else {
            var ilen = textCounter(arrForm.txtMessage, arrForm.hiddcount.value);
            var val1 = ilen.split(":");
            if (arrForm.cmbMessageType.value == '10') {
                txtcount.value = val1[0];
            } else {
                txtcount.value = val1[0] + " : " + val1[1] + " SMS Message(s)";
            }
        }
    }

/*function for select option for message type*/
function changeSelect()
{
   document.getElementById('txtMessage').value = '';
   document.getElementById('txtcount').value = '';
}


    /*function Wap Select */
  function wapSelect() {
        if (document.getElementById('cmbMessageType').value == '4') {
            document.getElementById('txtWapUrl').value = '';
              
            document.getElementById('txtWapUrl').disabled = false;
        } else {

            document.getElementById('txtWapUrl').value = '';
            document.getElementById('txtWapUrl').disabled = true;

        }
    }

    /*setMessage Length*/
 function setMessageLength() {

        var arrForm = document.forms[0];
        
        if (arrForm.cmbMessageType.value == "0" || arrForm.cmbMessageType.value == 'Text') {
            arrForm.hiddcount.value = "160";
            setCounter();
            arrForm.txtMessage.dir = "ltr";
        }
        if (arrForm.cmbMessageType.value == "1" || arrForm.cmbMessageType.value == 'Flash') {
            arrForm.hiddcount.value = "160";
            setCounter();
            arrForm.txtMessage.dir = "ltr";
        }
         if (arrForm.cmbMessageType.value == "2" || arrForm.cmbMessageType.value == 'Others') {
            //arrForm.hiddcount.value = "280";
            arrForm.hiddcount.value = "70";
            setCounter();
            arrForm.txtMessage.dir = "ltr";
        }
          if (arrForm.cmbMessageType.value == '4' || arrForm.cmbMessageType.value == 'Wap Push') {
            arrForm.hiddcount.value = "113";
            setCounter();
            arrForm.txtMessage.dir = "ltr";
        }
    }

 /*function for unicode converion*/

 function setConvertedMessage() {
        document.getElementById('txtCodePoints').value = convertChar2CP(document.getElementById('txtOrigMessage').value);
        document.forms[0].UTF16.value = convertCP2UTF16(document.getElementById('txtCodePoints').value);
        document.getElementById('txtUnicodeMessage').value = document.forms[0].UTF16.value;
        return false;
    }
 
  var debug1 = true;
    var debug2 = true;


    function dec2hex ( textString ) {
     return (textString+0).toString(16).toUpperCase();
    }

    function  dec2hex2 ( textString ) {
      var hexequiv = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
      return hexequiv[(textString >> 4) & 0xF] + hexequiv[textString & 0xF];
    }

    function  dec2hex4 ( textString ) {
      var hexequiv = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
      return hexequiv[(textString >> 12) & 0xF] + hexequiv[(textString >> 8) & 0xF] + hexequiv[(textString >> 4) & 0xF] + hexequiv[textString & 0xF];
    }


    function convertCP2Char ( textString ) {
      var outputString = '';
      textString = textString.replace(/^\s+/, '');
      if (textString.length == 0) { return ""; }
      textString = textString.replace(/\s+/g, ' ');
      var listArray = textString.split(' ');
      for ( var i = 0; i < listArray.length; i++ ) {
        var n = parseInt(listArray[i], 16);
        if (n <= 0xFFFF) {
          outputString += String.fromCharCode(n);
        } else if (n <= 0x10FFFF) {
          n -= 0x10000
          outputString += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
        } else {
          outputString += '!erreur ' + dec2hex(n) +'!';
        }
      }
      return( outputString );
    }


    function convertCP2UTF8 ( textString ) {
      var outputString = "";
      textString = textString.replace(/^\s+/, '');
      if (textString.length == 0) { return ""; }
      textString = textString.replace(/\s+/g, ' ');
      var listArray = textString.split(' ');
      for ( var i = 0; i < listArray.length; i++ ) {
        var n = parseInt(listArray[i], 16);
        if (i > 0) { outputString += ' ';}
        if (n <= 0x7F) {
          outputString += dec2hex2(n);
        } else if (n <= 0x7FF) {
          outputString += dec2hex2(0xC0 | ((n>>6) & 0x1F)) + ' ' + dec2hex2(0x80 | (n & 0x3F));
        } else if (n <= 0xFFFF) {
          outputString += dec2hex2(0xE0 | ((n>>12) & 0x0F)) + ' ' + dec2hex2(0x80 | ((n>>6) & 0x3F)) + ' ' + dec2hex2(0x80 | (n & 0x3F));
        } else if (n <= 0x10FFFF) {
          outputString += dec2hex2(0xF0 | ((n>>18) & 0x07)) + ' ' + dec2hex2(0x80 | ((n>>12) & 0x3F)) + ' ' + dec2hex2(0x80 | ((n>>6) & 0x3F)) + ' ' + dec2hex2(0x80 | (n & 0x3F));
        } else {
          outputString += '!erreur ' + dec2hex(n) +'!';
        }
      }
      return( outputString );
    }


    function convertCP2UTF16 ( textString ) {
      var outputString = "";
      textString = textString.replace(/^\s+/, '');
      if (textString.length == 0) { return ""; }
      textString = textString.replace(/\s+/g, ' ');
      var listArray = textString.split(' ');
      for ( var i = 0; i < listArray.length; i++ ) {
        var n = parseInt(listArray[i], 16);
        if (i > 0) { outputString += '';}
        if (n <= 0xFFFF) {
          outputString += dec2hex4(n);
        } else if (n <= 0x10FFFF) {
          n -= 0x10000
          outputString += dec2hex4(0xD800 | (n >> 10)) + '' + dec2hex4(0xDC00 | (n & 0x3FF));
        } else {
          outputString += '!erreur ' + dec2hex(n) +'!';
        }
      }
      return( outputString );
    }


    function convertCP2HexNCR ( textString ) {
      var outputString = "";
      textString = textString.replace(/^\s+/, '');
      if (textString.length == 0) { return ""; }
      textString = textString.replace(/\s+/g, ' ');
      var listArray = textString.split(' ');
      for ( var i = 0; i < listArray.length; i++ ) {
        var n = parseInt(listArray[i], 16);
        outputString += '&#x' + dec2hex(n) + ';';
      }
      return( outputString );
    }


    function convertCP2DecNCR ( textString ) {
      var outputString = "";
      textString = textString.replace(/^\s+/, '');
      if (textString.length == 0) { return ""; }
      textString = textString.replace(/\s+/g, ' ');
      var listArray = textString.split(' ');
      for ( var i = 0; i < listArray.length; i++ ) {
        var n = parseInt(listArray[i], 16);
        outputString += ('&#' + n + ';');
      }
      return( outputString );
    }


    function convertChar2CP ( textString ) {
      var outputString = "";
      var haut = 0;
      var n = 0;
      for (var i = 0; i < textString.length; i++) {
        var b = textString.charCodeAt(i);  // alert('b:'+dec2hex(b));
        if (b < 0 || b > 0xFFFF) {
          outputString += '!erreur ' + dec2hex(b) + '!';
        }
        if (haut != 0) {
          if (0xDC00 <= b && b <= 0xDFFF) {
            outputString += dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + ' ';
            haut = 0;
            continue;
          } else {
            outputString += '!erreur ' + dec2hex(haut) + '!';
            haut = 0;
          }
        }
        if (0xD800 <= b && b <= 0xDBFF) {
          haut = b;
        } else {
          outputString += dec2hex(b) + ' ';
        }
      }
      return( outputString.replace(/ $/, '') );
    }


    function convertUTF82CP ( textString ) {
      var outputString = "";
      var compte = 0;
      var n = 0;
      textString = textString.replace(/^\s+/, '');
      if (textString.length == 0) { return ""; }
      textString = textString.replace(/\s+/g, ' ');
      var listArray = textString.split(' ');
      for ( var i = 0; i < listArray.length; i++ ) {
        var b = parseInt(listArray[i], 16);  // alert('b:'+dec2hex(b));
        switch (compte) {
          case 0:
            if (0 <= b && b <= 0x7F) {  // 0xxxxxxx
              outputString += dec2hex(b) + ' ';
            } else if (0xC0 <= b && b <= 0xDF) {  // 110xxxxx
              compte = 1;
              n = b & 0x1F;
            } else if (0xE0 <= b && b <= 0xEF) {  // 1110xxxx
              compte = 2;
              n = b & 0xF;
            } else if (0xF0 <= b && b <= 0xF7) {  // 11110xxx
              compte = 3;
              n = b & 0x7;
            } else {
              outputString += '!erreur ' + dec2hex(b) + '! ';
            }
            break;
          case 1:
            if (b < 0x80 || b > 0xBF) {
              outputString += '!erreur ' + dec2hex(b) + '! ';
            }
            compte--;
            outputString += dec2hex((n << 6) | (b-0x80)) + ' ';
            n = 0;
            break;
          case 2: case 3:
            if (b < 0x80 || b > 0xBF) {
              outputString += '!erreur ' + dec2hex(b) + '! ';
            }
            n = (n << 6) | (b-0x80);
            compte--;
            break;
        }
      }
      return( outputString.replace(/ $/, '') );
    }


    function convertUTF162CP ( textString ) {
      var outputString = "";
      var haut = 0;
      var n = 0;
      textString = textString.replace(/^\s+/, '');
      if (textString.length == 0) { return ""; }
      textString = textString.replace(/\s+/g, ' ');
      var listArray = textString.split(' ');
      for ( var i = 0; i < listArray.length; i++ ) {
        var b = parseInt(listArray[i], 16);  // alert('b:'+dec2hex(b));
        if (b < 0 || b > 0xFFFF) {
          outputString += '!erreur ' + dec2hex(b) + '!';
        }
        if (haut != 0) {
          if (0xDC00 <= b && b <= 0xDFFF) {
            outputString += dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + ' ';
            haut = 0;
            continue;
          } else {
            outputString += '!erreur ' + dec2hex(haut) + '!';
            haut = 0;
          }
        }
        if (0xD800 <= b && b <= 0xDBFF) {
          haut = b;
        } else {
          outputString += dec2hex(b) + ' ';
        }
      }
      return( outputString.replace(/ $/, '') );
    }


    function convertHexNCR2CP ( textString ) {
      var outputString = '';
      textString = textString.replace(/\s/g, '');
      var listArray = textString.split(';');
      for (var i = 0; i < listArray.length-1; i++) {
        if (i > 0) { outputString += ' ';}
        var n = parseInt(listArray[i].substring(3, listArray[i].length), 16);
        outputString += dec2hex(n);
      }
      return( outputString );
    }


    function convertDecNCR2CP ( textString ) {
      var outputString = '';
      textString = textString.replace(/\s/g, '');
      var listArray = textString.split(';');
      for (var i = 0; i < listArray.length-1; i++) {
        if (i > 0) { outputString += ' ';}
        var n = parseInt(listArray[i].substring(2, listArray[i].length), 10);
        outputString += dec2hex(n);
      }
      return( outputString );
    }   