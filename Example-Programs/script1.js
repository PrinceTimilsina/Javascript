   function dateCurrent ()
         {
        var currentDate=new Date();
        var day=currentDate.getDate();
        var mon=currentDate.getMonth() +1;
        var yr=currentDate.getFullYear();
        var formattedDate= (mon<10?'0':'')+mon+'/'+(day<10?'0':'')+day+'/'+yr;
        alert(`Today date is:  ${formattedDate}`);
        }
