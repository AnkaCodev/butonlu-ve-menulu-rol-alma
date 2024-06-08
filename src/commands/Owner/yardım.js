const { MessageActionRow, MessageButton, MessageEmbed , MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json");

module.exports = {
    name: "yardım",
    aliases:  ["help"],
    execute: async (client, message, args, embed, author, channel, guild) => {

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));


    const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('menu1')
					.setPlaceholder('Yardım Menüsü.')
					.addOptions([
						{
							label: 'Menü Komutları',
							description: 'Kullanıcı Komutlarını Görmek İçin Tıklayınız.',
							value: 'menü',
						},
						{
							label: 'Button Komutları',
							description: 'kayıt komutlarını görmek için tıklayınız.',
							value: 'button',
						},
            {
							label: 'Bot Hakkında Bilgi',
							description: 'Bilgilendirme.',
							value: 'bilgi',
						},
					]),
			);

		const m = await message.channel.send({  content: ` Aşağıdaki Menüden Botun Tüm Komutlarına Bakabilirsiniz.`,components: [menu] });
					
		const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
	
    
         client.on("interactionCreate", async(interaction) => {

           if(interaction.values && interaction.values[0] == 'menü'){
                await interaction.reply({ content: `
     
\`${config.bot.prefix}burç-menü\` : Burç Rol seçim menüsü oluşturur
\`${config.bot.prefix}iliski-menü\` : İlişki Rol seçim menüsü oluşturur
\`${config.bot.prefix}oyun-menü\` : Oyun Rol seçim menüsü oluşturur
\`${config.bot.prefix}renk-menü\` : Renk Rol seçim menüsü oluşturur
\`${config.bot.prefix}takım-menü\` : Takım Rol seçim menüsü oluşturur
`
     , ephemeral: true})
                }

           if(interaction.values && interaction.values[0] == 'button'){
                await interaction.reply({ content: `
     
\`${config.bot.prefix}etkinlik-button\` : etkinlik ve çekiliş etiket rolleri verir
\`${config.bot.prefix}etkinlik-button2\` : etkinlik ve çekiliş seçim sisteminin gelişmiş hali
\`${config.bot.prefix}iliski-button\` : menülü sistem aksine ilişki rol alma kısmının butonlu hali
\`${config.bot.prefix}partner-button\` : Partner kanallarını görmeniz için rol verme butonu oluşturur
`
     , ephemeral: true})
                }

           if(interaction.values && interaction.values[0] == 'bilgi'){
                await interaction.reply({ content: `
     
\`Anka Code tarafından yapılan butonlu ve menülü rol alım botudur. Herhangi bir şey olduğunda phoenix.anka adlı kişiye istek atabilirsiniz.
`
     , ephemeral: true})
                }




           })

           
        
           
           
                }
}