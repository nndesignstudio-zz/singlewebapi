<?php

//the hash 
$hashtag = "apple";
$jsonurl = "http://search.twitter.com/search.json?q=%23" . $hashtag;
$json = file_get_contents($jsonurl, 0, null, null);
$json_output = json_decode($json);
$results = $json_output->results;

$i = 1;
$twitter_content = "";
foreach ($results as $result) {
    if ($i < 8) {
        $user = $result->from_user_name;
        $link = "https://twitter.com/" . $user;
        $user_name = $result->from_user;
        $avatar_link = $result->profile_image_url;
        $content = $result->text;
        $twitter_content .= '<li class="twitter_item">';
        $twitter_content .= '<div class="twitter_meta">';
        $twitter_content .= '<img src="' . $avatar_link . '" alt="' . $user_name . '"/>';
        $twitter_content .= '<div class="twitter_meta_details">';
        $twitter_content .= '<h2>' . $user_name . '</h2>';
        $twitter_content .= '<h3><a href="' . $link . '">@' . $user . '</a></h3>';
        $twitter_content .= '</div>';
        $twitter_content .= '</div>';

        $twitter_content .= '<p class="twitter_text">';
        $twitter_content .= $content;
        $twitter_content .= '</p>';
        $twitter_content .= '</li>';
    }
    $i++;
}
$twitter_content .='<li class="twitter_item follow_us">
    <a href="https://twitter.com/markoprljic ">
        <h2>FOLLOW US</h2>
        <H3>ON TWITTER</H3>
        <img src="images/twit_logo_big.png" alt="" />
    </a>
</li>';

$resp = array('response' => $twitter_content);
echo json_encode($resp);
?>