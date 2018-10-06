const Discord = require('discord.js');
const client = new Discord.Client();
const superagent = require("superagent");
var figlet = require('figlet');
const weather = require('weather-js');
var prefix = ('n&') 
const ms = require("ms");
const db = require('quick.db')
const meme = require('memejs');
let DEFAULT_VOLUME = 100

// Ready Event
client.on('ready', () => {
  console.log('Estoy Lista! / Funcionando en ' + client.guilds.size.toLocaleString() + ' servers');
  client.user.setActivity(`n&help | Being useless on ${client.guilds.size} servers.`);
  client.user.setStatus(`online`) 
});

// New Server Added Event!
client.on("guildCreate", async guild => {
  var embed = new Discord.RichEmbed()

  .setDescription('• I just been added to a new server!')
  .addField('▸ Name: ', `${guild.name}`)
  .addField('▸ ID: ', `${guild.id}`) 
  .addField('▸ Owner: ', `${guild.owner.user.tag}`)
  .addField('▸ Users: ', `${guild.memberCount}`)
  .setThumbnail(guild.iconURL)
  .setColor('#87CEEB') 
  .setTimestamp()

    client.channels.get("488030661135958016").send(embed)
  client.user.setActivity(`Use n&help | Being useless on ${client.guilds.size} servers.`) 
});

// Server Deleted Event
client.on("guildDelete",  async guild => {
  var embed = new Discord.RichEmbed()
  .setColor('#87CEEB')
  .seDescription('• I just got kicked on a server! ')
  .addField('▸ Name: ', `${guild.name}`)
  .addField('▸ ID: ', `${guild.id}`) 
  .addField('▸ Owner: ', `${guild.owner.user.tag}`)
  .addField('▸ Users', `${guild.memberCount}`)
  .setThumbnail(guild.iconURL)
  
  .setTimestamp()

    client.channels.get("488030661135958016").send(embed)
  client.user.setActivity(`Use n&help | Being useless on ${client.guilds.size} servers.`) 
});
     
// Message Event
client.on('message', async message => {

if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return; 
       
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();

// Other Commands
if (command === "ping") {
 let ping = Math.floor(message.client.ping);
  var pingembed = new Discord.RichEmbed() 
   .setColor("#87CEEB") 
   .setDescription('Pong! Took me **'+ping+'** ms!');    
    message.channel.send(pingembed);
  }
  
  if(command === 'reverse'){


  if(!args[0]) return message.channel.send('Correct usage: **!!reverse (text to reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Wait... You broke it!`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor("87CEEB" )
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
  }
  
  if(command === 'meme'){
      meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("#87CEEB")
  .setImage(data.url[0])
  message.channel.send({embed});
  })};

  if(command === 'socios') {

var sociosembed = new Discord.RichEmbed()

.setColor('#ff8000')
.addField('Dresden', 'por ser mi amigo y ayudarme mucho')

.addField('Frend', 'por ser mi amigo, y una persona maja')

.addField('Ykya', 'por ayudarme en un server muerto y ser mi amiga')

.addField('Jons', 'por ser mi amigo y ayudandome haciendo un server') 
.addField('Dawah', 'es un hijo de puta, pero se le quiere') 
message.channel.send(sociosembed) 
  } 

  if(command === 'icon') {
    const embed = new Discord.RichEmbed()
            .setTitle(`Icon of ${message.guild.name}'s`)
           .setImage(message.guild.iconURL)
  .setColor("87CEEB")
            message.channel.send(embed)
}
if(command === "help") {    
 const helpembed = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setColor("#87CEEB")
  .setDescription("Hello, my name is Nico Nico Nii, a bot with many functions! My dev is **Crispo#9251**.  If you want to know my awesome commands, just write ``n&commands``\n\n**📌 ▸ External Links** \n[▸ Invite me!](https://discordapp.com/api/oauth2/authorize?client_id=488011211406049281&permissions=3148806&scope=bot)\n") 
  .setFooter(message.author.username) 
  .setTimestamp()
   message.channel.send(helpembed);
} 
  
if(command === "commands"){    
 var commandsembed = new Discord.RichEmbed()
  .setColor("#87CEEB")
  .addField("▸ Miscellaneous:", "``ping`` ``help`` ``ascii`` ``weather`` ``serverinfo`` ``invite`` ``icon`` ``avatar`` ``about`` ``reverse`` ``meme`` ``lizard`` ``discrim``")
 .addField("▸ Roleplay:","``pat`` ``slap`` ``cuddle`` ``kiss`` ``smug`` ``baka`` ``hug`` ``ratewaifu`` ``gasm`` ``catlenny``") 
 .addField("▸ Games:", "``osu``") 
 .addField("▸ Moderation:", "``warn`` ``mute`` ``kick`` ``ban``") 
 .addField("▸ Radios:","``anime``")
 .addField("▸ Music:", "``play`` ``leave``") 
 .addField("▸ NSFW:", "``fuck`` ``lewd`` ``pussy`` ``yuri`` `` yaoi`` ``smallboobs`` ``boobs``")
  .setFooter(message.author.username) 
 .setTimestamp()
   message.channel.send(commandsembed) 
  }
  
  if(command === 'about') {

var aboutembed = new Discord.RichEmbed() 

.setColor('#FDFD96')

.addField("Servers", `${client.guilds.size}`) 

.addField("Users", `${client.users.size}`) 

.addField("Library", `Discord.js ^^ 11.4.2`)

.addField("Devs", `Crispo#9251`) 


message.channel.send(aboutembed)

} 

if(command === "invite"){
 var invite = new Discord.RichEmbed()
  .setColor("#87CEEB" )
  .setDescription('**Use my invite link to add me in your server! :3** [Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=488011211406049281&permissions=3148806&scope=bot)')
   message.channel.send(invite)
  }
 
  
if(command === "8ball"){
  var rpts = ["Yes", "NU", "Why me?", " ¡Sure! "];
    if (!args) return message.reply(`Write a question.`);
      var ochobal = new Discord.RichEmbed()
        .setAuthor("8ball", message.author.avatarURL)
        .setDescription("**You asked:**\n"+args+"\n\n**My answer is:**\n" + rpts[Math.floor(Math.random() * rpts.length)])
        .setColor('#87CEEB')
        message.channel.send(ochobal) 
}
  
  if(command === 'avatar') {
    
    let img = message.mentions.users.first()
      if (!img) {

          const embed = new Discord.RichEmbed()
          .setImage(`${message.author.avatarURL}`)
          .setColor("#87CEEB")
          .setFooter(`${message.author.username}#${message.author.discriminator} avatar!`);
          message.channel.send({ embed });

      } else if (img.avatarURL === null) {

          message.channel.sendMessage("This user ("+ img.username +") doesn't have an avatar!");

      } else {

          const embed = new Discord.RichEmbed()
          .setImage(`${img.avatarURL}`)
          .setColor("#87CEEB")
          .setFooter(`${img.username}#${img.discriminator} avatar! `);
          message.channel.send({ embed });

      };

  }
  
  
if(command === 'ascii') {      
 var maxLen = 18 // You can modify the max characters here  
  if(args.join(' ').length > maxLen) return message.channel.send('Only 14 characters admitted!') 
  if(!args[0]) return message.channel.send('Please specify a test to asciify!');
  
  figlet(`${args.join(' ')}`, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
        console.dir(err);
         return;
      }

          message.channel.send(`${data}`, {code: 'AsciiArt'});
  });
  }
  
if(command === "weather") {    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  if (err) message.channel.send(err);
   if (result === undefined || result.length === 0) {
    message.channel.send('**Please enter a location!**')
     return;
      }
      var current = result[0].current;
       var location = result[0].location;
        const embed = new Discord.RichEmbed()
         .setDescription(`**${current.skytext}**`)
         .setAuthor(`Weather for ${current.observationpoint}`)
         .setThumbnail(current.imageUrl)
         .setColor("#87CEEB")
         .addField('Timezone',`UTC ${location.timezone}`, true)
         .addField('Degree Type',location.degreetype, true)
         .addField('Temperature',`${current.temperature} Degrees`, true)
         .addField('Feels Like', `${current.feelslike} Degrees`, true)
         .addField('Winds',current.winddisplay, true)
         .addField('Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
  }
  
  if(command === 'serverinfo'){
    
     let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created • ${day} | ${month} of ${year}`)
   .setColor("#87CEEB")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Name", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Region", message.guild.region, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Members", message.guild.memberCount, true)
   .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roles", message.guild.roles.size, true);
   message.channel.send(serverembed);

  }
  
// Commands NSFW
if(command === 'fuck'){
 let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/classic`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
     let hentaiUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!hentaiUser) return message.channel.send("Make sure you mention someone!");

       let hentaiEmbed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} fucked ${message.mentions.users.first().username}!`)
        .setColor("#87CEEB")
        .setImage(body.url) 
        .setTimestamp()
         message.channel.send(hentaiEmbed);
  }

if(command === 'lewd') {
 let {body} = await superagent
  .get(`https://nekos.life/api/lewd/neko`);
   if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
  
    let hentaiEmbed = new Discord.RichEmbed()
     .setColor("#87CEEB")
     .setTitle("Take this lewd!")
     .setImage(body.neko)
      message.channel.send(hentaiEmbed);
}
  
  if(command === 'pussy') {
    if(!message.channel.nsfw) return message.reply(" I can't show nsfw images on non-nsfw channels!")
  
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pussy`);

    let hentaiEmbed = new Discord.RichEmbed()
    
    .setTitle(`Take this pussy!`)
    .setImage(body.url)
    .setColor("#87CEEB")
    

  message.channel.send(hentaiEmbed)

}
  
  if(command === 'yuri'){
let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/yuri`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#87CEEB")
    .setTitle("Take this yuri photo!")
    .setImage(body.url)
    .setColor("#87CEEB")
    

    message.channel.send(hentaiEmbed);

  }
  
  if(command === 'smallboobs') {
let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#87CEEB")
    .setTitle("Take this smallboobs!")
    .setImage(body.url)
    .setColor("#87CEEB")
    

    message.channel.send(hentaiEmbed);

  }
  
  if(command === 'boobs') {
let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("87CEEB")
    .setTitle("Take this boobs!")
    .setImage(body.url)
    .setColor("#87CEEB")
    

    message.channel.send(hentaiEmbed);

  }
  
  if(command === 'yaoi'){

if (!message.channel.nsfw) return message.reply('I can not show nsfw content in non-nsfw channels!')

let yaoi = [

"https://cdn.discordapp.com/attachments/481571141106794506/485068381649764363/Censored.gif", 

"https://cdn.discordapp.com/attachments/481571141106794506/485068007714979850/Junio_3.gif", 

"https://cdn.discordapp.com/attachments/481571141106794506/485067879763673088/69df1a8be75530e8c367652b16970dc5.gif", 

  "https://cdn.discordapp.com/attachments/482988955566866444/485075309364903956/6874741.GIF",
  
  "https://cdn.discordapp.com/attachments/482988955566866444/485075350569746443/source.gif", 
  
  "https://cdn.discordapp.com/attachments/482988955566866444/485076321643266048/tumblr_ltvxjvEC0O1r4bfwmo4_400.gif",
  
  "https://cdn.discordapp.com/attachments/482988955566866444/485076266026795020/tumblr_nvbklf7Vw61rwe6xgo1_500.gif",
  
  "https://cdn.discordapp.com/attachments/482988955566866444/485076775429472276/22785454a72165b23b0956f91390511c5503e5a3_hq.gif", 
]
    let yaoiresult = Math.floor((Math.random() * yaoi.length));

var yaoiembed = new Discord.RichEmbed()

.setColor('#87CEEB') 
.setTitle('Take this yaoi!')
.setImage(yaoi[yaoiresult])

message.channel.send(yaoiembed)

} 
  
  if(command === 'gasm'){

const {body} = await superagent
.get('https://nekos.life/api/v2/img/gasm')

var gasmembed = new Discord.RichEmbed()

.setColor('#87CEEB') 
.setTitle('`Take this gasm!`')
.setImage(body.url)

message.channel.send(gasmembed)

} 

// Osu Part
 
  
  if(command === 'pat') {
  let patUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!patUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/pat`);

    let patEmbed = new Discord.RichEmbed()
    .setTitle(`**${message.author.username} patted **${message.mentions.users.first().username}!`)
    .setImage(body.url)
    .setColor("87CEEB")
    

    message.channel.send(patEmbed)

}
  if(command === 'slap') {
  let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!slapUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

    let slapEmbed = new Discord.RichEmbed()
    
    .setTitle(`${message.author.username} slapped ${message.mentions.users.first().username}!`)
    .setImage(body.url)
    .setColor("#87CEEB")
    

  message.channel.send(slapEmbed)

}
  
  if(command === 'cuddle') {
    let cuddleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!cuddleUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cuddle`);

    let cuddleEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username}!`)
    .setImage(body.url)
    .setColor("#87CEEB")
    

    message.channel.send(cuddleEmbed)

  }
  
  if(command === 'kiss'){
let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kissUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/kiss`);

    let kissEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username}!`)
    .setImage(body.url)
    .setColor("#87CEEB")
    

   message.channel.send(kissEmbed)

}
  
  if(command === 'smug') {

const {body} = await superagent
.get(`https://nekos.life/api/v2/img/smug`)

var smugembed = new Discord.RichEmbed() 
.setColor('#87CEEB') 
.setTitle(`${message.author.username} is smuging!`) 
.setImage(body.url) 

message.channel.send(smugembed) 

} 
  
  if(command === 'baka') {

const {body} = await superagent
.get(`https://nekos.life/api/v2/img/baka`)

var bakaembed = new Discord.RichEmbed() 
.setColor('#87CEEB') 
.setTitle(`Take this baka photo!`) 
.setImage(body.url) 

message.channel.send(bakaembed) 

} 
  if(command === 'hug'){
let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} hugged ${message.mentions.users.first().username}!`)
    .setImage(body.url)
    .setColor("#FDFD96")
    

    message.channel.send(hugEmbed)

}

  if(command === 'ratewaifu'){

let m421 = args.join(" ");
  if (!m421) return message.channel.send('Please define a name.')
  if (m421.length > 30) return message.channel.send(`I can't rate your waifu! It's over 30 text!`)
  let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ❤`)
  .setColor(`#87CEEB`)
    
      const sadembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 😭`)
  .setColor(`87CEEB`)
      
        const idkembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤔`)
  .setColor(`#87CEEB`)
        
      const shrugembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤷`)
  .setColor(`#87CEEB`)
                
          const okembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👌`)
  .setColor(`#87CEEB`)
                        
const thumbupembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👍`)
  .setColor(`#87CEEB`)

const eyesembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👀`)
  .setColor(`#87CEEB`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
}

if(command === 'catlenny'){

const {body} = await superagent
.get('https://nekos.life/api/v2/cat')

var catembed = new Discord.RichEmbed()

.setColor('#87CEEB')
.setTitle('`Take this catlenny!`')
.setDescription(body.cat)

message.channel.send(catembed)

} 
  
  if(command === 'lizard'){

const {body} = await superagent
.get('https://nekos.life/api/lizard')

var lizard = new Discord.RichEmbed()

.setColor('#87CEEB')
.setTitle('`Take this lizard`')
.setImage(body.url)

message.channel.send(lizard)

} 
  
  //Moderation:
  
  if(command === "warn") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to use this!") 
   let warnedmember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!warnedmember) return message.reply("Please mention a user to warn.");
     let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
   
    
      message.delete().catch(O_o=>{});
    message.channel.send(`***${warnedmember.user.tag} was warned!***`)
   await warnedmember.send(`You have been warned in ${message.guild.name} by ${message.author.username} for: ${reason}.`)
  
  }
  
  if(command === 'mute'){
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you do not have permissions!");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("The user you are trying to mute is either the same, or higher role than you.");
    let muterole = message.guild.roles.find(`name`, "nii-muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "nii-muted",
                color: "#ffffff",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                   READ_MESSAGES: false, 
                  SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specify a time!");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

  }
//Economy:
  /*
  if(command === 'daily'){
      let cooldown = 8.64e+7,
    amount = 125

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`userBalance_${message.member.id}`).then(bucks => {
    if(bucks == null){
        db.set(`userBalance_${message.member.id}`, 0)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`Next Daily`)
        .setColor('#ff8000')
        .setDescription(`You sucessfully collected this, you must wait to collect next daily!`)
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.member.id}`, amount).then(i => {
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('Todays Daily')
          .setDescription(`Sucessfully collected :dollar:$${amount}`)
          .setColor('#ff8000')
          .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed);
        })}
    })} catch(err) {console.log(err)}

  }
if(command === 'bal') {
  var user = message.mentions.users.first() || message.author;
        
        var balance = await db.fetch(`userBalance_${user.id}`)
        
        if (balance === null) balance = 0;
        
        var embed = new Discord.RichEmbed()
        .setTitle('Dollar Balance')
        .setDescription(`${user.username}, **your balance:\n:dollar: $${balance}**`)
        .setColor('#ff8000')
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(embed)

}
 */
// Radios
if(command === 'anime') {
       const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
     if (voiceConnection) return message.channel.send(':musical_note:  | :x: Están usando el sistema de música. Utliza `leave` para reiniciar.')
     let voiceChannel = message.member.voiceChannel;
      if(!voiceChannel) return message.channel.send(':musical_note:  | :x: Debes unirte a un canal de voz primero.');
        voiceChannel.join().then(connection =>{
        let dispatcher = connection.playStream('http://198.105.216.204/proxy/mcradio?mp=/;', {seek: 0, volume: DEFAULT_VOLUME/100});
        const embed = new Discord.RichEmbed()
        .setDescription(':radio: **Reproduciendo ahora:** [MC Anime Radio](http://mcanimeradio.com)')
        .setColor('#87CEEB')
        message.channel.send({embed})
      })
      .catch(console.error);
     } 
  
  if(command === "play") {
    const ytdl = require('ytdl-core') 
    if (!message.member.voiceChannel) return message.channel.send(':no_entry_sign: Please join a voice channel.');
    if (message.guild.me.voiceChannel) return message.channel.send(':no_entry_sign: Error, the bot is already connected to another music channel or a song is playing.');
    if (!args[0]) return message.channel.send(':no_entry_sign: Error, please enter a **URL** following the command.');

    let validate = await ytdl.validateURL(args[0]);
   
    if (!validate) return message.channel.send(':no_entry_sign: Error, please input a __valid__ url following the command.');

    let info = await ytdl.getInfo(args[0]);
   
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.playStream(ytdl(args[0], {
        filter: 'audioonly'
    }));

    let playembed = new Discord.RichEmbed()
   .setColor('#87CEEB') 
    .setTitle("Now playing")
    .setDescription(`${info.title}`)
    
    message.channel.send(playembed);
  }
if(command === 'leave') {
  const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
			if (voiceConnection === null) return message.channel.send(':musical_note:  | :x: Im not in the voice channel.');
		
			// End the stream and disconnect.
			message.member.voiceChannel.leave()
      message.channel.send(':musical_note:  |  I left the channel. ')
  }
  
  if(command === 'discrim'){
    const embed = new Discord.RichEmbed()
        .setColor("#87CEEB");
    
    // Check if they entered a number between 0-10000
    if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) { // Run if out of parameters
        
        // Update embed footer
      
       embed.setFooter('Sorry, please enter a valid discrim.');
        
        // Send error message
        return message.channel.send(embed);
        
    }
    
   // Initialize response string
   let resp = '';
   
   // Go through each user connected to the bot
   client.users.map(function(user) {
       
       // The if statement will check if the input is equal to the user's discrim
       if (user.discriminator == args[0]) return resp += `${user.username}\n`;
       else return; // If not, return
       
   })
   
    // Add embed options
    embed.setTitle(`Discrim: ${args[0]}`)
        .setDescription(resp);
        
    // Send Embed
    message.channel.send(embed)
    
}

  
  //Games
  /*
  if(command === 'spotify'){
       var user = message.mentions.users.first() || message.author;

    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify track info')
                .setColor('#FDFD96')
                .setThumbnail(trackImg)
                .setDescription(`
\`🎵\` **Song name :**  \`${trackName}\`
\`📀\` **Album :**  \`${trackAlbum}\`
\`🎤\` **Author(s) :**  \`${trackAuthor}\`
`)
                .addField('Listen to this track :', `[${trackUrl}](${trackUrl})`, false);

            return message.channel.send(embed);

        } catch (error) {
            return message.channel.send(`\`[ERROR ❌]\`, ${user.username} may not be listening to a registered sound`);
        }

    } else {
        return message.channel.send(`${user.username} is not listening to spotify`);
    }
};
*/
// Client Login
});
client.login(`NDg4MDExMjExNDA2MDQ5Mjgx.DnWGCQ.1J4VvJXgIIAQH1MMfFg47MdKzh8`)
