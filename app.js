
$.ajax("data.json").then(function(response){
    var it=0;

    for(it; it<response.length; it++){
        var $content = '';

        var id = response[it].id;
        var gender = response[it].gender;
        var firstName = response[it].first_name;
        var lastName = response[it].last_name;
        var email = response[it].email;

        $content = 'ID: ' + id + '<br/>' + 'Gender: ' + gender + '<br/>' + 'Name: ' + firstName + ' ' + lastName + '<br/>';

        if(email) {
                $content = $content + 'Email Address: ' + email + '<br/>';
        }

        $('.people').append('<div class=\'individual\'>' + $content + '</div>');
    }

});