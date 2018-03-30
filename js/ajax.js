$.ajax({
    url: 'http://192.168.1.28:3000/api/users',
    method:'GET',
    dataType: "json",
    data:{},//false true
    success: function(data){
        console.log(data.length);
        for(var i in data) {
                 $('.ranking-ajax').append('<div class="clearfix"><div class="rk-number fl"></div><div class="rk-x fl"></div><div class="rk-name fl">'+data[i].nickname+'</div><div class="rk-integral fr clearfix"><i></i><span>'+data[i].scoreRecords[0].score+'</span></div></div>');
                      
        };
    },					
    error : function(err) {
        console.log(err);
    }
    });
    //<img src='+data[i].headimg+' alt=""> 