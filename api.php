<?php namespace ACRCloud;
header("Access-Control-Allow-Origin: *");
$data = "";
if(isset($_POST["data"])){
        $data = $_POST["data"];
}else{
        $data = "hi";
}

        $content = file_get_contents($_FILES['file']['tmp_name']);

        $target_file = "uploads/" . basename($_FILES["file"]["name"]);

        if (move_uploaded_file($content, $target_file)) {
                echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
            }

            echo $content;
        ini_set("display_errors", 1);
        include_once('acrcloud_recognizer.php');

        // Replace "xxxxxxxx" below with your project's host, access_key and access_secret.
        $config = array(
                'host' => 'identify-eu-west-1.acrcloud.com',
                'access_key' => 'a96b884113ffeb58429cece86edbf129',
                'access_secret' => 'isbKQI0JAW0as2udufahHwgU1V8QNxsb05JTeaPz',
                'recognize_type' => ACRCloudRecognizeType::ACR_OPT_REC_BOTH // ACR_OPT_REC_AUDIO/ACR_OPT_REC_HUMMING/ACR_OPT_REC_BOTH
        );
        $re = new ACRCloudRecognizer($config);

        //$content = file_get_contents("test.mp3");
        //var_dump($_POST);
        $ausgabe="";
        $ausgabe = $re->recognizeByFileBuffer($content, 0, 10);
        //$ausgabe = $ausgabe."\n";
        //echo $data;
        //secho "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
        //echo $content;
        //$ausgabe = $ausgabe.$re->recognizeByFileBuffer($data,0,10);

        echo $ausgabe;
        //echo json_encode($ausgabe);
?>