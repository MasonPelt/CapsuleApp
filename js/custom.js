/* =================================
===  MAILCHIMP                 ====
=================================== */

$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    url: "http://capsulethemoment.us8.list-manage2.com/subscribe/post?u=4a49977d6364238e4cc80b2d1&amp;id=68f34b1dc9" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
});

function mailchimpCallback(resp) {
     if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);
        
    } else if(resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }  
}
