const fs = require('fs')
const chalk = require('chalk')


global.botname = "Queen Anya" 
global.botLanguage = "default" // ๐๐ฒ๐ณ๐ฎ๐๐น๐ || ๐๐ป๐ด๐น๐ถ๐๐ต || ๐๐ถ๐ป๐ฑ๐ถ || ๐๐ฟ๐ฎ๐ฏ๐ถ๐ฐ \\
global.author = "Abdullah"  
global.packname = "ArcX Whatsapp Bot"  
global.myweb = "https://github.com/abdullahwy" // You can put any link 
global.waterMark = "รอร King โ ArcXโข โ" // Your own watermark 
global.headerText = "ArcX by ArcXโข" // text for header of menu         
global.DocumentTitle = "MASTERโ๏ธArcX" 


global.ownername = "Abdullah"   // Owner name //        
global.ownernumber = ['12056832316'] 
global.socialm = "๐๐ถ๐๐ต๐๐ฏ : Abdullahwy " // ๐๐ป๐๐๐ฎ : || ๐๐ถ๐๐ต๐๐ฏ : || ๐๐ฎ๐ฐ๐ฒ๐ฏ๐ผ๐ผ๐ธ : \\
global.ytname = "YT: @TreviewTechBro"   // Yt chanel name //
global.continent = "Asia" // your continent name 
global.region = "Sri Lanka" // your country name
global.state = "Southern" // your state name
global.district = "Matara" // your district name
global.timezone = "Asia/Colombo" // search on google if you don't know the timezone of your country //
global.instagramId = "(^_^)" // Your insta ID
global.email = "arabdullahwinpc@gmail.com" // put your email here


//------------ ๐ Premium Users ๐-------------\\
global.premium = ['','94772582662']  // available soon
global.sudo = ['','94772582662']  // Co - Owners //

global.prefa = ['-']

//--------Random bot name for Info section--------\\
name16 = "ArcX Whatsapp Bot"
name17 = "*ArcX*"
name18 = "*ArcX*"

//--------Random footer message-----------\\
footer1 = `ArcX Official`
footer2 = `ArcX Official`

//--------Left message "Nikal msg"--------\\
nikalmsg1 = 'Ye galiye ye choubara, yaha dikhna na dubara๐ป' 
nikalmsg2 = 'Patt se headshot ๐ซ...Abey dil se bura lagta hai bhai ๐.'

//--------Random Tagall msg--------\\
tag1 = '๐๐ฆ๐บ ๐ฆ๐ท๐ฆ๐ณ๐บ๐ฃ๐ฐ๐ฅ๐บ๐, ๐๐ฐ๐ฎ๐ฆ ๐ฐ๐ฏ๐ญ๐ช๐ฏ๐ฆ ๐ข๐ฏ๐ฅ ๐ถ๐ด๐ฆ ๐ต๐ฉ๐ช๐ด ๐ข๐ธ๐ฆ๐ด๐ฐ๐ฎ๐ฆ ๐๐ฐ๐ต.' 
tag2 = '๐๐บ๐ฆ ๐ฆ๐ท๐ฆ๐ณ๐บ๐ฐ๐ฏ๐ฆ!! ๐๐ฉ๐ฆ๐ณ๐ฆ ๐ข๐ณ๐ฆ ๐บ๐ฐ๐ถ ๐ข๐ญ๐ญ?๐' 
tag3 = '๐๐ฃ๐ฆ๐บ ๐ฐ๐ฏ๐ญ๐ช๐ฏ๐ฆ ๐ข๐ข๐ฐ ๐บ๐ข๐ข๐ณ!๐' 
tag4 = '๐๐ฐ๐ธ ๐ญ๐ฐ๐ฐ๐ฌ ๐ข๐ต ๐ต๐ฉ๐ช๐ด ๐ข๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฐ๐ต.๐' 
tag5 = '๐?๐ข๐ข๐ณ ๐ฌ๐บ๐ข ๐๐ฐ๐ต ๐ฉ๐ข๐ชโค๏ธ' 
tag6 = '๐๐ต๐ฏ๐ข ๐ฎ๐ป๐ข ๐ฌ๐บ๐ถ ๐ข๐ข ๐ณ๐ฉ๐ข ๐ฉ๐ข๐ช...๐๐ถ๐ฏ๐ฆ ๐ฉ๐ข๐ธ๐ข ๐ฎ๐ฆ ๐ฃ๐ฉ๐ข๐ฏ๐จ ๐ฎ๐ช๐ญ๐ข๐บ๐ข ๐ฉ๐ข๐ช!๐ฅต' 
tag7 = '๐๐ฉ๐ฆ๐ณ๐ฆ ๐ข๐ณ๐ฆ ๐บ๐ฐ๐ถ ๐ข๐ญ๐ญ?' 
tag8 = '๐๐ฆ๐บ ๐ธ๐ฉ๐ฆ๐ณ๐ฆ ๐บ๐ฐ๐ถ ๐ข๐ญ๐ญ?...๐ค๐ฐ๐ฎ๐ฆ ๐ฉ๐ฆ๐ณ๐ฆ ๐จ๐ถ๐บ๐ด ๐ถ๐ด๐ฆ ๐ต๐ฉ๐ช๐ด ๐๐ ๐๐ฐ๐ต!๐ฅ' 
tag9 = '๐?๐ฐ๐ถ ๐ข๐ญ๐ญ ๐ด๐ฉ๐ฐ๐ถ๐ญ ๐ต๐ณ๐บ ๐ต๐ฉ๐ช๐ด ๐ค๐ถ๐ต๐ฆ ๐๐ฏ๐บ๐ขโค๏ธ๐ซ' 
tag10 = '๐๐บ๐ฐ๐ฐ ๐๐ฏ๐บ๐ข ๐ช๐ด ๐๐ฆ๐ด๐ต!!๐' 


global.mess = {
    success: 'Work done ๐๐ฎ๐ฟ๐น๐ถ๐ป๐ดโค๏ธ',
    admin: "Baby!\nThis command is only for ๐๐ฑ๐บ๐ถ๐ป๐...So i can't process your command babe. ๐", // I used "\n" for change the line 
    botAdmin: 'First make me ๐๐ฑ๐บ๐ถ๐ป!!! ๐',
    owner: 'This command is only for my ๐ผ๐๐ป๐ฒ๐ฟ..',
    group: "Baka !!!!!\nYou can't use this command in a ๐ฝ๐ฟ๐ถ๐๐ฎ๐๐ฒ ๐ฐ๐ต๐ฎ๐ !๐",
    private: 'Such a baka !!\nThis command is only for ๐ฝ๐ฟ๐ถ๐๐ฎ๐๐ฒ ๐ฐ๐ต๐ฎ๐๐. ๐ฅฒ',
    bot: "This Feature Is Only For ๐๐ผ๐... and you're not a ๐๐ผ๐.",
    wait: "I'm progressing your command babyโค๏ธ, Please wait......",
    linkm: 'Abey where is the link...?',
    error: 'I got an ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ!!',
    sudo: "*Hey User ๐....*\nYou can't use this command because this command is only for my co-owner.", 
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the ๐ผ๐๐ป๐ฒ๐ฟ ๐ก, if you want to be ๐๐ป๐ฏ๐ฎ๐ป๐ป๐ฒ๐ฑ, chat owner.',
    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo ๐๐๐ฆ - ๐ฌ๐๐ฆ bano lekin nhii tumhe to nudity dekhni hai ๐',
    banChat: 'The bot was banned ๐ถ๐ป ๐๐ต๐ถ๐ ๐ด๐ฟ๐ผ๐๐ฝ!, please contact the owner to unban.'
}

//--------------- Menu images ----------------\\
global.Menuimage = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg.jpg")
global.thumnnaiIs = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg2.jpeg")

//--------------- Systemic Function --------------\\
global.autoTyping = false 
global.autoreadpmngc = false 
global.autoReadGc = false 
global.autoRecord = false 
global.available = true
global.autoTyping = false 

//----------- Users Userlimit -----------\\
global.userLimit = {
premium: "Infinity",  // premium users 
free: 12,            // Free users
}


/*๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น DANGER ZONE โ?๏ธ๐ ๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
