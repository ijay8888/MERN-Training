async function fetchData() {
    try{
        const response = await fetch("https://api.example.com/users");
    }
    catch(e){
        console.log(e.message);
        
    }
}