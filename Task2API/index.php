<?php
    $result = array();
function get_api($category, $limit){
    $json = file_get_contents('https://api.publicapis.org/entries');
    $object = json_decode($json, true);
    $data = $object['entries'];

    foreach($data as $dt){
        if($dt['Category'] == $category){
            $result[] = $dt['API'];
            if(count($result) > $limit){
                return $result;
            }
        }
        // if($result != null){
        //     array_push($result, $dt['API']);
        // }
        // return $dt['API'];
    }
    
}
$arr = get_api($argv[1], $argv[2]);
if($arr != null){
    rsort($arr);
    foreach ($arr as $ar){
        echo $ar."\n";
    }
} else {
    echo 'No results';
}
?>