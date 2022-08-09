 var a
function show_hide()
{
    if(a==1)
    {
        document. getElementById ("bar").style.display="block";
        setInterval(1000)
        return a=0;
    }
    else
    {
        document.getElementById ("bar").style.display="none" ;
        setInterval(3000)
        return a=1
    }
}
