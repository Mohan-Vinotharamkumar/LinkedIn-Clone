
function toggleType()
{
    
    var passwordField = document.getElementById('password');
    var value = passwordField.nodeType;
    if (value === 'password') 
    {
        passwordField.type = 'text';
    } 
    else 
    {
        passwordField.type = 'password';
    }

}
function callShow()
{
    document.getElementById("hideInput").style.cssText='color: #0a66c2;background-color: transparent;border: none;font-size: 1.2rem;position: absolute;line-height: 5rem;margin-left: -15%;cursor: pointer;'
    document.getElementById("showInput").style.display='none';
    // var value = passwordField.type;
    toggleType();
}

function callHide()
{
    document.getElementById("showInput").style.cssText='color: #0a66c2;background-color: transparent;border: none;font-size: 1.2rem;position: absolute;line-height: 5rem;margin-left: -15%;cursor: pointer;'
    document.getElementById("hideInput").style.display='none';
    toggleType();
}

document.getElementById('submitButton').addEventListener('click', function(event) 
{
    event.preventDefault();
});  

