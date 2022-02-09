function func({color = 'black', width, height}){
    console.log(color, height);
};

func( {width: 400, height: 500} );