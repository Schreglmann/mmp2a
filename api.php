<?php namespace ACRCloud;
header("Access-Control-Allow-Origin: *");
        $audioFileFromUser = file_get_contents($_FILES['file']['tmp_name']);

        ini_set("display_errors", 1);
        include_once('acrcloud_recognizer.php');

        $config = array(
                'host' => 'identify-eu-west-1.acrcloud.com',
                'access_key' => 'a96b884113ffeb58429cece86edbf129',
                'access_secret' => 'isbKQI0JAW0as2udufahHwgU1V8QNxsb05JTeaPz',
                'recognize_type' => ACRCloudRecognizeType::ACR_OPT_REC_BOTH // ACR_OPT_REC_AUDIO/ACR_OPT_REC_HUMMING/ACR_OPT_REC_BOTH
        );
        $APIAnswer = new ACRCloudRecognizer($config);

        echo $APIAnswer->recognizeByFileBuffer($audioFileFromUser, 0, 10);
?>