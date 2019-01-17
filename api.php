<?php namespace ACRCloud;
$data = "";
if(isset($_POST["data"])){
        $data = $_POST["data"];
}else{
        $data = "hi";
}


        ini_set("display_errors", 1);
        include_once('acrcloud_recognizer.php');

        // Replace "xxxxxxxx" below with your project's host, access_key and access_secret.
        $config = array(
                'host' => 'identify-eu-west-1.acrcloud.com',
                'access_key' => 'a96b884113ffeb58429cece86edbf129',
                'access_secret' => 'isbKQI0JAW0as2udufahHwgU1V8QNxsb05JTeaPz',
                'recognize_type' => ACRCloudRecognizeType::ACR_OPT_REC_AUDIO // ACR_OPT_REC_AUDIO/ACR_OPT_REC_HUMMING/ACR_OPT_REC_BOTH
        );
        $re = new ACRCloudRecognizer($config);

        $content = file_get_contents("/home/georg/sites/mmp2a_test/current/test.mp3");
        var_dump($_POST);

        echo "test";

        $ausgabe = "\n";
        $ausgabe+= $re->recognizeByFileBuffer($content, 0, 10);
        $ausgabe+= "\n";
        $ausgabe+= $re->recognizeByFileBuffer($data,0,10);
        $ausgabe+= "\n";

        echo $ausgabe;

        echo json_encode($ausgabe);
?>