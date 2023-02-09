const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );
const aFunc = async function(){

    console.log("1回目")

    await sleep( 3000 );

    console.log("2回目")

    await sleep( 1000 );
  
    console.log("終わり")

}
aFunc();
