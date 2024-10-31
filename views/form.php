<html>
<head>
<link rel="stylesheet" href="../wp-content/plugins/quick-sms-by-route-mobile/asset/css/bootstrap.min.css">
<link rel="stylesheet" href="../wp-content/plugins/quick-sms-by-route-mobile/asset/css/style_rml.css">
</head>
<body>
    
<form action="#" id="frmSendSingleSms" name="frmSendSingleSms">
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div id="panel" style="width:100%">
        <div class="caption"><h2>Unicode Convertor</h2></div>
        <table cellpadding="5" cellspacing="0" border="0" align="center" width="400px;" class="tblLayout">
            <tbody><tr>
                <td align="center">
                    <table border="0" cellspacing="1" cellpadding="5" width="100%">
                        <tbody><tr>
                            <td colspan="100%" align="left">
                                <b>Note :</b><p> 1) A 'Unicode' Or 'Unicode Flash' Message should be in hex format.<br>
                                    Enter original message ,hex conversion will be generated .<br>
                                    Click on import button to import hex converted message.<br>
                                    2) For personalize messages, unicode message will be appeneded to original message.<br></p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <label for="txtOrigMessage" style="vertical-align: top;">Message  : </label>                            </td>
                            <td align="left">
                                <input type="hidden" id="txtCodePoints" value="">
                                <textarea name="txtOrigMessage" cols="30" rows="4" id="txtOrigMessage" title="Paste Your Original Message Which Is Other Than English,Unicode Converted Value Is Generated Bellow" style="width:250px;" maxlength="5000" size="30" onblur="document.getElementById('txtCodePoints').value = convertChar2CP(document.getElementById('txtOrigMessage').value);
document.forms[0].UTF16.value = convertCP2UTF16( document.getElementById('txtCodePoints').value );
return false;" onclick="document.getElementById('txtCodePoints').value = convertChar2CP(document.getElementById('txtOrigMessage').value);
document.forms[0].UTF16.value = convertCP2UTF16( document.getElementById('txtCodePoints').value );
return false;" onkeyup="setConvertedMessage();"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="100%"></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <label for="txtUnicodeMessage" style="vertical-align: top;">UnicodeMessage  : </label>                            </td>
                            <td align="left">
                                <textarea name="txtUnicodeMessage" cols="30" rows="4" readonly="readonly" id="txtUnicodeMessage" title="This is the unicode converted message,copy it or just click on import button." 0="onKeyPress=return false;" style="width:250px;" maxlength="5000" size="30"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td class="fpanel" align="center" colspan="2" style="padding-top: 2%">
                                <input type="button" name="txtBtnImport" value="Import " id="txtBtnImport" onclick="" class="btn green">
                            </td>
                        </tr>
                    </tbody></table><!-- this table contains actual displayed elements-->
                </td>
            </tr>
        </tbody></table>
    </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>


  <div class="container">
    <h1 align="center">Route Mobile API Details</h1>
    <div class="row"> 
        
        <div class="col-md-4">
            <div class="form-group"> 
            <label>Server Name</label>
            <input class="form-control" type="text" placeholder="Server Name" name="server_name" id="server_name" required"/>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
            <label>User Name</label>
            <input class="form-control" type="text" placeholder="Username " name="username" id="username" required"/>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
            <label>Password</label>
            <input class="form-control" type="password" placeholder="Password" name="password" id="password" required"/>
            </div>
        </div>
    </div>
    <h3>Send SMS</h3>
    <div class="row">
        
        <div class="col-md-6 form-group">
            <label>Send Message</label>
            <select style="max-width:100%;" name="sendMessage" id="sendMessage" class="form-control">
                <option value="single">Single</option> 
                <option value="bulk">Bulk</option> 
            </select>
        </div>
        <div class="col-md-6 form-group" id="single-div">
            <div style="float:right;">
            <input type="checkbox" id="chk_duplicate" name="chk_duplicate" value="chk_duplicate" onchange="">
             <label for="vehicle1">Remove Duplicate</label><br>
        </div>
            <label>Destination</label>
            <input class="form-control" type="text" placeholder="Destination" name="destination" id="destination"/>
            <span style="display: block;font-size: 12px;line-height: 16px;"><b>Note:1500 comma separated contact numbers are allowed.</b></span>
        </div>
        <div class="col-md-6 form-group" id="bulk-div">
            <div style="float:right;">
            <input type="checkbox" id="chk_duplicate_bulk" name="chk_duplicate_bulk" value="chk_duplicate_bulk" onchange="">
             <label for="vehicle1">Remove Duplicate</label><br>
        </div>
            <label>Upload File</label>
            <input type="file" name="file" id="file" class="form-control" accept=".csv,.txt">
            <span style="display: block;font-size: 12px;line-height: 16px;"><b>Note:Upto 1500 contact numbers are allowed.</b></span>
            <span id="sample_link"><a href="#" id="sample_link_data" name="sample_link_data" title="Click here to download sample file." onclick="download_csv()">Sample file .CSV</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span id="sample_link"><a href="#" id="sample_link_data" name="sample_link_data" title="Click here to download sample file." onclick="download_txt()">Sample file .txt</a></span>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-6 form-group">
            <label>DLR</label><br/>
            <label class="radio-inline">
              <input type="radio" name="dlr_radio" id="dlr_radio" value="1" checked> Yes
            </label>
            <label class="radio-inline">
              <input type="radio" name="dlr_radio" id="dlr_radio" value="0"> No
            </label>
        </div>
        <div class="col-md-6 form-group">
            <label>Source</label>
            <input class="form-control" type="text" placeholder="Source" name="source" id="source"/>
        </div>
    </div>    
        
    <div class="row">
        <div class="col-md-6 form-group">
            <label>Message Type</label>
            
            <select style="max-width:100%;" name="cmbMessageType" id="cmbMessageType" title="Please Select Message Type" onchange="javascript:setMessageLength(),wapSelect(),changeSelect();" class="form-control valid" aria-required="true" aria-invalid="false">
                <option value="" selected="selected">-- Select --</option>
                <option value="0">Text</option> 
                <option value="1">Flash</option> 
                <option value="2">Others</option>
                <option value="4">WapPush</option>
            </select>
        </div>
        <div class="col-md-6 form-group">
          <div style="float:right;">
            <input type="checkbox" id="chk_arabic" name="chk_arabic" value="chk_arabic">
             <label for="vehicle1">right to left</label><br>
        </div>
        <input type="hidden" name="codePoints" value="" onblur="document.frmSendSingleSms.txtMessage.value = convertCP2Char( document.frmSendSingleSms.codePoints.value );
document.frmSendSingleSms.UTF16.value = convertCP2UTF16( document.frmSendSingleSms.codePoints.value );return false;" readonly="readonly">
<input type="hidden" name="UTF16" value="" onblur="document.frmSendSingleSms.codePoints.value = convertUTF162CP( document.frmSendSingleSms.UTF16.value );
return false;" rows="3" cols="50">
            <label>Message</label>

<textarea name="txtMessage" cols="30" rows="4" id="txtMessage" title="Please  Enter  Message " class="form-control valid" maxlength="5000" size="30" onkeypress="javascript:setCounter()" onblur="javascript:setCounter(); document.frmSendSingleSms.codePoints.value = convertChar2CP(document.frmSendSingleSms.txtMessage.value);
document.frmSendSingleSms.UTF16.value = convertCP2UTF16( document.frmSendSingleSms.codePoints.value );
return false;" onclick="javascript:setCounter();document.frmSendSingleSms.codePoints.value = convertChar2CP(document.frmSendSingleSms.txtMessage.value);
document.frmSendSingleSms.UTF16.value = convertCP2UTF16( document.frmSendSingleSms.codePoints.value );
return false;" onkeyup="javascript:setCounter(); document.frmSendSingleSms.codePoints.value = convertChar2CP(document.frmSendSingleSms.txtMessage.value);
document.frmSendSingleSms.UTF16.value = convertCP2UTF16( document.frmSendSingleSms.codePoints.value );
return false;" dir="ltr" aria-required="true" aria-invalid="false" style="direction: ltr;"></textarea>

<span id="link2" style="display: none;"><a href="#" id="#dialog2" name="modal2" title="Click Here To Change Your Unicode Message Contents." data-toggle="modal"  data-target="#myModal">Edit UnicodeMessage </a></span>

        </div>

    </div>

    <div class="row">

        <div class="col-md-6 form-group">
            <label>URL</label>
            <input class="form-control" type="text" placeholder="URL" name="txtWapUrl" id="txtWapUrl" disabled="true" />
        </div>
        <div class="col-md-6 form-group">
        <label>Characters</label>
          <input type="hidden" name="hiddcount" value="" id="hiddcount">

          <input type="text" name="txtcount" value="" id="txtcount" readonly="readonly" class="form-control" onfocus="" aria-invalid="false">

            <input type="hidden" name="txtMessageCount" value="" id="txtMessageCount">
        </div>



        
    </div>
    <div class="row">
        <div class="col-md-6 form-group">
            <input type="hidden" name="conatct_count" value="" id="conatct_count">
            <!--<input type="submit" class="btn btn-primary">-->
            <input type="button" class="btn btn-primary" value="Submit" id="submit" name="submit">

        </div>
    </div>
  </div>
  <div id="msg_div"></div>
</form>
<!--script place-->
<body>
<html>
