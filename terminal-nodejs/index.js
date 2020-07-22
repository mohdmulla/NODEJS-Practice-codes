// using nodejs to run terminal commands using exec function 

const { exec } = require("child_process");
exec("ls -la ", (error, stdout, stderr) => {
    if (error){
        console.log(`error: ${error.message}`);
        return;        
    }
    if (stderr){
        console.log(`stderr : ${stderr.message}`)
    }
    console.log(`stdout: ${stdout}`);       
})