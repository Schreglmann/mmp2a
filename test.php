<?php namespace ACRCloud;
    include_once('acrcloud_recognizer.php');

    // Replace "xxxxxxxx" below with your project's host, access_key and access_secret.
    $config = array(
        'host' => 'identify-eu-west-1.acrcloud.com',
        'access_key' => 'a96b884113ffeb58429cece86edbf129',
        'access_secret' => 'isbKQI0JAW0as2udufahHwgU1V8QNxsb05JTeaPz',
        'recognize_type' => ACRCloudRecognizeType::ACR_OPT_REC_AUDIO // ACR_OPT_REC_AUDIO/ACR_OPT_REC_HUMMING/ACR_OPT_REC_BOTH
    );
    $re = new ACRCloudRecognizer($config);
    print $re->recognizeByFile($argv[1], 0, 10);

    $content = file_get_contents($argv[1]);
    print $re->recognizeByFileBuffer($content, 0, 10);
?>
