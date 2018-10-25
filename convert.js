if((process.argv[2] > 0) && (typeof(process.argv[3]) == "string") && (process.argv[4] == "to") && (typeof(process.argv[5]) == "string") && (process.argv.length == 6)){
    if(((process.argv[3] == "m") && (process.argv[5] == "mm")) || ((process.argv[3] == "kg") && (process.argv[5] == "g"))){
        console.log(process.argv[2] + " " + process.argv[3] + " sind " + process.argv[2]  * 1000 + " " + process.argv[5]);
    } else if(((process.argv[3] == "mm") && (process.argv[5] == "m")) || ((process.argv[3] == "g") && (process.argv[5] == "kg"))){
        console.log(process.argv[2] + " " + process.argv[3] + " sind " + process.argv[2] / 1000 + " " + process.argv[5]);
    }else if((process.argv[3] == "cm") && (process.argv[5] == "m")){
        console.log(process.argv[2] + " " + process.argv[3] + " sind " + process.argv[2] / 100 + " " + process.argv[5]);
    }else if((process.argv[3] == "m") && (process.argv[5] == "cm")){
        console.log(process.argv[2] + " " + process.argv[3] + " sind " + process.argv[2] *100 + " " + process.argv[5]);
    }else if((process.argv[3] == "mm") && (process.argv[5] == "cm")){
        console.log(process.argv[2] + " " + process.argv[3] + " sind " + process.argv[2] /10 + " " + process.argv[5]);
    }else if((process.argv[3] == "cm") && (process.argv[5] == "mm")){
        console.log(process.argv[2] + " " + process.argv[3] + " sind " + process.argv[2] *10 + " " + process.argv[5]);
    }else if(process.argv[3] == process.argv[5]){
        console.log(process.argv[2] + " " + process.argv[3] + " sind " + process.argv[2] + " " + process.argv[5]);
    }
}else {
    console.log("Ungueltige Parameter");
}