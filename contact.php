<?php
if($_POST["submit"]) {
    $recipient="gonzales.andre@gmail.com";
    $subject="Recipe Hunter Suggestions";
    $sender=$_POST["sender"];
    $senderEmail=$POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank You! Your Message had been sent. </p>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Shadows+Into+Light+Two&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Sacramento&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles/search.css">
    <title>Recipe Hunter</title>
</head>
<body>
    <div class="container">
        <div class="bg">
            <div class="recipe-title"><h1>Recipe~ </h1><p id='recipe-name'>Welcome to the Recipe Hunter</p></div>
            <div class="card">
                <div class="ingredients"><p id='ing'>Ingredients<p></p>
                    <div class="ingredients-area">
                        <p><span class="action">Contact </span>Us</p>  
                    </div>
                    <div class="search-results">
                    <form action="contact.php" method="post" enctype="text/plain">
    Name:<br>
    <input type="text" name="sender"><br>
    E-mail:<br>
    <input type="text" name="senderEmail"><br>
    Message:<br>
    <input type="text" name="message" size="50"><br><br>
    <input type="submit" value="Send">
    <input type="reset" value="Reset">
    </form>
                    </div>
                </div>
                <div class="mobile-menu">
                    <ul>
                        <li><a href="#">Menu</a>
                            <div class="mobile-menu-sub">
                                <ul>
                                    <li><a href="../index.html">Home</a></li>
                                    <li><a href="search-page.html">Search</a></li>
                                    <li><a href="#" onclick="shareButtons()">Share</a></li>
                                    <li><a href="#" onclick="myFunc()">Print</a></li>
                                    
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="pic">
                    <img id='img' src="https://images.pexels.com/photos/6206/table-kitchen-eat-elegance.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="cutlery">
                </div>
                <div class="serves"><p></p></div>
            </div>
        </div>
        <div class="share">
            <div class="close">X</div> <!--These buttons are created by recipe-hunter.com,frinton madtha--> 
            <div id="share-buttons"> 
                <!-- Facebook --> 
                <a href="https://www.facebook.com/sharer.php?u=https://recipe-hunter.com" target="_blank"><img src="https://4.bp.blogspot.com/-raFYZvIFUV0/UwNI2ek6i3I/AAAAAAAAGSA/zs-kwq0q58E/s1600/facebook.png" alt="Facebook" /></a>
                 <!-- Twitter --> 
                 <a href="https://twitter.com/share?url=https://recipe-hunter.com&text=Check this Out" target="_blank"><img src="https://4.bp.blogspot.com/--ISQEurz3aE/UwNI4hDaQMI/AAAAAAAAGS4/ZAgmPiM9Xpk/s1600/twitter.png" alt="Twitter" /></a> 
                 <!-- Google+ --> 
                 <a href="https://plus.google.com/share?url=https://recipe-hunter.com" target="_blank"><img src="https://2.bp.blogspot.com/-9ijXNtKTaSk/UwNI3ANT4MI/AAAAAAAAGSY/Tu4kE8x9SnI/s1600/google.png" alt="Google" /></a> 
                 <!-- Digg --> 
                 <a href="https://www.digg.com/submit?url=https://recipe-hunter.com" target="_blank"><img src="https://4.bp.blogspot.com/-AUdsqB7cajQ/UwNI2iqT_AI/AAAAAAAAGR8/0FV_ZcsiylU/s1600/diggit.png" alt="Digg" /></a> 
                 <!-- Reddit --> 
                 <a href="http://reddit.com/submit?url=https://recipe-hunter.com&title=Recipe Hunter" target="_blank"><img src="https://4.bp.blogspot.com/-1-mZEa1eiyc/UwNI4JytiFI/AAAAAAAAGSs/AoKmBkkJR-s/s1600/reddit.png" alt="Reddit" /></a> 
                 <!-- LinkedIn --> 
                 <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://recipe-hunter.com" target="_blank"><img src="https://2.bp.blogspot.com/-3_cATk7Wlho/UwNI3eoTTLI/AAAAAAAAGSQ/Y8cpq6S-SeQ/s1600/linkedin.png" alt="LinkedIn" /></a> 
                 <!-- Pinterest --> 
                 <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://2.bp.blogspot.com/-3CfsOmDx-Dg/UwNI3kMVjgI/AAAAAAAAGSU/OSixn3lcjX4/s1600/pinterest.png" alt="Pinterest" /></a> 
                 <!-- StumbleUpon--> 
                 <a href="http://www.stumbleupon.com/submit?url=https://recipe-hunter.com&title=Simple Share Buttons" target="_blank"><img src="https://2.bp.blogspot.com/-si3v8X2IVGI/UwNI4bncQrI/AAAAAAAAGSo/iZepRnIJFZU/s1600/stumbleupon.png" alt="StumbleUpon" /></a> 
                 <!-- Email --> 
                 <a href="mailto:?Subject=RecipeHunter&Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://recipe-hunter.com"><img src="https://4.bp.blogspot.com/-njgKtNLrPqI/UwNI2o-9WfI/AAAAAAAAGR4/f8da1gBgyLs/s1600/email.png" alt="Email" /></a> </div>

 </div>
    </div>
  
    
    <script src="/js/search.js" type='module'></script>
</body>
</html>